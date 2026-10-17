(function () {
  "use strict";

  var LEVELS = window.LEVELS || [];

  // ----- Settings (per viewer; storage is optional) -----
  var SETTINGS_KEY = "blueline-assistant";
  var DEFAULTS = { useLocalAI: false, url: "http://localhost:11434", model: "llama3.2" };

  function loadSettings() {
    try {
      var saved = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
      return Object.assign({}, DEFAULTS, saved);
    } catch (e) {
      return Object.assign({}, DEFAULTS);
    }
  }
  function saveSettings(s) {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch (e) { /* storage blocked */ }
  }
  var settings = loadSettings();

  // ----- Keyword assistant (always available, works offline) -----

  // Short explanations for words kids often ask about.
  var GLOSSARY = [
    { words: ["resistor"], text: "A resistor slows down the flow of electricity. Put one in front of an LED so it does not burn out." },
    { words: ["microcontroller"], text: "A microcontroller is a tiny computer on one chip. The Arduino and ESP32 are microcontroller boards." },
    { words: ["pwm"], text: "PWM (pulse-width modulation) switches a pin on and off very fast to make a motor or LED run at a 'half' power level." },
    { words: ["torque"], text: "Torque is turning strength. Gears can trade speed for torque." },
    { words: ["sql"], text: "SQL is the language for talking to databases: SELECT reads, INSERT adds, UPDATE changes, DELETE removes." },
    { words: ["fulcrum"], text: "The fulcrum is the pivot point a lever turns around." },
    { words: ["clearance"], text: "Clearance is the small gap left between printed parts so they slide and fit together." }
  ];

  var INTENTS = [
    {
      match: /\b(hi|hello|hey|hallo|howdy)\b/,
      reply: function () {
        return "Hi! I'm Robo, your coding helper. Ask me anything about the chapters, like \"how do I make an LED blink?\" or \"what is a database?\"";
      }
    },
    {
      match: /\b(help|what can you do|how do you work)\b/,
      reply: function () {
        return "I know the content of all " + allChapters().length + " chapters. Try asking about:\n• Arduino, LEDs, buttons\n• Motors and servos\n• 7-segment displays\n• Teachable Machine\n• 3D printing and CAD\n• Gears and levers\n• Python, functions and loops\n• Databases and SQL\n• Sensors and logging\n• WiFi, RC cars and drones\n• Distance sensors and line following\n• Computer vision and ROS\n• VR, 3D worlds and digital twins\n\nYou can also say \"levels\" to see the full list.";
      }
    },
    {
      match: /\b(levels?|courses?|chapters?|syllabus|list)\b/,
      reply: function () {
        return LEVELS.map(function (l) {
          return "Level " + l.id + ": " + l.name + " (" + l.chapters.length + " chapters)";
        }).join("\n");
      }
    },
    {
      match: /\b(thanks|thank you|thx|cool|awesome)\b/,
      reply: function () { return "You're welcome! Keep building. 🤖"; }
    }
  ];

  function normalise(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  function hasPhrase(text, phrase) {
    return (" " + text + " ").indexOf(" " + phrase + " ") !== -1;
  }

  function allChapters() {
    var list = [];
    LEVELS.forEach(function (level) {
      level.chapters.forEach(function (chapter) {
        list.push({ level: level, chapter: chapter });
      });
    });
    return list;
  }

  // Score each chapter by how many of its keywords appear in the question.
  function bestChapter(text) {
    var best = null;
    var bestScore = 0;
    allChapters().forEach(function (item) {
      var score = 0;
      item.chapter.keys.forEach(function (k) {
        if (hasPhrase(text, normalise(k))) score += k.indexOf(" ") === -1 ? 1 : 2;
      });
      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    });
    return bestScore > 0 ? best : null;
  }

  function chapterAnswer(item) {
    var c = item.chapter;
    var l = item.level;
    var lessons = (window.LESSONS && window.LESSONS[l.id] && window.LESSONS[l.id][c.id]) || [];
    var keyIdea = null;
    lessons.forEach(function (lesson) {
      if (keyIdea) return;
      keyIdea = lesson.blocks.filter(function (b) { return b.type === "p"; })[0] || null;
    });
    var text = "From " + l.name + ", Chapter " + c.id + ": " + c.title + ".\n" +
      c.summary + (keyIdea ? "\n\n" + keyIdea.text : "") +
      "\n\nTry this: " + c.activity.title + ".";
    return {
      text: text,
      link: { href: "#/level/" + l.id + "/chapter/" + c.id, label: "Open the chapter" }
    };
  }

  function glossaryAnswer(text) {
    for (var i = 0; i < GLOSSARY.length; i++) {
      for (var j = 0; j < GLOSSARY[i].words.length; j++) {
        if (hasPhrase(text, GLOSSARY[i].words[j])) return { text: GLOSSARY[i].text };
      }
    }
    return null;
  }

  function keywordAnswer(question) {
    var text = normalise(question);
    if (!text) return { text: "Type a question and I'll help you find the right chapter." };

    for (var i = 0; i < INTENTS.length; i++) {
      if (INTENTS[i].match.test(text) && !bestChapter(text)) {
        return { text: INTENTS[i].reply(), link: null };
      }
    }

    var item = bestChapter(text);
    if (item) return chapterAnswer(item);

    var gloss = glossaryAnswer(text);
    if (gloss) return gloss;

    return {
      text: "I'm not sure about that yet. Try words like arduino, LED, motor, servo, 7 segment, teachable machine, 3d print, gear, python, database, SQL, sensor, wifi, RC car or drone.",
      link: null
    };
  }

  // ----- Local AI through Ollama (optional) -----

  // Course notes sent to the model so answers stay on topic.
  function courseNotes() {
    return allChapters().map(function (item) {
      var c = item.chapter;
      return "- Level " + item.level.id + " (" + item.level.name + "), chapter " + c.id + ": " +
        c.title + ". " + c.summary + " Keywords: " + c.keys.slice(0, 6).join(", ") + ".";
    }).join("\n");
  }

  var SYSTEM_PROMPT =
    "You are Robo, a friendly coding helper on the Learn Coding by Blueline Studio website, for kids aged 8 to 14. " +
    "Answer in plain, simple words, in under 120 words. Use short examples. " +
    "Remind young learners to ask a grown-up before using batteries, hot tools, 3D printers or drones. " +
    "Use the course outline below when it helps. If you are not sure, say so and suggest a chapter to read. " +
    "Course outline:\n" + courseNotes();

  var history = []; // recent turns, kept only in memory

  function withTimeout(promise, ms) {
    var timer;
    return Promise.race([
      promise,
      new Promise(function (_, reject) {
        timer = setTimeout(function () { reject(new Error("The local AI took too long to answer.")); }, ms);
      })
    ]).finally(function () { clearTimeout(timer); });
  }

  function baseUrl(url) {
    return String(url || "").replace(/\/+$/, "");
  }

  // Lists installed models. Resolves to an array of model names, or rejects.
  function listModels(url) {
    return withTimeout(fetch(baseUrl(url) + "/api/tags"), 5000)
      .then(function (res) {
        if (!res.ok) throw new Error("Ollama answered with status " + res.status + ".");
        return res.json();
      })
      .then(function (data) {
        return (data.models || []).map(function (m) { return m.name; });
      });
  }

  function askLocalAI(question) {
    var messages = [{ role: "system", content: SYSTEM_PROMPT }]
      .concat(history.slice(-6))
      .concat([{ role: "user", content: question }]);
    return withTimeout(fetch(baseUrl(settings.url) + "/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: settings.model, messages: messages, stream: false, options: { temperature: 0.4 } })
    }), 60000).then(function (res) {
      if (!res.ok) throw new Error("Ollama answered with status " + res.status + ". Is the model '" + settings.model + "' installed?");
      return res.json();
    }).then(function (data) {
      var reply = data && data.message && data.message.content ? String(data.message.content).trim() : "";
      if (!reply) throw new Error("The local AI sent an empty answer.");
      return reply;
    });
  }

  // ----- UI -----
  var toggle = document.createElement("button");
  toggle.className = "assistant-toggle";
  toggle.setAttribute("aria-label", "Open the Robo assistant");
  toggle.textContent = "🤖";

  var panel = document.createElement("section");
  panel.className = "assistant-panel";
  panel.setAttribute("aria-label", "Robo assistant");
  panel.innerHTML =
    '<div class="assistant-head"><span>🤖 Robo, your coding helper</span>' +
    '<span class="assistant-head-buttons">' +
      '<button type="button" id="assistant-settings-btn" aria-label="AI settings" title="AI settings">⚙</button>' +
      '<button type="button" id="assistant-close-btn" aria-label="Close">✕</button>' +
    "</span></div>" +
    '<div class="assistant-settings" id="assistant-settings" hidden>' +
      '<label class="assistant-check"><input type="checkbox" id="assistant-use-ai"> Use local AI (Ollama)</label>' +
      '<label class="assistant-field">Ollama address<input type="text" id="assistant-url" value="' + DEFAULTS.url + '"></label>' +
      '<div class="assistant-row">' +
        '<label class="assistant-field">Model<select id="assistant-model"><option value="">Check connection first</option></select></label>' +
        '<button type="button" class="assistant-small" id="assistant-check">Check</button>' +
      "</div>" +
      '<p class="assistant-note" id="assistant-status">Off: Robo uses the built-in keyword answers.</p>' +
      '<p class="assistant-note">To use local AI, install Ollama, run <code>ollama pull llama3.2</code>, then start it with <code>OLLAMA_ORIGINS="' + location.origin + '" ollama serve</code>. The question stays on your computer.</p>' +
    "</div>" +
    '<div class="assistant-log" id="assistant-log"></div>' +
    '<div class="suggest">' +
      '<button type="button" data-q="What is an LED resistor?">LED resistor</button>' +
      '<button type="button" data-q="How do gears change speed?">Gears</button>' +
      '<button type="button" data-q="What is SQL?">SQL</button>' +
      '<button type="button" data-q="How do drones fly?">Drones</button>' +
    "</div>" +
    '<form class="assistant-form" id="assistant-form" autocomplete="off">' +
      '<input id="assistant-input" type="text" placeholder="Ask Robo a question..." maxlength="300" aria-label="Your question" />' +
      '<button type="submit">Ask</button>' +
    "</form>";

  document.body.appendChild(toggle);
  document.body.appendChild(panel);

  var log = panel.querySelector("#assistant-log");
  var form = panel.querySelector("#assistant-form");
  var input = panel.querySelector("#assistant-input");
  var useAI = panel.querySelector("#assistant-use-ai");
  var urlInput = panel.querySelector("#assistant-url");
  var modelSelect = panel.querySelector("#assistant-model");
  var status = panel.querySelector("#assistant-status");

  function setStatus(text) { status.textContent = text; }

  function refreshStatus() {
    setStatus(settings.useLocalAI
      ? "On: answers come from " + settings.model + " at " + settings.url + "."
      : "Off: Robo uses the built-in keyword answers.");
  }

  useAI.checked = settings.useLocalAI;
  urlInput.value = settings.url;
  refreshStatus();

  function addMessage(role, text, link) {
    var msg = document.createElement("div");
    msg.className = "msg " + role;
    msg.textContent = text;
    if (link) {
      msg.appendChild(document.createTextNode("\n"));
      var a = document.createElement("a");
      a.href = link.href;
      a.textContent = link.label;
      a.addEventListener("click", function () { panel.classList.remove("open"); });
      msg.appendChild(a);
    }
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
    return msg;
  }

  function ask(question) {
    addMessage("user", question);
    if (!settings.useLocalAI) {
      var reply = keywordAnswer(question);
      addMessage("bot", reply.text, reply.link);
      return;
    }
    var thinking = addMessage("bot", "Thinking...");
    askLocalAI(question).then(function (answer) {
      history.push({ role: "user", content: question }, { role: "assistant", content: answer });
      thinking.textContent = answer;
    }).catch(function (err) {
      // Fall back to the keyword answer so the visitor still gets help.
      var fallback = keywordAnswer(question);
      thinking.textContent = "Local AI is not reachable: " + err.message + "\n\n" + fallback.text;
      if (fallback.link) {
        thinking.appendChild(document.createTextNode("\n"));
        var a = document.createElement("a");
        a.href = fallback.link.href;
        a.textContent = fallback.link.label;
        a.addEventListener("click", function () { panel.classList.remove("open"); });
        thinking.appendChild(a);
      }
    });
  }

  toggle.addEventListener("click", function () {
    var open = panel.classList.toggle("open");
    if (open) {
      input.focus();
      if (!log.childElementCount) {
        addMessage("bot", "Hi! I'm Robo. Ask me about any chapter, or tap a suggestion below.");
      }
    }
  });

  panel.querySelector("#assistant-close-btn").addEventListener("click", function () {
    panel.classList.remove("open");
  });

  panel.querySelector("#assistant-settings-btn").addEventListener("click", function () {
    var box = panel.querySelector("#assistant-settings");
    box.hidden = !box.hidden;
  });

  useAI.addEventListener("change", function () {
    settings.useLocalAI = useAI.checked;
    saveSettings(settings);
    refreshStatus();
  });

  urlInput.addEventListener("change", function () {
    settings.url = urlInput.value.trim() || DEFAULTS.url;
    saveSettings(settings);
    refreshStatus();
  });

  panel.querySelector("#assistant-check").addEventListener("click", function () {
    settings.url = urlInput.value.trim() || DEFAULTS.url;
    saveSettings(settings);
    setStatus("Checking " + settings.url + "...");
    listModels(settings.url).then(function (names) {
      modelSelect.innerHTML = "";
      if (!names.length) {
        modelSelect.innerHTML = '<option value="">No models installed</option>';
        setStatus("Ollama is running, but no models are installed. Run ollama pull llama3.2.");
        return;
      }
      names.forEach(function (name) {
        var opt = document.createElement("option");
        opt.value = name;
        opt.textContent = name;
        if (name === settings.model) opt.selected = true;
        modelSelect.appendChild(opt);
      });
      if (names.indexOf(settings.model) === -1) {
        settings.model = names[0];
        saveSettings(settings);
      }
      setStatus("Connected. " + names.length + " model(s) found.");
    }).catch(function () {
      modelSelect.innerHTML = '<option value="">Not connected</option>';
      setStatus("Could not reach Ollama. Check that it is running and that OLLAMA_ORIGINS allows this site.");
    });
  });

  modelSelect.addEventListener("change", function () {
    if (modelSelect.value) {
      settings.model = modelSelect.value;
      saveSettings(settings);
      refreshStatus();
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var q = input.value.trim();
    if (!q) return;
    input.value = "";
    ask(q);
  });

  Array.prototype.forEach.call(panel.querySelectorAll(".suggest button"), function (btn) {
    btn.addEventListener("click", function () { ask(btn.getAttribute("data-q")); });
  });

  window.RoboAssistant = { keywordAnswer: keywordAnswer, listModels: listModels, askLocalAI: askLocalAI };
})();
