// HighFYI: browser flash engine and serial monitor for Arduino Uno and Nano.
//
// What it does
//   - Choose a COM port with the browser's serial picker (Web Serial API, Chrome or Edge)
//   - Verify: a quick static check of the pasted sketch (it is NOT a compiler)
//   - Flash: uploads a compiled .hex file using the STK500 bootloader protocol
//   - Serial monitor: read and send text at any baud rate
//
// Compiling C++ needs the Arduino toolchain, which cannot run in a web page.
// Compile in the Arduino IDE (Sketch > Export Compiled Binary), then flash the .hex here.
(function () {
  "use strict";

  var DEVICES = {
    uno: { label: "Arduino Uno (ATmega328P, new bootloader)", flashBaud: 115200, pageSize: 128, maxBytes: 32768, sig: [0x1e, 0x95, 0x0f], supported: true, maxPin: 13 },
    nano_old: { label: "Arduino Nano (old bootloader)", flashBaud: 57600, pageSize: 128, maxBytes: 32768, sig: [0x1e, 0x95, 0x0f], supported: true, maxPin: 13 },
    esp32: { label: "ESP32 (not supported in this build)", supported: false }
  };
  var BAUDS = [9600, 19200, 57600, 115200];

  var STK = { INSYNC: 0x14, OK: 0x10, GET_SYNC: 0x30, GET_SIGN_ON: 0x31, READ_SIGN: 0x75, ENTER_PROG: 0x50, LEAVE_PROG: 0x51, LOAD_ADDR: 0x55, PROG_PAGE: 0x64, READ_PAGE: 0x74, EOP: 0x20, FLASH_MEM: 0x46 };

  var esc = function (t) {
    return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };
  var sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

  // ---------- Intel HEX ----------
  // Returns { image: Uint8Array (padded to page size, 0xFF filled), length } or throws.
  function parseIntelHex(text, device) {
    var mem = {};
    var base = 0;
    var top = 0;
    var lines = String(text).split(/\r?\n/);
    for (var li = 0; li < lines.length; li++) {
      var line = lines[li].trim();
      if (!line) continue;
      if (line.charAt(0) !== ":") throw new Error("Line " + (li + 1) + " is not an Intel HEX record.");
      var bytes = [];
      for (var i = 1; i + 1 < line.length; i += 2) bytes.push(parseInt(line.substr(i, 2), 16));
      if (bytes.some(function (b) { return isNaN(b); })) throw new Error("Line " + (li + 1) + " has invalid hex digits.");
      var sum = 0;
      for (var k = 0; k < bytes.length; k++) sum = (sum + bytes[k]) & 0xff;
      if (sum !== 0) throw new Error("Checksum error on line " + (li + 1) + ". The HEX file may be damaged.");
      var count = bytes[0];
      var addr = (bytes[1] << 8) | bytes[2];
      var type = bytes[3];
      var data = bytes.slice(4, 4 + count);
      if (type === 0x00) {
        for (var d = 0; d < data.length; d++) {
          var a = base + addr + d;
          mem[a] = data[d];
          if (a + 1 > top) top = a + 1;
        }
      } else if (type === 0x01) {
        break;
      } else if (type === 0x02) {
        base = ((data[0] << 8) | data[1]) << 4;
      } else if (type === 0x04) {
        base = ((data[0] << 8) | data[1]) << 16;
      }
    }
    if (top === 0) throw new Error("The HEX file has no program data.");
    if (top > device.maxBytes) throw new Error("Program is " + top + " bytes; this board holds " + device.maxBytes + ".");
    var length = Math.ceil(top / device.pageSize) * device.pageSize;
    var image = new Uint8Array(length);
    image.fill(0xff);
    Object.keys(mem).forEach(function (key) { image[Number(key)] = mem[key]; });
    return { image: image, length: length };
  }

  // ---------- STK500 bootloader protocol ----------
  // link: { write(Uint8Array), read(n, timeoutMs) -> Promise<Uint8Array>, clearInput(), reset() -> Promise }
  async function expectOk(link, bytes, dataLen, timeout) {
    link.clearInput();
    link.write(Uint8Array.from(bytes));
    var first = await link.read(1, timeout || 1000);
    if (first[0] !== STK.INSYNC) throw new Error("Bootloader did not acknowledge command 0x" + bytes[0].toString(16) + ".");
    var rest = dataLen ? await link.read(dataLen, timeout || 1000) : new Uint8Array(0);
    var ok = await link.read(1, timeout || 1000);
    if (ok[0] !== STK.OK) throw new Error("Bootloader returned an error for command 0x" + bytes[0].toString(16) + ".");
    return rest;
  }

  async function syncBoard(link) {
    await link.reset();
    // The bootloader waits about a second for a sync, so retry quickly.
    for (var tries = 0; tries < 25; tries++) {
      link.clearInput();
      link.write(Uint8Array.from([STK.GET_SYNC, STK.EOP]));
      try {
        var r = await link.read(2, 80);
        if (r[0] === STK.INSYNC && r[1] === STK.OK) return;
      } catch (e) { /* no reply yet, try again */ }
    }
    throw new Error("No reply from the board. Check the port, the device choice and the baud rate.");
  }

  async function flashHex(link, device, hex, hooks) {
    hooks = hooks || {};
    var say = hooks.onStatus || function () {};
    var progress = hooks.onProgress || function () {};

    say("Resetting the board and waiting for the bootloader...");
    await syncBoard(link);

    var sig = await expectOk(link, [STK.READ_SIGN, STK.EOP], 3);
    var sigHex = Array.prototype.map.call(sig, function (b) { return b.toString(16).padStart(2, "0"); }).join(" ");
    if (sig[0] !== device.sig[0] || sig[1] !== device.sig[1] || sig[2] !== device.sig[2]) {
      throw new Error("Chip signature " + sigHex + " does not match this device. Choose the right board.");
    }
    say("Board found (signature " + sigHex + "). Erasing and writing...");
    await expectOk(link, [STK.ENTER_PROG, STK.EOP], 0);

    var pages = hex.length / device.pageSize;
    for (var p = 0; p < pages; p++) {
      var addr = p * device.pageSize;
      var wordAddr = addr / 2;
      await expectOk(link, [STK.LOAD_ADDR, wordAddr & 0xff, (wordAddr >> 8) & 0xff, STK.EOP], 0);
      var page = hex.image.subarray(addr, addr + device.pageSize);
      var cmd = [STK.PROG_PAGE, (device.pageSize >> 8) & 0xff, device.pageSize & 0xff, STK.FLASH_MEM];
      for (var b = 0; b < page.length; b++) cmd.push(page[b]);
      cmd.push(STK.EOP);
      await expectOk(link, cmd, 0, 2000);
      progress((p + 1) / (pages * 2));
    }

    say("Verifying...");
    for (var q = 0; q < pages; q++) {
      var a2 = q * device.pageSize;
      var w2 = a2 / 2;
      await expectOk(link, [STK.LOAD_ADDR, w2 & 0xff, (w2 >> 8) & 0xff, STK.EOP], 0);
      var back = await expectOk(link, [STK.READ_PAGE, (device.pageSize >> 8) & 0xff, device.pageSize & 0xff, STK.FLASH_MEM, STK.EOP], device.pageSize, 2000);
      for (var c = 0; c < device.pageSize; c++) {
        if (back[c] !== hex.image[a2 + c]) {
          throw new Error("Verify failed at byte " + (a2 + c) + ". Flash again.");
        }
      }
      progress((pages + q + 1) / (pages * 2));
    }

    await expectOk(link, [STK.LEAVE_PROG, STK.EOP], 0);
    say("Done. The board is running the new program.");
    return { bytes: hex.length, pages: pages };
  }

  // ---------- Quick static check for pasted code (not a compiler) ----------
  function quickCheck(source, device) {
    var msgs = [];
    var text = String(source);
    if (!text.trim()) return [{ level: "error", text: "The editor is empty." }];
    if (!/void\s+setup\s*\(\s*\)/.test(text)) msgs.push({ level: "error", text: "No setup() function found." });
    if (!/void\s+loop\s*\(\s*\)/.test(text)) msgs.push({ level: "error", text: "No loop() function found." });

    // Balanced braces and parentheses, ignoring comments and strings
    var stripped = text.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "").replace(/"(\\.|[^"\\])*"/g, '""').replace(/'(\\.|[^'\\])*'/g, "''");
    var counts = { "{": 0, "}": 0, "(": 0, ")": 0 };
    stripped.split("").forEach(function (ch) { if (counts[ch] !== undefined) counts[ch]++; });
    if (counts["{"] !== counts["}"]) msgs.push({ level: "error", text: "Curly braces do not match ({ " + counts["{"] + ", } " + counts["}"] + ")." });
    if (counts["("] !== counts[")"]) msgs.push({ level: "error", text: "Round brackets do not match ( " + counts["("] + ", ) " + counts[")"] + ")." });

    // Likely missing semicolons: statement lines that end without ; { } ( ) ,
    // Only plain statements are checked: control lines and declarations are skipped.
    var lines = text.split(/\r?\n/);
    lines.forEach(function (raw, idx) {
      var line = raw.replace(/\/\/.*$/, "").trim();
      if (!line || /^[#{}*\/]/.test(line)) return;                 // blank, preprocessor, braces, comments
      if (/[;{,]$/.test(line)) return;                              // already ends a statement or opens a block
      if (/^(if|else|for|while|do|switch|case|default|return)\b/.test(line)) return;
      if (/^(void|int|long|byte|float|double|bool|char|String|unsigned|const|static)\b/.test(line)) return;
      if (/[=(]/.test(line) && /[\w\)\]"']$/.test(line)) {
        msgs.push({ level: "warning", text: "Line " + (idx + 1) + " may be missing a semicolon: " + line.slice(0, 60) });
      }
    });

    // Pin numbers used in pinMode / digitalWrite / digitalRead
    var pinRe = /(pinMode|digitalWrite|digitalRead|analogWrite)\s*\(\s*(\d+)/g;
    var m;
    while ((m = pinRe.exec(text)) !== null) {
      var pin = Number(m[2]);
      if (device.maxPin !== undefined && pin > device.maxPin) {
        msgs.push({ level: "error", text: m[1] + " uses pin " + pin + ", but this board has digital pins 0 to " + device.maxPin + "." });
      }
    }
    if (/\banalogWrite\s*\(\s*(2|4|7|8|12|13)\s*,/.test(text)) {
      msgs.push({ level: "warning", text: "analogWrite only works on PWM pins (3, 5, 6, 9, 10, 11 on an Uno)." });
    }
    if (!msgs.length) msgs.push({ level: "ok", text: "Quick check passed. For full checking, compile in the Arduino IDE." });
    return msgs;
  }

  // ---------- Web Serial link ----------
  var conn = {
    port: null,
    reader: null,
    writer: null,
    baud: 0,
    buffer: [],
    waiters: [],
    onText: null,
    loopDone: null,
    open: false
  };

  function notifyWaiters() {
    conn.waiters = conn.waiters.filter(function (w) {
      if (conn.buffer.length >= w.n) {
        w.resolve(conn.buffer.splice(0, w.n));
        return false;
      }
      return true;
    });
  }

  function startReadLoop() {
    var decoder = new TextDecoder();
    conn.loopDone = (async function () {
      try {
        while (conn.port && conn.port.readable) {
          conn.reader = conn.port.readable.getReader();
          try {
            while (true) {
              var chunk = await conn.reader.read();
              if (chunk.done) break;
              for (var i = 0; i < chunk.value.length; i++) conn.buffer.push(chunk.value[i]);
              notifyWaiters();
              if (conn.onText) conn.onText(decoder.decode(chunk.value, { stream: true }));
            }
          } finally {
            conn.reader.releaseLock();
          }
          break;
        }
      } catch (e) { /* port closed */ }
    })();
  }

  async function openPort(baud) {
    if (conn.open && conn.baud === baud) return;
    await closePort();
    await conn.port.open({ baudRate: baud });
    conn.baud = baud;
    conn.open = true;
    conn.buffer = [];
    conn.writer = conn.port.writable.getWriter();
    startReadLoop();
  }

  async function closePort() {
    if (!conn.port || !conn.open) return;
    conn.open = false;
    try { if (conn.reader) await conn.reader.cancel(); } catch (e) { /* ignore */ }
    try { if (conn.loopDone) await conn.loopDone; } catch (e) { /* ignore */ }
    try { if (conn.writer) { conn.writer.releaseLock(); conn.writer = null; } } catch (e) { /* ignore */ }
    try { await conn.port.close(); } catch (e) { /* ignore */ }
    conn.reader = null;
    conn.loopDone = null;
    conn.buffer = [];
  }

  function makeLink() {
    return {
      write: function (bytes) { conn.writer.write(bytes); },
      clearInput: function () { conn.buffer = []; },
      read: function (n, timeout) {
        return new Promise(function (resolve, reject) {
          if (conn.buffer.length >= n) return resolve(Uint8Array.from(conn.buffer.splice(0, n)));
          var timer = setTimeout(function () {
            conn.waiters = conn.waiters.filter(function (w) { return w.resolve !== resolve; });
            reject(new Error("timeout"));
          }, timeout);
          conn.waiters.push({ n: n, resolve: function (data) { clearTimeout(timer); resolve(Uint8Array.from(data)); } });
        });
      },
      reset: async function () {
        await conn.port.setSignals({ dataTerminalReady: false, requestToSend: false });
        await sleep(60);
        await conn.port.setSignals({ dataTerminalReady: true, requestToSend: true });
        await sleep(120);
        conn.buffer = [];
      }
    };
  }

  // ---------- Page ----------
  var state = {
    device: "uno",
    hex: null,
    hexName: "",
    monitorBaud: 9600,
    autoscroll: true,
    busy: false
  };

  function supported() { return "serial" in navigator; }

  function examples() {
    var list = [];
    var kits = window.KITS || {};
    Object.keys(kits).forEach(function (key) {
      var kit = kits[key];
      if (kit.test.lang === "Arduino") list.push({ key: key, name: key + " " + kit.test.name, code: kit.test.code });
    });
    return list;
  }

  function render(container) {
    var ex = examples();
    var exOptions = ex.map(function (e) {
      return '<option value="' + esc(e.key) + '">' + esc(e.name) + "</option>";
    }).join("");
    var devOptions = Object.keys(DEVICES).map(function (k) {
      return '<option value="' + k + '"' + (k === state.device ? " selected" : "") + (DEVICES[k].supported ? "" : " disabled") + ">" + esc(DEVICES[k].label) + "</option>";
    }).join("");
    var baudOptions = BAUDS.map(function (b) {
      return '<option value="' + b + '"' + (b === state.monitorBaud ? " selected" : "") + ">" + b + "</option>";
    }).join("");

    container.innerHTML =
      '<div class="container page hf">' +
        '<div class="crumbs"><a href="#/">Home</a> / HighFYI flash engine</div>' +
        '<h1 class="page-title">HighFYI</h1>' +
        '<p class="page-sub">Choose a port, paste your code, check it, then flash a compiled .hex file to your board. Use the serial monitor to read what the board prints.</p>' +
        (supported() ? "" : '<div class="tip"><strong>Browser not supported.</strong> Use Chrome or Edge on a computer. Web Serial is not available in this browser.</div>') +

        '<div class="panel">' +
          "<h2>1. Device and port</h2>" +
          '<div class="hf-row">' +
            '<label class="hf-field">Device<select id="hf-device">' + devOptions + "</select></label>" +
            '<button class="btn primary" id="hf-port">Choose COM port</button>' +
          "</div>" +
          '<p class="hf-status" id="hf-port-status">No port selected.</p>' +
          '<p class="page-sub">The browser lists ports by name, for example COM3 on Windows or /dev/cu.usbmodem on Mac. Choose the one that appeared when you plugged in the board.</p>' +
        "</div>" +

        '<div class="panel">' +
          "<h2>2. Code</h2>" +
          '<div class="hf-row">' +
            '<label class="hf-field">Load an example<select id="hf-example"><option value="">Choose an example</option>' + exOptions + "</select></label>" +
          "</div>" +
          '<textarea id="hf-code" class="hf-code" spellcheck="false" aria-label="Sketch code">void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(500);\n  digitalWrite(13, LOW);\n  delay(500);\n}</textarea>' +
          '<div class="hf-row"><button class="btn primary" id="hf-verify">Verify</button>' +
          '<span class="page-sub">Quick check only. It catches common mistakes but is not a compiler.</span></div>' +
          '<ul class="hf-results" id="hf-results" aria-live="polite"></ul>' +
        "</div>" +

        '<div class="panel">' +
          "<h2>3. Flash</h2>" +
          '<ol class="hf-steps">' +
            "<li>In the Arduino IDE, open the same sketch and choose Sketch → Export Compiled Binary. This writes a .hex file next to the sketch.</li>" +
            "<li>Choose that .hex file below, then click Flash.</li>" +
          "</ol>" +
          '<div class="hf-row">' +
            '<label class="hf-field">Compiled .hex file<input type="file" id="hf-file" accept=".hex,.ihex"></label>' +
            '<button class="btn primary" id="hf-flash" disabled>Flash</button>' +
          "</div>" +
          '<div class="hf-progress"><div class="hf-progress-fill" id="hf-progress-fill"></div></div>' +
          '<p class="hf-status" id="hf-flash-status">Choose a port and a .hex file to begin.</p>' +
        "</div>" +

        '<div class="panel">' +
          "<h2>4. Serial monitor</h2>" +
          '<div class="hf-row">' +
            '<label class="hf-field">Baud<select id="hf-baud">' + baudOptions + "</select></label>" +
            '<button class="btn" id="hf-connect">Connect monitor</button>' +
            '<label class="hf-check"><input type="checkbox" id="hf-scroll" checked> Autoscroll</label>' +
            '<button class="btn" id="hf-clear">Clear</button>' +
          "</div>" +
          '<pre class="hf-monitor" id="hf-monitor" aria-live="off"></pre>' +
          '<div class="hf-row">' +
            '<input type="text" id="hf-send" class="hf-input" placeholder="Type a message to send" aria-label="Message to send">' +
            '<select id="hf-eol" aria-label="Line ending"><option value="\\n">New line</option><option value="\\r\\n">CR+LF</option><option value="">None</option></select>' +
            '<button class="btn" id="hf-send-btn">Send</button>' +
          "</div>" +
        "</div>" +
      "</div>";

    wire(container);

    // Load code handed over from a chapter page
    try {
      var handed = localStorage.getItem("highfyi-code");
      if (handed) {
        document.getElementById("hf-code").value = handed;
        localStorage.removeItem("highfyi-code");
      }
    } catch (e) { /* storage blocked */ }
  }

  function setPortStatus(text) { document.getElementById("hf-port-status").textContent = text; }
  function setFlashStatus(text) { document.getElementById("hf-flash-status").textContent = text; }

  function appendMonitor(text) {
    var pre = document.getElementById("hf-monitor");
    if (!pre) return;
    pre.textContent += text;
    if (pre.textContent.length > 20000) pre.textContent = pre.textContent.slice(-15000);
    if (state.autoscroll) pre.scrollTop = pre.scrollHeight;
  }

  function updateFlashButton() {
    var btn = document.getElementById("hf-flash");
    if (btn) btn.disabled = !(conn.port && state.hex && !state.busy && DEVICES[state.device].supported);
  }

  function wire(container) {
    var ex = document.getElementById("hf-example");
    ex.addEventListener("change", function () {
      var pick = examples().filter(function (e) { return e.key === ex.value; })[0];
      if (pick) document.getElementById("hf-code").value = pick.code;
    });

    document.getElementById("hf-device").addEventListener("change", function (e) {
      state.device = e.target.value;
      updateFlashButton();
    });

    document.getElementById("hf-port").addEventListener("click", async function () {
      if (!supported()) return setPortStatus("Web Serial is not available in this browser. Use Chrome or Edge.");
      try {
        var port = await navigator.serial.requestPort();
        await closePort();
        conn.port = port;
        var info = port.getInfo ? port.getInfo() : {};
        var vid = info.usbVendorId ? "VID " + info.usbVendorId.toString(16).padStart(4, "0") : "";
        var pid = info.usbProductId ? " PID " + info.usbProductId.toString(16).padStart(4, "0") : "";
        setPortStatus("Port selected " + (vid + pid).trim() + ". Click Connect monitor or Flash to use it.");
        updateFlashButton();
      } catch (e) {
        setPortStatus("No port chosen.");
      }
    });

    document.getElementById("hf-verify").addEventListener("click", function () {
      var device = DEVICES[state.device];
      var results = document.getElementById("hf-results");
      var msgs = quickCheck(document.getElementById("hf-code").value, device);
      results.innerHTML = msgs.map(function (m) {
        return '<li class="hf-' + m.level + '">' + esc(m.text) + "</li>";
      }).join("");
    });

    document.getElementById("hf-file").addEventListener("change", async function (e) {
      var file = e.target.files[0];
      if (!file) return;
      state.hex = null;
      try {
        var text = await file.text();
        var parsed = parseIntelHex(text, DEVICES[state.device]);
        state.hex = parsed;
        state.hexName = file.name;
        setFlashStatus("Loaded " + file.name + " (" + parsed.length + " bytes padded to pages).");
      } catch (err) {
        setFlashStatus(err.message);
      }
      updateFlashButton();
    });

    document.getElementById("hf-flash").addEventListener("click", async function () {
      if (state.busy || !conn.port || !state.hex) return;
      var device = DEVICES[state.device];
      state.busy = true;
      updateFlashButton();
      var bar = document.getElementById("hf-progress-fill");
      bar.style.width = "0%";
      try {
        await closePort();
        conn.port.onText = null;
        conn.onText = null;
        await openPort(device.flashBaud);
        var link = makeLink();
        await flashHex(link, device, state.hex, {
          onStatus: setFlashStatus,
          onProgress: function (f) { bar.style.width = Math.round(f * 100) + "%"; }
        });
      } catch (err) {
        setFlashStatus("Flash failed: " + err.message);
      } finally {
        await closePort();
        state.busy = false;
        updateFlashButton();
      }
    });

    document.getElementById("hf-connect").addEventListener("click", async function () {
      var btn = document.getElementById("hf-connect");
      if (conn.open) {
        conn.onText = null;
        await closePort();
        btn.textContent = "Connect monitor";
        appendMonitor("\n[disconnected]\n");
        return;
      }
      if (!conn.port) {
        try {
          conn.port = await navigator.serial.requestPort();
        } catch (e) {
          return appendMonitor("\n[no port chosen]\n");
        }
      }
      try {
        state.monitorBaud = Number(document.getElementById("hf-baud").value);
        await openPort(state.monitorBaud);
        conn.onText = appendMonitor;
        btn.textContent = "Disconnect";
        appendMonitor("\n[connected at " + state.monitorBaud + " baud]\n");
      } catch (e) {
        appendMonitor("\n[could not open port: " + e.message + "]\n");
      }
    });

    document.getElementById("hf-baud").addEventListener("change", async function (e) {
      state.monitorBaud = Number(e.target.value);
      if (conn.open) {
        await openPort(state.monitorBaud);
        appendMonitor("\n[baud " + state.monitorBaud + "]\n");
      }
    });

    document.getElementById("hf-clear").addEventListener("click", function () {
      document.getElementById("hf-monitor").textContent = "";
    });
    document.getElementById("hf-scroll").addEventListener("change", function (e) {
      state.autoscroll = e.target.checked;
    });

    var send = async function () {
      var input = document.getElementById("hf-send");
      if (!conn.open || !conn.writer) return appendMonitor("\n[connect the monitor first]\n");
      var eol = document.getElementById("hf-eol").value.replace(/\\n/g, "\n").replace(/\\r/g, "\r");
      await conn.writer.write(new TextEncoder().encode(input.value + eol));
      appendMonitor("> " + input.value + "\n");
      input.value = "";
    };
    document.getElementById("hf-send-btn").addEventListener("click", send);
    document.getElementById("hf-send").addEventListener("keydown", function (e) {
      if (e.key === "Enter") send();
    });
  }

  window.HighFYI = {
    render: render,
    parseIntelHex: parseIntelHex,
    flashHex: flashHex,
    quickCheck: quickCheck,
    DEVICES: DEVICES
  };
})();
