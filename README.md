# Learn Coding by Blueline Studio

A free, kid-friendly coding course that runs as a static website on GitHub Pages.

- **4 levels, 5 chapters each (20 chapters total)**
  1. **IRobo Quest**: Arduino, LEDs, buttons, motors and servos, 7-segment displays, Teachable Machine
  2. **IRoboCraft**: 3D printing, CAD design, gears, levers and pulleys, building a printed robot
  3. **IRobolive**: Python basics, functions, databases, SQL, sensors and live data
  4. **IRoboVerse**: wireless control, RC cars, phone-controlled robots, drones, final project
- Every chapter has goals, a lesson, code samples, an activity and a quick-check quiz.
- Progress is saved in the browser (per device).
- **Robo**, the built-in assistant (bottom-right corner), answers questions from the course content and a small glossary. It runs entirely in the browser, so it needs no API key or server.

## Project layout

```
index.html              page shell
assets/css/style.css    styles (light and dark mode, phone-friendly)
assets/js/content.js    all levels, chapters, lessons and quizzes
assets/js/app.js        page routing, progress tracking, quizzes
assets/js/assistant.js  the Robo assistant
.nojekyll               tells GitHub Pages to serve the files as-is
```

To add or edit a lesson, change `assets/js/content.js`. Each chapter's `keys` list controls which questions the assistant links to it.

## Publish on GitHub Pages

1. Push this branch to GitHub.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
4. Choose the branch that contains these files and the folder `/ (root)`, then click **Save**.
5. After a minute the site is live at `https://<your-user>.github.io/Learn_coding-by-Blueline-studio/`.

## Run locally

Open `index.html` in a browser, or start a small server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Safety

The course uses batteries, motors, hot 3D printers and drones. Always work with a grown-up, follow the tips in each chapter, and check local rules before flying a drone.
