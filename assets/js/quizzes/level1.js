// Lesson questions for Level 1 (IRobo Quest). 10 questions per lesson.
// Key: "level.chapter.lesson". Each question: [question, correct answer, wrong, wrong, wrong]
(function () {
  window.LESSON_QUIZZES = window.LESSON_QUIZZES || {};
  var Q = window.LESSON_QUIZZES;

  // Chapter 1: Meet the Arduino
  Q["1.1.1"] = [
    ["What is a microcontroller?", "A tiny computer on one chip that runs a program", "A type of battery", "A board with no chips", "A kind of wireless signal"],
    ["What does a microcontroller do over and over?", "Runs one program again and again", "Charges the battery", "Prints a picture", "Stores photos"],
    ["Which of these is an input for an Arduino?", "A button", "An LED", "A motor", "A buzzer"],
    ["Which of these is an output for an Arduino?", "An LED", "A button", "A light sensor", "A switch"],
    ["Which device can contain a microcontroller?", "A microwave oven", "A wooden table", "A paper clip", "A glass window"],
    ["What is the job of a microcontroller's program?", "To tell the chip what to do", "To make the chip heavier", "To change the chip's colour", "To glue parts together"],
    ["A microcontroller reads inputs and...", "Controls outputs", "Stores only paper", "Makes sound by itself only", "Charges the wall plug"],
    ["Which is a good example of sensing?", "A robot reading distance with a sensor", "A robot painting itself", "A robot sleeping", "A robot cooking food"],
    ["Which word describes the chip that is the brain of a board?", "Microcontroller", "Resistor", "Capacitor", "Fuse"],
    ["Why is a microcontroller useful in a robot?", "It runs the program that controls the robot", "It holds the robot's paint", "It makes the robot heavier", "It stops the wheels from turning"]
  ];
  Q["1.1.2"] = [
    ["What does the USB port on an Arduino do?", "Uploads code and powers the board", "Only plays music", "Prints paper", "Connects to a car"],
    ["Which digital pins does an Arduino Uno have?", "0 to 13", "A0 to A5 only", "1 to 100", "Only 1 and 2"],
    ["What are the analog pins on an Arduino Uno?", "A0 to A5", "0 to 13", "5V and GND", "VIN and RESET"],
    ["What is a digital pin good for?", "Turning things on or off", "Reading a range of values", "Storing photos", "Charging batteries"],
    ["Which part connects to an external power supply?", "The power jack", "The reset button only", "The LED on pin 13", "The analog pins"],
    ["Which part is the brain of the board?", "The microcontroller chip", "The USB cable", "The power LED", "The header pins"],
    ["How many analog pins does the Uno have?", "Six", "Two", "Thirteen", "Fourteen"],
    ["What is the main use of analog pins?", "Reading changing values such as light level", "Only lighting LEDs", "Uploading code", "Connecting to Wi-Fi"],
    ["Which pins give power to parts?", "5V, 3.3V and GND", "Pins 0 to 13", "Pins A0 to A5", "The reset pin"],
    ["Why does the board have a USB port?", "So you can upload code from a computer", "So you can charge a phone", "So you can print labels", "So you can plug in a monitor"]
  ];
  Q["1.1.3"] = [
    ["What does GND mean?", "Ground, the return path for electricity", "Gate of new device", "General network data", "Green number display"],
    ["What voltage does the 5V pin give?", "5 volts", "3.3 volts", "12 volts", "9 volts"],
    ["Why do circuits need GND?", "Electricity needs a return path", "To make things louder", "To store data", "To change colours"],
    ["What should you never do with 5V and GND?", "Connect them directly together", "Connect them to a sensor", "Connect them to a switch", "Connect them through an LED and resistor"],
    ["Which pin powers some sensors that need less power?", "3.3V", "Pin 13", "A5", "VIN only"],
    ["What happens if you connect 5V directly to GND?", "A short circuit", "A working circuit", "A slow circuit", "A wireless circuit"],
    ["Where should you connect the GND wires?", "Together in one common ground", "To the USB cable only", "To the LED only", "To the reset button"],
    ["What does 5V mean?", "Five volts of electrical push", "Five amps of current", "Five ohms of resistance", "Five hertz of frequency"],
    ["Which is a common use of 5V?", "Powering many sensors and LEDs", "Heating a kettle", "Lighting a house", "Turning on a car"],
    ["What is a good habit before you power a circuit?", "Check your wiring for short circuits", "Shake the board", "Touch the wires with wet hands", "Pour water on the board"]
  ];
  Q["1.1.4"] = [
    ["What is the Arduino IDE?", "A free app to write code and upload it", "A game console", "A type of resistor", "A chip brand"],
    ["Where do you download the Arduino IDE from?", "arduino.cc", "A random website", "A paper book", "A shop in the mall"],
    ["Which example should you open to check the IDE?", "Blink", "Snake", "Chess", "Paint"],
    ["What might you need to install for your Arduino?", "Board support", "A new keyboard", "A printer driver", "A TV app"],
    ["Why keep the IDE up to date?", "For the best experience and fixes", "To make the board heavier", "To change the board colour", "It is not needed"],
    ["What does the IDE let you do?", "Write, check and upload code", "Only print documents", "Only play games", "Only edit photos"],
    ["Is the Arduino IDE free?", "Yes", "No, it costs a lot every year", "Only for schools", "Only for adults"],
    ["Which step comes first after installing the IDE?", "Open it and check the Blink example", "Cut the board in half", "Paint the case", "Throw the USB cable away"],
    ["What does the board setting in the Tools menu show?", "The type of Arduino you use", "A wooden shelf", "A chess board", "A tablet"],
    ["Which is a good first step when you start using the IDE?", "Open an example sketch", "Delete all files", "Turn off the computer", "Change the operating system"]
  ];
  Q["1.1.5"] = [
    ["What cable should you use to connect the Arduino?", "A USB cable that carries data", "A cable that only charges", "A charger without data wires", "A broken cable"],
    ["Where do you choose your board?", "Tools, then Board", "File, then Print", "Edit, then Paste", "View, then Zoom"],
    ["Where do you choose the port?", "Tools, then Port", "File, then Save", "Help, then About", "Sketch, then Verify"],
    ["What does a port name look like on Windows?", "COM3, for example", "/dev/null", "192.168.1.1", "USB-C only"],
    ["What should you try if the port does not appear?", "Unplug and plug back in, then check the cable", "Throw the board away", "Paint the cable", "Restart the printer"],
    ["Why does a charge-only cable fail?", "It cannot carry data to the computer", "It is too thick", "It is too short", "It is the wrong colour"],
    ["What appears on your computer when you plug the board in?", "A new port", "A new printer", "A new keyboard", "A new monitor"],
    ["What is a typical port name on a Mac?", "/dev/cu.usbmodem", "COM1 only", "LPT2", "Ethernet0"],
    ["What is the first thing to do when connecting?", "Plug in the board with USB", "Press reset forty times", "Connect the motor to 12V", "Cut the wires"],
    ["Why must you pick the right board and port?", "So the IDE uploads to the correct device", "So the paint dries", "So the screen gets brighter", "So the printer works"]
  ];
  Q["1.1.6"] = [
    ["What does setup() do in an Arduino sketch?", "Runs once when the board starts", "Runs forever", "Only runs when a button is pressed", "Runs after the power is cut"],
    ["What does loop() do?", "Runs again and again forever", "Runs once and stops", "Only runs at night", "Only prints a message"],
    ["Where do you prepare pins and settings?", "In setup()", "In loop() only", "Outside every function", "Inside a comment"],
    ["What is a sketch?", "An Arduino program", "A drawing on paper", "A type of battery", "A kind of resistor"],
    ["How many main functions does a sketch have?", "Two: setup() and loop()", "One: main()", "Three: start, run and stop", "Ten"],
    ["Which function would you use to set up a pin?", "setup()", "loop()", "delay()", "analogRead()"],
    ["What happens after setup() finishes?", "loop() starts and repeats", "The board turns off", "The code uploads again", "The sketch is deleted"],
    ["Which function behaves like the 'main behaviour'?", "loop()", "setup()", "delay()", "Serial.begin()"],
    ["Why must setup() come before loop() in your thinking?", "setup() runs first when the board starts", "loop() is faster", "setup() is only for printing", "loop() runs before power on"],
    ["Which words are the two main parts of a sketch?", "setup() and loop()", "upload() and print()", "start() and stop()", "digital() and analog()"]
  ];
  Q["1.1.7"] = [
    ["What does the Upload button do?", "Sends your sketch to the board", "Deletes the sketch", "Prints the sketch", "Changes the board"],
    ["What does the Serial Monitor show?", "Messages sent back from the board", "Pictures from a camera", "Music", "Wi-Fi passwords"],
    ["What starts the message channel?", "Serial.begin(9600)", "pinMode(13, OUTPUT)", "digitalWrite(13, HIGH)", "delay(1000)"],
    ["What does Serial.println() do?", "Prints a line in the Serial Monitor", "Turns on a motor", "Reads a button", "Stops the board"],
    ["What does the board do after an upload?", "It restarts and runs the new code", "It deletes its code", "It turns off for ever", "It ignores the code"],
    ["What number is a common speed for Serial.begin()?", "9600", "5V", "13", "1000 seconds"],
    ["Which button is the upload button?", "The right-arrow button", "The X button", "The save icon", "The settings wheel"],
    ["Where do you open the Serial Monitor?", "From the IDE's tools area", "In the board's drawer", "In the USB cable", "In the power jack"],
    ["What text does Serial.println(\"Hello, Robot!\") print?", "Hello, Robot!", "Hello Robot", "Robot Hello", "Nothing"],
    ["Why use the Serial Monitor?", "To see what your board is doing", "To change the board colour", "To make the board charge faster", "To delete old code"]
  ];
  Q["1.1.8"] = [
    ["Which pin is the built-in LED on most Uno boards?", "Pin 13", "Pin 0", "A5", "VIN"],
    ["What does pinMode(13, OUTPUT) do?", "Sets pin 13 to send signals", "Reads pin 13", "Turns the board off", "Connects to Wi-Fi"],
    ["How long does the built-in LED stay on in the Blink example?", "One second, then off for one second", "It never turns on", "It stays on forever", "Five minutes"],
    ["What does digitalWrite(13, HIGH) do?", "Turns the LED on", "Turns the LED off", "Reads a button", "Uploads code"],
    ["What does delay(1000) do?", "Waits one second", "Waits one minute", "Stops the board", "Changes the pin"],
    ["Why is Blink the first program most makers write?", "It proves the board and upload work", "It makes the board louder", "It teaches Wi-Fi", "It is the hardest program"],
    ["Which function is repeated in Blink?", "loop()", "setup() only", "Serial.end()", "analogRead()"],
    ["What do the two delays in Blink control?", "How fast the LED blinks", "The colour of the LED", "The power supply", "The board's name"],
    ["What happens if you change delay(1000) to delay(100)?", "The LED blinks faster", "The LED stops", "The board breaks", "The LED becomes a sensor"],
    ["Where is the built-in LED usually?", "On the board itself", "On the USB cable", "On the computer screen", "Under the desk"]
  ];
  Q["1.1.9"] = [
    ["What symbol starts a one-line comment in Arduino code?", "//", "##", "--", "**"],
    ["Who reads comments?", "People, not the computer", "Only the board", "Only the printer", "Only the USB cable"],
    ["What does the computer do with comments?", "Ignores them", "Runs them as code", "Uploads them", "Deletes them"],
    ["What symbols start and end a multi-line comment?", "/* and */", "<< and >>", "[[ and ]]", "{{ and }}"],
    ["Why are good names useful?", "They make code easier to read and fix", "They make the board faster", "They save power", "They change the colour"],
    ["Which name is clearest for a pin?", "LED_PIN", "x", "thing", "zzz"],
    ["What is a good way to indent code inside braces?", "Use two spaces", "Put every word on its own line", "Use no spaces at all", "Use a hundred spaces"],
    ["Why use const int LED_PIN = 13;?", "So you change the pin in one place", "So the pin becomes a motor", "So the board uploads faster", "So the LED turns on"],
    ["Which is a good comment?", "// wait half a second before the next blink", "// blah", "// ???", "No comment is ever useful"],
    ["What are good habits in code?", "Name things clearly and add comments", "Use random names", "Never add comments", "Write everything on one line"]
  ];
  Q["1.1.10"] = [
    ["What is the first thing to read when upload fails?", "The error text at the bottom of the IDE", "The price of the board", "The name of your teacher", "The weather"],
    ["What should you check if the port is not found?", "Cable and plug connections", "The printer", "The monitor brightness", "The keyboard layout"],
    ["What should you choose if upload fails with a wrong board?", "The correct board in Tools, then Board", "A different font", "A new colour", "The save button"],
    ["What does permission denied on Linux often need?", "Adding your user to the dialout group", "A new keyboard", "A new monitor", "A new IDE theme"],
    ["What should you do when you are stuck?", "Ask a grown-up or a maker space for help", "Give up and never try again", "Change the board to a toaster", "Turn the computer off forever"],
    ["Why must you upload again after changing code?", "The board does not keep your edits by itself", "The board loves uploads", "The IDE deletes changes", "The code updates itself"],
    ["Which is a sign of a wrong port?", "The IDE says it cannot find the port", "The LED is blue", "The board sings", "The code is too long"],
    ["What is a common fix when the board is not listed?", "Unplug, plug back in, and try another cable", "Solder a new board", "Paint the USB port", "Use a bigger screen"],
    ["Why read error messages carefully?", "They often tell you what is wrong", "They are always wrong", "They make the board faster", "They are only for printers"],
    ["What should you do if a fix does not work?", "Try one change at a time and note the result", "Change everything at once", "Ignore the problem", "Throw the board away"]
  ];

  // Chapter 2: Blinking and Buttons
  Q["1.2.1"] = [
    ["What does LED stand for?", "Light-emitting diode", "Long electric device", "Low energy display", "Light electric detector"],
    ["Which LED leg is positive?", "The long leg, called the anode", "The short leg, called the anode", "Both legs are the same", "The middle leg"],
    ["Which leg is negative?", "The short leg, called the cathode", "The long leg", "The top leg", "There is no negative leg"],
    ["What happens if you connect an LED backwards?", "It will not light up", "It becomes a motor", "It plays sound", "It charges the battery"],
    ["Which way does current flow through an LED?", "Only one direction", "Both directions equally", "Neither direction", "Only sideways"],
    ["Why is LED polarity important?", "The LED only works one way round", "The LED is heavy", "The LED has no legs", "The LED needs no power"],
    ["What makes an LED light up?", "Electricity flowing in the correct direction", "Sound waves", "Water", "Magnets only"],
    ["Which symbol describes a diode's direction?", "A triangle pointing to a line", "A circle", "A square", "A wave"],
    ["What is the anode?", "The positive leg of an LED", "The negative leg of an LED", "The LED's colour", "The resistor"],
    ["Which statement about an LED is true?", "It lights up in one direction of current", "It works in both directions equally", "It is always a motor", "It needs no power"]
  ];
  Q["1.2.2"] = [
    ["Why do LEDs need a resistor?", "To limit the current and protect the LED", "To make it blink by itself", "To change its colour", "To make it heavier"],
    ["What resistor is often used with a red LED on a 5V board?", "About 220 ohms", "1 ohm", "1 million ohms", "0 ohms"],
    ["Where should the resistor go in a simple LED circuit?", "In series with the LED", "In parallel with the power supply only", "Under the board", "Far away from the LED"],
    ["What happens if the resistance is bigger?", "Less current and a dimmer LED", "More current and a brighter LED", "The LED becomes a motor", "Nothing changes"],
    ["What does a resistor limit?", "Current", "Colour", "Time", "Weight"],
    ["How can you tell a resistor's value?", "From its colour bands or with a multimeter", "By tasting it", "By listening to it", "By weighing it"],
    ["What can happen to an LED with no resistor?", "It can burn out", "It becomes a sensor", "It charges the battery", "It makes music"],
    ["Why is 220 ohms a common choice?", "It is a safe value for many LEDs on 5V", "It is the only value that exists", "It makes LEDs glow green", "It is the highest value available"],
    ["What is the resistor's job in the circuit?", "To protect the LED from too much current", "To make the LED louder", "To connect the board to the computer", "To store data"],
    ["Which statement about resistors is true?", "They limit current", "They create electricity", "They store photos", "They upload code"]
  ];
  Q["1.2.3"] = [
    ["Which pin is used in the wiring example?", "Pin 8", "Pin 0", "A5", "The reset pin"],
    ["Where does the LED's short leg connect?", "To GND", "To 5V directly", "To the USB port", "To the reset button"],
    ["What is the order in the wiring example?", "Pin 8, resistor, LED, GND", "GND, LED, resistor, pin 8", "5V, button, GND", "Reset, LED, pin 2"],
    ["What should you do before powering the board?", "Double-check the wiring", "Paint the board", "Remove the LED", "Shake the board"],
    ["Can the resistor go on either side of the LED in a simple circuit?", "Yes, in a simple series circuit", "No, never", "Only if the LED is red", "Only on pin 13"],
    ["Which connection goes to ground?", "The LED's short leg", "The LED's long leg", "The USB cable", "The reset pin"],
    ["What does a wiring check help you avoid?", "Mistakes before powering up", "Shiny boards", "Bigger code", "Printing documents"],
    ["Which pin type is pin 8?", "Digital", "Analog", "Power", "USB"],
    ["What is a common wiring mistake?", "Connecting the LED backwards", "Using a coloured wire", "Using a short wire", "Using a breadboard"],
    ["Why use a digital pin for an LED?", "It can switch the LED on and off", "It reads a range of values", "It charges the board", "It uploads code"]
  ];
  Q["1.2.4"] = [
    ["What does digitalWrite(LED_PIN, HIGH) do?", "Turns the LED on", "Turns the LED off", "Reads the button", "Uploads code"],
    ["What does digitalWrite(LED_PIN, LOW) do?", "Turns the LED off", "Turns the LED on", "Changes the colour", "Restarts the board"],
    ["What does pinMode(LED_PIN, OUTPUT) do?", "Sets the pin to send signals out", "Reads the button", "Turns the board off", "Connects to Wi-Fi"],
    ["What is HIGH in Arduino code?", "About 5V, which turns the pin on", "0V, which turns the pin off", "A type of resistor", "A pin name"],
    ["What is LOW in Arduino code?", "0V, which turns the pin off", "5V, which turns the pin on", "A colour", "A kind of wire"],
    ["Where should pinMode go?", "In setup()", "In loop() only", "Outside all functions", "Inside a comment"],
    ["How often does loop() run?", "Again and again forever", "Only once", "Only when reset is pressed", "Once per week"],
    ["What does const int LED_PIN = 8; do?", "Saves the pin number in a named constant", "Turns the LED on", "Uploads the code", "Sets the colour"],
    ["Which function sets an output pin?", "pinMode", "digitalRead", "analogRead", "delay"],
    ["What does digitalWrite change?", "The voltage on a pin", "The name of the board", "The speed of the computer", "The font of the IDE"]
  ];
  Q["1.2.5"] = [
    ["What does delay(500) do?", "Pauses the program for half a second", "Turns the LED on for 500 seconds", "Changes the pin number", "Uploads the code"],
    ["What unit does delay() use?", "Milliseconds", "Metres", "Kilograms", "Volts"],
    ["How many milliseconds are in one second?", "1000", "100", "10", "1,000,000"],
    ["Why can delay() be a problem for robots?", "The board waits and cannot do other things", "It makes the board heavier", "It turns off the power", "It deletes the code"],
    ["What is the delay for 1 second?", "delay(1000)", "delay(1)", "delay(10)", "delay(100000)"],
    ["What is millis() useful for?", "Timing things without stopping the program", "Turning the LED off", "Uploading code", "Connecting to Wi-Fi"],
    ["If you call delay(2000), how long does the board wait?", "Two seconds", "Two minutes", "Two hours", "Two milliseconds"],
    ["What does a long delay in loop() do?", "Slows down everything else in the loop", "Speeds up the LED", "Changes the board's colour", "Stops the USB cable"],
    ["Which code blinks an LED?", "HIGH, delay, LOW, delay", "Serial.begin only", "analogRead only", "tone only"],
    ["Which change makes an LED blink faster?", "A smaller delay value", "A bigger delay value", "A bigger resistor", "A longer cable"]
  ];
  Q["1.2.6"] = [
    ["How many LEDs does the traffic light example use?", "Three", "One", "Five", "Ten"],
    ["Which colours are in the traffic light example?", "Red, yellow and green", "Blue, pink and white", "Only red", "Purple and orange"],
    ["Why give each light its own constant?", "So the code is easy to change", "So the LEDs get brighter", "So the board uploads faster", "So the LEDs make sound"],
    ["How long is the green light on in the example?", "3 seconds", "1 second", "10 seconds", "0 seconds"],
    ["Which light stays on for 1 second?", "Yellow", "Red", "Green", "None"],
    ["What function sets each LED as an output?", "pinMode", "analogWrite", "Serial.println", "map"],
    ["Which function is repeated to make the pattern?", "loop()", "setup() only", "digitalRead()", "tone()"],
    ["What does the pattern look like?", "Green, yellow, then red, repeating", "Red, red, red", "Blue, then nothing", "Random colours"],
    ["Which line turns the red LED off?", "digitalWrite(RED, LOW)", "digitalWrite(RED, HIGH)", "pinMode(RED, INPUT)", "delay(RED)"],
    ["What is a good way to test a pattern?", "Run it and watch each step", "Only read the code", "Delete the LEDs", "Change the board's name"]
  ];
  Q["1.2.7"] = [
    ["What is a push button?", "An input that connects two wires when pressed", "An output that makes sound", "A motor", "A battery"],
    ["What happens when you press a button?", "Two sides connect", "The board resets", "The LED explodes", "The USB disconnects"],
    ["What happens when you release a button?", "The two sides disconnect", "The board turns on", "The LED turns red", "The code uploads"],
    ["Why do buttons have four legs?", "They connect in pairs", "They are decoration", "They each hold a colour", "They power the board"],
    ["What is button bounce?", "Quick flickering of the signal when a button is pressed", "The button moving up", "A new sketch", "A battery problem"],
    ["How do programs deal with bounce?", "They filter it or wait a few milliseconds", "They ignore buttons", "They upload faster", "They turn off the LED"],
    ["Is a push button an input or an output?", "Input", "Output", "Power", "Ground"],
    ["Which part connects the two sides when pressed?", "The button's internal contacts", "The USB cable", "The power jack", "The resistor"],
    ["What do we use a button for in robots?", "Telling the robot to do something", "Charging the battery", "Heating the board", "Making the board blue"],
    ["Which is true about a pressed button?", "It makes a connection", "It breaks the board", "It stores data", "It is a sensor for temperature"]
  ];
  Q["1.2.8"] = [
    ["What is a floating input?", "A pin that can read random values when nothing holds it", "A pin that is always 5V", "A pin that is always GND", "A pin with a motor"],
    ["What does a pull-up resistor do?", "Holds the pin HIGH until a button pulls it LOW", "Makes the pin always LOW", "Charges the battery", "Turns the LED on"],
    ["What does INPUT_PULLUP do?", "Turns on a built-in pull-up resistor", "Turns the pin into an output", "Stops the board", "Uploads code"],
    ["With INPUT_PULLUP, what does a released button read?", "HIGH", "LOW", "Random values", "Nothing"],
    ["With INPUT_PULLUP, what does a pressed button read?", "LOW", "HIGH", "5V always", "Analog values"],
    ["Do you need an external pull-up resistor with INPUT_PULLUP?", "No, the board has one built in", "Yes, always", "Only for LEDs", "Only for motors"],
    ["Which line sets pin 2 as a pull-up input?", "pinMode(2, INPUT_PULLUP);", "pinMode(2, OUTPUT);", "digitalWrite(2, HIGH);", "analogWrite(2, 255);"],
    ["Why use a pull-up?", "To keep a button input stable", "To make the LED brighter", "To speed up upload", "To change the board name"],
    ["What is the pin state when nothing is pressed?", "HIGH", "LOW", "Undefined and always zero", "Off"],
    ["What word means held up by a resistor to a supply?", "Pull-up", "Pull-down only", "Short", "Float"]
  ];
  Q["1.2.9"] = [
    ["What does digitalRead() return?", "HIGH or LOW", "A colour", "A word", "A picture"],
    ["Which line reads pin 2?", "digitalRead(2)", "digitalWrite(2)", "analogWrite(2)", "pinMode(2)"],
    ["What does a value of 1 mean in the example?", "Button released", "Button pressed", "Board broken", "Upload finished"],
    ["What does a value of 0 mean in the example?", "Button pressed", "Button released", "LED on", "Board off"],
    ["What does Serial.println(state) show?", "The button reading", "The LED colour", "The board name", "The sketch length"],
    ["Where should you call digitalRead()?", "In loop(), to check the button again and again", "Only in setup()", "Never", "Outside the board"],
    ["Why add delay(100) in the example?", "To avoid printing too fast", "To turn on the LED", "To charge the battery", "To upload faster"],
    ["Which type of pin does digitalRead use?", "Digital input pin", "Analog output pin", "Power pin", "USB pin"],
    ["What is the state variable's type in the example?", "int", "String", "Button", "LED"],
    ["What must pin 2 be set as before reading it?", "INPUT or INPUT_PULLUP", "OUTPUT", "Analog only", "Power"]
  ];
  Q["1.2.10"] = [
    ["What does the button mini project do?", "Turns the LED on while the button is pressed", "Turns the board off", "Uploads code", "Plays music"],
    ["Which pin is the button in the example?", "Pin 2", "Pin 8", "A5", "Reset"],
    ["Which pin is the LED in the example?", "Pin 8", "Pin 2", "A0", "5V"],
    ["What does the if check look for?", "LOW from the button", "HIGH from the LED", "A serial message", "A delay"],
    ["What happens when the button is released?", "The LED turns off", "The LED turns on", "The board restarts", "Nothing ever changes"],
    ["What is the challenge at the end of the lesson?", "Add a second button that turns the LED off", "Remove all wires", "Upload the code 100 times", "Change the board's name"],
    ["Why use if and else in the example?", "To choose between two actions", "To make the code longer for no reason", "To upload faster", "To make the LED explode"],
    ["Which pins need pinMode in setup()?", "Both the button and the LED", "Only the LED", "Only the button", "Neither"],
    ["What does digitalWrite(LED_PIN, HIGH) do in the example?", "Turns the LED on", "Turns the button on", "Reads the LED", "Resets the board"],
    ["What do you learn from this project?", "Reading inputs and controlling outputs together", "How to make paper", "How to paint boards", "How to print posters"]
  ];

  // Chapter 3: Motors and Servos
  Q["1.3.1"] = [
    ["What does a DC motor turn electrical energy into?", "Spinning motion", "Light only", "Sound only", "Heat only"],
    ["What does a servo motor move to?", "An exact angle", "Any random speed", "A colour", "A sound"],
    ["What does a stepper motor move in?", "Exact small steps", "Random jumps", "Only full circles", "Only colours"],
    ["What usually makes a DC motor spin faster?", "More voltage", "Less voltage", "A red wire", "A shorter cable"],
    ["What is inside a DC motor that is pushed around?", "A rotor", "A battery", "A screen", "A resistor"],
    ["Which motor cannot set an exact angle?", "DC motor", "Servo motor", "Stepper motor", "Servo in angle mode"],
    ["Which motor is best for steering a robot to an exact angle?", "Servo motor", "DC motor without a driver", "A fan", "A buzzer"],
    ["What does a DC motor need to spin?", "Electrical power", "Water", "Sound", "Paper"],
    ["What is a magnetic field used for in a DC motor?", "Pushing the rotor around", "Storing data", "Lighting an LED", "Uploading code"],
    ["Which motor type gives many small steps?", "Stepper motor", "DC motor", "LED", "Resistor"]
  ];
  Q["1.3.2"] = [
    ["Why do motors need a driver?", "They can need more current than a pin can safely give", "They need paint", "They need a screen", "They need Wi-Fi"],
    ["What can happen if you connect a motor straight to a pin?", "The board can be damaged", "The motor gets brighter", "The board uploads faster", "Nothing ever happens"],
    ["What does the motor driver do?", "Switches the bigger battery on and off using a small signal", "Stores code", "Prints labels", "Charges the board"],
    ["What is a small signal from the Arduino used for?", "To control the motor driver", "To heat the motor", "To print the motor", "To charge the battery"],
    ["Which part should the motor use for big current?", "Its own battery through the driver", "The Arduino pin only", "The USB cable only", "The reset pin"],
    ["What is an unsafe connection?", "A motor directly on an Arduino pin", "A motor with a driver", "A battery on a driver", "An LED with a resistor"],
    ["What is a common motor driver?", "L298N", "Arduino Uno", "Teachable Machine", "Tinkercad"],
    ["Why use a driver instead of a pin?", "To protect the board", "To make the motor bigger", "To change the motor's colour", "To make noise"],
    ["What does the driver connect to the motor?", "The motor's power and direction", "The USB port", "The screen", "The internet"],
    ["What is the best rule for motor power?", "Keep motor power separate from the Arduino and share GND", "Connect everything to one pin", "Never use batteries", "Use only the USB cable"]
  ];
  Q["1.3.3"] = [
    ["What is the L298N?", "A dual motor driver", "A servo", "An LED", "A microphone"],
    ["How many DC motors can an L298N control?", "Two", "One", "Ten", "Zero"],
    ["What do IN1 and IN2 set?", "The direction of the motor", "The colour of the LED", "The board name", "The USB speed"],
    ["Which input sets the speed?", "ENA", "GND", "USB", "5V"],
    ["ENA should be connected to which kind of pin?", "A PWM pin", "A USB pin", "A ground pin only", "The reset pin"],
    ["Which voltage is typical for the motor battery in the example?", "12V", "1.5V", "100V", "0V"],
    ["What must the Arduino GND connect to?", "The driver GND", "The motor's positive only", "The battery's positive only", "Nothing"],
    ["What do you connect to OUT1 and OUT2?", "The motor", "The USB cable", "The reset button", "The Arduino 5V"],
    ["Why must grounds connect?", "So signals have a common reference", "So the motor paints itself", "So the battery explodes", "So Wi-Fi works"],
    ["Which setting changes the motor's speed?", "The PWM value on ENA", "The colour of the driver", "The name of the board", "The size of the breadboard"]
  ];
  Q["1.3.4"] = [
    ["What does the forward() function do in the example?", "Sets IN1 HIGH and IN2 LOW", "Sets both LOW", "Turns the LED on", "Reads the button"],
    ["What does backward() do?", "Sets IN1 LOW and IN2 HIGH", "Sets both HIGH", "Turns the board off", "Prints a message"],
    ["What happens if both direction inputs are the same?", "The motor stops", "The motor spins faster", "The LED lights", "The board uploads"],
    ["How do you reverse a motor?", "Swap which direction input is HIGH", "Add more power", "Change the board", "Use a different LED"],
    ["Which function reverses the motor?", "backward()", "setup()", "delay()", "Serial.begin()"],
    ["What do the direction pins control?", "Which way the motor turns", "How bright the LED is", "The serial speed", "The board's colour"],
    ["If both IN1 and IN2 are LOW, what happens?", "The motor is stopped or coasting", "The motor is fast", "The motor uploads", "The LED flashes"],
    ["Why use functions like forward()?", "To keep the main code clear", "To make the board heavier", "To change the USB port", "To power the LED"],
    ["Which signal chooses direction?", "IN1 and IN2", "GND only", "5V only", "The reset pin"],
    ["What is a good test after writing forward()?", "Run it with the wheels off the ground", "Run it on a steep hill first", "Run it near water", "Run it at full speed without checks"]
  ];
  Q["1.3.5"] = [
    ["What is PWM?", "Pulse-width modulation: switching on and off very fast", "A type of battery", "A kind of LED", "A wireless signal"],
    ["What does analogWrite(pin, 0) do?", "Turns the output off", "Turns the output to full power", "Reads the pin", "Uploads code"],
    ["What does analogWrite(pin, 255) do?", "Gives full power", "Gives no power", "Turns the board off", "Prints 255"],
    ["What does analogWrite(pin, 128) give?", "About half power", "Full power", "No power", "A colour"],
    ["Which pins support PWM on an Uno?", "Pins marked with a tilde (~)", "Pins A0 to A5 only", "Only the USB pins", "Only the reset pin"],
    ["Why is PWM useful for motors?", "It controls speed by changing power", "It changes the wire colour", "It stores data", "It reads sensors"],
    ["What does a longer ON time in PWM mean?", "More power", "Less power", "A different colour", "No change"],
    ["What range does analogWrite use?", "0 to 255", "0 to 13", "0 to 1023", "1 to 10"],
    ["What is the difference between analogRead and analogWrite?", "Read gets values in; write sends a PWM output", "They are the same", "Read turns the LED on", "Write reads the button"],
    ["Which LED example would use PWM to dim?", "An LED on a PWM pin", "An LED on a digital pin only", "An LED with no resistor", "An LED on the USB"]
  ];
  Q["1.3.6"] = [
    ["How many wires does a servo have?", "Three", "One", "Two", "Five"],
    ["What is the signal wire colour often?", "Orange or yellow", "Black only", "Blue only", "White only"],
    ["What does the power wire usually have?", "Red", "Green", "Purple", "Clear"],
    ["What is the ground wire often?", "Brown or black", "Red", "Yellow", "Pink"],
    ["What range of angles does a typical servo move through?", "0 to 180 degrees", "0 to 1000 degrees", "0 to 10 degrees", "Only 90 degrees"],
    ["What does a servo do when it reaches an angle?", "It holds that position", "It spins forever", "It turns off", "It deletes its code"],
    ["Why might a servo jitter?", "It draws more current than the pin can give", "It has too many colours", "It has no wires", "It has a blue LED"],
    ["What should you use to power a jittery servo?", "A separate 5V supply", "A pin that is 13", "The reset pin", "The LED"],
    ["Which wire is the signal?", "The orange or yellow wire", "The red wire", "The brown wire", "The black wire"],
    ["Which kind of motor holds a set angle?", "Servo", "DC", "Fan", "Buzzer"]
  ];
  Q["1.3.7"] = [
    ["Which library controls servos in the example?", "Servo.h", "LED.h", "Serial.h", "Wire.h"],
    ["What does arm.attach(9) do?", "Connects the servo to pin 9", "Turns the servo off", "Reads the servo", "Uploads code"],
    ["What does arm.write(90) do?", "Moves the servo to 90 degrees", "Turns the LED on", "Reads a sensor", "Sets the baud rate"],
    ["Where should attach() go?", "In setup()", "In loop() only", "Outside the sketch", "In a comment"],
    ["What must you include at the top of the sketch?", "#include <Servo.h>", "#include <LED.h>", "#include <Button.h>", "Nothing"],
    ["What is the Servo object called in the example?", "arm", "motor", "LED_PIN", "Serial"],
    ["Which angle is the middle in the example?", "90 degrees", "0 degrees", "180 degrees", "45 degrees"],
    ["Which line moves the servo to 0 degrees?", "arm.write(0);", "arm.attach(0);", "digitalWrite(0);", "delay(0);"],
    ["What does a Servo object represent?", "One servo motor", "The whole Arduino", "The USB port", "A battery"],
    ["Why use a library?", "It handles the timing for you", "It makes the board louder", "It charges the battery", "It changes the colour"]
  ];
  Q["1.3.8"] = [
    ["What does the for loop do in the sweep example?", "Moves the angle step by step", "Turns the LED on", "Reads the button", "Uploads code"],
    ["What does angle++ do?", "Adds one to the angle", "Subtracts one", "Sets the angle to zero", "Stops the loop"],
    ["Why add delay(15) inside the sweep loop?", "To give the servo time to move", "To upload faster", "To light the LED", "To change the colour"],
    ["How does the second loop move the servo?", "From 180 down to 0", "From 0 to 90", "Randomly", "Not at all"],
    ["What is the start value of the first loop?", "0", "180", "90", "45"],
    ["What is the end value of the first loop?", "180", "0", "90", "360"],
    ["What happens if the delay is too small?", "The servo may not keep up", "The LED gets brighter", "The board breaks", "Nothing at all"],
    ["What does angle-- do in the second loop?", "Subtracts one from the angle", "Adds one", "Resets the servo", "Turns off the board"],
    ["Which loop repeats the sweep?", "loop() in the sketch", "setup() only", "delay() only", "attach() only"],
    ["Why sweep smoothly?", "To avoid jerky motion and stress on the parts", "To make the servo louder", "To charge the battery", "To make the board faster"]
  ];
  Q["1.3.9"] = [
    ["Where is the steering servo usually mounted in a robot car?", "On the front wheels", "On the USB port", "On the screen", "On the battery"],
    ["What is the straight-ahead angle often?", "About 90 degrees", "0 degrees", "180 degrees", "45 degrees"],
    ["About what angles are left and right for steering?", "About 60 and 120 degrees", "0 and 10 degrees", "170 and 180 degrees", "1 and 2 degrees"],
    ["What is the first step when setting steering angles?", "Find the straight-ahead angle", "Paint the wheels", "Cut the chassis", "Remove the battery"],
    ["Why test steering with the wheels off the ground?", "To check the motion safely", "To make the car fly", "To charge the battery", "To change the colour"],
    ["What does a steering servo change?", "The direction of the front wheels", "The speed of the back wheels only", "The LED colour", "The board name"],
    ["Which function would turn the car left?", "steering.write(60)", "steering.attach(60)", "digitalRead(60)", "delay(60)"],
    ["What happens if the straight angle is set wrongly?", "The car drifts to one side", "The car turns into a plane", "The car charges", "Nothing"],
    ["What helps you tune steering angles?", "Testing and small changes", "Guessing once", "Ignoring the car", "Painting the car"],
    ["What steering shape do robot cars often use?", "Two front wheels turned by a servo", "Four servos on each wheel", "No steering at all", "A rotating screen"]
  ];
  Q["1.3.10"] = [
    ["What is a gripper in the mini project?", "A servo with two fingers", "A motor with no wires", "A sensor", "A battery"],
    ["Which function opens the gripper in the example?", "openGripper() with arm.write(20)", "closeGripper() with arm.write(120)", "setup()", "loop()"],
    ["Which angle closes the gripper in the example?", "120 degrees", "20 degrees", "90 degrees", "180 degrees"],
    ["Why close the gripper slowly?", "So it does not crush the object", "So it charges faster", "So the LED lights", "So the board uploads"],
    ["What is the challenge in the lesson?", "Grab a light object", "Lift a car", "Print a house", "Cook a meal"],
    ["What type of motor is the gripper?", "Servo", "DC motor", "Stepper", "Fan"],
    ["Which pin does the gripper example use?", "Pin 9 with attach", "Pin 0 only", "The USB port", "The reset pin"],
    ["What is the purpose of a gripper?", "To hold or grab objects", "To make the robot louder", "To store data", "To light the board"],
    ["What is a good safety habit when testing a gripper?", "Keep fingers clear of moving parts", "Put your hand inside it", "Test it near water", "Test it with no supervision"],
    ["What would you change to make the gripper open wider?", "The open angle value", "The board name", "The LED pin", "The USB port"]
  ];

  // Chapter 4: The 7-Segment Display
  Q["1.4.1"] = [
    ["How many LEDs are in a 7-segment display?", "Seven, plus an optional decimal point", "Three", "Ten", "One"],
    ["What shape are the segments in?", "A figure-eight", "A circle", "A triangle", "A star"],
    ["What can a 7-segment display show?", "Digits 0 to 9", "Only letters", "Only colours", "Music"],
    ["Which device commonly uses this display?", "A microwave or calculator", "A bicycle", "A tree", "A pillow"],
    ["What is the optional extra light called?", "dp, the decimal point", "ac, the amplifier", "xy, the axis", "rs, the reset"],
    ["What do you light to show a digit?", "The right combination of segments", "Only the top segment", "Every segment for every digit", "No segments"],
    ["Which digit uses only two segments?", "1", "0", "8", "9"],
    ["Which digit uses all seven segments?", "8", "1", "7", "4"],
    ["How many segments are in the figure-eight?", "Seven", "Four", "Nine", "Twelve"],
    ["Why is a 7-segment display useful?", "It shows numbers clearly with simple LEDs", "It plays music", "It stores data", "It charges batteries"]
  ];
  Q["1.4.2"] = [
    ["What letter is the top segment?", "a", "g", "d", "f"],
    ["What letter is the middle segment?", "g", "a", "b", "c"],
    ["What letter is the bottom segment?", "d", "a", "f", "e"],
    ["Which segment is top right?", "b", "f", "e", "c"],
    ["Which segment is bottom left?", "e", "b", "c", "d"],
    ["Which segment is top left?", "f", "a", "g", "d"],
    ["Which segment is bottom right?", "c", "e", "f", "a"],
    ["How are the segments named?", "a to g, going clockwise from the top", "1 to 7 at random", "Red, blue and green", "Sun, moon and star"],
    ["Which letter is the middle bar?", "g", "a", "d", "dp"],
    ["Which letter is the decimal point?", "dp", "g", "a", "b"]
  ];
  Q["1.4.3"] = [
    ["What is a common cathode display?", "All minus legs share one common wire", "All plus legs share one wire", "It has no LEDs", "It is a motor"],
    ["What is a common anode display?", "All plus legs share one common wire", "All minus legs share one wire", "It has no LEDs", "It is a sensor"],
    ["For a common cathode display, what lights a segment?", "HIGH on the segment pin", "LOW on the segment pin", "A sound", "A motor"],
    ["For a common anode display, what lights a segment?", "LOW on the segment pin", "HIGH on the segment pin", "A sound", "A colour"],
    ["For a common cathode, where does the common pin go?", "To GND", "To 5V", "To the USB port", "To reset"],
    ["For a common anode, where does the common pin go?", "To 5V", "To GND", "To reset", "To the USB port"],
    ["What should you check before wiring a display?", "The datasheet or test with a battery", "The colour of the case", "The weight", "The brand name"],
    ["Which type uses HIGH to light a segment?", "Common cathode", "Common anode", "Neither", "Both"],
    ["Which type uses LOW to light a segment?", "Common anode", "Common cathode", "Neither", "Both"],
    ["Why does it matter which type you have?", "The code signals are reversed", "The paint colour changes", "The board uploads faster", "The battery lasts longer"]
  ];
  Q["1.4.4"] = [
    ["Why does each segment need a resistor?", "To protect it from too much current", "To make it louder", "To store data", "To change its colour"],
    ["What resistor value is typical for segments?", "About 220 ohms", "1 megohm", "0 ohms", "10 ohms only"],
    ["What can happen without resistors?", "Segments can burn out quickly", "The display plays a song", "The board gets faster", "Nothing"],
    ["What is a resistor pack?", "A set of resistors in one part", "A battery", "A motor", "A sensor"],
    ["Why check before adding resistors?", "Some modules already have them", "Resistors are always wrong", "Resistors make the display blue", "Resistors are not needed ever"],
    ["Which component limits current?", "A resistor", "An LED", "A button", "A servo"],
    ["What is the job of a resistor for each segment?", "Limit the current to that segment", "Store the digit", "Connect to Wi-Fi", "Play sound"],
    ["What is the safest approach?", "Add a resistor for each segment or use a pack", "Connect segments straight to 5V", "Skip resistors", "Use the reset pin"],
    ["Which statement about resistors is true?", "They protect LEDs", "They make LEDs louder", "They store code", "They upload code"],
    ["What happens if you connect segments straight to 5V with no resistor?", "Too much current can damage them", "They become motors", "They run for ever", "They turn into sensors"]
  ];
  Q["1.4.5"] = [
    ["What does the number 0 need in the example?", "Segments a, b, c, d, e and f on", "Only segment g on", "Only segment dp on", "Only segment a on"],
    ["Which two segments make the digit 1?", "b and c", "a and d", "e and f", "a and g"],
    ["Which segments are off for digit 0?", "Only g", "Only a", "Only b", "All of them"],
    ["What does digit 8 need?", "All seven segments on", "Only a and b", "Only dp", "None"],
    ["How many segments are on for digit 1?", "Two", "Five", "Seven", "Zero"],
    ["Which segments light up for digit 7?", "a, b and c", "e, f and g", "b, c and g", "d only"],
    ["What is one way to describe the digit patterns?", "Which segments are on", "The colour of the case", "The weight of the wires", "The brand of the LEDs"],
    ["What digit uses segments b, c, f and g?", "4", "1", "9", "0"],
    ["Which digit needs segments a, c, d, f and g?", "5", "1", "7", "8"],
    ["Why write digit patterns down first?", "So the code matches the display", "So the display is heavier", "So the board uploads faster", "So the LEDs change colour"]
  ];
  Q["1.4.6"] = [
    ["What is a byte in this lesson?", "Eight bits stored as one value", "A short sound", "A type of LED", "A wire colour"],
    ["What does bit 0 control?", "Segment a", "Segment g", "Segment dp", "The reset"],
    ["Which bit controls segment g?", "Bit 6", "Bit 0", "Bit 7 only", "Bit 1"],
    ["What does 0b mean before a number?", "A binary number", "A decimal number", "A hex number", "A word"],
    ["What number is 0b00000110?", "6 in decimal", "110 in decimal", "1 in decimal", "0 in decimal"],
    ["Which pattern is for digit 1?", "0b00000110", "0b00111111", "0b01111111", "0b01101111"],
    ["Which pattern is for digit 8?", "0b01111111", "0b00000110", "0b00111111", "0b01100110"],
    ["How many entries are in the DIGITS table?", "Ten", "Seven", "Eight", "Twelve"],
    ["What do we call the table of patterns?", "An array", "A menu", "A button", "A sensor"],
    ["What is the index of the digit 5 entry?", "5", "1", "4", "10"]
  ];
  Q["1.4.7"] = [
    ["What does >> do?", "Shifts bits to the right", "Shifts bits to the left", "Adds two numbers", "Prints a line"],
    ["What does (DIGITS[n] >> i) & 1 give?", "The value of bit i, which is 0 or 1", "The digit's colour", "The LED's brightness", "The serial speed"],
    ["What does the & operator do here?", "Keeps only the lowest bit", "Adds the bits", "Multiplies the bits", "Deletes the byte"],
    ["What is i in showDigit's loop?", "The segment number from 0 to 6", "The digit to show", "The baud rate", "The pin for the button"],
    ["What is segPins used for?", "Mapping each bit to a pin", "Setting the baud rate", "Reading the button", "Charging the battery"],
    ["Which segment does segPins[0] belong to?", "Segment a", "Segment g", "Segment dp", "Segment f"],
    ["Why use a loop in showDigit?", "To set all seven segments in turn", "To reset the board", "To upload code", "To read a sensor"],
    ["What is the output of digitalWrite here?", "Each segment pin set to HIGH or LOW", "A colour", "A sound", "A new board"],
    ["What does showDigit(n) need as input?", "A number from 0 to 9", "A word", "A colour", "A pin name"],
    ["What happens if n is 10 with this table?", "It is outside the table", "It shows digit 0", "It shows digit 1", "It turns off the board"]
  ];
  Q["1.4.8"] = [
    ["What does the setup() function do for the display?", "Sets each segment pin to OUTPUT", "Reads a button", "Turns on Wi-Fi", "Prints the code"],
    ["What does the loop do in the counting example?", "Counts from 0 to 9", "Counts from 9 to 100", "Plays a tune", "Reads a sensor"],
    ["How long is each number shown?", "800 milliseconds", "800 seconds", "8 seconds", "Zero time"],
    ["What loop type does the count use?", "A for loop", "A while loop only", "No loop", "A function only"],
    ["What happens after 9?", "The loop ends and starts again", "The display breaks", "The board uploads", "It counts to 100"],
    ["What is n in the count loop?", "The number shown", "The pin number", "The delay value", "The serial speed"],
    ["Why use delay(800)?", "To let you see each digit", "To make the board faster", "To charge the battery", "To skip digits"],
    ["Which function displays a digit?", "showDigit(n)", "digitalRead(n)", "analogWrite(n)", "Serial.println(n)"],
    ["Which digit is shown first?", "0", "9", "1", "8"],
    ["What do you see if the count is correct?", "0, 1, 2 up to 9", "Random letters", "Only the digit 8", "Nothing"]
  ];
  Q["1.4.9"] = [
    ["What change makes the count go down?", "Start at 9 and decrease n", "Start at 0 and increase n", "Add a motor", "Change the board"],
    ["What should a reset button do?", "Set the count back to 0", "Turn the board off", "Upload code", "Play a sound"],
    ["Why keep the counter outside the loop?", "So it remembers its value between presses", "So it runs faster", "So it prints the code", "So it charges"],
    ["Which code counts down?", "for (int n = 9; n >= 0; n--)", "for (int n = 0; n < 9; n++)", "delay(9)", "showDigit(9) only"],
    ["What does n-- do?", "Subtracts one", "Adds one", "Resets to zero", "Turns off"],
    ["What does a reset button need?", "A pin with pinMode INPUT_PULLUP", "A motor driver", "A servo", "A USB cable"],
    ["What is a good test for the reset?", "Press it and check the display shows 0", "Press it and count to 1000", "Unplug everything", "Turn the board around"],
    ["Where should the counter variable be declared?", "Outside loop(), so it keeps its value", "Inside loop() only", "In a comment", "In the USB port"],
    ["Why use a button to reset?", "To control the display yourself", "To make the board louder", "To charge the battery", "To change the colour"],
    ["What happens if the counter is inside loop() each time?", "It starts again at the same value each time", "It keeps going up for ever", "It deletes the display", "It uploads the code"]
  ];
  Q["1.4.10"] = [
    ["What is the electronic dice project?", "A random number from 1 to 6 shown on the display", "A card game", "A clock", "A radio"],
    ["What does random(1, 7) give?", "A number from 1 to 6", "A number from 1 to 7", "A colour", "A word"],
    ["Why use random(1, 7) and not random(0, 6)?", "The dice has no zero face", "It is faster", "It is louder", "It is brighter"],
    ["What does showDigit(roll) do?", "Shows the random digit", "Turns off the display", "Uploads code", "Reads a button"],
    ["What does randomSeed(analogRead(A0)) do?", "Makes the random numbers differ each time", "Turns the LED on", "Stops the board", "Changes the baud rate"],
    ["Where should randomSeed go?", "In setup()", "In loop() every time", "Outside the code", "In the reset pin"],
    ["Which pin is read for the seed in the tip?", "A0", "Pin 13", "A5 only", "The USB port"],
    ["What event could start a new roll?", "A button press", "A power cut", "A new colour", "A new board"],
    ["Why use a button for the dice?", "So each press gives a new roll", "So the board sings", "So the screen breaks", "So the LEDs change colour"],
    ["What does an unplugged analog pin give?", "Random-ish noise that helps the seed", "Always zero", "Always 5V", "The board name"]
  ];

  // Chapter 5: Teach Your Robot with Teachable Machine
  Q["1.5.1"] = [
    ["What is machine learning?", "Computers learn patterns from examples", "Computers follow only hand-written rules", "Computers fix hardware", "Computers print paper"],
    ["What does a model learn from?", "Examples", "Only colours", "Only sound", "Only the internet's weather"],
    ["What is a prediction?", "The model's guess about new data", "A rule you wrote by hand", "A type of battery", "A printed label"],
    ["Which device uses machine learning in the lesson's example?", "A phone recognising faces", "A table", "A cup", "A pencil"],
    ["What makes a model better?", "More good examples", "Less data", "A slower computer", "A smaller screen"],
    ["What is the difference between machine learning and fixed rules?", "The model learns patterns from examples", "Rules learn from examples", "Rules are always better", "They are identical"],
    ["What can a model do with new data?", "Make predictions", "Change the board's colour", "Upload itself", "Charge a battery"],
    ["Which is a benefit of learning from examples?", "It can handle patterns that are hard to write as rules", "It is always perfect", "It needs no data", "It uses no computer"],
    ["Which is an example of pattern learning?", "Recognising a cat in a picture", "Adding 2 plus 2", "Turning on a light", "Printing a word"],
    ["What do you need to start training?", "Labelled examples", "A blank page only", "A printer", "A pizza"]
  ];
  Q["1.5.2"] = [
    ["What is a label?", "The name of what an example shows", "A sticker on the board", "A type of motor", "A wire colour"],
    ["What label might a cat picture have?", "cat", "motor", "resistor", "USB"],
    ["What does a labelled example mean?", "The example has a name attached", "The example is blank", "The example is a sound", "The example is broken"],
    ["How many examples per class does the lesson recommend?", "About 30 to 100", "One", "Exactly 2", "A thousand"],
    ["Why do more good examples help?", "The model learns the real pattern better", "The board uploads faster", "The screen gets brighter", "The battery lasts longer"],
    ["What is a class in this context?", "A group of examples with the same label", "A school lesson", "A type of motor", "A cable"],
    ["What does supervised learning use?", "Labelled examples", "No examples", "Only random noise", "Only colours"],
    ["What should the labels be?", "Clear and consistent", "Random words", "Different for each example", "Secret"],
    ["What happens with wrong labels?", "The model learns the wrong thing", "The model becomes faster", "The model gets a new colour", "Nothing changes"],
    ["Why label examples carefully?", "Because the model learns from the labels", "Because labels are decorative", "Because labels change the battery", "Because labels upload code"]
  ];
  Q["1.5.3"] = [
    ["Where do you start Teachable Machine?", "teachablemachine.withgoogle.com", "A printed book", "A game console", "A paper map"],
    ["Which project type do we use?", "Image Project", "Video game", "Music project", "Map project"],
    ["Which model is the lesson's starting point?", "Standard image model", "A 3D printer", "A motor driver", "A servo"],
    ["What does the site need to use the webcam?", "Permission from you", "A new battery", "A printed key", "A USB stick"],
    ["Which browser is recommended in the lesson?", "Chrome", "A paper browser", "A printer app", "A calculator"],
    ["What is the first button to click?", "Get Started", "Delete", "Print", "Reset the board"],
    ["What does Teachable Machine run on?", "Your browser", "Only a paper book", "A microwave", "A toaster"],
    ["Is Teachable Machine free?", "Yes", "No, it costs a fortune", "Only for schools", "Only for adults"],
    ["Which type of project learns from pictures?", "Image Project", "Audio Project", "Pose Project only", "None"],
    ["Why do we allow webcam access?", "So the model can collect examples", "So the board can charge", "So the printer works", "So the monitor brightens"]
  ];
  Q["1.5.4"] = [
    ["What is a class in Teachable Machine?", "A label with a group of example pictures", "A school subject", "A motor", "A cable"],
    ["What are good class names?", "Short and clear, like Left, Right or Stop", "Names that are almost the same", "Random symbols", "Long sentences"],
    ["Why avoid names that sound similar?", "The model can mix them up", "They make the board heavier", "They use more battery", "They change the colour"],
    ["How many classes can you have?", "Two or more", "Exactly one", "Exactly ten", "None"],
    ["What is a background class for?", "To recognise when nothing is there", "To make the screen darker", "To store the code", "To charge the battery"],
    ["Which name pair is clearest?", "Left and Right", "Cat and Cats", "A and A2", "X and Y"],
    ["Where do you rename classes?", "In the class box on the project page", "In the battery", "In the USB port", "In the printer"],
    ["Why do class names matter for your robot code?", "Your code checks for those names", "They change the board's clock", "They turn on the motor", "They reset the USB"],
    ["What label might a stop sign be given?", "Stop", "Go", "Motor", "Cable"],
    ["What is a good number of classes for a first project?", "Two or three", "One hundred", "Zero", "Fifty"]
  ];
  Q["1.5.5"] = [
    ["How many images should you record per class?", "About 30 to 100", "Exactly one", "Exactly five", "Zero"],
    ["Why vary the angle?", "The model learns the real object from different views", "To make the image sharper", "To charge the battery", "To change the colour"],
    ["Why vary the distance?", "So the model works at different sizes", "So the board uploads faster", "So the screen is brighter", "So the battery lasts longer"],
    ["Why vary the light?", "So the model is not fooled by one lighting setup", "So the LEDs glow", "So the printer prints", "So the board starts"],
    ["Why vary the background?", "So the model learns the object, not the wall", "So the board is painted", "So the cable is longer", "So the code is shorter"],
    ["What should a background class contain?", "Pictures with nothing of interest", "The object only", "Only the label text", "Only sound"],
    ["What is a common mistake when collecting images?", "Taking every photo in the same place", "Using a webcam", "Adding labels", "Testing the model"],
    ["What does the recording step use?", "The webcam", "A printer", "A microphone only", "A servo"],
    ["What makes good training images?", "Clear, varied and labelled correctly", "Blurry and unlabelled", "All identical", "Hidden from the model"],
    ["How do you improve a weak model?", "Add more varied examples and train again", "Turn off the webcam", "Delete all classes", "Change the board"]
  ];
  Q["1.5.6"] = [
    ["What button starts training?", "Train Model", "Delete", "Print", "Export"],
    ["What must you do during training?", "Keep the tab open until it finishes", "Close the browser", "Unplug the computer", "Switch off the screen"],
    ["How long can training take?", "A minute or two", "A year", "One second only", "Never ends"],
    ["Where does training happen?", "On your computer", "On a faraway planet", "In the printer", "In the USB cable"],
    ["What do you do if the model is wrong?", "Add more examples and train again", "Give up forever", "Break the webcam", "Change the board"],
    ["What is training in plain words?", "The model learns from your examples", "The board is charged", "The code is uploaded", "The screen is cleaned"],
    ["When is training done?", "When the progress finishes", "When you sneeze", "When the battery is full", "When the lights go off"],
    ["Why not close the tab during training?", "It can stop the learning", "It makes the image sharper", "It charges the battery", "It changes the colour"],
    ["What does training use as its input?", "Your class examples", "Only the USB cable", "Only the printer", "Only the screen colour"],
    ["Can you train again after changing examples?", "Yes", "No, never", "Only once a year", "Only in school"]
  ];
  Q["1.5.7"] = [
    ["What does the Preview panel show?", "What the model thinks it sees, live", "A printed picture", "A map", "A calendar"],
    ["Why test with new objects?", "To check the model works on things it did not train on", "To make the training faster", "To change the label", "To charge the battery"],
    ["Why try different lighting?", "To see if the model still works", "To make the image darker", "To save battery", "To change the screen"],
    ["What should you note during testing?", "Which classes get mixed up", "The colour of the case", "The brand of the cable", "The room temperature"],
    ["What is the Preview panel connected to?", "The webcam", "The printer", "The servo", "The motor driver"],
    ["What do you do with each object in the preview?", "Hold it up and check the result", "Throw it away", "Paint it", "Cut it"],
    ["What is a common problem found in testing?", "Two classes are confused", "The board is too bright", "The USB is too long", "The tab is too blue"],
    ["Which is a good test habit?", "Test each class in several conditions", "Test once and stop", "Never test", "Test only in the dark"],
    ["What does a wrong result suggest?", "Add or improve examples", "The board is broken forever", "The computer is too fast", "The label is correct"],
    ["Why does testing matter before a robot acts?", "A wrong guess could make the robot do the wrong thing", "The robot needs paint", "The robot needs music", "The robot needs sleep"]
  ];
  Q["1.5.8"] = [
    ["What is a confidence score?", "How sure the model is about a class", "The price of the model", "The size of the image", "The speed of the webcam"],
    ["What range is a confidence score?", "0 to 1, or 0 to 100 percent", "1 to 10 only", "Any number at all", "Letters only"],
    ["What confidence does the example threshold use?", "0.8", "0.1", "0.99 always", "5"],
    ["What should a robot do if confidence is low?", "Be careful or stop", "Speed up", "Charge the battery", "Print a label"],
    ["What does a high score mean?", "The model is sure about that class", "The model is broken", "The image is dark", "The model is slow"],
    ["Why use a threshold?", "To avoid acting on unsure guesses", "To make the robot louder", "To change the colour", "To speed up the USB"],
    ["What does confidence > 0.8 check?", "The model is at least 80 percent sure", "The model is less than 80 percent", "The model is broken", "The model is blue"],
    ["What is a safe default when unsure?", "Stop the robot", "Drive fast", "Turn off the webcam", "Delete the code"],
    ["What could a low score be caused by?", "Poor lighting or few examples", "A high-quality image", "A perfect model", "A bright screen"],
    ["Why check scores while testing?", "To see how reliable the model is", "To change the board name", "To charge the cable", "To paint the robot"]
  ];
  Q["1.5.9"] = [
    ["What button exports the model?", "Export Model", "Train Model", "Delete", "Print"],
    ["What formats can you export to?", "TensorFlow.js or TensorFlow Lite", "Only Word files", "Only music", "Only photos"],
    ["What is TensorFlow Lite used for?", "Running models on small devices", "Writing essays", "Printing posters", "Charging batteries"],
    ["Why keep a copy of your training images?", "So you can train again later", "So the board is faster", "So the screen is brighter", "So the battery lasts"],
    ["How do many robots get results from a model?", "A computer sends results over Serial", "By painting the robot", "By reading a book", "By magic"],
    ["What does exporting do?", "Saves or shares the trained model", "Deletes the classes", "Turns off the webcam", "Changes the labels"],
    ["Which export is for a web page?", "TensorFlow.js", "TensorFlow Lite only", "Word", "PDF"],
    ["Why save the model link or files?", "To use it later without training again", "To make the board faster", "To delete the examples", "To make the screen red"],
    ["What is a good habit before exporting?", "Test the model first", "Export without testing", "Delete your examples", "Turn off the computer"],
    ["Who can run an exported model?", "Your code, on a computer or small board", "Only the printer", "Only a microwave", "Nobody"]
  ];
  Q["1.5.10"] = [
    ["What does the example code check?", "The class name the model reports", "The battery voltage", "The Wi-Fi name", "The servo angle only"],
    ["What does turnLeft() do if the label is Left?", "Turns the robot left", "Turns the robot right", "Stops the robot", "Uploads code"],
    ["What should happen if the label is Stop?", "Stop the motors", "Speed up", "Turn right", "Print a poem"],
    ["Why add a stop rule?", "So the robot stops when unsure", "So the robot runs faster", "So the battery charges", "So the LEDs blink"],
    ["Where does the label come from?", "The computer running the model sends it", "The battery", "The USB cable only", "The paper"],
    ["What is the link between AI and actions?", "The model's result decides what the robot does", "The model paints the robot", "The robot writes the model", "There is no link"],
    ["What is the challenge in this lesson?", "Use the model result to control a robot", "Print a poster", "Build a house", "Write an essay"],
    ["Which line checks if the label is Right?", "if (label == \"Right\") turnRight();", "if (label = Right)", "digitalRead(Right);", "Serial.begin(Right);"],
    ["What should the robot do with an unknown label?", "Stop or wait safely", "Speed up", "Turn on every motor", "Break"],
    ["Why is this project useful?", "It shows AI can control physical actions", "It makes paper", "It uses no code", "It charges phones"]
  ];
})();
