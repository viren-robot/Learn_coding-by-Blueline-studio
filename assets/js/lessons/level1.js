// Level 1: IRobo Quest (chapters 1-5, 10 lessons each)
(function () {
  var P = window.LH.P, U = window.LH.U, C = window.LH.C, T = window.LH.T, L = window.LH.L;

  window.LESSONS[1] = {
    1: [
      L("What is a microcontroller?",
        P("A microcontroller is a tiny computer on one chip. It runs one program again and again, reading inputs and controlling outputs. Your microwave, toy and washing machine all have one."),
        U("Inputs: buttons, sensors, switches", "Outputs: LEDs, motors, displays, buzzers", "Program: the instructions it follows")),
      L("Parts of an Arduino board",
        P("The Arduino Uno is the most popular beginner board. Learn the main parts before you connect anything."),
        U("Microcontroller chip: the brain, in the middle of the board", "USB port: uploads code and powers the board", "Digital pins 0 to 13: on or off signals", "Analog pins A0 to A5: read changing values", "Power jack: an optional external power supply")),
      L("Power and pins: 5V, 3.3V and GND",
        P("Power pins give electricity to parts. GND (ground) is the return path, and every circuit needs it."),
        U("5V: powers most sensors and LEDs", "3.3V: powers some sensors that need less power", "GND: connect all grounds together", "Never connect 5V directly to GND. That is a short circuit.")),
      L("Installing the Arduino IDE",
        P("The Arduino IDE is the free app where you write code and upload it to your board. Download it from arduino.cc and install it like any other app."),
        U("Open the IDE and check that it shows the Blink example", "Install board support for your Arduino if asked", "Keep the IDE up to date for the best experience")),
      L("Connecting and choosing your board",
        P("Connect the board to your computer with a USB cable. Some cables only charge, so use one that carries data."),
        U("Go to Tools → Board and pick your board", "Go to Tools → Port and pick the port that appeared when you plugged in", "The port name is COM3 on Windows, or /dev/cu.usbmodem on Mac")),
      L("Your first sketch: setup() and loop()",
        P("Every Arduino program is called a sketch. It has two main functions. setup() runs once when the board starts. loop() runs again and again forever."),
        C(`void setup() {
  // runs once: prepare pins and settings
}

void loop() {
  // runs forever: the main behaviour
}`)),
      L("Uploading and the Serial Monitor",
        P("Click Upload (the right-arrow button) to send your sketch to the board. The Serial Monitor shows messages the board sends back to your computer."),
        U("Upload sends code and restarts the board", "Serial.begin(9600) starts the message channel", "Serial.println() prints a line in the Serial Monitor"),
        C(`void setup() {
  Serial.begin(9600);
  Serial.println("Hello, Robot!");
}

void loop() {}`)),
      L("Blink the built-in LED",
        P("Most Arduino boards have a small LED on pin 13. Blink is the first program every maker writes."),
        C(`void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}`)),
      L("Comments and good habits",
        P("Comments are notes for people. The computer ignores anything after two slashes (//). Good names and comments make your code easy to fix later."),
        U("Use // for one line and /* ... */ for many lines", "Name pins with constants, like const int LED_PIN = 13;", "Indent code inside braces by two spaces")),
      L("Troubleshooting: port and upload errors",
        P("Most upload problems have simple fixes. Read the error text at the bottom of the IDE before you change anything."),
        U("Port not found: unplug, plug back in, and check the cable", "Upload failed: choose the correct board in Tools → Board", "Permission denied on Linux: add your user to the dialout group", "Still stuck: ask a grown-up or a maker space for help"),
        T("Every time you change code, you must upload again. The board does not remember your edits by itself.")),
    ],
    2: [
      L("What is an LED?",
        P("An LED (light-emitting diode) lights up when electricity flows through it in one direction only. Its two legs are not the same."),
        U("Long leg: anode (+)", "Short leg: cathode (−)", "Connect the long leg toward the positive side of the circuit")),
      L("Why resistors protect LEDs",
        P("An LED can burn out if too much current flows through it. A resistor limits the current. For most red LEDs on a 5V board, a 220 ohm resistor is a safe choice."),
        U("A resistor is always in series with the LED", "Bigger resistance means less current and a dimmer LED", "Resistors have colour bands, so check the label or use a multimeter")),
      L("Wiring an LED to a digital pin",
        P("Connect the resistor to the digital pin, then the LED, then GND. The resistor can go on either side of the LED in a simple circuit."),
        U("Pin 8 → resistor (220 ohm) → LED long leg", "LED short leg → GND", "Double-check the wiring before you power the board")),
      L("Turning the LED on and off",
        P("pinMode() sets a pin as an output. digitalWrite() sends HIGH (5V, on) or LOW (0V, off) to it."),
        C(`const int LED_PIN = 8;

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);  // on
  delay(500);
  digitalWrite(LED_PIN, LOW);   // off
  delay(500);
}`)),
      L("Timing with delay()",
        P("delay(1000) pauses the program for one second. The whole board waits, so nothing else can run during a delay. Robots often need faster timing."),
        U("delay(500) = half a second", "delay() uses milliseconds, so 1000 ms = 1 second", "Later you will learn millis() to time things without stopping")),
      L("Making a traffic light pattern",
        P("You can control many LEDs with different pins. Keep each light in its own constant so the code is easy to change."),
        C(`const int RED = 2, YELLOW = 3, GREEN = 4;

void setup() {
  pinMode(RED, OUTPUT);
  pinMode(YELLOW, OUTPUT);
  pinMode(GREEN, OUTPUT);
}

void loop() {
  digitalWrite(GREEN, HIGH); delay(3000); digitalWrite(GREEN, LOW);
  digitalWrite(YELLOW, HIGH); delay(1000); digitalWrite(YELLOW, LOW);
  digitalWrite(RED, HIGH); delay(3000); digitalWrite(RED, LOW);
}`)),
      L("What is a push button?",
        P("A push button is an input. When you press it, it connects two wires together, which lets the board detect the press. Buttons have four legs, but they connect in pairs."),
        U("Pressing connects the two sides", "Releasing disconnects them", "Buttons bounce for a few milliseconds, which programs can filter")),
      L("Pull-up resistors and INPUT_PULLUP",
        P("A floating input pin can read random values. A pull-up resistor holds the pin HIGH until the button pulls it LOW. The Arduino has built-in pull-ups, so you can use INPUT_PULLUP and skip an external resistor."),
        C(`pinMode(2, INPUT_PULLUP);  // pin reads HIGH when released, LOW when pressed`)),
      L("Reading a button with digitalRead()",
        P("digitalRead() returns HIGH or LOW. With INPUT_PULLUP, a pressed button reads LOW."),
        C(`const int BUTTON = 2;

void setup() {
  pinMode(BUTTON, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  int state = digitalRead(BUTTON);
  Serial.println(state);  // 1 when released, 0 when pressed
  delay(100);
}`)),
      L("Mini project: button-controlled light",
        P("Combine the LED and the button. When the button is pressed, the LED turns on. When it is released, the LED turns off."),
        C(`const int BUTTON = 2;
const int LED_PIN = 8;

void setup() {
  pinMode(BUTTON, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  if (digitalRead(BUTTON) == LOW) {
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }
}`),
        T("Try adding a second button that turns the LED off.")),
    ],
    3: [
      L("What is a motor?",
        P("A DC motor turns electrical energy into spinning motion. Inside, a magnetic field pushes a rotor around. More voltage usually means faster spinning."),
        U("DC motor: spins when given power, no angle control", "Servo motor: moves to an exact angle", "Stepper motor: moves in exact small steps")),
      L("Why motors need a driver",
        P("A motor can need more current than an Arduino pin can safely supply. Connecting a motor directly can damage the board. A motor driver uses a small signal from the Arduino to switch a bigger battery on and off."),
        T("Never connect a motor straight to an Arduino pin.")),
      L("The L298N motor driver",
        P("The L298N is a common dual motor driver. It can control two DC motors, with a direction and a speed input for each."),
        U("IN1 and IN2 set the direction", "ENA sets the speed (use a PWM pin)", "Connect the motor battery to 12V, and the Arduino GND to the driver GND")),
      L("Speed and direction",
        P("Reversing the two direction inputs spins the motor the other way. Setting both to the same level stops the motor."),
        C(`void forward() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
}

void backward() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
}`)),
      L("What is PWM?",
        P("PWM (pulse-width modulation) switches a pin on and off very fast. The longer it stays on, the more power the motor gets. analogWrite() uses PWM on pins marked with a tilde (~)."),
        U("analogWrite(pin, 0) = off", "analogWrite(pin, 255) = full speed", "analogWrite(pin, 128) = about half speed")),
      L("Servo motors and their three wires",
        P("A servo has three wires: signal (usually orange or yellow), power (red), and ground (brown or black). It turns to an angle between 0 and 180 degrees and holds that position."),
        T("Servos can draw more current than a board pin can give, so power them from a separate 5V supply if they jitter.")),
      L("Controlling a servo with the Servo library",
        P("The Servo library handles the timing for you. Attach the servo to a pin, then write an angle."),
        C(`#include <Servo.h>

Servo arm;

void setup() {
  arm.attach(9);
}

void loop() {
  arm.write(90);   // middle
}`)),
      L("Sweeping the servo",
        P("A for loop can move the servo gradually, step by step, so it sweeps from one side to the other."),
        C(`for (int angle = 0; angle <= 180; angle++) {
  arm.write(angle);
  delay(15);
}
for (int angle = 180; angle >= 0; angle--) {
  arm.write(angle);
  delay(15);
}`)),
      L("Steering a robot with a servo",
        P("Many robot cars use a servo for steering. Choose the angles that point the front wheels left, straight and right, then write them in your code."),
        U("Find the straight-ahead angle first, maybe 90 degrees", "Left and right are usually about 60 and 120 degrees", "Test with the wheels off the ground")),
      L("Mini project: robot gripper",
        P("A gripper is a servo with two fingers. Open it, close it, and try grabbing a light object."),
        C(`void openGripper()  { arm.write(20); }
void closeGripper() { arm.write(120); }`),
        T("Make the servo close slowly so it does not crush the object.")),
    ],
    4: [
      L("What is a 7-segment display?",
        P("A 7-segment display is seven LEDs arranged in a figure-eight shape. Light the right segments and you see digits 0 to 9. Clocks, microwaves and calculators use this display."),
        U("Each segment has a letter from a to g", "An optional decimal point is called dp")),
      L("Segments a to g",
        P("The segments are named clockwise around the top, with g in the middle."),
        U("a: top", "b: top right", "c: bottom right", "d: bottom", "e: bottom left", "f: top left", "g: middle")),
      L("Common cathode and common anode",
        P("There are two kinds of 7-segment display. A common cathode display connects all the minus legs together. A common anode display connects all the plus legs together."),
        U("Common cathode: connect the common pin to GND, and set a segment HIGH to light it", "Common anode: connect the common pin to 5V, and set a segment LOW to light it", "Check your datasheet or test with a battery first")),
      L("Resistors for each segment",
        P("Each segment needs its own resistor, usually 220 ohms. Without resistors the segments can burn out quickly."),
        T("Some modules have built-in resistors. Check before adding more.")),
      L("Making digits with bits",
        P("To show 0, light segments a, b, c, d, e and f. To show 1, light only b and c. You can write these patterns as a list of on and off values."),
        U("Digit 0: a b c d e f on, g off", "Digit 1: b and c on", "Digit 8: all seven on")),
      L("A table of digit patterns",
        P("Store each digit pattern as one byte. Bit 0 controls segment a, bit 1 controls b, and so on up to bit 6 for g."),
        C(`// bits: g f e d c b a  (bit 0 = a)
const byte DIGITS[10] = {
  0b00111111, // 0
  0b00000110, // 1
  0b01011011, // 2
  0b01001111, // 3
  0b01100110, // 4
  0b01101101, // 5
  0b01111101, // 6
  0b00000111, // 7
  0b01111111, // 8
  0b01101111  // 9
};`)),
      L("Reading bits with shifts",
        P("The >> operator shifts bits to the right. (DIGITS[n] >> i) & 1 gives you the value of bit i, which is 0 or 1."),
        C(`const int segPins[7] = {2, 3, 4, 5, 6, 7, 8}; // a to g

void showDigit(int n) {
  for (int i = 0; i < 7; i++) {
    digitalWrite(segPins[i], (DIGITS[n] >> i) & 1);
  }
}`)),
      L("Counting from 0 to 9",
        P("Put the setup and showDigit code together in a loop to count up."),
        C(`void setup() {
  for (int i = 0; i < 7; i++) pinMode(segPins[i], OUTPUT);
}

void loop() {
  for (int n = 0; n <= 9; n++) {
    showDigit(n);
    delay(800);
  }
}`)),
      L("Counting down and resetting",
        P("Change the loop to count down. Add a button that sets the number back to 0 when pressed."),
        T("Use a counter variable outside the loop so it remembers its value between presses.")),
      L("Mini project: electronic dice",
        P("Pick a random number from 1 to 6 when a button is pressed. Use random() and show the result on the display."),
        C(`int roll = random(1, 7);  // 1 to 6
showDigit(roll);`),
        T("Call randomSeed(analogRead(A0)) in setup() so the numbers are different each time.")),
    ],
    5: [
      L("What is machine learning?",
        P("Machine learning is a way for computers to learn patterns from examples, instead of following rules you wrote by hand. Your phone uses it to recognise faces and voices."),
        U("Learning from examples", "Making predictions on new data", "Getting better with more good examples")),
      L("Examples and labels",
        P("To teach a model, you give it examples with labels. A label is the name of the thing in the example, like 'cat' or 'dog'."),
        U("Example: a picture of a cat, label: cat", "Example: a picture of a dog, label: dog", "More labelled examples usually means a better model")),
      L("Creating an Image Project",
        P("Teachable Machine (teachablemachine.withgoogle.com) is a free website. Choose Image Project, then Standard image model to start."),
        U("Open teachablemachine.withgoogle.com in Chrome", "Click Get Started and choose Image Project", "Allow webcam access when asked")),
      L("Naming your classes",
        P("Each class is a group of examples with the same label. Name them clearly, because your robot code will use these names."),
        U("Good names: Left, Right, Stop", "Avoid names that sound similar, like Cat and Cats", "You can have two or more classes")),
      L("Collecting good training images",
        P("Record about 30 to 100 pictures for each class. Vary the angle, distance, light and background so the model learns the real thing, not just one photo."),
        T("Include a 'nothing' or 'background' class so the model does not guess when no object is there.")),
      L("Training the model",
        P("Click Train Model and wait. Teachable Machine learns from your examples on your computer, so keep the tab open until it finishes."),
        U("Training takes a minute or two", "Do not close the tab during training", "If the model is wrong, add more examples and train again")),
      L("Testing in the Preview panel",
        P("The Preview panel shows what the model thinks it sees, live from the webcam. Hold up each object and check the result."),
        U("Test with new objects, not the training ones", "Try different lighting", "Note which classes get mixed up")),
      L("Confidence scores",
        P("The model gives each class a confidence score between 0 and 1 (or 0 to 100 percent). A high score means the model is sure. Use a threshold, like 0.8, before the robot acts."),
        C(`if (confidence > 0.8) {
  // trust the prediction
}`)),
      L("Exporting the model",
        P("Click Export Model to download or share the model. For Arduino and robots, you often send the results from a computer over Serial, or use a board that can run TensorFlow Lite."),
        U("Choose TensorFlow.js or TensorFlow Lite export", "Save the model link or files for later", "Keep a copy of your training images")),
      L("Using the result to control a robot",
        P("Once you know the class, your code decides what to do. This is the link between AI and actions."),
        C(`// Example logic, after the computer tells us the class name
if (label == "Left")  turnLeft();
if (label == "Right") turnRight();
if (label == "Stop")  stopMotors();`),
        T("Always add a stop rule so the robot stops if the model is unsure.")),
    ]
  };
})();
