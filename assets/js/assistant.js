(function () {
  "use strict";

  var LEVELS = window.LEVELS || [];

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
        return "I know the content of all 20 chapters. Try asking about:\n• Arduino, LEDs, buttons\n• Motors and servos\n• 7-segment displays\n• Teachable Machine\n• 3D printing and CAD\n• Gears and levers\n• Python, functions and loops\n• Databases and SQL\n• Sensors and logging\n• WiFi, RC cars and drones\n\nYou can also say \"levels\" to see the full list.";
      }
    },
    {
      match: /\b(levels?|courses?|chapters?|syllabus|list)\b/,
      reply: function () {
        return LEVELS.map(function (l) {
          return "Level " + l.id + ": " + l.name + " (" + l.chapters.length + " chapters)";
        }).join("\n");
      },
      link: function () { return null; }
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
    var keyIdea = c.lesson.filter(function (b) { return b.type === "p"; })[0];
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

  function answer(question) {
    var text = normalise(question);
    if (!text) return { text: "Type a question and I'll help you find the right chapter." };

    for (var i = 0; i < INTENTS.length; i++) {
      if (INTENTS[i].match.test(text) && !bestChapter(text)) {
        return { text: INTENTS[i].reply(), link: INTENTS[i].link ? INTENTS[i].link() : null };
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
    '<button type="button" aria-label="Close">✕</button></div>' +
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
  }

  function ask(question) {
    addMessage("user", question);
    var reply = answer(question);
    addMessage("bot", reply.text, reply.link);
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

  panel.querySelector(".assistant-head button").addEventListener("click", function () {
    panel.classList.remove("open");
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
})();
