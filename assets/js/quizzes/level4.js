// Lesson questions for Level 4 (IRoboVerse). 10 questions per lesson.
// Key: "level.chapter.lesson". Each question: [question, correct answer, wrong, wrong, wrong]
(function () {
  window.LESSON_QUIZZES = window.LESSON_QUIZZES || {};
  var Q = window.LESSON_QUIZZES;

  // Chapter 1: Wireless Control Basics
  Q["4.1.1"] = [
    ["Why do robots need wireless control?", "A wire is limiting and wireless lets you control from a distance", "Wires make robots faster", "Wireless makes robots heavier", "Robots cannot use wires"],
    ["What can a robot do over a network that a wire may not allow?", "Talk to a database on your computer", "Print paper", "Paint itself", "Charge other robots"],
    ["What is a benefit of wireless control?", "You can drive from across the room", "It needs no batteries", "It is always faster", "It is always cheaper"],
    ["What is a disadvantage of a wire?", "It limits movement", "It makes noise", "It changes colour", "It needs no power"],
    ["Which kind of control lets you use a phone?", "Bluetooth or WiFi", "A paper map", "A drawing pencil", "A calculator only"],
    ["What does wireless mean?", "Without cables between the devices", "Without power", "Without a computer", "Without a body"],
    ["Why might a robot need a database connection?", "To save readings and commands", "To paint the robot", "To make music", "To cool the motor"],
    ["Which is a good reason to choose wireless?", "The robot must move freely", "The robot must never move", "The robot needs no control", "The robot is a poster"],
    ["Which is a risk of wireless control?", "Signals can be lost", "Wires can unplug", "Paint can dry", "Screens can crack"],
    ["What does a wireless link carry?", "Commands and data", "Paint", "Heat only", "Sand"]
  ];
  Q["4.1.2"] = [
    ["What does IR stand for in this lesson?", "Infrared", "Internal resistor", "Instant radio", "Input relay"],
    ["What kind of light does infrared use?", "Invisible light", "Visible rainbow light", "Sound", "Heat only"],
    ["What is a common everyday use of infrared?", "TV remotes", "Cooking pasta", "Printing books", "Filling tyres"],
    ["What does an IR remote need to work?", "A clear line of sight to the receiver", "A wall in between", "A wireless password", "A USB cable"],
    ["What is the usual range of IR?", "A few metres", "Many kilometres", "Across the world", "Zero"],
    ["What can disturb an IR signal?", "Bright sunlight", "Quiet rooms", "Blue paint", "Soft music"],
    ["Is IR cheap and simple?", "Yes", "No, it is very expensive", "No, it is very complicated", "Only for space rockets"],
    ["What does an IR receiver do?", "Picks up the infrared signal", "Makes sound", "Prints paper", "Stores power"],
    ["Which wireless method needs a line of sight?", "Infrared", "Bluetooth", "WiFi", "RF radio"],
    ["What happens if something blocks an IR beam?", "The signal may fail", "The signal gets louder", "The robot charges", "The beam changes colour"]
  ];
  Q["4.1.3"] = [
    ["What is Bluetooth?", "A short-range radio standard", "A long-range satellite system", "A type of motor", "A printer"],
    ["About how far does Bluetooth usually reach?", "About 10 metres", "About 10 kilometres", "About 10 centimetres only", "Across the country"],
    ["What is Bluetooth good for?", "Connecting phones to robots easily", "Lifting cars", "Printing labels", "Heating food"],
    ["How much power does Bluetooth use?", "Little", "A huge amount", "Infinite", "None at all"],
    ["Does Bluetooth work through some walls?", "Sometimes, and the range varies", "Never", "Always, forever", "Only through metal"],
    ["What kind of control suits a phone app?", "Bluetooth", "A paper map", "A calculator", "A wooden stick"],
    ["Which wireless method is short range?", "Bluetooth", "WiFi across a house", "Satellite", "Mobile phone networks"],
    ["Why is Bluetooth popular with beginners?", "It is easy to connect to phones", "It needs a big antenna", "It needs no devices", "It only works with cars"],
    ["What does Bluetooth connect?", "Devices close to each other", "Devices across the world", "Only printers", "Only lamps"],
    ["What should you check if Bluetooth drops?", "Distance and walls between devices", "The colour of the robot", "The name of the teacher", "The weight of the cable"]
  ];
  Q["4.1.4"] = [
    ["What is RF in this lesson?", "Radio control at around 2.4 GHz", "A kind of motor", "A type of LED", "A battery"],
    ["Why do RC cars use RF?", "The signal goes through walls and is hard to block", "It is invisible to the eye only", "It makes music", "It charges the car"],
    ["What does a transmitter do?", "Sends the commands", "Receives commands", "Stores data", "Prints labels"],
    ["What does a receiver do?", "Decodes commands and passes them on", "Sends commands", "Makes sound", "Charges the battery"],
    ["What must a transmitter and receiver do first?", "Be bound together", "Be painted the same colour", "Be connected by a printer", "Be heated"],
    ["What frequency is typical for RC radio in this lesson?", "About 2.4 GHz", "About 2.4 Hz", "About 240 kHz only", "About 2 metres"],
    ["Why are RC signals hard to block?", "They use radio waves that pass through many materials", "They are sound waves", "They are paint", "They are light only"],
    ["Which devices use RF in the lesson?", "RC cars and drones", "Phones only", "Books", "Lamps"],
    ["What does the receiver pass on?", "Commands to the motors or board", "Paint", "Battery power only", "Sound"],
    ["Which is true about RF control?", "It can work through walls", "It needs a line of sight only", "It is the same as IR", "It is a printer"]
  ];
  Q["4.1.5"] = [
    ["What does WiFi connect devices to?", "A home network", "A paper map", "A printer only", "A calculator"],
    ["What does a WiFi robot allow?", "Control from any phone or laptop on the same network", "Only local control", "No control", "Only painting"],
    ["What can a WiFi robot send to the internet?", "Data, such as sensor readings", "Paint", "Heat", "Sand"],
    ["Is WiFi long range inside a home?", "Yes", "No, only 1 cm", "No, only 1 mm", "Only outdoors"],
    ["What is a drawback of WiFi?", "It uses more power than Bluetooth", "It cannot connect anything", "It only works with paper", "It is always slow"],
    ["What do both phone and robot need for WiFi control?", "The same network", "The same colour", "The same battery", "The same screen"],
    ["Which device may host a web page for control?", "An ESP32", "A paper notebook", "A pencil", "A candle"],
    ["What does a WiFi robot need to get online?", "Network name and password", "A new colour", "A printer", "A camera only"],
    ["Which is better for controlling from a browser?", "WiFi", "IR", "Bluetooth only", "A paper map"],
    ["Why is WiFi more power hungry?", "It sends more data over longer range", "It is painted", "It is lighter", "It is a motor"]
  ];
  Q["4.1.6"] = [
    ["What makes the ESP32 useful for robots?", "It has WiFi and Bluetooth built in", "It is a motor", "It is a battery", "It is a printer"],
    ["Is the ESP32 expensive?", "No, it is low cost", "Yes, it costs a fortune", "It is free forever", "It costs a house"],
    ["What kind of code can the ESP32 run?", "Arduino-style code", "Only paper instructions", "Only pictures", "Only sound"],
    ["What can an ESP32 host?", "A web page", "A printed book", "A paint roller", "A cooking recipe"],
    ["What does the ESP32 have many of?", "Pins for motors and sensors", "Batteries", "Screens", "Paints"],
    ["What is the ESP32 described as?", "Small and powerful", "Huge and slow", "Heavy and metal", "Only a screen"],
    ["Which two wireless types does ESP32 have?", "WiFi and Bluetooth", "IR and RF", "Radio and sound", "Light and heat"],
    ["Why is ESP32 popular for drones?", "It is small, cheap and capable", "It is huge", "It is paper", "It is heavy"],
    ["What is one thing you can build with ESP32?", "A phone-controlled robot", "A paper plane", "A cake", "A bicycle"],
    ["Which name is the chip in this lesson?", "ESP32", "ESP-Paper", "ESP-Glue", "ESP-Music"]
  ];
  Q["4.1.7"] = [
    ["Which method suits a remote toy car?", "RF", "A paper map", "A calculator", "A printer"],
    ["Which method suits phone control in the same room?", "Bluetooth", "A satellite", "A paper note", "A microphone"],
    ["Which method suits web control from anywhere in the house?", "WiFi", "IR only", "A cable", "Paper"],
    ["Which method suits simple buttons on a box?", "IR", "WiFi only", "Satellite", "A microphone"],
    ["What should you consider when choosing?", "Range, power and control style", "The colour of the case", "The name of the robot", "The price of paint"],
    ["Why might you pick IR for a cheap project?", "It is simple and inexpensive", "It works through walls", "It has huge range", "It needs no line of sight"],
    ["Why pick Bluetooth for a phone app?", "Phones support it easily", "It has the longest range", "It needs no power", "It works through steel"],
    ["Why pick WiFi for a browser control?", "Any device on the network can connect", "It is the shortest range", "It needs a cable", "It needs a printer"],
    ["What is the goal of choosing a method?", "To match the job", "To make it heavier", "To use more paint", "To change colour"],
    ["Which combination could you use for one project?", "Bluetooth for setup and WiFi for control", "Paint and glue", "Only music", "Only a poster"]
  ];
  Q["4.1.8"] = [
    ["What is latency?", "The delay between a button press and the reaction", "A colour", "A battery size", "A sound"],
    ["Do wireless links add some delay?", "Yes, a small delay", "No, never", "Only with paint", "Only in winter"],
    ["What should controls be designed to handle?", "A short delay", "Perfect timing only", "No delay ever", "Instant reactions only"],
    ["Why avoid fast reactions that need perfect timing?", "A small delay could cause a mistake", "They make the robot louder", "They make the robot lighter", "They charge the battery"],
    ["What is a sensible design for a delay?", "Controls that still work with a small lag", "Controls that fail on lag", "Controls with no feedback", "Controls that freeze"],
    ["Where does latency come from?", "The wireless link and processing", "The paint", "The printer's colour", "The room light"],
    ["Does low latency matter for a slow car?", "Less, but it still matters for safety", "Never", "Only for drones", "Only for paper"],
    ["What helps you notice lag?", "Testing with a watch or a timer", "Ignoring it", "Turning the lights off", "Painting the robot"],
    ["What is a good response to high latency?", "Slow the robot down and design safer controls", "Shake the robot", "Remove the battery", "Paint the controller"],
    ["What is the best way to feel latency?", "Test by pressing and watching the response", "Read a book", "Listen to music", "Count stars"]
  ];
  Q["4.1.9"] = [
    ["What is a failsafe?", "A rule that stops the robot when something goes wrong", "A type of battery", "A colour", "A printer"],
    ["What should a robot do if it loses the signal?", "Stop", "Speed up", "Spin forever", "Print a poem"],
    ["How long does the example wait before stopping?", "1 second", "1 hour", "1 day", "Never"],
    ["What should a transmitter have?", "A big stop button", "A small hidden switch", "No buttons", "A loud horn"],
    ["When should you test failsafes?", "Before you drive", "Only after a crash", "Never", "During a race only"],
    ["What is the purpose of a stop button?", "To stop the robot quickly", "To start a song", "To change colour", "To charge"],
    ["What happens if a failsafe is missing?", "The robot may keep moving out of control", "The robot becomes lighter", "Nothing", "It turns blue"],
    ["Why is a failsafe important?", "It protects people and things", "It makes the robot faster", "It changes the colour", "It saves paint"],
    ["Which failsafe is in the example?", "Stop if no message arrives for 1 second", "Speed up if no message arrives", "Print a message only", "Turn off the screen"],
    ["What is a good safety habit?", "Keep the switch within reach", "Hide the switch", "Stand behind the robot", "Ignore the signal"]
  ];
  Q["4.1.10"] = [
    ["What is the mini project?", "Choose a wireless method for three robots", "Build a house", "Paint a wall", "Write a song"],
    ["How many robots should you list?", "Three", "Ten", "One", "Zero"],
    ["What should you explain for each choice?", "Why you picked IR, Bluetooth, RF or WiFi", "The colour of the robot", "The name of your pet", "The price"],
    ["How long should each explanation be?", "Two sentences", "Two books", "One word only", "Ten paragraphs"],
    ["What is the goal of the mini project?", "To practise matching wireless to a job", "To paint robots", "To charge robots", "To print robots"],
    ["Which method suits a robot that must work through walls?", "RF or WiFi", "IR only", "A paper map", "Sunlight"],
    ["Which method suits a short-range toy?", "Bluetooth or IR", "Satellite", "Sound", "Paper"],
    ["What is the best reason to choose a method?", "It matches range, power and control", "It has the nicest name", "It is the newest", "It is the loudest"],
    ["Why compare choices?", "To make a good decision", "To waste time", "To make the robot louder", "To change the battery"],
    ["What should you share with a friend?", "Your choices and reasons", "Your password", "Your battery", "Your paint"]
  ];

  // Chapter 2: Building an RC Car
  Q["4.2.1"] = [
    ["What does RC mean?", "Radio-controlled", "Robot calculator", "Rapid charge", "Red coil"],
    ["What does a person do with an RC car?", "Drives it with a remote", "Feeds it", "Paints it", "Charges it"],
    ["What parts does an RC car have?", "A chassis, motors, wheels, battery and receiver", "Only paint", "Only a screen", "Only a book"],
    ["What is a robot vehicle?", "A robot that moves on wheels or tracks", "A paper boat", "A cake", "A printer"],
    ["What does the receiver do in an RC car?", "Receives the remote's commands", "Makes music", "Charges the battery", "Prints labels"],
    ["What powers the car?", "A battery", "A piece of paper", "Sunlight only", "Water"],
    ["What makes the car move?", "Motors turning the wheels", "A paint brush", "A screen", "A label"],
    ["Who drives an RC car?", "A person with a remote", "The car alone", "A printer", "A tree"],
    ["Why is an RC car a good robot project?", "It combines electronics, mechanics and code", "It needs no parts", "It is only paint", "It is only a poster"],
    ["Which part connects the remote to the motors?", "The receiver and controller", "The chassis paint", "The label", "The wheel nut"]
  ];
  Q["4.2.2"] = [
    ["What holds everything together on a car?", "The chassis", "The paint", "The sticker", "The screen"],
    ["What drives the wheels?", "Drive motors", "Servos only", "LEDs", "Buttons"],
    ["What switches the motors on and off?", "The motor driver", "The chassis", "The wheel", "The battery label"],
    ["What is a power switch for?", "Turning the car on and off", "Making music", "Printing", "Painting"],
    ["What turns the front wheels?", "A steering servo", "A resistor", "A USB port", "A label"],
    ["Which part sends signals to the motor driver?", "The receiver or microcontroller", "The wheel", "The paint", "The chassis"],
    ["Why do parts need to be swappable?", "So you can upgrade and repair them", "So the car is heavier", "So the car is louder", "So the car is painted"],
    ["What is a microcontroller in the car?", "The brain that runs the program", "A motor", "A tyre", "A battery"],
    ["Which part is at the front of the car?", "The steering servo", "The power switch only", "The brain only", "The label"],
    ["What is the most important job of the chassis?", "Holding parts in place", "Making music", "Printing", "Charging"]
  ];
  Q["4.2.3"] = [
    ["What is differential drive?", "Two drive wheels, one on each side, driven separately", "A car with four steering wheels", "A car with no wheels", "A car with a single wheel"],
    ["What happens if both wheels go forward?", "The robot goes straight", "The robot spins", "The robot stops", "The robot flies"],
    ["What happens if the left wheel is slower?", "The robot turns left", "The robot turns right", "The robot stops", "The robot flies"],
    ["What happens if the wheels spin in opposite directions?", "The robot spins on the spot", "The robot goes straight", "The robot stops", "The robot sinks"],
    ["Why is differential drive useful?", "It turns without a steering servo", "It needs no motors", "It needs no battery", "It is always quieter"],
    ["How many drive wheels does a differential robot have?", "Two", "One", "Four always", "None"],
    ["Where are the drive wheels?", "On each side", "Both at the front", "Both at the back", "In the middle only"],
    ["What is a benefit for robot builders?", "Simple and effective turning", "Heavy and slow", "Loud and bright", "Expensive and fragile"],
    ["What is the main difference from a car with steering?", "No steering servo needed", "No wheels", "No motors", "No battery"],
    ["Which robots often use differential drive?", "Small line followers and robot tanks", "Only drones", "Only printers", "Only lamps"]
  ];
  Q["4.2.4"] = [
    ["What does a steering servo change?", "The direction of the front wheels", "The speed of the back wheels", "The colour of the car", "The battery"],
    ["What angle is straight ahead in the example?", "90 degrees", "0 degrees", "180 degrees", "45 degrees"],
    ["What do 60 and 120 degrees make the wheels do?", "Turn one way or the other", "Stop", "Spin", "Jump"],
    ["What does steering.write(60) do?", "Turns the wheels one way", "Turns the car off", "Charges the car", "Prints a poem"],
    ["How sharp is a turn set by?", "The servo angle", "The colour", "The name of the car", "The Wi-Fi password"],
    ["What is the purpose of steering.write(90)?", "Keeps the wheels straight", "Stops the car", "Turns on the lights", "Charges"],
    ["Which angle makes the other turn direction?", "120 degrees", "30 degrees", "10 degrees", "0 degrees only"],
    ["What kind of motor steers the car?", "Servo", "DC drive motor", "Stepper only", "Buzzer"],
    ["Why must the straight angle be set carefully?", "So the car drives straight", "So the car is louder", "So the car is heavier", "So the car glows"],
    ["What is a common steering arrangement for RC cars?", "Front wheels steered by a servo", "Back wheels steered by a paint brush", "No steering", "Steering with a screen"]
  ];
  Q["4.2.5"] = [
    ["Why are batteries a safety concern?", "They store a lot of energy", "They are made of paper", "They make music", "They print"],
    ["What do LiPo and 18650 batteries need?", "The right charger", "Water", "A paint brush", "A printer"],
    ["Should you leave batteries charging unattended?", "No, never", "Yes, always", "Only at night", "Only in summer"],
    ["When should you stop using a battery?", "When it is swollen or hot", "Never", "When it is blue", "When it is shiny"],
    ["Who should supervise charging?", "An adult", "Nobody", "A pet", "The battery"],
    ["Where should you store batteries?", "In a fireproof bag or box", "In a warm oven", "Next to water", "In a bag of paint"],
    ["What is a LiPo battery?", "A lithium polymer battery", "A paper battery", "A water battery", "A wooden battery"],
    ["Why use the correct charger?", "Wrong chargers can damage or start fires", "It makes the robot faster", "It changes the colour", "It is not important"],
    ["What is a sign of a battery problem?", "Swelling", "Shiny paint", "A new sticker", "A bright LED"],
    ["What is the first safety rule with batteries?", "Ask an adult to supervise charging", "Charge them in bed", "Put them near heat", "Cut them open"]
  ];
  Q["4.2.6"] = [
    ["What does the battery connect to on the driver?", "The motor power input", "The screen", "The paint", "The sticker"],
    ["Where do the motor outputs go?", "The two drive motors", "The screen", "The USB port", "The label"],
    ["Which pins control the driver?", "IN1, IN2 and the speed pins", "Only the USB", "Only the reset", "Only the battery"],
    ["Why must grounds be connected together?", "So the signals have a common reference", "So the car paints itself", "So the battery explodes", "So the car sings"],
    ["What does the battery positive connect to?", "The driver's motor power input", "The motor shaft", "The receiver's label", "The wheel"],
    ["What is a common wiring mistake?", "Reversing the battery", "Using a red wire", "Using a short wire", "Labelling wires"],
    ["Why label wires with tape?", "So you know where each one goes", "To make them heavier", "To change colour", "To charge"],
    ["Which signal chooses direction?", "IN1 and IN2", "GND only", "5V only", "The reset"],
    ["What must you check before powering the car?", "All wiring and polarity", "The paint colour", "The room temperature", "The name"],
    ["What is the job of the motor driver?", "To switch power to the motors safely", "To store music", "To print labels", "To charge the battery"]
  ];
  Q["4.2.7"] = [
    ["What does forward() do in the example?", "Drives both motors forward", "Turns the car off", "Reverses the car", "Plays music"],
    ["What does backward() do?", "Drives both motors backward", "Drives forward", "Stops the car", "Charges the car"],
    ["What does turnLeft() set the left motor to?", "100", "255", "-255", "0 only"],
    ["What does stop() do?", "Sets both motors to 0", "Sets both to 255", "Reverses both", "Plays music"],
    ["What range of speed does leftMotor(255) use?", "0 to 255", "0 to 13", "0 to 100 only", "1 to 10"],
    ["What does a negative value like -255 mean?", "Reverse direction", "Stop", "Full forward", "Louder"],
    ["Why write small functions?", "So the main code stays easy to read", "So the car is heavier", "So the car is louder", "So the car is shinier"],
    ["Which function drives both motors at full speed?", "forward", "stop", "turnLeft", "backward only"],
    ["What does the car do when turnLeft runs?", "Turns left", "Turns right", "Stops", "Reverses"],
    ["What is a good test after writing these functions?", "Test each function on its own", "Test them all at once blind", "Never test", "Test by throwing the car"]
  ];
  Q["4.2.8"] = [
    ["Why test with wheels off the ground?", "To check each wheel moves in the right direction", "To make the car fly", "To charge the car", "To change colour"],
    ["What do you check about each wheel?", "That it moves the right direction", "Its colour", "Its name", "Its size only"],
    ["What should you keep within reach?", "The power switch", "The paint", "The sticker", "The label"],
    ["Why keep the switch close?", "So you can cut power quickly", "So the car is louder", "So the car is brighter", "So the car is lighter"],
    ["What does lifting the car show?", "How the wheels spin in the air", "How heavy the car is", "How loud it is", "Its colour"],
    ["What is a sign a wheel is wired backwards?", "It spins the wrong way", "It glows", "It sings", "It charges"],
    ["When do you lift the car?", "Before the first drive", "After the first crash", "Never", "During a race"],
    ["What is a risk of driving on the floor too early?", "The car may move unexpectedly", "The car may charge", "The car may print", "The car may sing"],
    ["Which tip is in the lesson?", "Keep the switch within reach", "Hide the switch", "Stand on the car", "Remove the battery"],
    ["What should you do if a wheel is wrong?", "Check the wiring and fix it", "Ignore it", "Paint it", "Remove it"]
  ];
  Q["4.2.9"] = [
    ["What shape does the test drive?", "A square", "A circle only", "A line only", "A star"],
    ["What do you measure after driving?", "How close the robot gets to a square", "Its colour", "Its weight", "Its name"],
    ["What do you adjust if the path is off?", "Timing or motor speeds", "The colour", "The name", "The label"],
    ["How do you drive forward for a set distance?", "Drive for a set time", "Drive forever", "Drive in a circle", "Drive backwards"],
    ["How do you turn 90 degrees?", "Use a fixed turn time", "Guess once", "Turn 360 degrees", "Turn backwards"],
    ["Why record results?", "To see what changes help", "To make the car louder", "To change colour", "To charge"],
    ["Why change one thing at a time?", "So you know what made the difference", "So the car is faster", "So the car is louder", "So the car is shinier"],
    ["What does a good square look like?", "Four equal sides and right angles", "A triangle", "A line", "A star"],
    ["What could cause a drift?", "Uneven motors or wheels", "The colour", "The name", "The label"],
    ["Why use a square test?", "It shows turning and straight driving", "It shows colour", "It shows the battery brand", "It shows noise"]
  ];
  Q["4.2.10"] = [
    ["What is the mini project?", "A remote-controlled car with forward and stop first", "A paper plane", "A cake", "A bicycle"],
    ["What do you combine with the drive functions?", "A receiver for remote commands", "Paint", "A poster", "A cake"],
    ["Which two commands should you start with?", "Forward and stop", "Painting and music", "Sleep and eat", "Jump and dance"],
    ["Why start with two commands?", "To get a working base quickly", "To make the car heavier", "To make it louder", "To change colour"],
    ["What do you add after the first two work?", "More commands like backward and turn", "A bigger screen", "A new paint job", "A louder horn"],
    ["What does a remote button trigger?", "A matching drive function", "A colour change", "A sound only", "A printed label"],
    ["What is the goal of the project?", "A car you can drive with a remote", "A painted car", "A printed car", "A charged car"],
    ["What should you test first?", "Forward and stop", "Everything at high speed", "Nothing", "The paint"],
    ["What should a stop command do?", "Stop both motors", "Speed up", "Turn right only", "Make music"],
    ["What skill does this project combine?", "Electronics, motors and remote control", "Only painting", "Only music", "Only printing"]
  ];

  // Chapter 3: Controlling Robots from a Phone
  Q["4.3.1"] = [
    ["What is a web server on a robot?", "A program that answers requests", "A type of battery", "A printer", "A paint brush"],
    ["What can an ESP32 web server do?", "Respond to a phone's browser", "Print paper", "Charge batteries", "Play music"],
    ["What does the server send back?", "A response", "A colour", "A battery", "A motor"],
    ["What makes the robot respond to a phone?", "The web server code", "The paint", "The sticker", "The screen only"],
    ["Where does the request start?", "On the phone or laptop", "On the motor", "On the battery", "On the screen"],
    ["What is a request?", "A message asking for an action", "A motor", "A battery", "A colour"],
    ["Why run a web server on a robot?", "So a browser can control it", "So it is louder", "So it is brighter", "So it charges"],
    ["Which device runs the server in this lesson?", "The ESP32", "The phone", "The printer", "The battery"],
    ["What is a tiny web server?", "A small server that runs on a microcontroller", "A huge data centre", "A paper server", "A paint server"],
    ["What turns a request into a motor command?", "Your code on the ESP32", "The paint", "The phone's battery", "The screen"]
  ];
  Q["4.3.2"] = [
    ["What is the client in this project?", "The phone or laptop that asks", "The ESP32", "The motor", "The battery"],
    ["What is the server in this project?", "The ESP32 that answers", "The phone", "The paint", "The screen"],
    ["Who asks for an action?", "The client", "The server", "The battery", "The motor"],
    ["Who does the action?", "The server", "The client", "The screen", "The sticker"],
    ["What is a request-response pattern?", "A question is sent and an answer returns", "A paint job", "A printed chart", "A sound"],
    ["What does a phone browser do?", "Sends requests to the ESP32", "Charges the ESP32", "Paints the ESP32", "Prints the ESP32"],
    ["Which role does a web page button play?", "Client action", "Server action", "Battery", "Motor"],
    ["Can many clients talk to one server?", "Yes, when the network allows", "No, never", "Only one time", "Only in a box"],
    ["Why is the robot the server?", "It waits and answers requests", "It is a phone", "It is a printer", "It is a paint"],
    ["What is a benefit of this model?", "Any browser can control the robot", "The robot is heavier", "The robot is louder", "The robot is brighter"]
  ];
  Q["4.3.3"] = [
    ["What is an IP address?", "A number that identifies a device on a network", "A battery", "A motor", "A colour"],
    ["What is an example IP address?", "192.168.1.50", "Ava", "Blue", "Forward"],
    ["How does the example print the address?", "Serial.println(WiFi.localIP());", "print(colour)", "digitalWrite(13)", "delay(1000)"],
    ["Where do you print the IP address?", "The Serial Monitor", "The battery", "The paint", "The motor"],
    ["What do you type to reach the robot?", "The IP address in a browser", "The robot's colour", "The motor's name", "The battery size"],
    ["Why print the IP address?", "So you know where the robot is on the network", "To change colour", "To charge", "To make music"],
    ["Does the IP address change?", "It can, depending on the network", "Never, ever", "Only on Sundays", "Only in paint"],
    ["Which network does the robot join?", "Your home WiFi", "A paint shop", "A printer", "A calculator"],
    ["What kind of address is 192.168.1.50?", "A private network address", "A colour", "A phone number", "A motor"],
    ["What must the phone do to reach the robot?", "Be on the same network", "Be painted the same colour", "Have the same battery", "Have a printer"]
  ];
  Q["4.3.4"] = [
    ["What does WiFi.begin(ssid, password) do?", "Connects the ESP32 to the network", "Turns on a motor", "Prints a message", "Charges the battery"],
    ["What is ssid?", "The network name", "The colour", "The motor speed", "The IP address"],
    ["What loop waits for the connection?", "while (WiFi.status() != WL_CONNECTED)", "for (int i = 0; i < 0; i++)", "if (true)", "switch"],
    ["What delay is used while waiting?", "500 milliseconds", "5 hours", "0 seconds only", "One year"],
    ["Why use a password variable?", "To give the network password", "To change colour", "To make the robot louder", "To charge"],
    ["What tip is given about the password?", "Never share it in a photo or public code", "Put it on a sticker", "Print it on the robot", "Post it online"],
    ["What should Serial.begin use in the example?", "115200", "1 only", "0 only", "5V"],
    ["What happens if the network name is wrong?", "The ESP32 cannot connect", "The robot gets faster", "The robot turns blue", "The robot charges"],
    ["Which header adds WiFi support?", "WiFi.h", "Servo.h", "LED.h", "Button.h"],
    ["When should the WiFi connection be set up?", "In setup()", "In a comment", "Never", "After the power is cut"]
  ];
  Q["4.3.5"] = [
    ["What is a route?", "An address for one action, like /forward", "A road map", "A battery", "A colour"],
    ["What does /forward do in the example?", "Drives the robot forward", "Stops the robot", "Turns the robot left", "Prints a colour"],
    ["Which route stops the motors?", "/stop", "/forward", "/left", "/back"],
    ["Which routes turn the robot?", "/left and /right", "/forward and /back", "/stop only", "/color only"],
    ["Why give each action its own route?", "So each button triggers one clear action", "So the page is louder", "So the page is brighter", "So the page charges"],
    ["What symbol starts a route?", "/", "#", "@", "%"],
    ["How many routes does the example list?", "Four", "One", "Ten", "Zero"],
    ["What does /back do?", "Drives backward", "Drives forward", "Stops", "Turns right"],
    ["Where do routes live?", "On the ESP32 web server", "On the paint", "On the battery", "On the phone's colour"],
    ["What must match between a link and the server?", "The route name", "The colour", "The battery", "The printer"]
  ];
  Q["4.3.6"] = [
    ["What language is used for the web page?", "HTML", "Python only", "Paint", "Music"],
    ["What does a button link to in the example?", "/forward", "/stop only", "/paint", "/sound"],
    ["What tag is used for a link?", "a", "b", "c", "d"],
    ["What does the button label say?", "Forward", "Left", "Blue", "Charge"],
    ["What does the Stop button link to?", "/stop", "/forward", "/left", "/back"],
    ["Why is the web page sent by the ESP32?", "So the phone can show the controls", "So the robot paints itself", "So the robot charges", "So the robot prints"],
    ["What does HTML describe?", "The structure of a web page", "A motor", "A battery", "A sound"],
    ["What does a button do when tapped?", "Sends a request to a route", "Changes the battery", "Prints a poster", "Stops the internet"],
    ["Which element is used to make a button?", "button", "motor", "battery", "resistor"],
    ["Why keep the stop button at the top?", "So it is easy to find quickly", "So it looks nice", "So it charges", "So it prints"]
  ];
  Q["4.3.7"] = [
    ["What library handles routes on an ESP32 in the example?", "The web server library", "Servo.h", "LED.h", "Button.h"],
    ["What does server.on(\"/forward\", ...) do?", "Calls the code when /forward is requested", "Turns the server off", "Prints the colour", "Charges the board"],
    ["What does server.send(200, ...) show?", "A successful response", "A failure", "A colour", "A battery"],
    ["What does the example respond with?", "Going forward", "Stopped", "Battery low", "Hello"],
    ["What does forward() do inside the example?", "Moves the robot forward", "Turns the screen on", "Prints a poem", "Charges"],
    ["What code runs when the route is requested?", "The function inside the on() call", "The paint", "The battery", "The screen"],
    ["What is 200 in the response?", "An HTTP code meaning success", "The speed", "The colour", "The battery voltage"],
    ["Why send a reply to the phone?", "So the phone knows the command worked", "So the phone prints", "So the phone charges", "So the phone paints"],
    ["What type of text does the reply use?", "text/plain", "image/png", "audio/mp3", "application/zip"],
    ["What happens when a request arrives?", "The matching function runs", "The router paints", "The battery charges", "Nothing"]
  ];
  Q["4.3.8"] = [
    ["Who can reach a robot's web page?", "Anyone on the same network", "Everyone on the planet", "Nobody ever", "Only the robot"],
    ["What should you change from the default?", "The password", "The colour", "The screen", "The label"],
    ["Should you open your robot to the internet?", "No", "Yes, always", "Only at night", "Only with paint"],
    ["Why allow only trusted devices?", "To keep strangers from controlling the robot", "To make it louder", "To make it brighter", "To charge"],
    ["Why keep the stop command easy to reach?", "So you can stop the robot quickly", "So it looks neat", "So it charges", "So it sings"],
    ["What is a default password?", "A password that comes already set", "A colour", "A motor", "A battery"],
    ["Why is a home network a safer place?", "Only your devices usually join it", "Everyone can join", "It has no password", "It is public"],
    ["What is a risk of a weak password?", "Others can control your robot", "The robot gets heavier", "The robot charges", "The robot paints"],
    ["What is good security practice?", "Use a strong, private password", "Share it with everyone", "Write it on the robot", "Use no password"],
    ["Who should you tell if someone else controls your robot?", "A trusted adult", "Nobody", "The robot", "The paint"]
  ];
  Q["4.3.9"] = [
    ["What should you check first if a button does nothing?", "The Serial Monitor", "The paint", "The battery colour", "The sticker"],
    ["Why print the route name when called?", "To see whether the request arrives", "To change colour", "To charge", "To paint"],
    ["Is the phone on the same WiFi?", "It must be", "It does not matter", "Only on Sundays", "Only in paint"],
    ["Did the ESP32 print its IP address?", "Check the Serial Monitor", "Check the paint", "Check the label", "Check the sticker"],
    ["Does the route name match the link exactly?", "It must, including spelling and slash", "No, it can be anything", "Only in colour", "Only with pictures"],
    ["What is a useful debugging step?", "Print messages at key points", "Guess randomly", "Ignore errors", "Paint the robot"],
    ["What could cause a button to fail silently?", "A typo in the route name", "A blue LED", "A bright room", "A soft speaker"],
    ["What tool helps you see messages from the ESP32?", "Serial Monitor", "Paint brush", "Battery tester only", "Hammer"],
    ["What should you do if the IP address changes?", "Check the new address printed by the robot", "Give up", "Paint it", "Delete the robot"],
    ["What is the best order for debugging?", "Check network, then the route, then the code", "Paint first", "Charge first", "Delete first"]
  ];
  Q["4.3.10"] = [
    ["What is the control panel mini project?", "A web page with buttons and a status line", "A paper sign", "A poster", "A song"],
    ["Which buttons does the panel need?", "Forward, Back, Left, Right and Stop", "Only colours", "Only music", "Only paint"],
    ["What does the status line show?", "What the robot is doing", "The paint colour", "The room temperature", "The name of the teacher"],
    ["Why add a status line?", "So the user knows the robot's state", "So it is louder", "So it is brighter", "So it charges"],
    ["What should the page be like on a phone?", "Easy to tap", "Tiny and hidden", "Hard to read", "Covered in paint"],
    ["What do the buttons connect to?", "The robot's routes", "The paint", "The battery", "The label"],
    ["What helps a page work on a phone?", "Big buttons and clear text", "Small buttons", "No text", "No colour"],
    ["What skills does this project combine?", "HTML, routes and motor control", "Only painting", "Only sound", "Only printing"],
    ["What should the Stop button do?", "Stop the motors immediately", "Speed up", "Play music", "Turn right"],
    ["How could you improve the panel?", "Add a battery display", "Paint the buttons", "Hide the buttons", "Remove the status"]
  ];

  // Chapter 4: Drone Basics and ESP Drones
  Q["4.4.1"] = [
    ["What is a quadcopter?", "A drone with four rotors", "A car with four wheels", "A boat", "A printer"],
    ["How does a quadcopter fly?", "By changing the speed of each rotor", "By flapping wings", "By pedalling", "By sailing"],
    ["What does changing rotor speed do?", "Tilts the body and lifts it", "Turns the drone into paper", "Makes it louder only", "Makes it blue"],
    ["How many rotors does a quadcopter have?", "Four", "Two", "Six", "One"],
    ["Which is a quadcopter's main feature?", "Four rotors for lift and control", "Wheels", "Tracks", "Sails"],
    ["What lifts the drone into the air?", "The rotors", "The battery label", "The paint", "The sticker"],
    ["What is a drone?", "An unmanned flying machine", "A type of car", "A type of boat", "A printer"],
    ["What is the job of the rotors?", "To push air and create lift", "To store data", "To make music", "To print"],
    ["Why is a quadcopter stable?", "A control system keeps it level", "It has no rules", "It is heavy", "It is painted"],
    ["What is a common use of a quadcopter?", "Aerial photos and racing", "Printing posters", "Charging phones", "Painting walls"]
  ];
  Q["4.4.2"] = [
    ["Why are there four rotors in pairs?", "Two spin clockwise and two counter-clockwise", "All spin the same way", "Only one spins", "They are decorations"],
    ["What do opposite spins do?", "Cancel out the spin so the drone stays steady", "Make the drone spin out of control", "Make it heavier", "Make it louder"],
    ["Which rotors spin the same direction?", "Diagonal rotors", "All four", "Only one", "None"],
    ["What happens if the spin is not balanced?", "The drone rotates", "The drone charges", "The drone prints", "Nothing"],
    ["Why can four motors lift more than two?", "They share the lifting force", "They are lighter", "They are paint", "They are louder"],
    ["What is a rotor?", "A spinning blade that makes lift", "A battery", "A label", "A cable"],
    ["What does changing speeds let the drone do?", "Move in every direction", "Stay still only", "Turn into paper", "Charge"],
    ["Which rotors change for yaw?", "The balance between spin directions", "Only the colour", "None", "Only the battery"],
    ["What does clockwise mean?", "Turning in the same direction as a clock's hands", "Turning backwards", "Not turning", "Turning sideways"],
    ["Why do drones use four rotors instead of one?", "Balance and control are easier", "One is heavier", "One is louder", "One is brighter"]
  ];
  Q["4.4.3"] = [
    ["What does throttle control?", "The speed of all rotors together", "Only one rotor", "The colour", "The battery"],
    ["What happens when throttle goes up?", "The drone climbs", "The drone falls", "The drone stops", "The drone turns"],
    ["What happens when throttle goes down?", "The drone descends", "The drone climbs fast", "The drone spins", "The drone charges"],
    ["How do all rotors change with throttle?", "They speed up or slow down together", "They change randomly", "Only two change", "They stop"],
    ["What is throttle in simple words?", "How much lift you give", "The drone's colour", "The drone's name", "The drone's weight"],
    ["What does more speed mean?", "More lift", "Less lift", "No change", "Colour change"],
    ["Which control makes a drone rise?", "Throttle", "Pitch", "Roll", "Yaw"],
    ["What should you control gently?", "Throttle", "The paint", "The sticker", "The label"],
    ["Why is throttle important?", "It decides whether the drone flies", "It decides the colour", "It decides the name", "It decides the music"],
    ["What is the lift balance when hovering?", "Lift equals the weight", "Lift is zero", "Lift is double", "Lift is random"]
  ];
  Q["4.4.4"] = [
    ["What does pitch tilt?", "The nose up or down", "The wings", "The colour", "The battery"],
    ["When the back rotors spin faster, what happens?", "The nose tips down and the drone moves forward", "The nose goes up", "The drone stops", "The drone spins"],
    ["When the front rotors spin faster, what happens?", "The nose goes up and the drone moves backward", "The nose goes down", "The drone climbs", "The drone spins"],
    ["What moves the drone forward?", "Pitch", "Yaw", "Throttle", "Battery"],
    ["What moves the drone backward?", "Pitch in the other direction", "Throttle", "Yaw", "Roll"],
    ["Which rotors make the nose go down in the example?", "The back rotors faster", "The front rotors faster", "All rotors equal", "None"],
    ["What is a pitch angle?", "The tilt of the nose up or down", "The tilt of the wings left or right", "The spin around the middle", "The speed"],
    ["Which control moves a drone forward and back?", "Pitch", "Roll", "Yaw", "Throttle"],
    ["Why should you learn pitch?", "To control forward and backward movement", "To change colour", "To make it louder", "To charge"],
    ["What does tilting the drone do to the thrust?", "Points part of it sideways or forward", "Stops it", "Changes colour", "Nothing"]
  ];
  Q["4.4.5"] = [
    ["What does roll do?", "Tilts the drone left or right", "Tilts it forward", "Spins it", "Changes colour"],
    ["What does yaw do?", "Turns the drone around its vertical axis", "Tilts it sideways", "Lifts it", "Stops it"],
    ["What makes a drone move sideways?", "Roll", "Throttle", "Yaw", "Battery"],
    ["What makes a drone spin on the spot?", "Yaw", "Throttle", "Pitch", "Roll"],
    ["How is yaw created?", "By changing the balance of the spin directions", "By painting the rotors", "By moving the battery", "By charging"],
    ["Which axis does yaw turn around?", "The vertical axis", "The forward axis", "The side axis", "No axis"],
    ["Which control turns the drone left or right without moving sideways?", "Yaw", "Roll", "Pitch", "Throttle"],
    ["What is the drone's vertical axis?", "The line going straight up through the drone", "The line along the nose", "The line across the wings", "A colour"],
    ["Why are roll and pitch different?", "Roll goes sideways and pitch goes forward or back", "They are the same", "Roll is louder", "Pitch is brighter"],
    ["Which control combination lets a drone fly a curve?", "Roll and yaw together", "Only throttle", "Only pitch", "None"]
  ];
  Q["4.4.6"] = [
    ["What is an IMU?", "A sensor with a gyroscope and accelerometer", "A battery", "A motor", "A printer"],
    ["What does a gyroscope measure?", "How fast the drone rotates", "The battery", "The colour", "The weight"],
    ["What does an accelerometer sense?", "Tilt and the direction of gravity", "The colour", "The Wi-Fi", "The sound"],
    ["What uses the IMU data?", "The flight controller", "The paint", "The sticker", "The label"],
    ["How often does the flight controller adjust the rotors?", "Many times each second", "Once a day", "Once a year", "Never"],
    ["What is the purpose of the IMU?", "To keep the drone level", "To make it louder", "To charge the battery", "To paint"],
    ["What does gravity help the accelerometer find?", "Which way is down", "The colour", "The name", "The time"],
    ["Does a drone need an IMU to stay level?", "It needs something to measure tilt, and the IMU does that", "No, never", "Only with paint", "Only outside"],
    ["What is a flight controller?", "The board that adjusts the rotors", "A remote control", "A battery", "A label"],
    ["Why is fast sensing important?", "The drone can correct tilt before it falls", "It makes the drone heavier", "It makes it louder", "It changes colour"]
  ];
  Q["4.4.7"] = [
    ["What does PID stand for in control?", "Proportional, integral and derivative", "Power in drone", "Paint in door", "Pixel input data"],
    ["What does a PID controller compare?", "The target angle with the real angle", "The colour with the sound", "The battery with the paint", "The name with the time"],
    ["What does the controller use to correct?", "The current error, past errors and how fast the error changes", "Only the colour", "Only the name", "Only the sound"],
    ["Do you need to tune PID to learn the idea?", "No, just know that the drone keeps correcting itself", "Yes, always", "Only in paint", "Only in water"],
    ["What is an error in control?", "The difference between target and actual", "A colour", "A label", "A battery"],
    ["Why does a drone need correction?", "Wind and motors are never perfect", "Paint dries", "Batteries are blue", "Screens get hot"],
    ["What is the 'P' in PID?", "The proportional part, based on the current error", "The paint", "The power switch", "The password"],
    ["What is the 'I' in PID?", "The integral part, based on past errors", "The ice", "The image", "The input"],
    ["What is the 'D' in PID?", "The derivative part, based on how fast the error changes", "The drone", "The door", "The data"],
    ["What happens if the correction is too strong?", "The drone may wobble", "The drone charges", "The drone prints", "Nothing"]
  ];
  Q["4.4.8"] = [
    ["What chip is often used in small ESP drones?", "ESP32 or similar", "A paper chip", "A wooden chip", "A cookie"],
    ["What do small brushed motors have?", "Propellers", "Wheels", "Tracks", "Sails"],
    ["What is the flight controller board?", "The board that balances the drone", "A remote", "A battery", "A label"],
    ["What kind of battery is common in small drones?", "A small LiPo", "A car battery", "A paper battery", "A water tank"],
    ["What do propeller guards do?", "Protect people and parts", "Make the drone faster", "Make it louder", "Charge it"],
    ["Why are most drone parts small and light?", "To help the drone fly", "To make it heavier", "To make it louder", "To change colour"],
    ["What makes parts easy to replace?", "Simple, small design", "Glue everywhere", "Paint", "Welding"],
    ["Which part sends power to the motors?", "The battery through the controller", "The paint", "The label", "The sticker"],
    ["What should you check on a LiPo?", "Swelling and heat", "Colour", "Shine", "Name"],
    ["Why is weight important for a drone?", "Light drones lift and fly more easily", "Heavy drones fly better", "Weight is not important", "Weight changes colour"]
  ];
  Q["4.4.9"] = [
    ["What is a key drone safety rule?", "Fly in an open space", "Fly in a crowded room", "Fly near a road", "Fly in a cupboard"],
    ["What should you wear?", "Eye protection", "Sunglasses only", "A hat only", "Nothing"],
    ["Where should your fingers be?", "Away from the propellers", "Near the propellers", "On the rotors", "In the air"],
    ["Who should supervise?", "An adult", "No one", "The drone", "A pet"],
    ["Where should you not fly?", "Near people, animals, roads or airports", "In an open field", "In a park with permission", "In a garden"],
    ["What should you check before flying outside?", "Local drone rules", "The paint colour", "The sticker", "The name"],
    ["What do propeller guards protect?", "People and the drone from contact", "The battery only", "The paint only", "The screen only"],
    ["What is a safe place to test a drone first?", "An open, clear, indoor space", "A busy road", "Near water", "On a roof"],
    ["What should you do if the drone behaves badly?", "Cut power and stop", "Keep flying", "Throw it", "Ignore it"],
    ["Why are drones risky?", "Spinning blades and falling parts can cause injury", "They are too quiet", "They are too slow", "They are too light"]
  ];
  Q["4.4.10"] = [
    ["What is the drone drawing activity?", "Draw a quadcopter with spin arrows", "Paint a house", "Write a song", "Print a poster"],
    ["How many rotors should you draw?", "Four", "Two", "Six", "One"],
    ["What should the arrows show?", "Spin direction for each rotor", "The price", "The colour", "The name"],
    ["Which rotors should speed up for climb?", "All four together", "Only one", "None", "Only two"],
    ["Which rotors speed up to pitch forward?", "The back rotors", "The front rotors", "The left rotors", "The right rotors"],
    ["Which rotors change for roll left?", "The right rotors faster than the left", "Only the back", "Only the front", "None"],
    ["What changes for yaw?", "The balance of spin directions", "The colour", "The battery", "The name"],
    ["Why draw spin directions?", "To understand why opposite spins balance", "To make the drone paint itself", "To charge it", "To print labels"],
    ["What is the goal of labelling?", "To explain each control clearly", "To make it louder", "To change colour", "To charge"],
    ["What is a good way to check your drawing?", "Explain each arrow out loud", "Guess once", "Ignore it", "Paint over it"]
  ];

  // Chapter 5: Final Project: The Connected Robot
  Q["4.5.1"] = [
    ["What does the final project combine?", "Levels 1 to 4 into one connected robot", "Only drawing", "Only painting", "Only printing"],
    ["What do you do first in the project?", "Plan it", "Paint it", "Print it", "Charge it"],
    ["What are the four steps of the project?", "Plan, build, test and present", "Paint, glue, cut and sell", "Print, paint, sing and sleep", "Charge, delete, paint and stop"],
    ["Which levels does the project draw on?", "Levels 1 to 4", "Only level 1", "Only level 5", "No levels"],
    ["What kind of robot is the goal?", "A connected robot", "A paper robot", "A toy with no parts", "A poster"],
    ["Why plan before building?", "To avoid wasted parts and time", "To make it heavier", "To change colour", "To charge"],
    ["What does connected mean?", "It can send and receive data and commands", "It is glued", "It is painted", "It is wired to the wall"],
    ["Which parts come from earlier levels?", "Electronics, mechanics, software and wireless", "Only paint", "Only paper", "Only sound"],
    ["What is the final step?", "Present the robot", "Delete it", "Paint it", "Throw it away"],
    ["What makes a good final project?", "Simple enough to finish and tested well", "Huge and untested", "Never finished", "Made of paper only"]
  ];
  Q["4.5.2"] = [
    ["What is a block diagram?", "A picture showing the parts and how they connect", "A paint sketch", "A map of a city", "A song"],
    ["What should the diagram show?", "Inputs, processing, outputs and data", "Only colours", "Only the battery", "Only the name"],
    ["What are inputs in the example?", "Remote buttons and sensors", "Motors", "LEDs", "Screens"],
    ["What is processing in the example?", "The ESP32 and the code", "The paint", "The sticker", "The screen"],
    ["What are outputs in the example?", "Motors, lights and the web page", "Only the battery", "Only the cable", "Only the label"],
    ["What data does the system send?", "Readings to a database", "Paint", "Music", "Heat"],
    ["Why draw data flows?", "To see what must connect to what", "To make the drawing bigger", "To change colour", "To charge"],
    ["What does an arrow in a block diagram show?", "The direction of data or control", "The colour", "The size", "The weight"],
    ["What is the purpose of a plan?", "To guide building and testing", "To make it louder", "To make it heavier", "To paint"],
    ["Which part is an output?", "A motor", "A button", "A sensor", "A remote"]
  ];
  Q["4.5.3"] = [
    ["What are the three build options?", "RC car, small drone or sensor logger", "Table, chair and lamp", "Car, boat and plane only", "Paint, glue and tape"],
    ["What should you keep in mind when choosing?", "Keep the design simple enough to finish", "Make it as huge as possible", "Pick the most expensive", "Pick none"],
    ["What is Option A?", "An RC car with a phone control page", "A drone", "A paper plane", "A cake"],
    ["What is Option B?", "A small drone with a remote", "A car with no wheels", "A boat", "A cake"],
    ["What is Option C?", "A robot that logs sensor data", "A painting", "A cake", "A bicycle"],
    ["Why pick a simple option?", "So you can finish in the time you have", "So it is louder", "So it is heavier", "So it is shinier"],
    ["Which option uses a drone?", "Option B", "Option A", "Option C", "None"],
    ["Which option focuses on logging?", "Option C", "Option A", "Option B", "None"],
    ["What should guide your choice?", "Your time, skills and parts", "The colour of the box", "The brand", "The weather"],
    ["Can you combine options?", "Yes, if the project stays manageable", "No, never", "Only on Sundays", "Only with paint"]
  ];
  Q["4.5.4"] = [
    ["Which skill do you use to build the frame?", "Design skills from Level 2", "Painting skills", "Music skills", "Cooking skills"],
    ["What should you do before mounting electronics?", "Test-fit the parts", "Paint the frame", "Glue everything", "Delete the design"],
    ["What should you leave space for?", "The battery and free-moving wires", "A piano", "A bicycle", "A window"],
    ["What do you print or build?", "The frame", "The sky", "The sound", "The Wi-Fi"],
    ["Why test-fit first?", "To catch problems before glue or screws", "To make it heavier", "To change colour", "To charge"],
    ["What helps wires move freely?", "Planned space and clips", "Glue on wires", "Tight knots", "Paint"],
    ["Which Level skill matters for this step?", "Level 2 CAD and printing", "Level 5 ROS", "Level 6 Unity", "Level 1 blink only"],
    ["What is the risk of skipping test-fits?", "Parts might not fit", "Better prints", "Shinier parts", "Quieter motors"],
    ["What should you adjust if a part does not fit?", "The design clearance", "The colour", "The name", "The label"],
    ["What makes a frame good?", "Rigid, flat and roomy enough for electronics", "Soft and loose", "Tiny and fragile", "Round and wobbly"]
  ];
  Q["4.5.5"] = [
    ["What should you check on each battery connection?", "Polarity", "Colour", "Shine", "Name"],
    ["What should you keep apart?", "Motor wires and sensor wires", "Everything together", "Ground and power", "Colour and shape"],
    ["Why label wires?", "So you know where each one goes", "To make them heavier", "To change colour", "To charge"],
    ["What must you check before turning on the battery?", "The power wiring", "The paint", "The sticker", "The label"],
    ["Which components does wiring connect?", "Driver, battery, ESP32 and sensors", "Paint and glue", "Sticker and label", "Screen and sound"],
    ["What happens with reversed battery polarity?", "Parts can be damaged", "Parts get shinier", "Parts charge", "Parts sing"],
    ["What is a short-circuit risk?", "Wires touching that should not", "Wires being long", "Wires being coloured", "Wires being labelled"],
    ["Which part connects to the motor driver?", "The motors and battery", "The screen only", "The paint", "The sticker"],
    ["What is a good wiring habit?", "Tidy, labelled and double-checked", "Messy and unlabelled", "Taped randomly", "Never checked"],
    ["What should you do after wiring?", "Check everything before power", "Start the robot at once", "Paint it", "Delete it"]
  ];
  Q["4.5.6"] = [
    ["Which function runs in the main loop example?", "handleWebClient", "digitalRead only", "Serial.end", "delay only"],
    ["What does readSensors() do?", "Reads distance and battery", "Prints colour", "Turns off the robot", "Plays sound"],
    ["What does sendTelemetry() do?", "Sends data to the database", "Paints the robot", "Charges the robot", "Deletes data"],
    ["What is the loop's first job?", "Handle phone commands", "Paint", "Charge", "Print"],
    ["Why write the code in small steps?", "To test one function at a time", "To make it louder", "To make it heavier", "To change colour"],
    ["What order should testing follow?", "Drive, then sensor, then logging", "Logging, then drive", "Sensor only", "Paint first"],
    ["What does a loop structure help with?", "Repeating tasks regularly", "Making paint", "Charging", "Printing"],
    ["Which part sends data to a database?", "sendTelemetry", "handleWebClient", "readSensors", "setup"],
    ["Why separate functions in the loop?", "Each job is easy to read and fix", "To hide code", "To make it heavier", "To change colour"],
    ["What is telemetry?", "Data sent back from the robot", "A paint colour", "A battery type", "A sticker"]
  ];
  Q["4.5.7"] = [
    ["What should each sensor reading get?", "A timestamp", "A colour", "A sticker", "A name only"],
    ["What SQL creates a table for telemetry?", "CREATE TABLE telemetry", "DELETE telemetry", "PRINT telemetry", "SELECT paint"],
    ["What columns does telemetry have?", "time, battery and distance", "colour and motor", "name and sticker", "paint only"],
    ["What SQL inserts a telemetry row in the example?", "INSERT INTO telemetry", "SELECT FROM telemetry", "DELETE FROM telemetry", "CREATE telemetry"],
    ["What is the sample battery value?", "7.4", "74", "0.74", "7400"],
    ["What is the sample distance value?", "52", "5200", "0.52", "520000"],
    ["Why log telemetry?", "To ask questions about performance later", "To paint the robot", "To make it louder", "To charge the robot"],
    ["What does a timestamp let you do?", "Replay or sort events by time", "Change colour", "Make music", "Charge"],
    ["Which type fits battery?", "REAL", "TEXT", "BOOL only", "COLOUR"],
    ["What is a good query after logging?", "SELECT AVG(battery) FROM telemetry;", "SELECT colour FROM telemetry;", "DELETE telemetry;", "CREATE telemetry;"]
  ];
  Q["4.5.8"] = [
    ["What should you test before every run?", "The stop button and failsafe", "The paint", "The sticker", "The label"],
    ["Where should you test first?", "In a safe space", "On a busy road", "Near water", "On a roof"],
    ["How can you keep the robot safe in tests?", "Wheels off the ground or drone tethered", "Let it roam", "Hide the stop", "Ignore the battery"],
    ["What is the signal-loss failsafe test?", "Close the VR or control app and see if the robot stops", "Paint the controller", "Remove the battery", "Turn the robot upside down"],
    ["What should you check about the battery?", "Voltage before flying or driving", "Colour", "Shine", "Name"],
    ["What is a good test order?", "Stop button, failsafe, battery, then movement", "Movement first", "Battery last", "Never test"],
    ["Why test failsafes?", "To make sure the robot stops when it should", "To make it louder", "To change colour", "To charge"],
    ["What should you do if a test fails?", "Stop, fix the problem and test again", "Keep going", "Ignore it", "Hide it"],
    ["Who should be present for tests?", "An adult", "Nobody", "The robot", "A pet"],
    ["What makes testing safer?", "Clear space and checklists", "Crowds", "Running", "No checks"]
  ];
  Q["4.5.9"] = [
    ["What should your write-up include?", "Plan, build steps, code highlights and test results", "Only a colour", "Only a name", "Only a price"],
    ["What helps show your project?", "Photos, a diagram and a short video", "Only text", "A blank page", "A sticker"],
    ["What should you record about problems?", "What went wrong and how you fixed it", "Nothing", "Only colours", "Only the weather"],
    ["Why document your work?", "So others can understand and repeat it", "To make it heavier", "To change colour", "To charge"],
    ["What is a build step?", "One step in putting the robot together", "A colour", "A song", "A sticker"],
    ["What is a code highlight?", "An important piece of code and why it matters", "A paint colour", "A battery", "A label"],
    ["What is a test result?", "What happened when you tested", "A paint colour", "A label", "A sticker"],
    ["Which tool helps document a project?", "A document or page with pictures", "A hammer", "A spoon", "A cup"],
    ["Why include the block diagram?", "It shows how parts connect", "It is decoration only", "It makes it heavier", "It changes colour"],
    ["What should a good write-up be?", "Clear and honest about what worked", "Hidden", "Misleading", "Empty"]
  ];
  Q["4.5.10"] = [
    ["What should you show in the presentation?", "The robot working", "Only slides about paint", "Only the battery", "Nothing"],
    ["What should you explain about the database?", "What is stored and why", "Its colour", "Its name only", "Nothing"],
    ["What should you describe?", "One safety feature and one improvement", "Only the paint", "Only the price", "Nothing"],
    ["What is a good way to end the presentation?", "Say what you learned and what you would improve", "Say nothing", "Leave the room", "Turn off the robot"],
    ["Why present your project?", "To share what you built and learned", "To make it heavier", "To change colour", "To charge"],
    ["What should you bring to a presentation?", "The robot and your notes", "Only a paint brush", "Only a sticker", "Nothing"],
    ["What makes a demo convincing?", "Showing it working clearly", "Hiding the robot", "Skipping tests", "Using no data"],
    ["What is one improvement you might suggest?", "A longer battery life or better failsafes", "A new paint job only", "A louder buzzer only", "Nothing at all"],
    ["What should the audience understand?", "How the parts work together", "The paint colour", "The room", "The weather"],
    ["What is the finish line of the course?", "A working connected robot you can explain", "A painted box", "A printed poster", "Nothing"]
  ];
})();
