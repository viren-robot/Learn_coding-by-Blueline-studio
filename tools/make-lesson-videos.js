// Builds one silent MP4 "slide video" per lesson.
//
// Usage (from the repo root):
//   npm install playwright          # once, provides a headless browser
//   node tools/make-lesson-videos.js
//
// Requires ffmpeg on the PATH. Output: assets/videos/l<level>-c<chapter>-<lesson>.mp4
// Re-run after editing assets/js/lessons/*.js to refresh the videos.
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "assets", "videos");
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), "lesson-slides-"));

function loadLessons() {
  const ctx = { window: {} };
  ctx.window.LESSONS = {};
  vm.createContext(ctx);
  const dir = path.join(ROOT, "assets", "js", "lessons");
  vm.runInContext(fs.readFileSync(path.join(dir, "helpers.js"), "utf8"), ctx);
  fs.readdirSync(dir)
    .filter((f) => /^level\d\.js$/.test(f))
    .sort()
    .forEach((f) => vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx));
  return ctx.window.LESSONS;
}

function loadLevels() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "assets", "js", "content.js"), "utf8"), ctx);
  return ctx.window.LEVELS;
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const clip = (s, n) => (s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s);

// Pick short, readable points from a lesson's blocks.
function keyPoints(blocks) {
  const points = [];
  for (const b of blocks) {
    if (b.type === "p") points.push(clip(b.text, 170));
    if (b.type === "ul") b.items.forEach((i) => points.push(clip(i, 120)));
    if (b.type === "tip") points.push("Tip: " + clip(b.text, 150));
  }
  return points.slice(0, 5);
}

function codeSnippet(blocks) {
  const code = blocks.find((b) => b.type === "code");
  if (!code) return "";
  const lines = code.code.split("\n").slice(0, 7);
  if (code.code.split("\n").length > 7) lines.push("…");
  return lines.map((l) => clip(l, 70)).join("\n");
}

function slideHtml(level, chapter, lessonNo, lesson) {
  const points = keyPoints(lesson.blocks)
    .map((p) => "<li>" + esc(p) + "</li>")
    .join("");
  const snippet = codeSnippet(lesson.blocks);
  const codeBox = snippet
    ? '<pre class="code">' + esc(snippet) + "</pre>"
    : "";
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    html,body{margin:0;width:1280px;height:720px;overflow:hidden;font-family:"Segoe UI",Arial,sans-serif;}
    body{background:linear-gradient(135deg,#1e1b4b,#0f172a);color:#f8fafc;padding:52px 64px;box-sizing:border-box;}
    .bar{height:10px;border-radius:6px;background:${level.color};margin-bottom:26px;}
    .kicker{font-size:22px;color:#cbd5e1;letter-spacing:.5px;}
    h1{font-size:50px;margin:10px 0 18px;line-height:1.15;}
    ul{font-size:26px;line-height:1.4;padding-left:28px;margin:0;}
    li{margin-bottom:12px;}
    .code{background:#020617;color:#e2e8f0;border-radius:12px;padding:16px 20px;font-size:20px;line-height:1.35;margin:22px 0 0;white-space:pre;border-left:6px solid ${level.color};}
    .foot{position:absolute;bottom:30px;left:64px;right:64px;font-size:20px;color:#94a3b8;display:flex;justify-content:space-between;}
  </style></head><body>
    <div class="bar"></div>
    <div class="kicker">${esc(level.name)} · Chapter ${chapter.id}: ${esc(chapter.title)} · Lesson ${lessonNo}</div>
    <h1>${esc(lesson.title)}</h1>
    <ul>${points}</ul>
    ${codeBox}
    <div class="foot"><span>Learn Coding by Blueline Studio</span><span>Silent slide video</span></div>
  </body></html>`;
}

// Roughly 3 words a second, between 8 and 30 seconds per lesson.
function durationFor(lesson) {
  const text = lesson.blocks
    .map((b) => (b.text || (b.items || []).join(" ") || b.code || ""))
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.min(30, Math.max(8, Math.round(words / 3)));
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const levels = loadLevels();
  const lessons = loadLessons();
  const browser = await chromium.launch({
    executablePath: process.env.CHROME_PATH || undefined,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  let count = 0;
  for (const level of levels) {
    for (const chapter of level.chapters) {
      const list = (lessons[level.id] && lessons[level.id][chapter.id]) || [];
      for (let n = 1; n <= list.length; n++) {
        const lesson = list[n - 1];
        const png = path.join(TMP, `s-${level.id}-${chapter.id}-${n}.png`);
        await page.setContent(slideHtml(level, chapter, n, lesson), { waitUntil: "load" });
        await page.screenshot({ path: png });

        const out = path.join(OUT_DIR, `l${level.id}-c${chapter.id}-${n}.mp4`);
        execFileSync("ffmpeg", [
          "-y", "-loglevel", "error",
          "-loop", "1", "-framerate", "1", "-i", png,
          "-t", String(durationFor(lesson)),
          "-c:v", "libx264", "-tune", "stillimage", "-crf", "30",
          "-pix_fmt", "yuv420p", "-movflags", "+faststart",
          out,
        ]);
        count++;
      }
    }
  }

  await browser.close();
  fs.rmSync(TMP, { recursive: true, force: true });
  console.log("Wrote " + count + " videos to " + path.relative(ROOT, OUT_DIR));
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
