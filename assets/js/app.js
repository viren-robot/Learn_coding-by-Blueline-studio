(function () {
  "use strict";

  var LEVELS = window.LEVELS;
  var LESSONS = window.LESSONS || {};
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
  function lessonsFor(levelId, chapterId) {
    return (LESSONS[levelId] && LESSONS[levelId][chapterId]) || [];
  }
  function videoPath(levelId, chapterId, lessonNumber) {
    return "assets/videos/l" + levelId + "-c" + chapterId + "-" + lessonNumber + ".mp4";
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
          "<p>Six levels, thirty chapters, and three hundred video lessons. Start with simple circuits, build robots and RC vehicles, then move on to autonomous robots and virtual reality. Ask Robo, the helper in the corner, whenever you get stuck.</p>" +
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
          '<div class="meta">' + lessonsFor(level.id, c.id).length + " video lessons</div>" +
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

  // Lesson steps: 1-10 are lessons, 11 is the practice page.
  function stepBar(levelId, chapterId, current, total) {
    var dots = "";
    for (var i = 1; i <= total; i++) {
      var cls = "step-dot" + (i === current ? " current" : "");
      dots += '<a class="' + cls + '" href="#/level/' + levelId + "/chapter/" + chapterId + "/lesson/" + i + '" title="Lesson ' + i + '">' + i + "</a>";
    }
    var practiceCls = "step-dot practice" + (current === "practice" ? " current" : "");
    dots += '<a class="' + practiceCls + '" href="#/level/' + levelId + "/chapter/" + chapterId + '/practice" title="Practice">★</a>';
    return '<div class="step-bar" aria-label="Lesson steps">' + dots + "</div>";
  }

  function renderLesson(levelId, chapterId, n) {
    var level = findLevel(levelId);
    var chapter = level && findChapter(level, chapterId);
    var lessons = lessonsFor(levelId, chapterId);
    var lesson = lessons[n - 1];
    if (!chapter || !lesson) return renderNotFound();

    var prevHref = n > 1
      ? "#/level/" + levelId + "/chapter/" + chapterId + "/lesson/" + (n - 1)
      : "#/level/" + levelId;
    var nextHref = n < lessons.length
      ? "#/level/" + levelId + "/chapter/" + chapterId + "/lesson/" + (n + 1)
      : "#/level/" + levelId + "/chapter/" + chapterId + "/practice";
    var nextLabel = n < lessons.length ? "Next lesson →" : "Practice →";

    app.innerHTML =
      '<div class="container page" ' + levelStyle(level) + ">" +
        '<div class="crumbs"><a href="#/">Home</a> / <a href="#/level/' + level.id + '">Level ' + level.id + " · " + esc(level.name) + '</a> / <a href="#/level/' + level.id + "/chapter/" + chapter.id + '">Chapter ' + chapter.id + "</a></div>" +
        '<h1 class="page-title">' + esc(chapter.title) + "</h1>" +
        '<p class="page-sub">Lesson ' + n + " of " + lessons.length + ": " + esc(lesson.title) + "</p>" +
        stepBar(levelId, chapterId, n, lessons.length) +

        '<div class="panel video-panel">' +
          '<video class="lesson-video" controls preload="metadata" playsinline src="' + videoPath(levelId, chapterId, n) + '">' +
            "Your browser cannot play this video." +
          "</video>" +
          '<p class="video-caption">Video lesson ' + n + " · " + esc(lesson.title) + "</p>" +
        "</div>" +

        '<div class="panel"><h2>' + esc(lesson.title) + "</h2>" + lessonBlocks(lesson.blocks) + "</div>" +

        lessonQuizHtml(levelId, chapterId, n) +

        '<div class="btn-row">' +
          '<a class="btn" href="' + prevHref + '">← Previous</a>' +
          '<a class="btn primary" href="' + nextHref + '">' + nextLabel + "</a>" +
        "</div>" +
      "</div>";

    wireVideo();
    wireLessonQuiz();
  }

  // Ten short questions per lesson. Options are shuffled each time the lesson opens.
  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function lessonQuizHtml(levelId, chapterId, n) {
    var questions = (window.LESSON_QUIZZES || {})[levelId + "." + chapterId + "." + n] || [];
    if (!questions.length) return "";
    var items = questions.map(function (q, i) {
      var options = shuffle(q.slice(1).map(function (text, j) {
        return { text: text, correct: j === 0 };
      }));
      var buttons = options.map(function (o) {
        return '<button class="quiz-option" data-correct="' + (o.correct ? "1" : "0") + '">' + esc(o.text) + "</button>";
      }).join("");
      return (
        '<div class="lq-item">' +
          '<p class="lq-question"><strong>' + (i + 1) + ".</strong> " + esc(q[0]) + "</p>" +
          '<div class="quiz-options">' + buttons + "</div>" +
        "</div>"
      );
    }).join("");
    return (
      '<div class="panel lesson-quiz">' +
        "<h2>Lesson check</h2>" +
        '<p class="page-sub">Answer all ' + questions.length + ' questions. <span id="lq-score" aria-live="polite">Score: 0 / ' + questions.length + "</span></p>" +
        items +
      "</div>"
    );
  }

  function wireLessonQuiz() {
    var items = document.querySelectorAll(".lq-item");
    if (!items.length) return;
    var total = items.length;
    var correct = 0;
    var answered = 0;
    var score = document.getElementById("lq-score");

    Array.prototype.forEach.call(items, function (item) {
      var buttons = item.querySelectorAll(".quiz-option");
      Array.prototype.forEach.call(buttons, function (btn) {
        btn.addEventListener("click", function () {
          if (item.getAttribute("data-done")) return;
          item.setAttribute("data-done", "1");
          answered++;
          var isRight = btn.getAttribute("data-correct") === "1";
          if (isRight) {
            btn.classList.add("correct");
            correct++;
          } else {
            btn.classList.add("wrong");
            var right = item.querySelector('[data-correct="1"]');
            if (right) right.classList.add("correct");
          }
          Array.prototype.forEach.call(buttons, function (b) { b.disabled = true; });
          score.textContent = "Score: " + correct + " / " + total +
            (answered === total ? " · Finished!" : "");
        });
      });
    });
  }

  function wireVideo() {
    var video = document.querySelector(".lesson-video");
    if (!video) return;
    video.addEventListener("error", function () {
      var note = document.createElement("div");
      note.className = "tip";
      note.innerHTML = "<strong>Video not available yet.</strong> Read the lesson below instead.";
      video.parentNode.replaceChild(note, video);
    });
  }

  function renderPractice(levelId, chapterId) {
    var level = findLevel(levelId);
    var chapter = level && findChapter(level, chapterId);
    if (!chapter) return renderNotFound();

    var idx = level.chapters.indexOf(chapter);
    var next = level.chapters[idx + 1];
    var completed = isDone(level.id, chapter.id);
    var lessonCount = lessonsFor(levelId, chapterId).length;

    var goals = chapter.goals.map(function (g) { return "<li>" + esc(g) + "</li>"; }).join("");
    var steps = chapter.activity.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");

    app.innerHTML =
      '<div class="container page" ' + levelStyle(level) + ">" +
        '<div class="crumbs"><a href="#/">Home</a> / <a href="#/level/' + level.id + '">Level ' + level.id + " · " + esc(level.name) + '</a> / <a href="#/level/' + level.id + "/chapter/" + chapter.id + '">Chapter ' + chapter.id + "</a> / Practice</div>" +
        '<h1 class="page-title">' + esc(chapter.title) + " · Practice</h1>" +
        '<p class="page-sub">' + esc(chapter.summary) + "</p>" +
        stepBar(levelId, chapterId, "practice", lessonCount) +

        '<div class="panel"><h2>What you will learn</h2><ul class="goals">' + goals + "</ul></div>" +

        '<div class="panel"><h2>Activity: ' + esc(chapter.activity.title) + '</h2><ol class="steps">' + steps + "</ol></div>" +

        quizHtml(chapter.quiz) +

        '<div class="btn-row">' +
          '<a class="btn" href="#/level/' + level.id + "/chapter/" + chapter.id + "/lesson/" + lessonCount + '">← Last lesson</a>' +
          '<button class="btn primary" id="complete-btn">' +
            (completed ? "✓ Completed" : "Mark as complete") +
          "</button>" +
          (next
            ? '<a class="btn" href="#/level/' + level.id + "/chapter/" + next.id + '/lesson/1">Next chapter →</a>'
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

  function quizHtml(quiz) {
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
      '<p class="page-sub">That level, chapter or lesson does not exist.</p>' +
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
      // A chapter opens at its first lesson.
      window.location.replace("#/level/" + parts[1] + "/chapter/" + parts[3] + "/lesson/1");
      return;
    } else if (parts[0] === "level" && parts[2] === "chapter" && parts[4] === "lesson" && parts.length === 6) {
      renderLesson(Number(parts[1]), Number(parts[3]), Number(parts[5]));
    } else if (parts[0] === "level" && parts[2] === "chapter" && parts[4] === "practice" && parts.length === 5) {
      renderPractice(Number(parts[1]), Number(parts[3]));
    } else {
      renderNotFound();
    }
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  route();
})();
