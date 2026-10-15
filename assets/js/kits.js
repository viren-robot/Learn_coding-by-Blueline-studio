// Chapter kits: components, circuit (or flow) diagram and a test code per chapter.
// Key: "level.chapter". Diagram nodes: [id, label ("|" splits lines), x, y, type]
//   type: board | part | power | ground | tool | data
// Diagram wires: [fromId, toId, label]
(function () {
  window.KITS = window.KITS || {};
  var K = window.KITS;

  K["1.1"] = {
    components: ["Arduino Uno (or compatible)", "USB cable (data type, not charge-only)", "Computer with the Arduino IDE"],
    nodes: [["pc", "Computer|+ Arduino IDE", 100, 160, "tool"], ["uno", "Arduino Uno|pin 13 LED", 320, 160, "board"], ["led", "Built-in LED|(on the board)", 540, 160, "part"]],
    wires: [["pc", "uno", "USB: code + power"], ["uno", "led", "pin 13"]],
    test: { name: "Blink and say hello", lang: "Arduino", code:
`void setup() {
  pinMode(13, OUTPUT);
  Serial.begin(9600);
  Serial.println("Hello, Robot!");
}

void loop() {
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(500);
  Serial.println("blink");
}` }
  };

  K["1.2"] = {
    components: ["Arduino Uno", "1 red LED", "1 resistor 220 ohm", "1 push button", "Breadboard and jumper wires"],
    nodes: [["u8", "Uno pin 8", 90, 90, "board"], ["r", "220 ohm|resistor", 260, 90, "part"], ["led", "LED|(long leg to resistor)", 430, 90, "part"], ["gnd", "GND", 560, 90, "ground"], ["u2", "Uno pin 2|(INPUT_PULLUP)", 90, 230, "board"], ["btn", "Push button", 300, 230, "part"], ["gnd2", "GND", 560, 230, "ground"]],
    wires: [["u8", "r", ""], ["r", "led", ""], ["led", "gnd", "short leg"], ["u2", "btn", ""], ["btn", "gnd2", "pressed = LOW"]],
    test: { name: "Button turns the LED on", lang: "Arduino", code:
`const int BUTTON = 2;
const int LED_PIN = 8;

void setup() {
  pinMode(BUTTON, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, digitalRead(BUTTON) == LOW ? HIGH : LOW);
}` }
  };

  K["1.3"] = {
    components: ["Arduino Uno", "L298N motor driver", "1 DC geared motor", "1 SG90 servo", "6 V to 9 V battery pack (for motors)", "Jumper wires, common GND"],
    nodes: [["bat", "Battery pack|6-9 V", 90, 90, "power"], ["drv", "L298N|motor driver", 300, 90, "part"], ["mot", "DC motor", 510, 90, "part"], ["uno", "Arduino Uno|pins 5, 6, 7, 9", 300, 230, "board"], ["srv", "Servo|signal on pin 9", 510, 230, "part"]],
    wires: [["bat", "drv", "+12 V and GND"], ["drv", "mot", "OUT1 / OUT2"], ["uno", "drv", "IN1, IN2, ENA"], ["uno", "srv", "pin 9"]],
    test: { name: "Spin the motor and sweep the servo", lang: "Arduino", code:
`#include <Servo.h>
const int IN1 = 5, IN2 = 6, ENA = 3;   // ENA on a PWM pin (3, 5, 6, 9, 10, 11)
Servo arm;

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(ENA, OUTPUT);
  arm.attach(9);
}

void loop() {
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW); analogWrite(ENA, 150);
  delay(1500);
  digitalWrite(IN1, LOW); digitalWrite(IN2, HIGH);
  delay(1500);
  analogWrite(ENA, 0);
  for (int a = 0; a <= 180; a++) { arm.write(a); delay(10); }
  for (int a = 180; a >= 0; a--) { arm.write(a); delay(10); }
}` }
  };

  K["1.4"] = {
    components: ["Arduino Uno", "1 common cathode 7-segment display", "8 resistors 220 ohm (one per segment, or a resistor pack)", "Jumper wires"],
    nodes: [["uno", "Arduino Uno|pins 2 to 8", 110, 160, "board"], ["res", "8 x 220 ohm|one per segment", 320, 160, "part"], ["disp", "7-segment|common cathode", 530, 160, "part"], ["gnd", "Common pin|to GND", 530, 290, "ground"]],
    wires: [["uno", "res", "a..g, dp"], ["res", "disp", ""], ["disp", "gnd", "HIGH lights a segment"]],
    test: { name: "Count 0 to 9", lang: "Arduino", code:
`const byte DIGITS[10] = {
  0b00111111, 0b00000110, 0b01011011, 0b01001111, 0b01100110,
  0b01101101, 0b01111101, 0b00000111, 0b01111111, 0b01101111
};
const int segPins[7] = {2, 3, 4, 5, 6, 7, 8};

void setup() {
  for (int i = 0; i < 7; i++) pinMode(segPins[i], OUTPUT);
}

void loop() {
  for (int n = 0; n <= 9; n++) {
    for (int i = 0; i < 7; i++) digitalWrite(segPins[i], (DIGITS[n] >> i) & 1);
    delay(800);
  }
}` }
  };

  K["1.5"] = {
    components: ["Laptop or PC with a webcam and Chrome", "Arduino Uno and USB cable", "2 LEDs with 220 ohm resistors", "2 coloured cards (for example Left and Right)"],
    nodes: [["cam", "Webcam|+ Teachable Machine", 100, 160, "tool"], ["pc", "Computer|reads the label", 310, 160, "tool"], ["uno", "Arduino Uno|acts on the label", 520, 160, "board"]],
    wires: [["cam", "pc", "image"], ["pc", "uno", "USB serial: L, R or S"]],
    test: { name: "React to L, R and S over serial", lang: "Arduino", code:
`const int LEFT_LED = 8, RIGHT_LED = 9;

void setup() {
  pinMode(LEFT_LED, OUTPUT);
  pinMode(RIGHT_LED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    char c = Serial.read();
    digitalWrite(LEFT_LED, c == 'L');
    digitalWrite(RIGHT_LED, c == 'R');
  }
}` }
  };

  K["2.1"] = {
    components: ["FDM 3D printer (calibrated)", "PLA filament", "Slicer app (Cura or PrusaSlicer)", "Calipers for measuring the test cube"],
    nodes: [["stl", "STL model", 90, 160, "data"], ["sl", "Slicer|layers + infill", 290, 160, "tool"], ["gc", "G-code|printer steps", 490, 160, "data"], ["pr", "3D printer|builds layers", 590, 290, "board"]],
    wires: [["stl", "sl", "import"], ["sl", "gc", "export"], ["gc", "pr", "SD card or USB"]],
    test: { name: "Calibration cube error check", lang: "Python", code:
`# Measure your printed 20 mm test cube with calipers, then run this.
measured = {"x": 20.3, "y": 19.8, "z": 20.1}   # type your readings in mm
target = 20.0

for axis, value in measured.items():
    error = value - target
    tolerance = 0.2
    status = "OK" if abs(error) <= tolerance else "ADJUST"
    print(f"{axis}: {value} mm  error {error:+.2f} mm  -> {status}")` }
  };

  K["2.2"] = {
    components: ["Tinkercad account (free, browser)", "M3 bolt and nut (for the fit test)", "Calipers", "Printer or a friend with one"],
    nodes: [["meas", "Measure|with calipers", 90, 160, "tool"], ["cad", "CAD|Tinkercad", 290, 160, "tool"], ["stl", "Export|.stl", 490, 160, "data"], ["fit", "Fit test|print + bolt", 490, 290, "part"]],
    wires: [["meas", "cad", "sizes in mm"], ["cad", "stl", ""], ["stl", "fit", "print a small test first"]],
    test: { name: "Hole clearance checker", lang: "Python", code:
`# Check a printed hole against an M3 bolt (3.0 mm).
bolt = 3.0
for hole in [2.8, 3.0, 3.2, 3.3, 3.4, 3.8]:
    gap = hole - bolt
    if gap < 0:
        verdict = "too tight, bolt will not fit"
    elif gap <= 0.5:
        verdict = "good fit"
    else:
        verdict = "loose"
    print(f"hole {hole:.1f} mm -> {verdict}")` }
  };

  K["2.3"] = {
    components: ["2 printed gears (20 and 60 teeth)", "Small DC motor or a hand crank", "Printed gearbox frame", "Pen for marking teeth"],
    nodes: [["mot", "Motor or crank|input", 90, 160, "part"], ["g1", "Gear 20 teeth|driver", 290, 160, "part"], ["g2", "Gear 60 teeth|driven", 490, 160, "part"], ["out", "Output shaft|slow and strong", 560, 290, "data"]],
    wires: [["mot", "g1", "input turns"], ["g1", "g2", "ratio 60 / 20 = 3"], ["g2", "out", ""]],
    test: { name: "Gear ratio calculator", lang: "Python", code:
`driver_teeth = 20
driven_teeth = 60
ratio = driven_teeth / driver_teeth

motor_rpm = 300
print(f"ratio {ratio:.1f}")
print(f"output speed {motor_rpm / ratio:.0f} rpm (slower)")
print(f"torque multiplier about {ratio:.1f}x (ideal, before friction)")` }
  };

  K["2.4"] = {
    components: ["Printed or wooden lever bar", "Fulcrum block (pivot)", "Pulley wheel and string", "Small weights (for example 50 g)"],
    nodes: [["eff", "Effort|your push", 90, 160, "tool"], ["lev", "Lever bar|turns on fulcrum", 300, 160, "part"], ["load", "Load|weight to lift", 510, 160, "part"], ["fulc", "Fulcrum|pivot point", 300, 290, "board"]],
    wires: [["eff", "lev", "push here"], ["lev", "load", "lifts here"], ["fulc", "lev", "pivot"]],
    test: { name: "Mechanical advantage calculator", lang: "Python", code:
`effort_arm_cm = 40
load_arm_cm = 10

advantage = effort_arm_cm / load_arm_cm
load_kg = 2.0
effort_kg = load_kg / advantage
print(f"mechanical advantage {advantage:.1f}")
print(f"to lift {load_kg} kg you need about {effort_kg:.2f} kg of push")` }
  };

  K["2.5"] = {
    components: ["Printed chassis and frame parts", "2 DC motors with wheels", "L298N motor driver", "1 SG90 servo", "Arduino Uno", "6 V to 9 V battery pack", "M3 bolts, nuts and spacers"],
    nodes: [["bat", "Battery|6-9 V", 90, 90, "power"], ["drv", "L298N|driver", 300, 90, "part"], ["mot", "2 DC motors|wheels", 510, 90, "part"], ["uno", "Arduino Uno", 300, 230, "board"], ["srv", "Servo|arm joint", 510, 230, "part"]],
    wires: [["bat", "drv", "power"], ["drv", "mot", "drive"], ["uno", "drv", "control"], ["uno", "srv", "pin 9"]],
    test: { name: "Joint and drive test", lang: "Arduino", code:
`#include <Servo.h>
const int IN1 = 5, IN2 = 6, ENA = 3;   // ENA on a PWM pin (3, 5, 6, 9, 10, 11)
Servo arm;

void setup() {
  pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT); pinMode(ENA, OUTPUT);
  arm.attach(9);
  Serial.begin(9600);
  Serial.println("Joint test: move the arm by hand first, then power on.");
}

void loop() {
  for (int a = 30; a <= 150; a += 10) { arm.write(a); delay(150); }
  for (int a = 150; a >= 30; a -= 10) { arm.write(a); delay(150); }
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW); analogWrite(ENA, 120);
  delay(1000);
  analogWrite(ENA, 0);
  Serial.println("cycle done");
  delay(2000);
}` }
  };

  K["3.1"] = {
    components: ["Computer with Python 3 installed", "IDLE, VS Code or an online Python editor"],
    nodes: [["ed", "Editor|write code", 100, 160, "tool"], ["py", "Python|runs code", 320, 160, "tool"], ["out", "Output|screen", 540, 160, "data"]],
    wires: [["ed", "py", "run"], ["py", "out", "print()"]],
    test: { name: "Battery status loop", lang: "Python", code:
`battery = 100
for minute in range(5):
    battery -= 10
    if battery < 30:
        print("Warning at minute", minute)
print("Final battery:", battery)` }
  };

  K["3.2"] = {
    components: ["Computer with Python 3", "Editor (IDLE or VS Code)"],
    nodes: [["main", "Main code|calls convert()", 100, 160, "tool"], ["fn", "Function|convert(c)", 320, 160, "tool"], ["res", "Result|returned value", 540, 160, "data"]],
    wires: [["main", "fn", "argument"], ["fn", "res", "return"]],
    test: { name: "Function tests", lang: "Python", code:
`def to_fahrenheit(c):
    return c * 9 / 5 + 32

tests = {0: 32, 20: 68, 100: 212}
for celsius, expected in tests.items():
    got = to_fahrenheit(celsius)
    print("PASS" if got == expected else "FAIL", celsius, "->", got)` }
  };

  K["3.3"] = {
    components: ["Computer with Python 3 (sqlite3 is built in)", "DB Browser for SQLite (optional viewer)"],
    nodes: [["py", "Python|sqlite3", 100, 160, "tool"], ["file", "robot.db|database file", 320, 160, "data"], ["tbl", "Table: robots|id, name, wheels", 540, 160, "data"]],
    wires: [["py", "file", "connect + commit"], ["file", "tbl", "holds"]],
    test: { name: "Create and print a robot table", lang: "Python", code:
`import sqlite3

db = sqlite3.connect("robot.db")
db.execute("CREATE TABLE IF NOT EXISTS robots (id INTEGER PRIMARY KEY, name TEXT, wheels INTEGER)")
db.execute("INSERT INTO robots (name, wheels) VALUES (?, ?)", ("Rex", 4))
db.commit()
for row in db.execute("SELECT id, name, wheels FROM robots"):
    print(row)
db.close()` }
  };

  K["3.4"] = {
    components: ["Computer with Python 3", "SQLite (built in)"],
    nodes: [["app", "Python program|sends SQL", 100, 160, "tool"], ["sql", "SQL query|SELECT ... WHERE", 320, 160, "data"], ["db", "Database|scores table", 540, 160, "data"]],
    wires: [["app", "sql", "execute()"], ["sql", "db", "reads / writes rows"]],
    test: { name: "High score query test", lang: "Python", code:
`import sqlite3

db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE scores (id INTEGER PRIMARY KEY, name TEXT, points INTEGER)")
db.executemany("INSERT INTO scores (name, points) VALUES (?, ?)",
               [("Ava", 42), ("Ben", 75), ("Cara", 12)])

top = db.execute("SELECT name, points FROM scores ORDER BY points DESC LIMIT 2").fetchall()
assert top[0] == ("Ben", 75), top
print("PASS top score", top)
db.close()` }
  };

  K["3.5"] = {
    components: ["Arduino Uno and USB cable", "HC-SR04 distance sensor (or a light sensor)", "Computer with Python 3, pyserial and sqlite3"],
    nodes: [["sen", "Sensor|distance or light", 90, 160, "part"], ["uno", "Arduino Uno|prints readings", 290, 160, "board"], ["py", "Python|pyserial", 490, 160, "tool"], ["db", "readings table|SQLite", 490, 290, "data"]],
    wires: [["sen", "uno", "signal"], ["uno", "py", "USB serial"], ["py", "db", "INSERT rows"]],
    test: { name: "Log serial readings to SQLite", lang: "Python", code:
`# Change PORT to your board's port, for example COM3 or /dev/cu.usbmodem...
import sqlite3
from datetime import datetime
import serial

PORT = "COM3"
db = sqlite3.connect("readings.db")
db.execute("CREATE TABLE IF NOT EXISTS readings (id INTEGER PRIMARY KEY, time TEXT, value INTEGER)")

port = serial.Serial(PORT, 9600, timeout=2)
for _ in range(20):
    line = port.readline().decode(errors="ignore").strip()
    if line.isdigit():
        db.execute("INSERT INTO readings (time, value) VALUES (?, ?)", (datetime.now().isoformat(), int(line)))
db.commit()
print("rows:", db.execute("SELECT COUNT(*) FROM readings").fetchone()[0])` }
  };

  K["4.1"] = {
    components: ["ESP32 development board", "Phone or laptop on the same WiFi", "IR LED and IR receiver (optional, for the IR part)", "Bluetooth module such as HC-05 (optional)"],
    nodes: [["ph", "Phone|controller", 90, 160, "tool"], ["wifi", "WiFi|home network", 310, 160, "data"], ["esp", "ESP32|receives commands", 530, 160, "board"]],
    wires: [["ph", "wifi", "HTTP or Bluetooth"], ["wifi", "esp", ""]],
    test: { name: "ESP32 WiFi connect test", lang: "ESP32 (Arduino IDE)", code:
`#include <WiFi.h>

const char* ssid = "YourNetwork";
const char* password = "YourPassword";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) delay(500);
  Serial.print("Connected, IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {}` }
  };

  K["4.2"] = {
    components: ["Chassis with 2 DC motors and wheels", "L298N motor driver", "Arduino Uno", "Battery pack and switch", "Receiver or IR/RF remote (optional)"],
    nodes: [["bat", "Battery + switch", 90, 90, "power"], ["drv", "L298N", 300, 90, "part"], ["mot", "Left and right motors", 510, 90, "part"], ["uno", "Arduino Uno|IN1 IN2 ENA", 300, 230, "board"]],
    wires: [["bat", "drv", "+12 V"], ["drv", "mot", "OUT pins"], ["uno", "drv", "control signals"]],
    test: { name: "Drive forward, stop, turn left", lang: "Arduino", code:
`const int IN1 = 5, IN2 = 6, ENA = 3, IN3 = 8, IN4 = 9, ENB = 10;

void drive(int left, int right) {
  digitalWrite(IN1, left > 0); digitalWrite(IN2, left < 0);
  digitalWrite(IN3, right > 0); digitalWrite(IN4, right < 0);
  analogWrite(ENA, abs(left));
  analogWrite(ENB, abs(right));
}

void setup() {
  int outputs[] = {3, 5, 6, 8, 9, 10};
  for (int i = 0; i < 6; i++) pinMode(outputs[i], OUTPUT);
}

void loop() {
  drive(180, 180); delay(1000);   // forward
  drive(0, 0);     delay(500);    // stop
  drive(60, 180); delay(800);     // turn left (left wheel slower)
  drive(0, 0);     delay(1500);
}` }
  };

  K["4.3"] = {
    components: ["ESP32 board", "L298N or similar motor driver", "2 DC motors", "Battery pack", "Phone with a browser on the same WiFi"],
    nodes: [["ph", "Phone browser|buttons", 90, 160, "tool"], ["esp", "ESP32|web server", 310, 160, "board"], ["drv", "Motor driver|L298N", 530, 160, "part"], ["mot", "Motors|wheels", 530, 290, "part"]],
    wires: [["ph", "esp", "GET /forward"], ["esp", "drv", "GPIO"], ["drv", "mot", "power"]],
    test: { name: "Route test over serial", lang: "ESP32 (Arduino IDE)", code:
`#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "YourNetwork";
const char* password = "YourPassword";
WebServer server(80);

void handle(const char* name) {
  Serial.println(name);  // check the route arrives
  server.send(200, "text/plain", name);
}

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) delay(500);
  Serial.println(WiFi.localIP());
  server.on("/forward", []() { handle("forward"); });
  server.on("/stop", []() { handle("stop"); });
  server.begin();
}

void loop() { server.handleClient(); }` }
  };

  K["4.4"] = {
    components: ["Small ESP drone or quadcopter frame", "4 motors and propellers (with guards)", "Flight controller with IMU (MPU6050 or similar)", "Small LiPo battery and charger", "Safe test area with an adult"],
    nodes: [["imu", "IMU|tilt + rotation", 90, 160, "part"], ["fc", "Flight controller|PID loop", 300, 160, "board"], ["mot", "4 motors|props", 510, 160, "part"], ["rc", "Remote|throttle, pitch, roll, yaw", 300, 290, "tool"]],
    wires: [["imu", "fc", "I2C"], ["rc", "fc", "commands"], ["fc", "mot", "PWM to ESCs"]],
    test: { name: "Read the IMU (no propellers)", lang: "Arduino", code:
`#include <Wire.h>
const byte MPU = 0x68;   // MPU6050 default address

int16_t readWord() {
  byte hi = Wire.read();   // read high byte first, in its own statement
  byte lo = Wire.read();
  return (int16_t)((hi << 8) | lo);
}

void setup() {
  Serial.begin(9600);
  Wire.begin();
  Wire.beginTransmission(MPU);
  Wire.write(0x6B); Wire.write(0);   // wake the sensor up
  Wire.endTransmission(true);
}

void loop() {
  Wire.beginTransmission(MPU);
  Wire.write(0x3B);
  Wire.endTransmission(false);
  Wire.requestFrom(MPU, 6, true);
  int16_t ax = readWord();
  int16_t ay = readWord();
  int16_t az = readWord();
  Serial.print("ax "); Serial.print(ax);
  Serial.print(" ay "); Serial.print(ay);
  Serial.print(" az "); Serial.println(az);
  delay(200);
}` }
  };

  K["4.5"] = {
    components: ["Your robot from chapters 1 to 4", "Computer with Python 3 and sqlite3", "WiFi network shared by robot and computer"],
    nodes: [["rb", "Robot|sensors + motors", 90, 160, "board"], ["wf", "WiFi|telemetry", 310, 160, "data"], ["pc", "Computer|Python logger", 530, 160, "tool"], ["db", "Database|telemetry table", 530, 290, "data"]],
    wires: [["rb", "wf", "commands / data"], ["wf", "pc", ""], ["pc", "db", "INSERT"]],
    test: { name: "Telemetry logger test (no robot needed)", lang: "Python", code:
`import sqlite3
from datetime import datetime

db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE telemetry (id INTEGER PRIMARY KEY, time TEXT, battery REAL, distance REAL)")

fake_packets = [(7.4, 52.0), (7.3, 48.5), (7.2, 30.0)]   # as if from the robot
for battery, distance in fake_packets:
    db.execute("INSERT INTO telemetry (time, battery, distance) VALUES (?, ?, ?)",
               (datetime.now().isoformat(), battery, distance))
db.commit()

avg = db.execute("SELECT AVG(battery) FROM telemetry").fetchone()[0]
assert len(fake_packets) == db.execute("SELECT COUNT(*) FROM telemetry").fetchone()[0]
print(f"PASS, average battery {avg:.2f} V")` }
  };

  K["5.1"] = {
    components: ["Arduino Uno", "HC-SR04 ultrasonic sensor", "Jumper wires", "Book or box to use as a target"],
    nodes: [["uno", "Arduino Uno|pins 9 and 10", 110, 160, "board"], ["hc", "HC-SR04|TRIG, ECHO", 330, 160, "part"], ["pc", "Serial Monitor|distance in cm", 540, 160, "tool"]],
    wires: [["uno", "hc", "TRIG 9 / ECHO 10"], ["uno", "pc", "USB"]],
    test: { name: "Distance test with averaging", lang: "Arduino", code:
`const int TRIG = 9, ECHO = 10;

long readCm() {
  digitalWrite(TRIG, LOW); delayMicroseconds(2);
  digitalWrite(TRIG, HIGH); delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  return pulseIn(ECHO, HIGH) / 58;
}

void setup() {
  pinMode(TRIG, OUTPUT); pinMode(ECHO, INPUT);
  Serial.begin(9600);
}

void loop() {
  long total = 0;
  for (int i = 0; i < 5; i++) { total += readCm(); delay(10); }
  Serial.print("average cm: ");
  Serial.println(total / 5);
  delay(200);
}` }
  };

  K["5.2"] = {
    components: ["Chassis with 2 DC motors", "L298N motor driver", "2 IR line sensors", "Arduino Uno", "Battery pack", "Black tape track on white paper"],
    nodes: [["ls", "2 line sensors|left, right", 90, 160, "part"], ["uno", "Arduino Uno|P controller", 310, 160, "board"], ["drv", "L298N|driver", 530, 160, "part"], ["mot", "Motors", 530, 290, "part"]],
    wires: [["ls", "uno", "analog or digital"], ["uno", "drv", "PWM"], ["drv", "mot", ""]],
    test: { name: "Sensor print test", lang: "Arduino", code:
`const int LEFT = A0, RIGHT = A1;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int l = analogRead(LEFT);
  int r = analogRead(RIGHT);
  Serial.print("left "); Serial.print(l);
  Serial.print("  right "); Serial.print(r);
  Serial.print("  error "); Serial.println(l - r);
  delay(100);
}` }
  };

  K["5.3"] = {
    components: ["Computer with a webcam", "Python 3 with opencv-python installed", "A red object (ball or card)"],
    nodes: [["cam", "Webcam|frames", 90, 160, "part"], ["cv", "OpenCV|colour mask", 310, 160, "tool"], ["pos", "Position|left, middle, right", 530, 160, "data"]],
    wires: [["cam", "cv", "frame"], ["cv", "pos", "x of the blob"]],
    test: { name: "Find a red object", lang: "Python", code:
`import cv2
import numpy as np

cap = cv2.VideoCapture(0)
ok, frame = cap.read()
cap.release()
if ok:
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    mask = cv2.inRange(hsv, np.array([0, 120, 70]), np.array([10, 255, 255]))
    ys, xs = mask.nonzero()
    if len(xs) > 0:
        third = frame.shape[1] // 3
        x = int(xs.mean())
        side = "left" if x < third else "right" if x > 2 * third else "middle"
        print("red object is", side)
    else:
        print("no red found")` }
  };

  K["5.4"] = {
    components: ["Ubuntu computer or Raspberry Pi", "ROS 2 installed (see the ROS docs for your version)", "A simulator or a small sensor node (optional)"],
    nodes: [["cam", "Camera node|publishes images", 90, 160, "tool"], ["top", "Topic|/distance", 310, 160, "data"], ["ctl", "Controller node|subscribes", 530, 160, "tool"]],
    wires: [["cam", "top", "publish"], ["top", "ctl", "subscribe"]],
    test: { name: "Publish a distance message", lang: "Python (ROS 2)", code:
`import rclpy
from rclpy.node import Node
from std_msgs.msg import Float32

class Distance(Node):
    def __init__(self):
        super().__init__("distance_test")
        self.pub = self.create_publisher(Float32, "/distance", 10)
        self.timer = self.create_timer(1.0, self.tick)

    def tick(self):
        msg = Float32()
        msg.data = 42.0
        self.pub.publish(msg)
        self.get_logger().info("published 42.0 cm")

def main():
    rclpy.init()
    rclpy.spin(Distance())

if __name__ == "__main__":
    main()` }
  };

  K["5.5"] = {
    components: ["Arduino Uno", "LED (stands for the conveyor motor)", "Red push button (emergency stop, normally open)", "2 push buttons (sensor simulation)", "Jumper wires and resistors"],
    nodes: [["sen", "Sensor button|box detected", 90, 90, "part"], ["uno", "Arduino Uno|sequence", 310, 160, "board"], ["belt", "Conveyor LED|stands for motor", 530, 90, "part"], ["estop", "Emergency stop|red button", 310, 290, "power"]],
    wires: [["sen", "uno", "input"], ["uno", "belt", "output"], ["estop", "uno", "cuts outputs when pressed"]],
    test: { name: "Emergency stop test", lang: "Arduino", code:
`const int BOX_SENSOR = 2, ESTOP = 3, BELT = 8;

void setup() {
  pinMode(BOX_SENSOR, INPUT_PULLUP);
  pinMode(ESTOP, INPUT_PULLUP);      // pressed = LOW
  pinMode(BELT, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (digitalRead(ESTOP) == LOW) {
    digitalWrite(BELT, LOW);          // stop everything
    Serial.println("E-STOP: belt off");
    return;                           // stay stopped until the button is released
  }
  digitalWrite(BELT, digitalRead(BOX_SENSOR) == HIGH ? HIGH : LOW);
  delay(50);
}` }
  };

  K["6.1"] = {
    components: ["Phone with a cardboard headset, or a VR headset", "Unity (free Personal licence) on a computer", "Phone or headset app for AR (optional)"],
    nodes: [["hd", "Headset|IMU + screens", 90, 160, "part"], ["app", "VR app|renders the world", 310, 160, "tool"], ["view", "Your view|follows your head", 530, 160, "data"]],
    wires: [["hd", "app", "head rotation"], ["app", "view", "two images"]],
    test: { name: "Print the camera angle (Unity)", lang: "Unity C#", code:
`using UnityEngine;

public class HeadTest : MonoBehaviour
{
    void Update()
    {
        Vector3 angles = Camera.main.transform.eulerAngles;
        Debug.Log("Head angles: " + angles);
    }
}` }
  };

  K["6.2"] = {
    components: ["Unity (Personal) with a new 3D project", "Built-in Cube, Plane and Sphere objects", "Computer (no hardware needed)"],
    nodes: [["pl", "Plane|floor", 90, 160, "part"], ["cu", "Cube|table", 310, 160, "part"], ["ca", "Main Camera|player view", 530, 160, "tool"]],
    wires: [["pl", "cu", "place on"], ["ca", "cu", "looks at"]],
    test: { name: "Check positions (Unity)", lang: "Unity C#", code:
`using UnityEngine;

public class RoomCheck : MonoBehaviour
{
    public Transform table;

    void Start()
    {
        table.position = new Vector3(2, 0.5f, 5);
        Debug.Log("Table at " + table.position);
    }
}` }
  };

  K["6.3"] = {
    components: ["Unity project from chapter 2", "A Cube object", "Mover script (from the lesson)"],
    nodes: [["kb", "Arrow keys|Input.GetAxis", 90, 160, "tool"], ["scr", "Mover script|Update()", 310, 160, "tool"], ["cube", "Cube|Transform", 530, 160, "part"]],
    wires: [["kb", "scr", "h value"], ["scr", "cube", "Translate * deltaTime"]],
    test: { name: "Mover script test (Unity)", lang: "Unity C#", code:
`using UnityEngine;

public class Mover : MonoBehaviour
{
    public float speed = 2f;

    void Update()
    {
        float h = Input.GetAxis("Horizontal");
        transform.Translate(new Vector3(h, 0, 0) * speed * Time.deltaTime);
        if (h != 0) Debug.Log("moving, x = " + transform.position.x);
    }
}` }
  };

  K["6.4"] = {
    components: ["Robot from chapter 4 or 5 (or a simulator)", "Unity scene with a cube as the twin", "Computer on the same network", "Python 3 (for the test server)"],
    nodes: [["vr", "VR scene|digital twin", 90, 160, "tool"], ["net", "WiFi|commands + telemetry", 310, 160, "data"], ["rb", "Real robot|ESP32", 530, 160, "board"], ["db", "Database|log", 530, 290, "data"]],
    wires: [["vr", "net", "forward"], ["net", "rb", ""], ["rb", "net", "telemetry"], ["net", "db", "log"]],
    test: { name: "Simulated robot server test", lang: "Python", code:
`# Pretend robot: receives commands and returns telemetry. No hardware needed.
def robot_reply(command):
    if command == "forward":
        return {"battery": 7.2, "distance": 40.0, "moved": True}
    if command == "stop":
        return {"battery": 7.2, "distance": 40.0, "moved": False}
    return {"error": "unknown command"}

for cmd in ["forward", "stop", "dance"]:
    print(cmd, "->", robot_reply(cmd))` }
  };

  K["6.5"] = {
    components: ["Real robot (from Levels 1 to 5)", "Unity VR scene (from Level 6)", "Computer with Python 3 and sqlite3", "Shared WiFi network"],
    nodes: [["vr", "VR twin|Unity", 90, 160, "tool"], ["net", "WiFi|commands + telemetry", 310, 160, "data"], ["rb", "Real robot|sensors + motors", 530, 160, "board"], ["db", "Database|commands and readings", 310, 290, "data"]],
    wires: [["vr", "net", "send command"], ["net", "rb", ""], ["rb", "net", "telemetry"], ["net", "db", "log every row"]],
    test: { name: "Lab checklist test", lang: "Python", code:
`# Run before each lab session: checks the test results you recorded.
checks = {
    "stop button works": True,
    "failsafe stops robot in 1 s": True,
    "battery above 7.0 V": True,
    "VR twin matches robot": True,
}
failed = [name for name, ok in checks.items() if not ok]
print("ALL CHECKS PASSED" if not failed else "FAILED: " + ", ".join(failed))` }
  };
})();
