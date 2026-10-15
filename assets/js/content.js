// Course structure for Learn Coding by Blueline Studio.
// Each level has 5 chapters. Each chapter has 10 lessons, which live in
// assets/js/lessons/levelN.js, followed by an activity and a quiz here.
// "keys" are words the built-in assistant uses to find the right chapter.

window.LEVELS = [
  {
    "id": 1,
    "slug": "irobo-quest",
    "name": "IRobo Quest",
    "color": "#22c55e",
    "icon": "🤖",
    "tagline": "Start your robot journey with Arduino, motors, displays and AI.",
    "chapters": [
      {
        "id": 1,
        "title": "Meet the Arduino",
        "summary": "Learn what a microcontroller is and get your first program running.",
        "goals": [
          "Name the main parts of an Arduino board",
          "Install the Arduino IDE",
          "Upload a program"
        ],
        "keys": [
          "arduino",
          "board",
          "install",
          "ide",
          "microcontroller",
          "setup",
          "uno"
        ],
        "activity": {
          "title": "Say hello with the built-in LED",
          "steps": [
            "Open File → Examples → 01.Basics → Blink.",
            "Select your board and port under Tools.",
            "Click Upload (the arrow button). The little LED on the board should blink."
          ]
        },
        "quiz": {
          "question": "Which function runs only once when the Arduino starts?",
          "options": [
            "loop()",
            "setup()",
            "start()",
            "main()"
          ],
          "answer": 1,
          "explain": "setup() runs once. loop() then repeats forever."
        }
      },
      {
        "id": 2,
        "title": "Blinking and Buttons",
        "summary": "Control an LED and read a button, the two basic robot skills.",
        "goals": [
          "Set a pin as OUTPUT or INPUT",
          "Turn an LED on and off",
          "Read a push button"
        ],
        "keys": [
          "led",
          "blink",
          "button",
          "switch",
          "pinmode",
          "digital",
          "input",
          "output",
          "resistor"
        ],
        "activity": {
          "title": "Button-controlled light",
          "steps": [
            "Wire an LED (with resistor) to pin 8 and a button between pin 2 and GND.",
            "Set pin 2 with pinMode(2, INPUT_PULLUP).",
            "In loop(), read it with digitalRead(2) and turn the LED on when it returns LOW."
          ]
        },
        "quiz": {
          "question": "Why do we add a resistor to an LED?",
          "options": [
            "To make it brighter",
            "To limit the current and protect the LED",
            "To change its colour",
            "To make it blink by itself"
          ],
          "answer": 1,
          "explain": "The resistor limits current so the LED does not burn out."
        }
      },
      {
        "id": 3,
        "title": "Motors and Servos",
        "summary": "Make things move with DC motors, motor drivers and servo motors.",
        "goals": [
          "Explain why a motor needs a driver",
          "Know the difference between DC motors and servos",
          "Control a servo angle"
        ],
        "keys": [
          "motor",
          "servo",
          "dc motor",
          "driver",
          "l298n",
          "angle",
          "spin",
          "wheel",
          "move"
        ],
        "activity": {
          "title": "Sweep the servo",
          "steps": [
            "Upload the servo code above and watch the arm swing.",
            "Change the delay so it moves slower or faster.",
            "Add a for loop so the servo sweeps smoothly from 0 to 180 degrees."
          ]
        },
        "quiz": {
          "question": "Which motor is best when you need to set an exact angle?",
          "options": [
            "A DC motor",
            "A servo motor",
            "A fan",
            "A buzzer"
          ],
          "answer": 1,
          "explain": "Servos move to a set angle and hold it, so they are perfect for precise positions."
        }
      },
      {
        "id": 4,
        "title": "The 7-Segment Display",
        "summary": "Show numbers 0 to 9 by lighting up the right segments.",
        "goals": [
          "Name the segments a to g",
          "Understand common cathode displays",
          "Show digits with code"
        ],
        "keys": [
          "7 segment",
          "seven segment",
          "segment",
          "display",
          "number",
          "digit",
          "count",
          "counter"
        ],
        "activity": {
          "title": "Countdown timer",
          "steps": [
            "Upload the code above and watch it count 0 to 9.",
            "Change the loop so it counts down from 9 to 0.",
            "Add a button that resets the count to 0."
          ]
        },
        "quiz": {
          "question": "Which segments do you light up to show the digit 1?",
          "options": [
            "a and d",
            "b and c",
            "e and f",
            "all of them"
          ],
          "answer": 1,
          "explain": "The digit 1 uses the two right-hand segments, b and c."
        }
      },
      {
        "id": 5,
        "title": "Teach Your Robot with Teachable Machine",
        "summary": "Train a simple AI model in your browser and use its results.",
        "goals": [
          "Create a Teachable Machine project",
          "Train a model with example pictures",
          "Understand what a class is"
        ],
        "keys": [
          "teachable",
          "machine",
          "ai",
          "model",
          "train",
          "image",
          "camera",
          "classify",
          "machine learning"
        ],
        "activity": {
          "title": "Robot card sorter",
          "steps": [
            "Train a model with two classes, for example 'Left' and 'Right' hand signs.",
            "Test it in the Preview panel and see the confidence scores.",
            "Plan what your robot should do for each class (turn left, turn right)."
          ]
        },
        "quiz": {
          "question": "What is a 'class' in Teachable Machine?",
          "options": [
            "A school lesson",
            "A group of examples that share a label",
            "A type of motor",
            "A wifi password"
          ],
          "answer": 1,
          "explain": "A class is a label, like 'Cat' or 'Dog', with example pictures that belong to it."
        }
      }
    ]
  },
  {
    "id": 2,
    "slug": "irobocraft",
    "name": "IRoboCraft",
    "color": "#f97316",
    "icon": "🛠️",
    "tagline": "Design and print your own parts, then build real mechanical systems.",
    "chapters": [
      {
        "id": 1,
        "title": "Introduction to 3D Printing",
        "summary": "How a 3D printer builds objects one thin layer at a time.",
        "goals": [
          "Explain layer-by-layer printing",
          "Name the main printer settings",
          "Choose a filament"
        ],
        "keys": [
          "3d print",
          "3d printer",
          "print",
          "printer",
          "filament",
          "layer",
          "pla",
          "nozzle",
          "infill"
        ],
        "activity": {
          "title": "Print a test cube",
          "steps": [
            "Download a 20 mm calibration cube from a free library, or make a simple one.",
            "Slice it in the slicer app (Cura or PrusaSlicer) and preview the layers.",
            "Print it and check: are the walls straight and the top flat?"
          ]
        },
        "quiz": {
          "question": "What does 'layer height' control?",
          "options": [
            "The weight of the part",
            "The thickness of each printed layer",
            "The colour",
            "The speed of the motor"
          ],
          "answer": 1,
          "explain": "Layer height is how thick each layer of plastic is. Thinner layers look smoother."
        }
      },
      {
        "id": 2,
        "title": "Designing Parts with CAD",
        "summary": "Use free 3D design tools to draw the parts your robot needs.",
        "goals": [
          "Create a basic 3D shape",
          "Use measurements and dimensions",
          "Add clearance for moving parts"
        ],
        "keys": [
          "cad",
          "design",
          "tinkercad",
          "fusion",
          "model",
          "3d design",
          "dimension",
          "clearance",
          "tolerance",
          "sketch"
        ],
        "activity": {
          "title": "Design a bolt holder",
          "steps": [
            "Open Tinkercad and drag out a block for the base.",
            "Add a cylinder and set it to Hole so it cuts a 3.3 mm hole.",
            "Export the design as an STL file, ready for the slicer."
          ]
        },
        "quiz": {
          "question": "Why do we leave a little extra space (clearance) around moving parts?",
          "options": [
            "To save plastic only",
            "So parts fit and move without getting stuck",
            "To make them heavier",
            "Printers need empty space"
          ],
          "answer": 1,
          "explain": "Printed parts are never exactly the size you designed, so clearance lets them slide together."
        }
      },
      {
        "id": 3,
        "title": "Gears and Gear Ratios",
        "summary": "Use gears to trade speed for power in your robots.",
        "goals": [
          "Count teeth on gears",
          "Calculate a gear ratio",
          "Know speed and torque trade-off"
        ],
        "keys": [
          "gear",
          "gears",
          "ratio",
          "teeth",
          "tooth",
          "torque",
          "speed",
          "mesh"
        ],
        "activity": {
          "title": "Gearbox challenge",
          "steps": [
            "Print two gears with 20 and 40 teeth (or draw them in CAD).",
            "Spin the small one by hand and count how many turns the big one makes.",
            "Calculate the ratio and check it against your count."
          ]
        },
        "quiz": {
          "question": "A 10-tooth gear drives a 30-tooth gear. What is the ratio?",
          "options": [
            "1 to 3",
            "3 to 1",
            "10 to 30 turns",
            "It cannot be calculated"
          ],
          "answer": 0,
          "explain": "The driven gear has 3 times the teeth, so the ratio is 30 / 10 = 3. The output turns 3 times slower, with 3 times the torque."
        }
      },
      {
        "id": 4,
        "title": "Levers, Pulleys and Wheels",
        "summary": "Simple machines that make work easier for your robot.",
        "goals": [
          "Describe a lever and its fulcrum",
          "Explain how pulleys lift loads",
          "Know how wheels and axles help movement"
        ],
        "keys": [
          "lever",
          "pulley",
          "wheel",
          "axle",
          "simple machine",
          "fulcrum",
          "belt",
          "mechanical advantage",
          "crane"
        ],
        "activity": {
          "title": "Build a lever arm",
          "steps": [
            "Put a pencil under a ruler (the fulcrum) and balance a small weight at one end.",
            "Move the fulcrum closer to the weight and feel how much harder it is to lift.",
            "Write down which setup felt easiest and why."
          ]
        },
        "quiz": {
          "question": "What is the fulcrum of a lever?",
          "options": [
            "The end you push",
            "The point the lever turns around",
            "The weight",
            "The handle"
          ],
          "answer": 1,
          "explain": "The fulcrum is the pivot point the lever rotates around."
        }
      },
      {
        "id": 5,
        "title": "Build and Test a Printed Robot",
        "summary": "Put printed parts, gears and wheels together into a working chassis.",
        "goals": [
          "Plan a chassis from parts",
          "Assemble and test moving joints",
          "Fix a design after testing"
        ],
        "keys": [
          "chassis",
          "robot",
          "build",
          "assemble",
          "frame",
          "test",
          "arm",
          "bracket",
          "project"
        ],
        "activity": {
          "title": "Printed robot arm",
          "steps": [
            "Print a base, two arm links and a gripper (use a free arm design from a library).",
            "Assemble with bolts and nuts, leaving clearance in the joints.",
            "Test the arm by moving it slowly, then record what needs changing."
          ]
        },
        "quiz": {
          "question": "What is the best first step after a print does not fit?",
          "options": [
            "Throw it away",
            "Measure it, adjust the design and print again",
            "Glue it no matter what",
            "Print the same file again without changes"
          ],
          "answer": 1,
          "explain": "Measure what is wrong, change the design (often the clearance), and test again."
        }
      }
    ]
  },
  {
    "id": 3,
    "slug": "irobolive",
    "name": "IRobolive",
    "color": "#3b82f6",
    "icon": "💻",
    "tagline": "Write software, store data in databases and bring sensors to life.",
    "chapters": [
      {
        "id": 1,
        "title": "Programming Basics with Python",
        "summary": "Variables, conditions and loops: the building blocks of every program.",
        "goals": [
          "Store values in variables",
          "Make decisions with if",
          "Repeat actions with loops"
        ],
        "keys": [
          "python",
          "variable",
          "variables",
          "if",
          "loop",
          "for",
          "while",
          "condition",
          "programming",
          "code",
          "coding",
          "basics"
        ],
        "activity": {
          "title": "Robot status message",
          "steps": [
            "Create variables for your robot's name, speed and battery level.",
            "Print a warning if the battery is below 20.",
            "Use a for loop to print the speed five times, going up by 10 each time."
          ]
        },
        "quiz": {
          "question": "What does a loop do?",
          "options": [
            "Stores a number",
            "Repeats code",
            "Draws a picture",
            "Connects to wifi"
          ],
          "answer": 1,
          "explain": "A loop repeats a block of code as many times as you need."
        }
      },
      {
        "id": 2,
        "title": "Functions and Your First App",
        "summary": "Group code into reusable functions and build a small interactive app.",
        "goals": [
          "Write a function with parameters",
          "Return a result",
          "Build a tiny interactive program"
        ],
        "keys": [
          "function",
          "functions",
          "def",
          "return",
          "parameter",
          "app",
          "reuse",
          "interactive",
          "input"
        ],
        "activity": {
          "title": "Temperature app",
          "steps": [
            "Write a function that converts Celsius to Fahrenheit (F = C × 9/5 + 32).",
            "Use input() to ask for a temperature and print the result.",
            "Make the app repeat until the user types 'quit'."
          ]
        },
        "quiz": {
          "question": "What does the keyword 'return' do in a function?",
          "options": [
            "Restarts the program",
            "Sends a result back to the caller",
            "Deletes the function",
            "Prints the function name"
          ],
          "answer": 1,
          "explain": "return sends a value back to wherever the function was called."
        }
      },
      {
        "id": 3,
        "title": "What is a Database?",
        "summary": "Store information in tables so it is organised and easy to find.",
        "goals": [
          "Describe tables, rows and columns",
          "Pick a primary key",
          "Explain why databases beat plain text files"
        ],
        "keys": [
          "database",
          "databases",
          "table",
          "row",
          "column",
          "primary key",
          "record",
          "data",
          "store",
          "storage"
        ],
        "activity": {
          "title": "Design a robot table",
          "steps": [
            "Draw a table called 'robots' with columns for id, name, color and wheels.",
            "Fill in three rows for three robots you know.",
            "Decide which column should be the primary key and explain why."
          ]
        },
        "quiz": {
          "question": "In a database table, what is a row?",
          "options": [
            "One field",
            "One record",
            "The table name",
            "A password"
          ],
          "answer": 1,
          "explain": "A row is one record, such as one robot or one test result."
        }
      },
      {
        "id": 4,
        "title": "SQL: Talking to a Database",
        "summary": "Use SQL commands to create, add, search and update data.",
        "goals": [
          "Write SELECT, INSERT and UPDATE",
          "Filter with WHERE",
          "Use SQLite from Python"
        ],
        "keys": [
          "sql",
          "select",
          "insert",
          "update",
          "delete",
          "where",
          "query",
          "sqlite",
          "create table"
        ],
        "activity": {
          "title": "High score board",
          "steps": [
            "Run the code above and check that Ava's score was saved.",
            "Insert two more players with different scores.",
            "Write a SELECT that shows only players with more than 50 points, sorted by points."
          ]
        },
        "quiz": {
          "question": "Which SQL command adds a new row to a table?",
          "options": [
            "SELECT",
            "INSERT",
            "WHERE",
            "DELETE"
          ],
          "answer": 1,
          "explain": "INSERT adds a new row. SELECT reads, WHERE filters, and DELETE removes."
        }
      },
      {
        "id": 5,
        "title": "Sensors and Live Data",
        "summary": "Send sensor readings from your Arduino into a database.",
        "goals": [
          "Send data from Arduino over Serial",
          "Read it in Python",
          "Log readings into a database"
        ],
        "keys": [
          "sensor",
          "sensors",
          "serial",
          "log",
          "logging",
          "live",
          "dashboard",
          "temperature",
          "distance",
          "ultrasonic",
          "pyserial",
          "database",
          "save data"
        ],
        "activity": {
          "title": "Log your sensor",
          "steps": [
            "Upload the sensor sketch and open the Serial Monitor to see readings.",
            "Use the pyserial library in Python to read each line.",
            "Insert each reading into a 'readings' table with a timestamp."
          ]
        },
        "quiz": {
          "question": "What does Serial.println() do on an Arduino?",
          "options": [
            "Turns on a motor",
            "Prints a value over USB",
            "Deletes a file",
            "Connects to the internet"
          ],
          "answer": 1,
          "explain": "Serial.println() sends a value over the USB serial connection so a computer can read it."
        }
      }
    ]
  },
  {
    "id": 4,
    "slug": "iroboverse",
    "name": "IRoboVerse",
    "color": "#a855f7",
    "icon": "🌌",
    "tagline": "Combine electronics, mechanics and software into RC vehicles and drones.",
    "chapters": [
      {
        "id": 1,
        "title": "Wireless Control Basics",
        "summary": "How remotes talk to robots using radio, infrared and WiFi.",
        "goals": [
          "Compare IR, Bluetooth, RF and WiFi",
          "Explain what a receiver does",
          "Choose a control method for a project"
        ],
        "keys": [
          "wireless",
          "wifi",
          "bluetooth",
          "radio",
          "rf",
          "infrared",
          "ir",
          "remote",
          "receiver",
          "transmitter",
          "esp32",
          "esp8266",
          "esp"
        ],
        "activity": {
          "title": "Choose the right remote",
          "steps": [
            "List three robots you would like to build.",
            "For each one, pick IR, Bluetooth, RF or WiFi and explain why.",
            "Share your choices with a friend and compare."
          ]
        },
        "quiz": {
          "question": "Which wireless method does NOT need a line of sight?",
          "options": [
            "Infrared",
            "Bluetooth or radio (RF)",
            "A laser pointer",
            "A TV remote"
          ],
          "answer": 1,
          "explain": "Radio and Bluetooth can pass through walls, while infrared needs a clear line between remote and receiver."
        }
      },
      {
        "id": 2,
        "title": "Building an RC Car",
        "summary": "Combine motors, a driver, a battery and a receiver into a car you can drive.",
        "goals": [
          "Name the parts of an RC car",
          "Explain differential drive",
          "Wire a motor driver to a controller"
        ],
        "keys": [
          "rc",
          "rc car",
          "car",
          "vehicle",
          "steering",
          "chassis",
          "differential",
          "drive",
          "battery",
          "remote car"
        ],
        "activity": {
          "title": "Drive test",
          "steps": [
            "Mount two motors to a chassis and connect them through the motor driver.",
            "Write a function for forward(), backward(), left() and right().",
            "Drive a square on the floor and measure how close you get."
          ]
        },
        "quiz": {
          "question": "How does a differential drive robot turn on the spot?",
          "options": [
            "Both motors spin forward",
            "The motors spin in opposite directions",
            "It needs a servo",
            "It cannot turn"
          ],
          "answer": 1,
          "explain": "When one wheel goes forward and the other goes backward, the robot spins around its centre."
        }
      },
      {
        "id": 3,
        "title": "Controlling Robots from a Phone",
        "summary": "Use an ESP32 web server to drive your robot from any browser.",
        "goals": [
          "Explain client and server",
          "Know what an IP address is",
          "Send commands with buttons on a web page"
        ],
        "keys": [
          "phone",
          "web",
          "webpage",
          "web server",
          "ip",
          "ip address",
          "app control",
          "browser",
          "client",
          "server",
          "http"
        ],
        "activity": {
          "title": "Button panel",
          "steps": [
            "Connect your ESP32 to WiFi and print its IP address to the Serial Monitor.",
            "Make a web page with Forward, Back, Left and Right buttons.",
            "Open the IP address on your phone and test each button."
          ]
        },
        "quiz": {
          "question": "In this project, what is the phone?",
          "options": [
            "The server",
            "The client",
            "The motor driver",
            "The battery"
          ],
          "answer": 1,
          "explain": "The phone asks for actions (the client), and the ESP32 responds (the server)."
        }
      },
      {
        "id": 4,
        "title": "Drone Basics and ESP Drones",
        "summary": "How quadcopters fly, and how a small ESP drone is controlled safely.",
        "goals": [
          "Explain how 4 rotors control flight",
          "Describe pitch, roll, yaw and throttle",
          "Follow drone safety rules"
        ],
        "keys": [
          "drone",
          "quadcopter",
          "propeller",
          "prop",
          "rotor",
          "throttle",
          "pitch",
          "roll",
          "yaw",
          "gyroscope",
          "imu",
          "flight",
          "fly",
          "esp drone"
        ],
        "activity": {
          "title": "Virtual hover",
          "steps": [
            "Draw a quadcopter with four rotors and arrows for spin direction.",
            "Label which rotors speed up for climb, pitch forward, roll left and yaw.",
            "Explain why two rotors must spin one way and two the other."
          ]
        },
        "quiz": {
          "question": "Which control makes a drone rise into the air?",
          "options": [
            "Yaw",
            "Roll",
            "Throttle",
            "Pitch"
          ],
          "answer": 2,
          "explain": "Throttle changes the speed of all rotors together, which lifts the drone."
        }
      },
      {
        "id": 5,
        "title": "Final Project: The Connected Robot",
        "summary": "Combine everything you learned into one RC vehicle that sends data to a database.",
        "goals": [
          "Plan a full robot system",
          "Connect control, motors and sensors",
          "Log results and present your project"
        ],
        "keys": [
          "final",
          "project",
          "capstone",
          "combine",
          "everything",
          "telemetry",
          "full",
          "complete",
          "end"
        ],
        "activity": {
          "title": "Launch your project",
          "steps": [
            "Write a one-page plan with a block diagram.",
            "Build and test one feature at a time: drive, sensor, then logging.",
            "Show your robot to a friend or family member and explain how it works."
          ]
        },
        "quiz": {
          "question": "Which idea does the final project combine?",
          "options": [
            "Only drawing",
            "Electronics, mechanics, software and wireless control",
            "Only printing",
            "Only reading books"
          ],
          "answer": 1,
          "explain": "The final project brings every level together into one connected robot."
        }
      }
    ]
  },
  {
    "id": 5,
    "slug": "vrobotech",
    "name": "VRoboTech",
    "color": "#14b8a6",
    "icon": "⚙️",
    "tagline": "Advanced robot technology: smarter sensors, autonomous navigation, vision and automation.",
    "chapters": [
      {
        "id": 1,
        "title": "Robot Sensors in Depth",
        "summary": "Measure distance, lines and motion so your robot knows what is around it.",
        "goals": [
          "Use an ultrasonic distance sensor",
          "Read line-following sensors",
          "Explain what an IMU measures"
        ],
        "keys": [
          "sensor",
          "sensors",
          "ultrasonic",
          "distance",
          "hc-sr04",
          "line sensor",
          "imu",
          "accelerometer",
          "gyroscope",
          "measure"
        ],
        "activity": {
          "title": "Distance logger",
          "steps": [
            "Upload the sketch above and open the Serial Monitor.",
            "Move a book toward the sensor and watch the numbers fall.",
            "Average the last five readings and print the average instead."
          ]
        },
        "quiz": {
          "question": "What does an ultrasonic sensor measure?",
          "options": [
            "Colour",
            "Distance, using the time an echo takes to return",
            "Temperature",
            "Electric current"
          ],
          "answer": 1,
          "explain": "It sends a sound pulse and times how long the echo takes, which gives the distance."
        }
      },
      {
        "id": 2,
        "title": "Autonomous Navigation",
        "summary": "Make a robot drive itself: follow a line and avoid obstacles.",
        "goals": [
          "Explain a control loop",
          "Build line following logic",
          "Use a simple P controller"
        ],
        "keys": [
          "autonomous",
          "navigation",
          "line following",
          "line follower",
          "obstacle",
          "avoid",
          "pid",
          "controller",
          "self driving",
          "drive itself",
          "control loop"
        ],
        "activity": {
          "title": "Line follower",
          "steps": [
            "Draw a black line on white paper or tape on the floor.",
            "If the left sensor sees the line, turn left. If the right one sees it, turn right.",
            "Tune the turning speed until the robot follows a curve without wobbling."
          ]
        },
        "quiz": {
          "question": "In a P controller, what makes the robot steer harder?",
          "options": [
            "A smaller error",
            "A bigger error",
            "A dead battery",
            "A longer cable"
          ],
          "answer": 1,
          "explain": "The further the robot is from the target, the stronger the correction."
        }
      },
      {
        "id": 3,
        "title": "Computer Vision Basics",
        "summary": "Teach a robot to find colours and shapes in camera pictures.",
        "goals": [
          "Explain what a pixel is",
          "Find a colour in an image",
          "Use a camera to make decisions"
        ],
        "keys": [
          "vision",
          "computer vision",
          "camera",
          "image",
          "pixel",
          "colour",
          "color detection",
          "opencv",
          "face",
          "shape",
          "object detection"
        ],
        "activity": {
          "title": "Find the red ball",
          "steps": [
            "Use a webcam and a red object.",
            "Use OpenCV to keep only red pixels and draw a box around them.",
            "Print the box's x position and decide 'left', 'middle' or 'right'."
          ]
        },
        "quiz": {
          "question": "What is a pixel?",
          "options": [
            "A type of motor",
            "One tiny dot in an image with colour values",
            "A kind of battery",
            "A wireless signal"
          ],
          "answer": 1,
          "explain": "Images are made of pixels. Each pixel stores how much red, green and blue it has."
        }
      },
      {
        "id": 4,
        "title": "Robot Operating System (ROS)",
        "summary": "Meet the software framework that real robots use to share information.",
        "goals": [
          "Explain nodes, topics and messages",
          "Describe why robots use ROS",
          "Run a simple publisher idea"
        ],
        "keys": [
          "ros",
          "robot operating system",
          "node",
          "nodes",
          "topic",
          "topics",
          "message",
          "publisher",
          "subscriber",
          "middleware"
        ],
        "activity": {
          "title": "Draw a ROS graph",
          "steps": [
            "Draw three boxes: 'camera', 'brain' and 'motors'.",
            "Draw arrows labelled with topic names, such as /image and /cmd_vel.",
            "Explain which node publishes and which subscribes on each arrow."
          ]
        },
        "quiz": {
          "question": "In ROS, what is a topic?",
          "options": [
            "A robot's name",
            "A named channel where messages are shared",
            "A type of motor",
            "A battery setting"
          ],
          "answer": 1,
          "explain": "Nodes publish messages to topics, and other nodes subscribe to them."
        }
      },
      {
        "id": 5,
        "title": "Automation and the Smart Factory",
        "summary": "How factories use sensors, controllers and safety rules to make things automatically.",
        "goals": [
          "Describe a PLC and its inputs and outputs",
          "Design a simple sequence",
          "Explain safety rules for machines"
        ],
        "keys": [
          "automation",
          "factory",
          "plc",
          "industrial",
          "sequence",
          "conveyor",
          "smart factory",
          "safety",
          "machine",
          "production"
        ],
        "activity": {
          "title": "Mini conveyor sequence",
          "steps": [
            "Write the steps for sorting coloured blocks: detect colour, move belt, push block into the right bin.",
            "Add one safety rule, such as 'stop the belt if the bin is full'.",
            "Act out the sequence with a friend and find one step that could go wrong."
          ]
        },
        "quiz": {
          "question": "What is an emergency stop for?",
          "options": [
            "To speed up a machine",
            "To quickly cut power to moving parts in danger",
            "To save the battery",
            "To change colours"
          ],
          "answer": 1,
          "explain": "Emergency stops protect people by cutting power to moving parts right away."
        }
      }
    ]
  },
  {
    "id": 6,
    "slug": "vrobovr",
    "name": "VRoboVR",
    "color": "#ec4899",
    "icon": "🥽",
    "tagline": "Build virtual worlds, control robots from VR and create digital twins.",
    "chapters": [
      {
        "id": 1,
        "title": "What Are VR and AR?",
        "summary": "Learn how virtual and augmented reality put you inside a digital world.",
        "goals": [
          "Explain VR and AR",
          "Describe headset sensors",
          "Name the comfort rules for VR"
        ],
        "keys": [
          "vr",
          "virtual reality",
          "ar",
          "augmented reality",
          "headset",
          "mixed reality",
          "immersive",
          "xr",
          "reality"
        ],
        "activity": {
          "title": "Compare VR and AR",
          "steps": [
            "Pick three apps or games you know and decide if each is VR, AR or neither.",
            "Name one job each could do in a school or a robot lab.",
            "Write how a robot could use AR to show its planned path."
          ]
        },
        "quiz": {
          "question": "What is the difference between VR and AR?",
          "options": [
            "VR adds graphics to the real world, AR replaces it",
            "VR replaces the view with a virtual world, AR adds graphics to the real world",
            "They are the same",
            "AR needs a headset and VR does not"
          ],
          "answer": 1,
          "explain": "VR replaces what you see with a virtual world. AR keeps the real world and adds to it."
        }
      },
      {
        "id": 2,
        "title": "Building 3D Worlds",
        "summary": "Place objects in a 3D scene using coordinates and build your first virtual room.",
        "goals": [
          "Understand x, y and z coordinates",
          "Add and move 3D objects",
          "Explain how a game engine works"
        ],
        "keys": [
          "3d world",
          "3d scene",
          "unity",
          "game engine",
          "coordinates",
          "x y z",
          "object",
          "scene",
          "virtual room",
          "3d"
        ],
        "activity": {
          "title": "My first virtual room",
          "steps": [
            "Create a Plane for the floor and a Cube for a table.",
            "Move the cube using its Transform position values.",
            "Add a Sphere and place it on the table so it does not fall through."
          ]
        },
        "quiz": {
          "question": "In a 3D scene, what does the z coordinate control?",
          "options": [
            "Left and right",
            "Up and down",
            "Forward and back",
            "Colour"
          ],
          "answer": 2,
          "explain": "x is left and right, y is up and down, and z is forward and back."
        }
      },
      {
        "id": 3,
        "title": "Scripting Interactions",
        "summary": "Use code to move objects when a player presses keys or touches things.",
        "goals": [
          "Write a script attached to an object",
          "Read keyboard input",
          "Use Update() and Time.deltaTime"
        ],
        "keys": [
          "script",
          "scripting",
          "c#",
          "csharp",
          "update",
          "input",
          "keyboard",
          "interaction",
          "move object",
          "player",
          "controller"
        ],
        "activity": {
          "title": "Drive the robot in VR",
          "steps": [
            "Attach the Mover script to a cube.",
            "Press Play and move the cube with the arrow keys.",
            "Add a second input for forward and back using 'Vertical' and try jumping with the space bar."
          ]
        },
        "quiz": {
          "question": "Why do we multiply movement by Time.deltaTime?",
          "options": [
            "To change the colour",
            "So movement speed stays the same on different computers",
            "To make the object invisible",
            "To save memory"
          ],
          "answer": 1,
          "explain": "Frames run at different speeds on different computers. deltaTime keeps the movement consistent."
        }
      },
      {
        "id": 4,
        "title": "Controlling a Real Robot from VR",
        "summary": "Send commands from a virtual controller to a real robot, and see its data in VR.",
        "goals": [
          "Explain a digital twin",
          "Send commands over WiFi",
          "Show sensor data in a virtual scene"
        ],
        "keys": [
          "digital twin",
          "twin",
          "control robot",
          "telemetry",
          "wifi",
          "send command",
          "real robot",
          "vr control",
          "remote",
          "esp32"
        ],
        "activity": {
          "title": "Digital twin panel",
          "steps": [
            "Draw a VR panel with a Forward button and a distance display.",
            "Write the message your VR button will send, for example 'F' or 'forward'.",
            "Plan what the robot does if no message arrives for two seconds."
          ]
        },
        "quiz": {
          "question": "What is a digital twin?",
          "options": [
            "Two identical robots in one room",
            "A virtual copy of a real robot that stays in sync with it",
            "A type of battery",
            "A VR headset brand"
          ],
          "answer": 1,
          "explain": "A digital twin is a virtual model linked to a real object, sharing its commands and data."
        }
      },
      {
        "id": 5,
        "title": "Final Project: The VR Robot Lab",
        "summary": "Combine all six levels into a VR lab that controls and monitors a real robot.",
        "goals": [
          "Plan a full VR and robot system",
          "Connect a virtual scene to real hardware",
          "Present your project with a demo and a database log"
        ],
        "keys": [
          "vr final",
          "final project",
          "vr project",
          "capstone",
          "vr lab",
          "combine",
          "everything",
          "all levels",
          "complete",
          "finish"
        ],
        "activity": {
          "title": "Launch the VR Robot Lab",
          "steps": [
            "Write a one-page plan with a block diagram of all parts.",
            "Build one feature at a time: sensor in VR, then control, then logging.",
            "Invite a friend to try the VR twin and record their feedback."
          ]
        },
        "quiz": {
          "question": "Which of these does the VR Robot Lab capstone bring together?",
          "options": [
            "Only drawing",
            "Only VR games",
            "Electronics, code, databases, wireless control, automation and virtual worlds",
            "Only 3D printing"
          ],
          "answer": 2,
          "explain": "The capstone combines skills from all six levels into one connected project."
        }
      }
    ]
  }
];
