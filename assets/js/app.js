(function () {
  "use strict";

  var LEVELS = window.LEVELS;
  var app = document.getElementById("app");
  var STORE_KEY = "blueline-completed";

  // Progress is a per-viewer convenience, so every storage call is guarded.
  function loadDone() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }
  function saveDone(list) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(list));
    } catch (e) { /* storage blocked: progress just won't persist */ }
  }

  var done = loadDone();
  function chapterKey(l, c) { return l + "." + c; }
  function isDone(l, c) { return done.indexOf(chapterKey(l, c)) !== -1; }
  function setDone(l, c, value) {
    var key = chapterKey(l, c);
    done = done.filter(function (k) { return k !== key; });
    if (value) done.push(key);
    saveDone(done);
  }

  function esc(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function findLevel(id) {
    return LEVELS.filter(function (l) { return l.id === id; })[0];
  }
  function findChapter(level, id) {
    return level.chapters.filter(function (c) { return c.id === id; })[0];
  }

  function totalChapters() {
    return LEVELS.reduce(function (n, l) { return n + l.chapters.length; }, 0);
  }

  function levelStyle(level) {
    return 'style="--level:' + level.color + '"';
  }

  function progressBlock() {
    var total = totalChapters();
    var pct = Math.round((done.length / total) * 100);
    return (
      '<div class="progress-wrap">' +
        '<div class="progress-label"><span>Your progress</span><span>' +
          done.length + " / " + total + " chapters</span></div>" +
        '<div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
      "</div>"
    );
  }

  function renderHome() {
    var cards = LEVELS.map(function (level) {
      var finished = level.chapters.filter(function (c) { return isDone(level.id, c.id); }).length;
      return (
        '<a class="card" href="#/level/' + level.id + '" ' + levelStyle(level) + ">" +
          '<div class="icon">' + level.icon + "</div>" +
          "<h2>Level " + level.id + ": " + esc(level.name) + "</h2>" +
          "<p>" + esc(level.tagline) + "</p>" +
          '<div class="meta">' + level.chapters.length + " chapters · " + finished + " done</div>" +
        "</a>"
      );
    }).join("");

    app.innerHTML =
      '<section class="hero">' +
        '<div class="container">' +
          "<h1>Learn to code, build and create robots</h1>" +
          "<p>Six levels, thirty chapters. Start with simple circuits, build robots and RC vehicles, then move on to autonomous robots and virtual reality. Ask Robo, the helper in the corner, whenever you get stuck.</p>" +
          progressBlock() +
        "</div>" +
      "</section>" +
      '<main class="container">' +
        '<div class="grid">' + cards + "</div>" +
      "</main>";
  }

  function renderLevel(levelId) {
    var level = findLevel(levelId);
    if (!level) return renderNotFound();

    var cards = level.chapters.map(function (c) {
      var cls = "card chapter-card" + (isDone(level.id, c.id) ? " done" : "");
      return (
        '<a class="' + cls + '" href="#/level/' + level.id + "/chapter/" + c.id + '" ' + levelStyle(level) + ">" +
          '<span class="num">' + c.id + "</span>" +
          "<h3>" + esc(c.title) + "</h3>" +
          "<p>" + esc(c.summary) + "</p>" +
        "</a>"
      );
    }).join("");

    app.innerHTML =
      '<div class="container page">' +
        '<div class="crumbs"><a href="#/">Home</a> / Level ' + level.id + "</div>" +
        '<h1 class="page-title">' + level.icon + " " + esc(level.name) + "</h1>" +
        '<p class="page-sub">' + esc(level.tagline) + "</p>" +
        '<div class="grid" style="margin-top:0">' + cards + "</div>" +
      "</div>";
  }

  function codeBlock(code) {
    return "<pre><code>" + esc(code) + "</code></pre>";
  }

  function lessonBlocks(blocks) {
    return blocks.map(function (b) {
      if (b.type === "p") return "<p>" + esc(b.text) + "</p>";
      if (b.type === "ul") {
        return "<ul>" + b.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
      }
      if (b.type === "code") return codeBlock(b.code);
      if (b.type === "tip") return '<div class="tip"><strong>Tip:</strong> ' + esc(b.text) + "</div>";
      return "";
    }).join("");
  }

  function quizHtml(quiz, levelId, chapterId) {
    var opts = quiz.options.map(function (o, i) {
      return '<button class="quiz-option" data-index="' + i + '">' + esc(o) + "</button>";
    }).join("");
    return (
      '<div class="panel" id="quiz">' +
        "<h2>Quick check</h2>" +
        "<p>" + esc(quiz.question) + "</p>" +
        '<div class="quiz-options">' + opts + "</div>" +
        '<div class="quiz-feedback" id="quiz-feedback" aria-live="polite"></div>' +
      "</div>"
    );
  }

  function renderChapter(levelId, chapterId) {
    var level = findLevel(levelId);
    var chapter = level && findChapter(level, chapterId);
    if (!chapter) return renderNotFound();

    var idx = level.chapters.indexOf(chapter);
    var prev = level.chapters[idx - 1];
    var next = level.chapters[idx + 1];
    var completed = isDone(level.id, chapter.id);

    var goals = chapter.goals.map(function (g) { return "<li>" + esc(g) + "</li>"; }).join("");
    var steps = chapter.activity.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");

    app.innerHTML =
      '<div class="container page" ' + levelStyle(level) + ">" +
        '<div class="crumbs"><a href="#/">Home</a> / <a href="#/level/' + level.id + '">Level ' + level.id + " · " + esc(level.name) + "</a> / Chapter " + chapter.id + "</div>" +
        '<h1 class="page-title">' + esc(chapter.title) + "</h1>" +
        '<p class="page-sub">' + esc(chapter.summary) + "</p>" +

        '<div class="panel"><h2>What you will learn</h2><ul class="goals">' + goals + "</ul></div>" +

        '<div class="panel"><h2>Lesson</h2>' + lessonBlocks(chapter.lesson) + "</div>" +

        '<div class="panel"><h2>Activity: ' + esc(chapter.activity.title) + '</h2><ol class="steps">' + steps + "</ol></div>" +

        quizHtml(chapter.quiz, level.id, chapter.id) +

        '<div class="btn-row">' +
          (prev
            ? '<a class="btn" href="#/level/' + level.id + "/chapter/" + prev.id + '">← Previous</a>'
            : '<a class="btn" href="#/level/' + level.id + '">← Level ' + level.id + "</a>") +
          '<button class="btn primary" id="complete-btn">' +
            (completed ? "✓ Completed" : "Mark as complete") +
          "</button>" +
          (next
            ? '<a class="btn" href="#/level/' + level.id + "/chapter/" + next.id + '">Next →</a>'
            : '<a class="btn" href="#/level/' + level.id + '">Finish level ✓</a>') +
        "</div>" +
      "</div>";

    wireQuiz(chapter.quiz);

    var completeBtn = document.getElementById("complete-btn");
    completeBtn.addEventListener("click", function () {
      var nowDone = !isDone(level.id, chapter.id);
      setDone(level.id, chapter.id, nowDone);
      completeBtn.textContent = nowDone ? "✓ Completed" : "Mark as complete";
    });
  }

  function wireQuiz(quiz) {
    var feedback = document.getElementById("quiz-feedback");
    var buttons = document.querySelectorAll(".quiz-option");
    Array.prototype.forEach.call(buttons, function (btn) {
      btn.addEventListener("click", function () {
        var picked = Number(btn.getAttribute("data-index"));
        Array.prototype.forEach.call(buttons, function (b) { b.disabled = true; });
        buttons[quiz.answer].classList.add("correct");
        if (picked === quiz.answer) {
          feedback.textContent = "Correct! " + quiz.explain;
        } else {
          btn.classList.add("wrong");
          feedback.textContent = "Not quite. " + quiz.explain;
        }
      });
    });
  }

  function renderNotFound() {
    app.innerHTML =
      '<div class="container page"><h1 class="page-title">Page not found</h1>' +
      '<p class="page-sub">That level or chapter does not exist.</p>' +
      '<a class="btn primary" href="#/">Back to home</a></div>';
  }

  function route() {
    var hash = window.location.hash.replace(/^#/, "") || "/";
    var parts = hash.split("/").filter(Boolean);

    if (parts.length === 0) {
      renderHome();
    } else if (parts[0] === "level" && parts.length === 2) {
      renderLevel(Number(parts[1]));
    } else if (parts[0] === "level" && parts[2] === "chapter" && parts.length === 4) {
      renderChapter(Number(parts[1]), Number(parts[3]));
    } else {
      renderNotFound();
    }
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  route();
})();
