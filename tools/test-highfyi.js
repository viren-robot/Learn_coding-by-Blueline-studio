// Tests the HighFYI flasher without hardware: quick check, HEX parser and an emulated Uno.
// Run from the repo root:  node tools/test-highfyi.js
const fs = require("fs"), vm = require("vm"), path = require("path");
const ROOT = path.resolve(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const ctx = { window: {}, navigator: {}, TextDecoder, TextEncoder, console, setTimeout, clearTimeout, Uint8Array, Math };
vm.createContext(ctx);
vm.runInContext(read("assets/js/kits.js"), ctx);
vm.runInContext(read("assets/js/highfyi.js"), ctx);
const H = ctx.window.HighFYI, D = H.DEVICES.uno;

// 1. Quick check on every Arduino example: expect no errors
let errs = [];
for (const [k, kit] of Object.entries(ctx.window.KITS)) {
  if (kit.test.lang !== "Arduino") continue;
  const r = H.quickCheck(kit.test.code, D);
  r.filter(m => m.level === "error").forEach(m => errs.push(k + ": " + m.text));
  const warns = r.filter(m => m.level === "warning");
  if (warns.length) console.log("warn", k, warns.map(w => w.text).join(" | "));
}
console.log("quick check errors on examples:", errs.length ? errs : "none");
console.log("broken sample:", H.quickCheck("void setup() {\n pinMode(20, OUTPUT)\n}\nvoid loop() {", D).map(m => m.level + ": " + m.text));

// 2. Build an Intel HEX from known bytes, parse it, and check the checksum guard
function hexLine(addr, type, data) {
  const bytes = [data.length, (addr >> 8) & 255, addr & 255, type, ...data];
  const sum = bytes.reduce((a, b) => (a + b) & 255, 0);
  const cs = (256 - sum) & 255;
  return ":" + bytes.concat([cs]).map(b => b.toString(16).padStart(2, "0")).join("").toUpperCase();
}
const program = Array.from({ length: 200 }, (_, i) => (i * 7) & 255);
let hex = [];
for (let i = 0; i < program.length; i += 16) hex.push(hexLine(i, 0, program.slice(i, i + 16)));
hex.push(hexLine(0, 1, []));
const parsed = H.parseIntelHex(hex.join("\n"), D);
const ok = parsed.length === 256 && parsed.image[199] === program[199] && parsed.image[200] === 0xff;
console.log("hex parse:", ok ? "PASS" : "FAIL", "length", parsed.length);
try { H.parseIntelHex(hex.join("\n").replace(/:(\w{2})/, ":00"), D); console.log("checksum guard: FAIL"); }
catch (e) { console.log("checksum guard:", e.message.slice(0, 40), "PASS"); }

// 3. Flash against an emulated optiboot Uno
function makeUno(sig = [0x1e, 0x95, 0x0f]) {
  const flash = new Uint8Array(32768).fill(0xff);
  let out = [], booted = false, addr = 0, progMode = false, log = [];
  const resp = (...b) => out.push(...b);
  return {
    flash, log,
    link: {
      write(bytes) {
        const c = Array.from(bytes); log.push(c[0].toString(16));
        if (!booted) return;   // no reply until the bootloader is up
        switch (c[0]) {
          case 0x30: return resp(0x14, 0x10);
          case 0x75: return resp(0x14, ...sig, 0x10);
          case 0x50: progMode = true; return resp(0x14, 0x10);
          case 0x55: addr = (c[1] | (c[2] << 8)) * 2; return resp(0x14, 0x10);
          case 0x64: { const n = (c[1] << 8) | c[2]; for (let i = 0; i < n; i++) flash[addr + i] = c[4 + i]; addr += n; return resp(0x14, 0x10); }
          case 0x74: { const n = (c[1] << 8) | c[2]; resp(0x14); for (let i = 0; i < n; i++) out.push(flash[addr + i]); addr += n; return resp(0x10); }
          case 0x51: progMode = false; return resp(0x14, 0x10);
          default: return resp(0x15);
        }
      },
      clearInput() { out = []; },
      read(n, timeout) {
        return new Promise((res, rej) => {
          const t0 = Date.now();
          const tick = () => {
            if (out.length >= n) return res(Uint8Array.from(out.splice(0, n)));
            if (Date.now() - t0 > timeout) return rej(new Error("timeout"));
            setTimeout(tick, 1);
          };
          tick();
        });
      },
      async reset() { booted = true; out = []; }
    }
  };
}
(async () => {
  const uno = makeUno();
  const statuses = [];
  const res = await H.flashHex(uno.link, D, parsed, { onStatus: s => statuses.push(s) });
  const same = program.every((b, i) => uno.flash[i] === b) && uno.flash[200] === 0xff;
  console.log("flash to emulated Uno:", same ? "PASS" : "FAIL", "pages", res.pages, "| last status:", statuses.pop());
  const bad = makeUno([0, 0, 0]);
  try { await H.flashHex(bad.link, D, parsed, {}); console.log("wrong-chip guard: FAIL"); }
  catch (e) { console.log("wrong-chip guard:", e.message.slice(0, 60), "PASS"); }
  const silent = makeUno(); silent.link.reset = async () => {};
  try { await H.flashHex(silent.link, D, parsed, {}); console.log("no-reply guard: FAIL"); }
  catch (e) { console.log("no-reply guard:", e.message.slice(0, 50), "PASS"); }
})();
