// Course content for Learn Coding by Blueline Studio.
// Each level has 5 chapters. Lesson blocks are one of:
//   { type: "p", text }        paragraph
//   { type: "ul", items: [] }  bullet list
//   { type: "code", code }     code sample
//   { type: "tip", text }      highlighted tip
// "keys" are words the built-in assistant uses to find the right chapter.

window.LEVELS = [
  {
    id: 1,
    slug: "irobo-quest",
    name: "IRobo Quest",
    color: "#22c55e",
    icon: "🤖",
    tagline: "Start your robot journey with Arduino, motors, displays and AI.",
    chapters: [
      {
        id: 1,
        title: "Meet the Arduino",
        summary: "Learn what a microcontroller is and get your first program running.",
        goals: ["Name the main parts of an Arduino board", "Install the Arduino IDE", "Upload a program"],
        keys: ["arduino", "board", "install", "ide", "microcontroller", "setup", "uno"],
        lesson: [
          { type: "p", text: "An Arduino is a small computer board. It has a tiny brain called a microcontroller that runs one program over and over. It can read inputs (buttons, sensors) and control outputs (LEDs, motors, displays)." },
          { type: "ul", items: [
            "Digital pins (0–13) can be simply ON (HIGH) or OFF (LOW).",
            "Analog pins (A0–A5) can read values between 0 and 1023.",
            "5V and GND pins give power. Always connect GND first!",
            "The USB port uploads your code and powers the board."
          ]},
          { type: "p", text: "Every Arduino sketch has two main functions: setup() runs once when the board starts, and loop() runs again and again forever." },
          { type: "tip", text: "Install the Arduino IDE from arduino.cc, plug in your board with USB, then pick your board and port under the Tools menu." }
        ],
        activity: {
          title: "Say hello with the built-in LED",
          steps: [
            "Open File → Examples → 01.Basics → Blink.",
            "Select your board and port under Tools.",
            "Click Upload (the arrow button). The little LED on the board should blink."
          ]
        },
        quiz: {
          question: "Which function runs only once when the Arduino starts?",
          options: ["loop()", "setup()", "start()", "main()"],
          answer: 1,
          explain: "setup() runs once. loop() then repeats forever."
        }
      },
      {
        id: 2,
        title: "Blinking and Buttons",
        summary: "Control an LED and read a button, the two basic robot skills.",
        goals: ["Set a pin as OUTPUT or INPUT", "Turn an LED on and off", "Read a push button"],
        keys: ["led", "blink", "button", "switch", "pinmode", "digital", "input", "output", "resistor"],
        lesson: [
          { type: "p", text: "An LED is a light that only works one way around. The long leg is + (anode) and the short leg is − (cathode). Always add a resistor (about 220 Ω) in series so the LED does not burn out." },
          { type: "code", code: `const int LED_PIN = 13;

void setup() {
  pinMode(LED_PIN, OUTPUT);      // this pin sends signals out
}

void loop() {
  digitalWrite(LED_PIN, HIGH);   // LED on
  delay(500);                    // wait half a second
  digitalWrite(LED_PIN, LOW);    // LED off
  delay(500);
}` },
          { type: "p", text: "A button is an input. Using INPUT_PULLUP means the pin reads HIGH normally, and LOW when the button is pressed." }
        ],
        activity: {
          title: "Button-controlled light",
          steps: [
            "Wire an LED (with resistor) to pin 8 and a button between pin 2 and GND.",
            "Set pin 2 with pinMode(2, INPUT_PULLUP).",
            "In loop(), read it with digitalRead(2) and turn the LED on when it returns LOW."
          ]
        },
        quiz: {
          question: "Why do we add a resistor to an LED?",
          options: ["To make it brighter", "To limit the current and protect the LED", "To change its colour", "To make it blink by itself"],
          answer: 1,
          explain: "The resistor limits current so the LED does not burn out."
        }
      },
      {
        id: 3,
        title: "Motors and Servos",
        summary: "Make things move with DC motors, motor drivers and servo motors.",
        goals: ["Explain why a motor needs a driver", "Know the difference between DC motors and servos", "Control a servo angle"],
        keys: ["motor", "servo", "dc motor", "driver", "l298n", "angle", "spin", "wheel", "move"],
        lesson: [
          { type: "p", text: "A DC motor spins when you give it power, but an Arduino pin can only supply a small current. A motor driver board (like an L298N) uses a small signal from the Arduino to switch a bigger battery on and off for the motor." },
          { type: "p", text: "A servo motor is different: you tell it an angle (0 to 180 degrees) and it moves there and holds. Servos are great for steering, robot arms and pointers." },
          { type: "code", code: `#include <Servo.h>

Servo arm;

void setup() {
  arm.attach(9);      // servo signal wire on pin 9
}

void loop() {
  arm.write(0);       // turn to 0 degrees
  delay(1000);
  arm.write(180);     // turn to 180 degrees
  delay(1000);
}` },
          { type: "tip", text: "Always keep the motor power separate from the Arduino power, and connect all the GND wires together." }
        ],
        activity: {
          title: "Sweep the servo",
          steps: [
            "Upload the servo code above and watch the arm swing.",
            "Change the delay so it moves slower or faster.",
            "Add a for loop so the servo sweeps smoothly from 0 to 180 degrees."
          ]
        },
        quiz: {
          question: "Which motor is best when you need to set an exact angle?",
          options: ["A DC motor", "A servo motor", "A fan", "A buzzer"],
          answer: 1,
          explain: "Servos move to a set angle and hold it, so they are perfect for precise positions."
        }
      },
      {
        id: 4,
        title: "The 7-Segment Display",
        summary: "Show numbers 0 to 9 by lighting up the right segments.",
        goals: ["Name the segments a to g", "Understand common cathode displays", "Show digits with code"],
        keys: ["7 segment", "seven segment", "segment", "display", "number", "digit", "count", "counter"],
        lesson: [
          { type: "p", text: "A 7-segment display is 7 LEDs arranged in a figure-eight shape, named a to g. Light up the right combination and you get a digit. For example, a, b, c lit together make a 7." },
          { type: "p", text: "In a common cathode display all the minus legs share one wire. Sending HIGH to a segment pin turns that segment on." },
          { type: "code", code: `// Segments a b c d e f g  (bit 0 = a ... bit 6 = g)
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
};

const int segPins[7] = {2, 3, 4, 5, 6, 7, 8}; // a..g

void showDigit(int n) {
  for (int i = 0; i < 7; i++) {
    digitalWrite(segPins[i], (DIGITS[n] >> i) & 1);
  }
}

void setup() {
  for (int i = 0; i < 7; i++) pinMode(segPins[i], OUTPUT);
}

void loop() {
  for (int n = 0; n <= 9; n++) {
    showDigit(n);
    delay(800);
  }
}` },
          { type: "tip", text: "Each segment needs its own resistor (or a shared resistor pack) so it does not burn out." }
        ],
        activity: {
          title: "Countdown timer",
          steps: [
            "Upload the code above and watch it count 0 to 9.",
            "Change the loop so it counts down from 9 to 0.",
            "Add a button that resets the count to 0."
          ]
        },
        quiz: {
          question: "Which segments do you light up to show the digit 1?",
          options: ["a and d", "b and c", "e and f", "all of them"],
          answer: 1,
          explain: "The digit 1 uses the two right-hand segments, b and c."
        }
      },
      {
        id: 5,
        title: "Teach Your Robot with Teachable Machine",
        summary: "Train a simple AI model in your browser and use its results.",
        goals: ["Create a Teachable Machine project", "Train a model with example pictures", "Understand what a class is"],
        keys: ["teachable", "machine", "ai", "model", "train", "image", "camera", "classify", "machine learning"],
        lesson: [
          { type: "p", text: "Teachable Machine (teachablemachine.withgoogle.com) is a free website where you can train an AI model without writing code. You show it examples of things, and it learns to tell them apart." },
          { type: "ul", items: [
            "Pick an Image Project.",
            "Create classes, for example 'Red card' and 'Blue card'.",
            "Record 30 or more pictures for each class using your webcam.",
            "Press Train Model and test it in the Preview panel.",
            "Export the model so your robot can use it."
          ]},
          { type: "tip", text: "The more varied your examples are (different light, angles, backgrounds), the smarter your model gets." }
        ],
        activity: {
          title: "Robot card sorter",
          steps: [
            "Train a model with two classes, for example 'Left' and 'Right' hand signs.",
            "Test it in the Preview panel and see the confidence scores.",
            "Plan what your robot should do for each class (turn left, turn right)."
          ]
        },
        quiz: {
          question: "What is a 'class' in Teachable Machine?",
          options: ["A school lesson", "A group of examples that share a label", "A type of motor", "A wifi password"],
          answer: 1,
          explain: "A class is a label, like 'Cat' or 'Dog', with example pictures that belong to it."
        }
      }
    ]
  },
  {
    id: 2,
    slug: "irobocraft",
    name: "IRoboCraft",
    color: "#f97316",
    icon: "🛠️",
    tagline: "Design and print your own parts, then build real mechanical systems.",
    chapters: [
      {
        id: 1,
        title: "Introduction to 3D Printing",
        summary: "How a 3D printer builds objects one thin layer at a time.",
        goals: ["Explain layer-by-layer printing", "Name the main printer settings", "Choose a filament"],
        keys: ["3d print", "3d printer", "print", "printer", "filament", "layer", "pla", "nozzle", "infill"],
        lesson: [
          { type: "p", text: "Most desktop 3D printers use FDM. They melt plastic filament and squeeze it through a hot nozzle, drawing the object one layer at a time from the bottom up." },
          { type: "ul", items: [
            "Layer height: thinner layers look smoother but take longer (0.2 mm is a common choice).",
            "Infill: the honeycomb pattern inside a part. 10–20% is enough for most prints.",
            "Supports: temporary structures for overhangs that would otherwise sag.",
            "PLA is the easiest filament for beginners; it is made from plant starch."
          ]},
          { type: "tip", text: "Only touch the nozzle and hot bed when an adult says it has cooled down. Printers get very hot." }
        ],
        activity: {
          title: "Print a test cube",
          steps: [
            "Download a 20 mm calibration cube from a free library, or make a simple one.",
            "Slice it in the slicer app (Cura or PrusaSlicer) and preview the layers.",
            "Print it and check: are the walls straight and the top flat?"
          ]
        },
        quiz: {
          question: "What does 'layer height' control?",
          options: ["The weight of the part", "The thickness of each printed layer", "The colour", "The speed of the motor"],
          answer: 1,
          explain: "Layer height is how thick each layer of plastic is. Thinner layers look smoother."
        }
      },
      {
        id: 2,
        title: "Designing Parts with CAD",
        summary: "Use free 3D design tools to draw the parts your robot needs.",
        goals: ["Create a basic 3D shape", "Use measurements and dimensions", "Add clearance for moving parts"],
        keys: ["cad", "design", "tinkercad", "fusion", "model", "3d design", "dimension", "clearance", "tolerance", "sketch"],
        lesson: [
          { type: "p", text: "CAD (Computer-Aided Design) lets you draw parts on a computer before printing them. Tinkercad is a free, browser-based tool that is great to start with." },
          { type: "ul", items: [
            "Start with basic shapes and combine (add) or cut (subtract) them.",
            "Measure your real parts with a ruler or calipers and copy the size.",
            "Add clearance: a hole for a 3 mm bolt should be about 3.2–3.4 mm, so it slides in.",
            "Give parts a flat base so they stand up on the print bed."
          ]}
        ],
        activity: {
          title: "Design a bolt holder",
          steps: [
            "Open Tinkercad and drag out a block for the base.",
            "Add a cylinder and set it to Hole so it cuts a 3.3 mm hole.",
            "Export the design as an STL file, ready for the slicer."
          ]
        },
        quiz: {
          question: "Why do we leave a little extra space (clearance) around moving parts?",
          options: ["To save plastic only", "So parts fit and move without getting stuck", "To make them heavier", "Printers need empty space"],
          answer: 1,
          explain: "Printed parts are never exactly the size you designed, so clearance lets them slide together."
        }
      },
      {
        id: 3,
        title: "Gears and Gear Ratios",
        summary: "Use gears to trade speed for power in your robots.",
        goals: ["Count teeth on gears", "Calculate a gear ratio", "Know speed and torque trade-off"],
        keys: ["gear", "gears", "ratio", "teeth", "tooth", "torque", "speed", "mesh"],
        lesson: [
          { type: "p", text: "Gears connect two shafts so one turns the other. A small gear driving a big gear slows down the output but makes it stronger (more torque)." },
          { type: "code", code: `Gear ratio = teeth on driven gear / teeth on driver gear

Example: driver = 20 teeth, driven = 60 teeth
Ratio = 60 / 20 = 3

Output speed = motor speed / 3   (slower)
Output torque = motor torque x 3 (stronger)` },
          { type: "p", text: "Ideal gears ignore friction, so real gears will be a little less efficient than the numbers suggest." }
        ],
        activity: {
          title: "Gearbox challenge",
          steps: [
            "Print two gears with 20 and 40 teeth (or draw them in CAD).",
            "Spin the small one by hand and count how many turns the big one makes.",
            "Calculate the ratio and check it against your count."
          ]
        },
        quiz: {
          question: "A 10-tooth gear drives a 30-tooth gear. What is the ratio?",
          options: ["1 to 3", "3 to 1", "10 to 30 turns", "It cannot be calculated"],
          answer: 0,
          explain: "The driven gear has 3 times the teeth, so the ratio is 30 / 10 = 3. The output turns 3 times slower, with 3 times the torque."
        }
      },
      {
        id: 4,
        title: "Levers, Pulleys and Wheels",
        summary: "Simple machines that make work easier for your robot.",
        goals: ["Describe a lever and its fulcrum", "Explain how pulleys lift loads", "Know how wheels and axles help movement"],
        keys: ["lever", "pulley", "wheel", "axle", "simple machine", "fulcrum", "belt", "mechanical advantage", "crane"],
        lesson: [
          { type: "ul", items: [
            "Lever: a bar that turns around a point called the fulcrum. Longer arms make lifting easier.",
            "Pulley: a wheel with a rope or belt. A moveable pulley can halve the effort needed.",
            "Wheel and axle: a wheel on a rod. Bigger wheels roll over bumps more easily."
          ]},
          { type: "p", text: "Mechanical advantage is how much a machine multiplies your force. A lever with the fulcrum close to the load gives a big advantage." }
        ],
        activity: {
          title: "Build a lever arm",
          steps: [
            "Put a pencil under a ruler (the fulcrum) and balance a small weight at one end.",
            "Move the fulcrum closer to the weight and feel how much harder it is to lift.",
            "Write down which setup felt easiest and why."
          ]
        },
        quiz: {
          question: "What is the fulcrum of a lever?",
          options: ["The end you push", "The point the lever turns around", "The weight", "The handle"],
          answer: 1,
          explain: "The fulcrum is the pivot point the lever rotates around."
        }
      },
      {
        id: 5,
        title: "Build and Test a Printed Robot",
        summary: "Put printed parts, gears and wheels together into a working chassis.",
        goals: ["Plan a chassis from parts", "Assemble and test moving joints", "Fix a design after testing"],
        keys: ["chassis", "robot", "build", "assemble", "frame", "test", "arm", "bracket", "project"],
        lesson: [
          { type: "p", text: "Real engineers test, learn and improve. Your first print will rarely be perfect, and that is part of the process." },
          { type: "ul", items: [
            "Sketch your robot first: where will the motors, wheels, battery and board go?",
            "Print the frame parts, then test-fit each piece before glue or screws.",
            "Check every joint by moving it by hand before powering the motors.",
            "Write down one thing that did not work and one fix you will try next."
          ]}
        ],
        activity: {
          title: "Printed robot arm",
          steps: [
            "Print a base, two arm links and a gripper (use a free arm design from a library).",
            "Assemble with bolts and nuts, leaving clearance in the joints.",
            "Test the arm by moving it slowly, then record what needs changing."
          ]
        },
        quiz: {
          question: "What is the best first step after a print does not fit?",
          options: ["Throw it away", "Measure it, adjust the design and print again", "Glue it no matter what", "Print the same file again without changes"],
          answer: 1,
          explain: "Measure what is wrong, change the design (often the clearance), and test again."
        }
      }
    ]
  },
  {
    id: 3,
    slug: "irobolive",
    name: "IRobolive",
    color: "#3b82f6",
    icon: "💻",
    tagline: "Write software, store data in databases and bring sensors to life.",
    chapters: [
      {
        id: 1,
        title: "Programming Basics with Python",
        summary: "Variables, conditions and loops: the building blocks of every program.",
        goals: ["Store values in variables", "Make decisions with if", "Repeat actions with loops"],
        keys: ["python", "variable", "variables", "if", "loop", "for", "while", "condition", "programming", "code", "coding", "basics"],
        lesson: [
          { type: "p", text: "Python is a friendly language that reads almost like English. Every program is built from a few simple ideas." },
          { type: "code", code: `name = "Ava"        # a variable stores a value
battery = 80

if battery < 20:          # a decision
    print("Charge me!")
else:
    print(name, "is ready")

for step in range(3):     # a loop repeats code
    print("Step", step)` },
          { type: "tip", text: "Indentation (the spaces at the start of a line) tells Python which code belongs inside an if or loop." }
        ],
        activity: {
          title: "Robot status message",
          steps: [
            "Create variables for your robot's name, speed and battery level.",
            "Print a warning if the battery is below 20.",
            "Use a for loop to print the speed five times, going up by 10 each time."
          ]
        },
        quiz: {
          question: "What does a loop do?",
          options: ["Stores a number", "Repeats code", "Draws a picture", "Connects to wifi"],
          answer: 1,
          explain: "A loop repeats a block of code as many times as you need."
        }
      },
      {
        id: 2,
        title: "Functions and Your First App",
        summary: "Group code into reusable functions and build a small interactive app.",
        goals: ["Write a function with parameters", "Return a result", "Build a tiny interactive program"],
        keys: ["function", "functions", "def", "return", "parameter", "app", "reuse", "interactive", "input"],
        lesson: [
          { type: "p", text: "A function is a named block of code you can run whenever you need it. Parameters are the inputs, and return sends a result back." },
          { type: "code", code: `def robot_message(name, battery):
    if battery < 20:
        return name + " needs charging"
    return name + " is ready"

print(robot_message("Rex", 15))
print(robot_message("Mia", 90))` },
          { type: "p", text: "Combine a function with input() to ask the user questions and respond. That is the start of every app." }
        ],
        activity: {
          title: "Temperature app",
          steps: [
            "Write a function that converts Celsius to Fahrenheit (F = C × 9/5 + 32).",
            "Use input() to ask for a temperature and print the result.",
            "Make the app repeat until the user types 'quit'."
          ]
        },
        quiz: {
          question: "What does the keyword 'return' do in a function?",
          options: ["Restarts the program", "Sends a result back to the caller", "Deletes the function", "Prints the function name"],
          answer: 1,
          explain: "return sends a value back to wherever the function was called."
        }
      },
      {
        id: 3,
        title: "What is a Database?",
        summary: "Store information in tables so it is organised and easy to find.",
        goals: ["Describe tables, rows and columns", "Pick a primary key", "Explain why databases beat plain text files"],
        keys: ["database", "databases", "table", "row", "column", "primary key", "record", "data", "store", "storage"],
        lesson: [
          { type: "p", text: "A database stores data in tables. Each row is one record (like one robot test), and each column is one field (like the speed or time)." },
          { type: "ul", items: [
            "Table: a list of related data, like 'robots' or 'tests'.",
            "Row (record): one item, like the results of one test run.",
            "Column (field): one property, like 'battery' or 'distance'.",
            "Primary key: a unique ID for each row, so you can always find it."
          ]}
        ],
        activity: {
          title: "Design a robot table",
          steps: [
            "Draw a table called 'robots' with columns for id, name, color and wheels.",
            "Fill in three rows for three robots you know.",
            "Decide which column should be the primary key and explain why."
          ]
        },
        quiz: {
          question: "In a database table, what is a row?",
          options: ["One field", "One record", "The table name", "A password"],
          answer: 1,
          explain: "A row is one record, such as one robot or one test result."
        }
      },
      {
        id: 4,
        title: "SQL: Talking to a Database",
        summary: "Use SQL commands to create, add, search and update data.",
        goals: ["Write SELECT, INSERT and UPDATE", "Filter with WHERE", "Use SQLite from Python"],
        keys: ["sql", "select", "insert", "update", "delete", "where", "query", "sqlite", "create table"],
        lesson: [
          { type: "p", text: "SQL (Structured Query Language) is the language used to talk to databases. SQLite is a small database that comes built into Python, so you can start without installing anything." },
          { type: "code", code: `import sqlite3

db = sqlite3.connect("robot.db")
db.execute("""CREATE TABLE IF NOT EXISTS scores (
                id INTEGER PRIMARY KEY,
                name TEXT,
                points INTEGER)""")
db.execute("INSERT INTO scores (name, points) VALUES (?, ?)", ("Ava", 42))
db.commit()

for row in db.execute("SELECT name, points FROM scores WHERE points > 10"):
    print(row)

db.close()` },
          { type: "ul", items: [
            "SELECT reads data.",
            "INSERT adds a new row.",
            "UPDATE changes existing rows (always use WHERE!).",
            "DELETE removes rows."
          ]}
        ],
        activity: {
          title: "High score board",
          steps: [
            "Run the code above and check that Ava's score was saved.",
            "Insert two more players with different scores.",
            "Write a SELECT that shows only players with more than 50 points, sorted by points."
          ]
        },
        quiz: {
          question: "Which SQL command adds a new row to a table?",
          options: ["SELECT", "INSERT", "WHERE", "DELETE"],
          answer: 1,
          explain: "INSERT adds a new row. SELECT reads, WHERE filters, and DELETE removes."
        }
      },
      {
        id: 5,
        title: "Sensors and Live Data",
        summary: "Send sensor readings from your Arduino into a database.",
        goals: ["Send data from Arduino over Serial", "Read it in Python", "Log readings into a database"],
        keys: ["sensor", "sensors", "serial", "log", "logging", "live", "dashboard", "temperature", "distance", "ultrasonic", "pyserial", "database", "save data"],
        lesson: [
          { type: "p", text: "Sensors measure the world (temperature, distance, light). An Arduino can print these readings over its USB cable, and a Python program can read them and save them in a database." },
          { type: "code", code: `// Arduino sketch: print a reading every second
int sensorPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println(analogRead(sensorPin));
  delay(1000);
}` },
          { type: "tip", text: "The Serial Monitor in the Arduino IDE is a quick way to check your readings before you write Python." }
        ],
        activity: {
          title: "Log your sensor",
          steps: [
            "Upload the sensor sketch and open the Serial Monitor to see readings.",
            "Use the pyserial library in Python to read each line.",
            "Insert each reading into a 'readings' table with a timestamp."
          ]
        },
        quiz: {
          question: "What does Serial.println() do on an Arduino?",
          options: ["Turns on a motor", "Prints a value over USB", "Deletes a file", "Connects to the internet"],
          answer: 1,
          explain: "Serial.println() sends a value over the USB serial connection so a computer can read it."
        }
      }
    ]
  },
  {
    id: 4,
    slug: "iroboverse",
    name: "IRoboVerse",
    color: "#a855f7",
    icon: "🌌",
    tagline: "Combine electronics, mechanics and software into RC vehicles and drones.",
    chapters: [
      {
        id: 1,
        title: "Wireless Control Basics",
        summary: "How remotes talk to robots using radio, infrared and WiFi.",
        goals: ["Compare IR, Bluetooth, RF and WiFi", "Explain what a receiver does", "Choose a control method for a project"],
        keys: ["wireless", "wifi", "bluetooth", "radio", "rf", "infrared", "ir", "remote", "receiver", "transmitter", "esp32", "esp8266", "esp"],
        lesson: [
          { type: "ul", items: [
            "Infrared (IR): short range, needs a line of sight. Used by TV remotes.",
            "Bluetooth: short range (about 10 m), easy to connect to phones.",
            "RF (2.4 GHz radio): used by RC transmitters, works through walls.",
            "WiFi: long range inside a home, lets you control robots from a browser."
          ]},
          { type: "p", text: "An ESP32 is a small, cheap chip with both WiFi and Bluetooth. It is a popular choice for robot and drone projects." }
        ],
        activity: {
          title: "Choose the right remote",
          steps: [
            "List three robots you would like to build.",
            "For each one, pick IR, Bluetooth, RF or WiFi and explain why.",
            "Share your choices with a friend and compare."
          ]
        },
        quiz: {
          question: "Which wireless method does NOT need a line of sight?",
          options: ["Infrared", "Bluetooth or radio (RF)", "A laser pointer", "A TV remote"],
          answer: 1,
          explain: "Radio and Bluetooth can pass through walls, while infrared needs a clear line between remote and receiver."
        }
      },
      {
        id: 2,
        title: "Building an RC Car",
        summary: "Combine motors, a driver, a battery and a receiver into a car you can drive.",
        goals: ["Name the parts of an RC car", "Explain differential drive", "Wire a motor driver to a controller"],
        keys: ["rc", "rc car", "car", "vehicle", "steering", "chassis", "differential", "drive", "battery", "remote car"],
        lesson: [
          { type: "p", text: "An RC car is a robot where a person drives using a remote. The main parts are a chassis, two drive motors, a motor driver, a battery, a receiver and a steering servo." },
          { type: "ul", items: [
            "Differential drive: two motors on either side. Spin them in opposite directions to turn on the spot.",
            "Steering servo: turns the front wheels for a car-style turn.",
            "Battery: a LiPo or 18650 pack. Always charge with a proper charger and never leave it charging unattended.",
            "Receiver: decodes the remote's signal and passes commands to the Arduino or ESP32."
          ]},
          { type: "tip", text: "Check your wiring with the wheels off the ground before the first drive. Know how to switch the power off quickly." }
        ],
        activity: {
          title: "Drive test",
          steps: [
            "Mount two motors to a chassis and connect them through the motor driver.",
            "Write a function for forward(), backward(), left() and right().",
            "Drive a square on the floor and measure how close you get."
          ]
        },
        quiz: {
          question: "How does a differential drive robot turn on the spot?",
          options: ["Both motors spin forward", "The motors spin in opposite directions", "It needs a servo", "It cannot turn"],
          answer: 1,
          explain: "When one wheel goes forward and the other goes backward, the robot spins around its centre."
        }
      },
      {
        id: 3,
        title: "Controlling Robots from a Phone",
        summary: "Use an ESP32 web server to drive your robot from any browser.",
        goals: ["Explain client and server", "Know what an IP address is", "Send commands with buttons on a web page"],
        keys: ["phone", "web", "webpage", "web server", "ip", "ip address", "app control", "browser", "client", "server", "http"],
        lesson: [
          { type: "p", text: "An ESP32 can host a tiny web page. When you press a button on your phone, the phone sends a request over WiFi, and the ESP32 turns that request into a motor command." },
          { type: "ul", items: [
            "Client: the phone or laptop that asks for something.",
            "Server: the ESP32 that answers and does the action.",
            "IP address: the robot's address on your home network, like 192.168.1.50.",
            "Each button can point to a link, like /forward or /left."
          ]}
        ],
        activity: {
          title: "Button panel",
          steps: [
            "Connect your ESP32 to WiFi and print its IP address to the Serial Monitor.",
            "Make a web page with Forward, Back, Left and Right buttons.",
            "Open the IP address on your phone and test each button."
          ]
        },
        quiz: {
          question: "In this project, what is the phone?",
          options: ["The server", "The client", "The motor driver", "The battery"],
          answer: 1,
          explain: "The phone asks for actions (the client), and the ESP32 responds (the server)."
        }
      },
      {
        id: 4,
        title: "Drone Basics and ESP Drones",
        summary: "How quadcopters fly, and how a small ESP drone is controlled safely.",
        goals: ["Explain how 4 rotors control flight", "Describe pitch, roll, yaw and throttle", "Follow drone safety rules"],
        keys: ["drone", "quadcopter", "propeller", "prop", "rotor", "throttle", "pitch", "roll", "yaw", "gyroscope", "imu", "flight", "fly", "esp drone"],
        lesson: [
          { type: "p", text: "A quadcopter has four rotors. Two spin clockwise and two spin counter-clockwise, which cancels out the spin so the drone stays steady." },
          { type: "ul", items: [
            "Throttle: speed up all rotors to climb.",
            "Pitch: tilt forward or back to move forward or back.",
            "Roll: tilt left or right to move sideways.",
            "Yaw: turn the spin balance to rotate on the spot.",
            "An IMU (gyroscope and accelerometer) senses tilt, and a control loop (PID) keeps the drone level."
          ]},
          { type: "tip", text: "Safety first: always fly in an open space, wear eye protection, keep fingers away from propellers, use propeller guards, and have an adult supervise. Check your local drone rules before flying outside." }
        ],
        activity: {
          title: "Virtual hover",
          steps: [
            "Draw a quadcopter with four rotors and arrows for spin direction.",
            "Label which rotors speed up for climb, pitch forward, roll left and yaw.",
            "Explain why two rotors must spin one way and two the other."
          ]
        },
        quiz: {
          question: "Which control makes a drone rise into the air?",
          options: ["Yaw", "Roll", "Throttle", "Pitch"],
          answer: 2,
          explain: "Throttle changes the speed of all rotors together, which lifts the drone."
        }
      },
      {
        id: 5,
        title: "Final Project: The Connected Robot",
        summary: "Combine everything you learned into one RC vehicle that sends data to a database.",
        goals: ["Plan a full robot system", "Connect control, motors and sensors", "Log results and present your project"],
        keys: ["final", "project", "capstone", "combine", "everything", "telemetry", "full", "complete", "end"],
        lesson: [
          { type: "p", text: "Your final project brings all four levels together: electronics from IRobo Quest, printed parts from IRoboCraft, software and databases from IRobolive, and wireless control from IRoboVerse." },
          { type: "ul", items: [
            "Plan: draw a block diagram of your system with inputs, outputs and data.",
            "Build: a vehicle or drone with at least one sensor and one remote control.",
            "Record: send readings like battery voltage or distance to a database.",
            "Present: show your robot, your database table, and one thing you would improve."
          ]}
        ],
        activity: {
          title: "Launch your project",
          steps: [
            "Write a one-page plan with a block diagram.",
            "Build and test one feature at a time: drive, sensor, then logging.",
            "Show your robot to a friend or family member and explain how it works."
          ]
        },
        quiz: {
          question: "Which idea does the final project combine?",
          options: ["Only drawing", "Electronics, mechanics, software and wireless control", "Only printing", "Only reading books"],
          answer: 1,
          explain: "The final project brings every level together into one connected robot."
        }
      }
    ]
  },
  {
    id: 5,
    slug: "vrobotech",
    name: "VRoboTech",
    color: "#14b8a6",
    icon: "⚙️",
    tagline: "Advanced robot technology: smarter sensors, autonomous navigation, vision and automation.",
    chapters: [
      {
        id: 1,
        title: "Robot Sensors in Depth",
        summary: "Measure distance, lines and motion so your robot knows what is around it.",
        goals: ["Use an ultrasonic distance sensor", "Read line-following sensors", "Explain what an IMU measures"],
        keys: ["sensor", "sensors", "ultrasonic", "distance", "hc-sr04", "line sensor", "imu", "accelerometer", "gyroscope", "measure"],
        lesson: [
          { type: "p", text: "A robot is only as smart as what it can sense. Different sensors answer different questions: how far is the wall, is there a line under me, which way am I tilting?" },
          { type: "ul", items: [
            "Ultrasonic sensor (HC-SR04): sends a sound pulse and times the echo. Distance = echo time × speed of sound ÷ 2.",
            "IR line sensor: a light and light detector pair. Dark lines absorb more light, so the reading changes.",
            "IMU (gyroscope + accelerometer): measures turning speed and tilt, useful for balance and drones.",
            "Sensors are noisy, so average several readings before trusting them."
          ]},
          { type: "code", code: `const int TRIG = 9;
const int ECHO = 10;

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  Serial.begin(9600);
}

long readDistanceCm() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);      // send a 10 microsecond pulse
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long us = pulseIn(ECHO, HIGH); // time for the echo to return
  return us / 58;                // about 58 microseconds per cm (round trip)
}

void loop() {
  Serial.println(readDistanceCm());
  delay(200);
}` }
        ],
        activity: {
          title: "Distance logger",
          steps: [
            "Upload the sketch above and open the Serial Monitor.",
            "Move a book toward the sensor and watch the numbers fall.",
            "Average the last five readings and print the average instead."
          ]
        },
        quiz: {
          question: "What does an ultrasonic sensor measure?",
          options: ["Colour", "Distance, using the time an echo takes to return", "Temperature", "Electric current"],
          answer: 1,
          explain: "It sends a sound pulse and times how long the echo takes, which gives the distance."
        }
      },
      {
        id: 2,
        title: "Autonomous Navigation",
        summary: "Make a robot drive itself: follow a line and avoid obstacles.",
        goals: ["Explain a control loop", "Build line following logic", "Use a simple P controller"],
        keys: ["autonomous", "navigation", "line following", "line follower", "obstacle", "avoid", "pid", "controller", "self driving", "drive itself", "control loop"],
        lesson: [
          { type: "p", text: "An autonomous robot senses, decides and acts many times every second. This cycle is called a control loop." },
          { type: "ul", items: [
            "Sense: read the sensors.",
            "Decide: compare the reading with what you want.",
            "Act: change the motors.",
            "P controller: steer harder when the error is bigger. Turn speed = Kp × error."
          ]},
          { type: "tip", text: "Start with a slow robot. Speed hides mistakes, and slow robots are easier to fix." }
        ],
        activity: {
          title: "Line follower",
          steps: [
            "Draw a black line on white paper or tape on the floor.",
            "If the left sensor sees the line, turn left. If the right one sees it, turn right.",
            "Tune the turning speed until the robot follows a curve without wobbling."
          ]
        },
        quiz: {
          question: "In a P controller, what makes the robot steer harder?",
          options: ["A smaller error", "A bigger error", "A dead battery", "A longer cable"],
          answer: 1,
          explain: "The further the robot is from the target, the stronger the correction."
        }
      },
      {
        id: 3,
        title: "Computer Vision Basics",
        summary: "Teach a robot to find colours and shapes in camera pictures.",
        goals: ["Explain what a pixel is", "Find a colour in an image", "Use a camera to make decisions"],
        keys: ["vision", "computer vision", "camera", "image", "pixel", "colour", "color detection", "opencv", "face", "shape", "object detection"],
        lesson: [
          { type: "p", text: "A camera image is a grid of pixels. Each pixel has red, green and blue values. Computer vision means writing rules that turn those numbers into decisions, like 'the ball is red and on the left'." },
          { type: "ul", items: [
            "Colour detection: keep only pixels that match a colour range, then find where they are.",
            "Object detection: use a trained model (like the one from Teachable Machine) to find things.",
            "Lighting changes colours, so test your rules in the room where the robot will work."
          ]},
          { type: "p", text: "OpenCV is a popular free library for Python that makes these steps easier." }
        ],
        activity: {
          title: "Find the red ball",
          steps: [
            "Use a webcam and a red object.",
            "Use OpenCV to keep only red pixels and draw a box around them.",
            "Print the box's x position and decide 'left', 'middle' or 'right'."
          ]
        },
        quiz: {
          question: "What is a pixel?",
          options: ["A type of motor", "One tiny dot in an image with colour values", "A kind of battery", "A wireless signal"],
          answer: 1,
          explain: "Images are made of pixels. Each pixel stores how much red, green and blue it has."
        }
      },
      {
        id: 4,
        title: "Robot Operating System (ROS)",
        summary: "Meet the software framework that real robots use to share information.",
        goals: ["Explain nodes, topics and messages", "Describe why robots use ROS", "Run a simple publisher idea"],
        keys: ["ros", "robot operating system", "node", "nodes", "topic", "topics", "message", "publisher", "subscriber", "middleware"],
        lesson: [
          { type: "p", text: "A big robot has many jobs running at once: reading cameras, planning paths, driving motors. ROS (Robot Operating System) lets each job run as a separate program called a node." },
          { type: "ul", items: [
            "Node: one small program with one job, like 'read the distance sensor'.",
            "Topic: a named channel, like /distance, where nodes publish and subscribe.",
            "Message: the data sent on a topic, like a distance value in centimetres.",
            "Publisher sends messages, subscriber receives them. Nodes never need to know about each other directly."
          ]},
          { type: "tip", text: "ROS 2 is the current version. It runs on Ubuntu Linux, and a Raspberry Pi or a simulator is a good place to try it." }
        ],
        activity: {
          title: "Draw a ROS graph",
          steps: [
            "Draw three boxes: 'camera', 'brain' and 'motors'.",
            "Draw arrows labelled with topic names, such as /image and /cmd_vel.",
            "Explain which node publishes and which subscribes on each arrow."
          ]
        },
        quiz: {
          question: "In ROS, what is a topic?",
          options: ["A robot's name", "A named channel where messages are shared", "A type of motor", "A battery setting"],
          answer: 1,
          explain: "Nodes publish messages to topics, and other nodes subscribe to them."
        }
      },
      {
        id: 5,
        title: "Automation and the Smart Factory",
        summary: "How factories use sensors, controllers and safety rules to make things automatically.",
        goals: ["Describe a PLC and its inputs and outputs", "Design a simple sequence", "Explain safety rules for machines"],
        keys: ["automation", "factory", "plc", "industrial", "sequence", "conveyor", "smart factory", "safety", "machine", "production"],
        lesson: [
          { type: "p", text: "Automation means a machine does a sequence of steps without a person pressing each button. Factories use a PLC (Programmable Logic Controller), a rugged computer that reads inputs like sensors and switches, and controls outputs like motors and valves." },
          { type: "ul", items: [
            "Sequence: a list of steps in order, such as 'start belt, wait for box, stop belt, push box'.",
            "Interlock: a rule that stops one machine if another is unsafe.",
            "Emergency stop: a big red button that cuts power to moving parts. Every machine needs one.",
            "Test one step at a time before you run the whole sequence."
          ]}
        ],
        activity: {
          title: "Mini conveyor sequence",
          steps: [
            "Write the steps for sorting coloured blocks: detect colour, move belt, push block into the right bin.",
            "Add one safety rule, such as 'stop the belt if the bin is full'.",
            "Act out the sequence with a friend and find one step that could go wrong."
          ]
        },
        quiz: {
          question: "What is an emergency stop for?",
          options: ["To speed up a machine", "To quickly cut power to moving parts in danger", "To save the battery", "To change colours"],
          answer: 1,
          explain: "Emergency stops protect people by cutting power to moving parts right away."
        }
      }
    ]
  },
  {
    id: 6,
    slug: "vrobovr",
    name: "VRoboVR",
    color: "#ec4899",
    icon: "🥽",
    tagline: "Build virtual worlds, control robots from VR and create digital twins.",
    chapters: [
      {
        id: 1,
        title: "What Are VR and AR?",
        summary: "Learn how virtual and augmented reality put you inside a digital world.",
        goals: ["Explain VR and AR", "Describe headset sensors", "Name the comfort rules for VR"],
        keys: ["vr", "virtual reality", "ar", "augmented reality", "headset", "mixed reality", "immersive", "xr", "reality"],
        lesson: [
          { type: "ul", items: [
            "Virtual reality (VR): you wear a headset that shows a computer-made world instead of your room.",
            "Augmented reality (AR): computer graphics are added on top of the real world, like a phone camera filter.",
            "Headsets track your head with an IMU and cameras, so the picture moves when you move.",
            "Two slightly different images, one for each eye, create depth."
          ]},
          { type: "tip", text: "Take a break every 20 minutes. Look at something 6 metres away for 20 seconds. Stop if you feel dizzy, and never run around in VR without a clear space." }
        ],
        activity: {
          title: "Compare VR and AR",
          steps: [
            "Pick three apps or games you know and decide if each is VR, AR or neither.",
            "Name one job each could do in a school or a robot lab.",
            "Write how a robot could use AR to show its planned path."
          ]
        },
        quiz: {
          question: "What is the difference between VR and AR?",
          options: ["VR adds graphics to the real world, AR replaces it", "VR replaces the view with a virtual world, AR adds graphics to the real world", "They are the same", "AR needs a headset and VR does not"],
          answer: 1,
          explain: "VR replaces what you see with a virtual world. AR keeps the real world and adds to it."
        }
      },
      {
        id: 2,
        title: "Building 3D Worlds",
        summary: "Place objects in a 3D scene using coordinates and build your first virtual room.",
        goals: ["Understand x, y and z coordinates", "Add and move 3D objects", "Explain how a game engine works"],
        keys: ["3d world", "3d scene", "unity", "game engine", "coordinates", "x y z", "object", "scene", "virtual room", "3d"],
        lesson: [
          { type: "p", text: "A 3D world is built from objects placed at positions. Each position has three numbers: x (left and right), y (up and down) and z (forward and back)." },
          { type: "ul", items: [
            "A game engine like Unity runs your scene, physics and graphics.",
            "A GameObject is anything in the scene: a cube, a light, a camera.",
            "The Transform component stores its position, rotation and scale.",
            "Unity Personal is free for learning and small projects."
          ]},
          { type: "tip", text: "Save your project often and give objects clear names like RobotBody or RedBall." }
        ],
        activity: {
          title: "My first virtual room",
          steps: [
            "Create a Plane for the floor and a Cube for a table.",
            "Move the cube using its Transform position values.",
            "Add a Sphere and place it on the table so it does not fall through."
          ]
        },
        quiz: {
          question: "In a 3D scene, what does the z coordinate control?",
          options: ["Left and right", "Up and down", "Forward and back", "Colour"],
          answer: 2,
          explain: "x is left and right, y is up and down, and z is forward and back."
        }
      },
      {
        id: 3,
        title: "Scripting Interactions",
        summary: "Use code to move objects when a player presses keys or touches things.",
        goals: ["Write a script attached to an object", "Read keyboard input", "Use Update() and Time.deltaTime"],
        keys: ["script", "scripting", "c#", "csharp", "update", "input", "keyboard", "interaction", "move object", "player", "controller"],
        lesson: [
          { type: "p", text: "Scripts give objects behaviour. In Unity you write C# scripts and attach them to GameObjects. The Update() function runs every frame." },
          { type: "code", code: `using UnityEngine;

public class Mover : MonoBehaviour
{
    public float speed = 2f;

    void Update()
    {
        float h = Input.GetAxis("Horizontal");   // left/right arrow keys
        transform.Translate(new Vector3(h, 0, 0) * speed * Time.deltaTime);
    }
}` },
          { type: "p", text: "Time.deltaTime makes movement the same speed on fast and slow computers." }
        ],
        activity: {
          title: "Drive the robot in VR",
          steps: [
            "Attach the Mover script to a cube.",
            "Press Play and move the cube with the arrow keys.",
            "Add a second input for forward and back using 'Vertical' and try jumping with the space bar."
          ]
        },
        quiz: {
          question: "Why do we multiply movement by Time.deltaTime?",
          options: ["To change the colour", "So movement speed stays the same on different computers", "To make the object invisible", "To save memory"],
          answer: 1,
          explain: "Frames run at different speeds on different computers. deltaTime keeps the movement consistent."
        }
      },
      {
        id: 4,
        title: "Controlling a Real Robot from VR",
        summary: "Send commands from a virtual controller to a real robot, and see its data in VR.",
        goals: ["Explain a digital twin", "Send commands over WiFi", "Show sensor data in a virtual scene"],
        keys: ["digital twin", "twin", "control robot", "telemetry", "wifi", "send command", "real robot", "vr control", "remote", "esp32"],
        lesson: [
          { type: "p", text: "A digital twin is a virtual copy of a real robot. Commands from the VR world go to the real robot, and the robot's sensor readings come back to update the copy." },
          { type: "ul", items: [
            "Commands: a button in VR sends 'forward' over WiFi to an ESP32 on the robot (the same idea as Level 4, Chapter 3).",
            "Telemetry: the robot sends back readings like distance or battery level.",
            "Latency: there is always a small delay, so design controls that still work with a short lag.",
            "Safety: give the real robot a stop command that works even if the VR app freezes."
          ]}
        ],
        activity: {
          title: "Digital twin panel",
          steps: [
            "Draw a VR panel with a Forward button and a distance display.",
            "Write the message your VR button will send, for example 'F' or 'forward'.",
            "Plan what the robot does if no message arrives for two seconds."
          ]
        },
        quiz: {
          question: "What is a digital twin?",
          options: ["Two identical robots in one room", "A virtual copy of a real robot that stays in sync with it", "A type of battery", "A VR headset brand"],
          answer: 1,
          explain: "A digital twin is a virtual model linked to a real object, sharing its commands and data."
        }
      },
      {
        id: 5,
        title: "Final Project: The VR Robot Lab",
        summary: "Combine all six levels into a VR lab that controls and monitors a real robot.",
        goals: ["Plan a full VR and robot system", "Connect a virtual scene to real hardware", "Present your project with a demo and a database log"],
        keys: ["vr final", "final project", "vr project", "capstone", "vr lab", "combine", "everything", "all levels", "complete", "finish"],
        lesson: [
          { type: "p", text: "Your capstone brings everything together: circuits and sensors (Quest), printed parts (Craft), code and databases (Live), wireless control (Verse), smart sensing and automation (Tech), and a virtual world with a digital twin (VR)." },
          { type: "ul", items: [
            "Plan: draw the system with the real robot, the VR scene, the database and the network.",
            "Build: a virtual room that shows the robot's position and its latest sensor readings.",
            "Log: store each reading and command in a database so you can replay the session.",
            "Present: demonstrate the robot and the VR twin, then explain one safety feature and one improvement."
          ]}
        ],
        activity: {
          title: "Launch the VR Robot Lab",
          steps: [
            "Write a one-page plan with a block diagram of all parts.",
            "Build one feature at a time: sensor in VR, then control, then logging.",
            "Invite a friend to try the VR twin and record their feedback."
          ]
        },
        quiz: {
          question: "Which of these does the VR Robot Lab capstone bring together?",
          options: ["Only drawing", "Only VR games", "Electronics, code, databases, wireless control, automation and virtual worlds", "Only 3D printing"],
          answer: 2,
          explain: "The capstone combines skills from all six levels into one connected project."
        }
      }
    ]
  }
];
