# Learn Coding by Blueline Studio

A free, kid-friendly coding course that runs as a static website on GitHub Pages.

- **6 levels, 5 chapters each (30 chapters total), 10 lessons per chapter (300 lessons)**
  1. **IRobo Quest**: Arduino, LEDs, buttons, motors and servos, 7-segment displays, Teachable Machine
  2. **IRoboCraft**: 3D printing, CAD design, gears, levers and pulleys, building a printed robot
  3. **IRobolive**: Python basics, functions, databases, SQL, sensors and live data
  4. **IRoboVerse**: wireless control, RC cars, phone-controlled robots, drones, final project
  5. **VRoboTech**: advanced sensors, autonomous navigation, computer vision, ROS, automation
  6. **VRoboVR**: VR and AR basics, 3D worlds, scripting interactions, digital twins, VR robot lab final project
- Every lesson has a video, a short written lesson with code samples, and a 10-question lesson check. Each chapter ends with a practice page: an activity and a quick-check quiz.
- Progress is saved in the browser (per device).
- **Robo**, the built-in assistant (bottom-right corner), answers questions from the course content and a small glossary. It runs entirely in the browser, so it needs no API key or server.

## Project layout

```
index.html              page shell
assets/css/style.css    styles (light and dark mode, phone-friendly)
assets/js/content.js    levels, chapters, activities, quizzes and assistant keywords
assets/js/lessons/      the 10 lessons per chapter (helpers.js, level1.js ... level6.js)
assets/js/quizzes/      10 lesson-check questions per lesson (level1.js ... level6.js, 3,000 in total)
assets/js/app.js        page routing, lesson player, progress tracking, quizzes
assets/js/assistant.js  the Robo assistant
assets/videos/          one MP4 per lesson, named l<level>-c<chapter>-<lesson>.mp4
tools/make-lesson-videos.js  rebuilds the lesson videos from the lesson files
.nojekyll               tells GitHub Pages to serve the files as-is
```

To edit a lesson, change its file in `assets/js/lessons/`. To edit its questions, change the matching `assets/js/quizzes/` file. Each question is `[question, correct answer, wrong, wrong, wrong]`. To change a chapter's activity, quiz or assistant keywords, edit `assets/js/content.js`.

## Chapter kits

Each chapter's practice page lists the components, shows a circuit diagram (or a flow diagram for software and design chapters), and gives a test code you can run. The data is in `assets/js/kits.js`.

## HighFYI flash engine

Open **HighFYI** in the top menu. It has four parts:

1. **Device and port.** Choose Arduino Uno or Nano (old bootloader), then click *Choose COM port*. This needs Chrome or Edge, because it uses the Web Serial API.
2. **Code.** Paste a sketch or load an example, then click *Verify*. Verify is a quick static check for common mistakes. It is **not a compiler**.
3. **Flash.** Compile the sketch in the Arduino IDE with *Sketch → Export Compiled Binary*, choose the `.hex` file, then click *Flash*. The engine uses the STK500 bootloader protocol, writes the program, and reads it back to verify it.
4. **Serial monitor.** Connect at a chosen baud rate, read output, and send messages.

Limits:

- Compiling C++ needs the Arduino toolchain, which a static web page cannot run. Pasted code is therefore checked, not compiled, and it must be compiled in the Arduino IDE before flashing.
- ESP32 flashing is not supported yet. Use the Arduino IDE for ESP32 boards.
- The flasher has been tested against an emulated Uno (`node tools/test-highfyi.js`), not a physical board.

## Lesson videos

Each lesson has a video in `assets/videos/`. The included videos are silent slide videos made from each lesson's title and key points. To regenerate them after editing lessons:

```bash
npm install playwright          # once
node tools/make-lesson-videos.js
```

This needs `ffmpeg` on your PATH. To use real narrated videos instead, replace a file in `assets/videos/` with your own MP4 using the same name.

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
