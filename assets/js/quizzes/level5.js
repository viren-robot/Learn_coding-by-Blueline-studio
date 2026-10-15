// Lesson questions for Level 5 (VRoboTech). 10 questions per lesson.
// Key: "level.chapter.lesson". Each question: [question, correct answer, wrong, wrong, wrong]
(function () {
  window.LESSON_QUIZZES = window.LESSON_QUIZZES || {};
  var Q = window.LESSON_QUIZZES;

  // Chapter 1: Robot Sensors in Depth
  Q["5.1.1"] = [
    ["Why do robots need sensors?", "To know what is around them and how they move", "To look pretty", "To make them heavier", "To charge the battery"],
    ["What three questions can good sensing answer?", "What is near, where am I, and how am I moving", "What colour, what size, what price", "Who, when and why", "How loud, how bright, how hot"],
    ["What makes a robot only as smart as its sensing?", "Its sensors give it information", "Its paint", "Its label", "Its battery label"],
    ["Which sensor tells a robot about tilt?", "An IMU", "A line sensor", "A servo", "A button"],
    ["Which sensor tells a robot about nearby walls?", "An ultrasonic sensor", "A servo", "An LED", "A resistor"],
    ["What is a sensor's reading?", "The value it reports", "A paint colour", "A battery", "A motor"],
    ["Why do different sensors answer different questions?", "They measure different things", "They all measure the same thing", "They are the same device", "They have no purpose"],
    ["What does a robot do with sensor data?", "Decides and acts", "Stores paint", "Charges itself only", "Prints it"],
    ["What is the sense-think-act idea?", "Sense the world, decide, then act", "Paint, print, sleep", "Charge, stop, reset", "Listen, sing, dance"],
    ["Which sensor helps a robot avoid crashes?", "A distance sensor", "A colour sensor only", "A servo", "A buzzer"]
  ];
  Q["5.1.2"] = [
    ["What does an HC-SR04 ultrasonic sensor send?", "A sound pulse", "A light beam only", "A radio signal", "Paint"],
    ["How does it measure distance?", "By timing the echo", "By weighing the object", "By reading colour", "By guessing"],
    ["What is the formula given in the lesson?", "Distance = echo time x speed of sound / 2", "Distance = echo time + 2", "Distance = colour x 2", "Distance = weight / 2"],
    ["Why divide by 2 in the formula?", "The sound travels there and back", "To make it smaller for fun", "To change the units", "To charge the battery"],
    ["What is the ultrasonic sensor's main job?", "Measure distance", "Measure colour", "Measure taste", "Play music"],
    ["What kind of wave does an ultrasonic sensor use?", "Sound", "Visible light", "Radio waves", "Heat only"],
    ["What happens if an object is very close?", "The echo returns quickly", "The echo never returns", "The sensor breaks", "It makes music"],
    ["Which pins does the HC-SR04 need in the example?", "TRIG and ECHO", "VIN and RESET", "A0 and A5", "5V and 3.3V only"],
    ["What does the echo pin do?", "Stays HIGH while the echo returns", "Sends the pulse", "Powers the sensor", "Reads colour"],
    ["Why is ultrasonic sensing useful?", "It works without touching the object", "It needs contact", "It is slow", "It is only for paper"]
  ];
  Q["5.1.3"] = [
    ["What function measures the echo time?", "pulseIn", "digitalWrite", "analogRead", "Serial.begin"],
    ["What does pulseIn(ECHO, HIGH) measure?", "How long the echo pin stays HIGH", "The colour", "The speed of the robot", "The battery voltage"],
    ["What unit does pulseIn return?", "Microseconds", "Metres", "Litres", "Degrees"],
    ["What does TRIG get in the example?", "A short 10 microsecond pulse", "A constant HIGH", "A colour", "A motor"],
    ["What does delayMicroseconds(2) do?", "Waits 2 microseconds", "Waits 2 seconds", "Turns on the LED", "Reads the colour"],
    ["Why set TRIG LOW first?", "To get a clean pulse", "To make it louder", "To charge it", "To change colour"],
    ["Which pin is ECHO in the example?", "Pin 10", "Pin 9", "A5", "Reset"],
    ["What happens if the echo never returns?", "pulseIn can time out or return 0", "The robot gets brighter", "The sensor sings", "The power goes off"],
    ["What is the purpose of the TRIG pin?", "To start the measurement pulse", "To read the echo", "To power the board", "To store data"],
    ["What does digitalWrite(TRIG, HIGH) do?", "Starts the trigger pulse", "Stops the sensor", "Reads the echo", "Prints the distance"]
  ];
  Q["5.1.4"] = [
    ["What is the speed of sound in the lesson's rule of thumb?", "About 58 microseconds per centimetre there and back", "About 5 metres per second", "About 1000 metres per second", "About 1 centimetre per hour"],
    ["Why divide by 58?", "To convert the round trip time to centimetres", "To make the number bigger", "To change colour", "To charge"],
    ["What does distanceCm = us / 58 give?", "The distance in centimetres", "The colour", "The battery voltage", "The time in hours"],
    ["What type is distanceCm in the example?", "long", "String", "bool", "float only"],
    ["Why does the echo take longer for a far object?", "The sound travels farther", "The sensor is slower", "The object is heavier", "The object is paint"],
    ["What does a time of 580 microseconds mean?", "About 10 centimetres", "About 580 centimetres", "About 5 centimetres", "About 1 metre"],
    ["Why is us used as a variable?", "It holds microseconds", "It holds the colour", "It holds a name", "It holds the battery"],
    ["Is the speed of sound the same in all air?", "It changes a little with temperature", "It is always exactly the same", "It is zero", "It is infinite"],
    ["What is a good unit for distance on a robot?", "Centimetres", "Litres", "Volts", "Hertz"],
    ["What do you get if you divide by 58 wrongly?", "A wrong distance", "A correct distance", "A colour", "A battery"]
  ];
  Q["5.1.5"] = [
    ["What does an IR line sensor have?", "An infrared light and a light detector", "A speaker and a microphone", "A camera and a screen", "A motor and a gear"],
    ["Why does the reading change over a black line?", "Dark surfaces absorb more light", "Black surfaces make sound", "Black surfaces are hot", "Black surfaces are wet"],
    ["How close should a line sensor be to the floor?", "Close", "Very far", "On the ceiling", "Underwater"],
    ["What should you check on white and black?", "The readings on each surface", "The colour of the sensor", "The name", "The battery"],
    ["What is a threshold used for?", "Deciding if the sensor is on the line", "Charging", "Printing", "Painting"],
    ["What does a bright reading suggest?", "The surface reflects more light", "The sensor is broken", "The robot is hot", "The robot is loud"],
    ["Which surface absorbs more infrared?", "Black", "White", "Mirror-shiny", "Clear glass"],
    ["What is a line-following robot's main sensor?", "The line sensor", "The camera only", "The microphone", "The screen"],
    ["Why use two line sensors?", "To tell which side of the line the robot is on", "To make it louder", "To make it heavier", "To charge"],
    ["What affects the reading besides colour?", "Distance from the surface and light level", "The robot's name", "The paint brand", "The time of day only"]
  ];
  Q["5.1.6"] = [
    ["What does an IMU include?", "A gyroscope and an accelerometer", "A speaker and a light", "A battery and a motor", "A screen and a camera"],
    ["What does a gyroscope measure?", "How fast the robot rotates", "The colour", "The distance to a wall", "The battery voltage"],
    ["What does an accelerometer sense?", "Tilt and the pull of gravity", "The colour", "The sound", "The name"],
    ["Why is an IMU useful for drones?", "It shows tilt and turning", "It shows colour", "It shows the time", "It stores data"],
    ["What do the two sensors show together?", "Tilt and turning", "Sound and light", "Colour and size", "Name and price"],
    ["Which measures turning speed?", "The gyroscope", "The accelerometer", "The ultrasonic sensor", "The line sensor"],
    ["Which measures the direction of gravity?", "The accelerometer", "The gyroscope", "The LED", "The servo"],
    ["Where is an IMU used?", "Balancing robots and drones", "Only paper robots", "Only printers", "Only lamps"],
    ["What is the sign of an IMU reading that changes when you tilt?", "Its values change with the angle", "It stays fixed", "It turns off", "It prints"],
    ["Why combine gyroscope and accelerometer?", "Each has strengths and weaknesses", "They do the same thing", "They are the same device", "They have no use"]
  ];
  Q["5.1.7"] = [
    ["Why do sensor readings jump around?", "They are noisy", "They are always perfect", "They are painted", "They are frozen"],
    ["What helps steady a reading?", "Averaging several readings", "Using one reading only", "Ignoring the sensor", "Painting it"],
    ["What does total += readDistanceCm() do?", "Adds each reading to the total", "Subtracts each reading", "Sets the total to zero", "Prints the total"],
    ["How many readings are averaged in the example?", "Five", "One", "Ten", "Zero"],
    ["What does average = total / 5 give?", "The average of five readings", "The sum", "The colour", "The battery"],
    ["Why add a short delay between readings?", "To let the sensor settle", "To make it louder", "To charge the robot", "To paint it"],
    ["What type should total be?", "long", "String", "bool", "colour"],
    ["Is averaging perfect?", "No, but it reduces noise", "Yes, it removes all error", "It adds error", "It stops the sensor"],
    ["What is noise in a sensor?", "Random variation in readings", "A colour", "A sound from a speaker", "A battery"],
    ["When is averaging a bad idea?", "When the object moves fast and you need instant response", "Always", "Never", "When the sensor is painted"]
  ];
  Q["5.1.8"] = [
    ["What is calibration?", "Checking readings against known values and adjusting", "Painting the sensor", "Charging the sensor", "Deleting the sensor"],
    ["What do you put in front of the sensor to calibrate?", "An object at a known distance", "A random object", "Nothing", "Water"],
    ["What do you compare?", "The reading with the known distance", "The colour with the size", "The battery with the paint", "The name with the time"],
    ["When should you recalibrate?", "When you move the robot to a new room with different light", "Never", "Only on Sundays", "Only when painted"],
    ["Why does light matter for some sensors?", "Light can change readings", "Light makes sound", "Light charges the battery", "Light paints"],
    ["What is a calibration offset?", "A correction added to readings", "A colour", "A name", "A paint"],
    ["What is the goal of calibration?", "Accurate measurements", "Louder sensors", "Brighter sensors", "Heavier sensors"],
    ["What is a known distance for testing?", "A measured distance, like 20 cm", "A random guess", "Infinity", "Zero always"],
    ["Should you calibrate once and forget?", "No, check it when conditions change", "Yes, always", "Only in paint", "Only at night"],
    ["What is a sign of poor calibration?", "Readings that do not match reality", "Readings that match", "A bright LED", "A loud buzzer"]
  ];
  Q["5.1.9"] = [
    ["What is sensor fusion?", "Combining sensors for better results", "Melting sensors together", "Painting sensors", "Charging sensors"],
    ["Which sensors does the example combine?", "Wheel encoders and an IMU", "A camera and a paint brush", "A speaker and a button", "A battery and a label"],
    ["What can fusion estimate?", "The robot's position", "The colour of the floor", "The battery brand", "The paint"],
    ["Why is one sensor often not enough?", "Each sensor has weaknesses", "Sensors are always perfect", "Sensors are never useful", "Sensors cannot be combined"],
    ["What does an encoder measure?", "How much a wheel has turned", "The colour", "The sound", "The temperature"],
    ["What is a benefit of combining sensors?", "Better accuracy", "Louder sound", "Brighter lights", "Heavier parts"],
    ["What does an IMU add to wheel encoders?", "Turning information", "Colour", "Sound", "Heat"],
    ["Is fusion always simple?", "No, it can be complex", "Yes, always easy", "It is a paint", "It is a sound"],
    ["What is a good word for combining data sources?", "Fusion", "Paint", "Erase", "Whisper"],
    ["Why does a robot need position estimates?", "To navigate and avoid mistakes", "To change colour", "To make music", "To charge"]
  ];
  Q["5.1.10"] = [
    ["What is the distance logger project?", "Log averaged distance readings to the Serial Monitor", "Build a car", "Paint a robot", "Write a song"],
    ["What do you move toward the sensor?", "An object", "A battery", "A paint roller", "A cup of water"],
    ["What should the numbers do as the object gets closer?", "Fall", "Rise forever", "Stay the same", "Turn to colour"],
    ["Which readings do you show?", "Averaged distance readings", "Only the colour", "Only the time", "Only the name"],
    ["Where do you see the readings?", "The Serial Monitor", "The paint", "The battery", "The label"],
    ["What tests the sensor in this project?", "Changing the distance and watching the numbers", "Painting the sensor", "Charging the sensor", "Shaking the sensor"],
    ["What does a good result show?", "Numbers that follow the object's movement", "Random noise only", "Nothing", "Colour"],
    ["What could you add next?", "A way to store the readings", "A bigger screen", "A louder speaker", "More paint"],
    ["Why use averaging here?", "To smooth out noisy readings", "To make them louder", "To make them brighter", "To charge"],
    ["What skill does this project combine?", "Sensing, averaging and Serial output", "Only painting", "Only sound", "Only printing"]
  ];

  // Chapter 2: Autonomous Navigation
  Q["5.2.1"] = [
    ["What is an autonomous robot?", "One that senses, decides and acts without a person controlling each move", "A remote car", "A painted box", "A printed poster"],
    ["What are two good first autonomous examples?", "Line followers and obstacle avoiders", "Paper planes and kites", "Cups and plates", "Books and pens"],
    ["Does an autonomous robot need a person for each move?", "No", "Yes, always", "Only in paint", "Only at night"],
    ["What does autonomous mean?", "Self-governing", "Painted", "Loud", "Heavy"],
    ["What does an autonomous robot decide with?", "Its sensors and program", "Its paint", "Its label", "Its colour"],
    ["What are the three steps of autonomy?", "Sense, decide, act", "Paint, print, sell", "Charge, stop, reset", "Sing, dance, sleep"],
    ["What is the difference between remote control and autonomy?", "Autonomy decides by itself", "Remote control decides by itself", "They are the same", "Neither moves"],
    ["Why are line followers popular?", "They are a clear first autonomous task", "They are the loudest", "They are the heaviest", "They are the most expensive"],
    ["What is an obstacle avoider?", "A robot that turns away from things in its path", "A robot that paints walls", "A robot that charges", "A robot that prints"],
    ["What is a key skill for autonomy?", "Making good decisions from sensor data", "Painting well", "Printing fast", "Singing"]
  ];
  Q["5.2.2"] = [
    ["What is a control loop?", "Repeating sense, decide and act many times per second", "A paint roller", "A battery", "A label"],
    ["Which step comes first in the loop?", "Sense", "Act", "Decide", "Charge"],
    ["What happens after acting in the loop?", "The loop starts again", "The robot stops forever", "The robot is painted", "The robot sleeps"],
    ["Why do robots repeat the loop many times per second?", "To react quickly to changes", "To make noise", "To change colour", "To charge the battery"],
    ["What does decide compare?", "The reading with what you want", "The colour with the size", "The name with the price", "The time with the weather"],
    ["What does act change?", "The motors or outputs", "The name", "The colour", "The price"],
    ["What is a loop in code?", "Code that repeats", "A piece of string", "A paint roller", "A battery"],
    ["How fast should a line-follower loop run?", "Fast enough to react to the line", "Once a day", "Once a year", "Never"],
    ["What is a common mistake?", "A loop that is too slow to react", "A loop that is too fast", "A loop with no code", "A loop in paint"],
    ["What does a robot do if its loop stops?", "It stops responding", "It becomes faster", "It charges", "It paints"]
  ];
  Q["5.2.3"] = [
    ["If the left sensor sees the line, what should the robot do?", "Turn left", "Turn right", "Stop forever", "Reverse"],
    ["If the right sensor sees the line, what should the robot do?", "Turn right", "Turn left", "Stop", "Spin"],
    ["If both sensors see the line, what should the robot do?", "Drive straight", "Stop", "Spin", "Reverse"],
    ["What does && mean in the example?", "And", "Or", "Not", "Plus"],
    ["What does ! mean in !rightOnLine?", "Not", "And", "Or", "Plus"],
    ["What does else if do?", "Checks another condition if the first is false", "Repeats forever", "Prints a colour", "Stops the robot"],
    ["What is the final else doing in the example?", "Driving forward by default", "Turning left", "Reversing", "Stopping"],
    ["Why use if statements for line following?", "To choose an action from the sensor state", "To change colour", "To make music", "To charge"],
    ["What is leftOnLine?", "A true or false reading from the left sensor", "A colour", "A distance", "A name"],
    ["What happens if neither sensor sees the line?", "The robot may drive forward or search", "The robot charges", "The robot prints", "The robot paints"]
  ];
  Q["5.2.4"] = [
    ["What is a P controller?", "A controller whose correction is proportional to the error", "A printer", "A paint brush", "A battery"],
    ["What is the error in the example?", "Left reading minus right reading", "The colour", "The battery", "The name"],
    ["What does Kp do?", "Sets how strongly the robot corrects", "Sets the colour", "Sets the battery", "Sets the name"],
    ["What is the correction in the example?", "Kp times the error", "Kp plus the error", "The error divided by 100", "Zero"],
    ["What happens when the error is bigger?", "The correction is bigger", "The correction is smaller", "Nothing changes", "The robot stops"],
    ["Why is this called proportional?", "Correction is proportional to the error", "It is a colour", "It is a paint", "It is a battery"],
    ["What does steering harder mean?", "A larger correction for the turn", "Slower wheels", "A new battery", "A new colour"],
    ["Why use a P controller first?", "It is simple and a good start", "It is the only option", "It is slow by design", "It is only for paint"],
    ["What variable holds the correction?", "correction", "colour", "label", "motor only"],
    ["What must you do with the correction?", "Apply it to the motor speeds", "Print it only", "Paint it", "Ignore it"]
  ];
  Q["5.2.5"] = [
    ["What happens if Kp is too small?", "The robot is slow to correct", "The robot wobbles", "The robot stops", "The robot charges"],
    ["What happens if Kp is too big?", "The robot wobbles from side to side", "The robot is slow", "The robot charges", "The robot prints"],
    ["Where should you start tuning?", "A small Kp", "A huge Kp", "Zero forever", "Any random value"],
    ["What is the tuning step after starting small?", "Increase until it follows the line", "Paint the robot", "Delete the code", "Remove the sensors"],
    ["What do you do if it wobbles?", "Back off slightly", "Increase Kp a lot", "Stop testing", "Paint the robot"],
    ["Why tune one value at a time?", "So you know what helped", "So the robot is louder", "So it is brighter", "So it charges"],
    ["What is tuning?", "Adjusting values to get good behaviour", "Painting the sensors", "Charging the battery", "Deleting the code"],
    ["What does a good Kp look like?", "The robot follows the line smoothly", "The robot spins", "The robot stops", "The robot sings"],
    ["What is oscillation?", "Repeated swinging side to side", "A still robot", "A dead battery", "A colour"],
    ["Why test on a track?", "To see how tuning changes behaviour", "To paint it", "To charge it", "To make it louder"]
  ];
  Q["5.2.6"] = [
    ["What does obstacle avoidance do?", "Turns the robot when something is close", "Paints the walls", "Charges the robot", "Prints the floor"],
    ["What distance does the example use?", "20 cm", "200 m", "2 m", "2 cm only"],
    ["What happens if readDistanceCm() is less than 20?", "The robot turns right", "The robot charges", "The robot paints", "Nothing"],
    ["What happens if the path is clear?", "The robot drives forward", "The robot stops", "The robot turns left", "The robot spins"],
    ["Which function turns the robot in the example?", "turnRight", "forward", "readDistanceCm", "setup"],
    ["What sensor does obstacle avoidance use?", "The distance sensor", "The line sensor", "The IMU", "The colour sensor"],
    ["Why turn instead of stopping?", "The robot can keep moving around the obstacle", "Stopping is always bad", "Turning is faster", "Turning is louder"],
    ["Why check distance in a loop?", "To keep reacting to new obstacles", "To make the loop longer", "To change colour", "To charge"],
    ["What could go wrong with a too-large avoidance distance?", "The robot may turn too often", "The robot charges", "The robot paints", "Nothing"],
    ["Which combined behaviour is common?", "Drive forward and avoid obstacles", "Only paint", "Only sound", "Only print"]
  ];
  Q["5.2.7"] = [
    ["What is a simple route?", "A list of moves", "A road map", "A colour", "A battery"],
    ["Where do you store the moves?", "In an array", "On the paint", "On the battery", "On the screen"],
    ["How do you run the moves?", "One by one in order", "All at once", "Randomly", "Backwards only"],
    ["Why plan a route?", "To make the robot do a known path", "To make it louder", "To change colour", "To charge"],
    ["What is an array?", "A list of values in order", "A battery", "A paint", "A sensor"],
    ["What could a move be?", "Forward, turn left or stop", "A colour", "A name", "A sound"],
    ["What is a waypoint?", "A point on a route", "A battery", "A sensor", "A colour"],
    ["What happens if a move fails?", "The route may go wrong", "The route becomes faster", "The route paints", "Nothing"],
    ["How can you test a route?", "Run it on a marked floor", "Run it blindfolded", "Never run it", "Run it at night"],
    ["What helps a robot follow a route?", "Accurate sensing and control", "Paint", "Music", "Heat"]
  ];
  Q["5.2.8"] = [
    ["Why are slow robots easier to control?", "They give you time to react and correct mistakes", "They are heavier", "They are louder", "They are brighter"],
    ["When should you increase speed?", "After the robot behaves well at low speed", "Immediately", "Never", "Only in paint"],
    ["What must be within reach when testing autonomous code?", "A stop button", "A paint brush", "A cake", "A battery label"],
    ["Why is speed a safety issue?", "Fast robots can hit things or people", "Speed is always safe", "Speed makes paint dry", "Speed makes noise"],
    ["What should a stop rule do?", "Stop the motors safely", "Speed up", "Paint the robot", "Turn on the lights"],
    ["Who should be near during autonomous tests?", "An adult", "Nobody", "A pet", "The robot"],
    ["Why test in a clear space?", "So the robot cannot hit things", "So it can paint", "So it can charge", "So it can sing"],
    ["What is a good first speed?", "Slow", "Maximum", "Unlimited", "Random"],
    ["What should you do if the robot goes out of control?", "Stop it immediately", "Let it run", "Throw it", "Paint it"],
    ["What habit keeps testing safe?", "Start slow and build up gradually", "Start fast", "Never check", "Ignore limits"]
  ];
  Q["5.2.9"] = [
    ["What should a track be made of?", "Black tape on white paper", "Water", "Paint on glass", "Sand"],
    ["What should you note on each run?", "Where the robot leaves the line", "The colour of the room", "The name of the robot", "The time of day only"],
    ["What should you note at the start?", "The starting position", "The paint", "The battery brand", "The sticker"],
    ["How do you judge a test?", "Count how many runs succeed", "Guess", "Ignore results", "Paint the robot"],
    ["How should you change settings?", "One at a time", "All at once", "Randomly", "Never"],
    ["Why run the robot several times?", "To check results are consistent", "To make it louder", "To charge it", "To paint it"],
    ["What is a good track feature to test?", "Curves and straight parts", "Only a straight line", "Only a circle", "Only paint"],
    ["What does a success rate tell you?", "How often the robot completes the track", "The paint colour", "The battery", "The name"],
    ["What could affect the results?", "Lighting and the floor surface", "The robot name", "The colour of the box", "The teacher's shoes"],
    ["What is a good record to keep?", "Settings and results of each run", "Nothing", "Only the weather", "Only the price"]
  ];
  Q["5.2.10"] = [
    ["What is the line follower project?", "Line sensors, P control and a stop rule on a track", "A paper car", "A drone", "A painted box"],
    ["What track shape should the robot follow?", "A curved track", "A straight line only", "A single dot", "No track"],
    ["What must the robot do at the finish line?", "Stop", "Spin forever", "Reverse", "Charge"],
    ["Which control does the project use?", "P control", "No control", "Only manual control", "Random moves"],
    ["Which sensors does the project use?", "Line sensors", "Microphone only", "Camera only", "Battery only"],
    ["What is the stop rule for?", "Stopping at the finish line", "Painting the track", "Charging", "Speeding up"],
    ["What makes the robot wobble?", "Kp that is too large", "A small Kp", "A correct Kp", "A charged battery"],
    ["How do you know the project works?", "It follows the curved track and stops at the end", "It makes noise", "It flashes", "It is painted"],
    ["Which level ideas does this project use?", "Sensors, control loops and logic", "Only painting", "Only printing", "Only music"],
    ["What is a good extension?", "Add a second lap or an obstacle", "Paint the track", "Remove the sensors", "Make it heavier"]
  ];

  // Chapter 3: Computer Vision Basics
  Q["5.3.1"] = [
    ["What does computer vision let a computer do?", "Understand images from a camera", "Paint walls", "Charge batteries", "Play music"],
    ["What is a camera image made of?", "A grid of pixels", "Water", "Sand", "Wood"],
    ["What is computer vision in simple words?", "Turning pictures into decisions", "Painting pictures", "Printing pictures", "Deleting pictures"],
    ["What could a robot find with vision?", "A red ball", "A battery label", "A paint tin", "A wall"],
    ["What is a camera's role in a robot?", "Provide images for decisions", "Power the motors", "Charge the battery", "Print labels"],
    ["What are rules in computer vision?", "Steps that turn numbers into decisions", "Paint codes", "Battery types", "Motor speeds"],
    ["What is an example of a vision decision?", "The ball is red and on the left", "The sky is blue", "The screen is bright", "The battery is full"],
    ["Which library is recommended for vision?", "OpenCV", "Paint", "Word", "Excel"],
    ["Why use a camera on a robot?", "To see the world around it", "To make it heavier", "To make it louder", "To change colour"],
    ["What is a vision result used for?", "Choosing actions", "Painting the robot", "Charging", "Printing"]
  ];
  Q["5.3.2"] = [
    ["What is a pixel?", "One tiny dot in an image", "A type of motor", "A battery", "A wire"],
    ["What values does each pixel hold?", "Red, green and blue", "Only sound", "Only heat", "Only weight"],
    ["What range is each colour value usually?", "0 to 255", "0 to 13", "0 to 1000", "1 to 3"],
    ["What colour is red = 255, green = 0, blue = 0?", "Red", "Green", "Blue", "White"],
    ["What do mixed red, green and blue make?", "Every colour you see", "Only black", "Only white", "Nothing"],
    ["What does an image contain?", "Many pixels", "One pixel", "No pixels", "Only text"],
    ["Why do pixels matter for detection?", "The computer uses their values", "They are paint", "They are sound", "They are batteries"],
    ["What is a higher resolution?", "More pixels", "Fewer pixels", "A louder image", "A brighter image"],
    ["What happens if the image is dark?", "The pixel values are lower", "The pixels turn to sound", "The pixels are removed", "The pixels charge"],
    ["What does RGB stand for?", "Red, green, blue", "Run, go, build", "Right, go, back", "Round, grey, black"]
  ];
  Q["5.3.3"] = [
    ["What is a colour mask?", "Pixels inside a colour range, shown as where the colour is", "A paper mask", "A battery", "A sound"],
    ["How do you find a colour?", "Keep pixels inside a range", "Paint the robot", "Turn off the camera", "Print the image"],
    ["What is a threshold for colour?", "A lower and upper limit", "A battery", "A label", "A sound"],
    ["What does a mask show?", "Where the colour is in the image", "The battery", "The sound", "The label"],
    ["What do you keep when using a threshold?", "Pixels within the range", "Pixels outside the range only", "No pixels", "Only the border"],
    ["Why use a range instead of one exact colour?", "Lighting changes colours a little", "Exact colours are always perfect", "Ranges are slower", "Ranges are louder"],
    ["What is a common colour space for thresholds?", "HSV", "Paint", "Morse", "Braille"],
    ["What does a mask look like?", "Black and white", "Full rainbow", "Sound", "Text"],
    ["What do the white pixels in a mask mean?", "They match the colour range", "They are broken", "They are batteries", "They are sound"],
    ["What is a good threshold test?", "Check the mask under the real lights", "Test in the dark only", "Never test", "Test with paint"]
  ];
  Q["5.3.4"] = [
    ["What is OpenCV?", "A free library for images and video", "A paint company", "A battery", "A motor"],
    ["How do you install OpenCV for Python?", "With pip", "With a hammer", "With paint", "With a printer"],
    ["What command installs OpenCV in the example?", "pip install opencv-python", "pip paint opencv", "install opencv now", "opencv remove"],
    ["Which language does the example use with OpenCV?", "Python", "Paint", "Word", "Excel"],
    ["What is pip?", "Python's package installer", "A paint tool", "A battery", "A sensor"],
    ["What does opencv-python give you?", "Image tools for Python", "A new computer", "A painting", "A sound"],
    ["Why use a library?", "To avoid writing everything from scratch", "To make code longer", "To make it slower", "To change colour"],
    ["Where do you install it?", "On your computer", "On the paint", "On the battery", "On the screen"],
    ["What do you import after installing?", "cv2", "paint", "serial only", "motor"],
    ["What is a package?", "A ready-made set of code", "A paint pot", "A battery", "A sensor"]
  ];
  Q["5.3.5"] = [
    ["What does cv2.VideoCapture(0) open?", "The first camera", "A printer", "A battery", "A motor"],
    ["What does cap.read() return?", "Whether it worked and a frame", "A colour", "A battery level", "A name"],
    ["What is a frame?", "One image from the camera", "A paint frame", "A wooden frame", "A battery"],
    ["Why is 0 used for the camera?", "It is the first camera", "It means no camera", "It means paint", "It means battery"],
    ["What does the ok variable hold?", "Whether the frame was read", "The colour", "The name", "The battery"],
    ["What do you process after reading a frame?", "The image", "The battery", "The paint", "The label"],
    ["What happens if no camera is found?", "Reading may fail", "The camera paints itself", "The robot charges", "The sound gets louder"],
    ["How often do you read frames in a loop?", "Repeatedly", "Once", "Never", "Once a year"],
    ["What is video, in simple words?", "Many frames shown quickly", "One picture", "A battery", "A paint"],
    ["Which library reads the camera in the example?", "cv2", "pyserial", "datetime", "sqlite3"]
  ];
  Q["5.3.6"] = [
    ["What colour space does the example convert to?", "HSV", "RGB only", "Grey only", "CMYK"],
    ["Which function converts the colour space?", "cv2.cvtColor", "cv2.inRange", "cap.read", "print"],
    ["Which function makes the mask?", "cv2.inRange", "cv2.cvtColor", "cap.read", "print"],
    ["What does cv2.COLOR_BGR2HSV do?", "Converts BGR image colours to HSV", "Makes it black", "Makes it louder", "Makes it smaller"],
    ["What do lower and upper represent?", "The colour range limits", "Battery levels", "Motor speeds", "Names"],
    ["What is the output of inRange?", "A mask image", "A sound", "A name", "A number"],
    ["Why use HSV for colour?", "Hue is easier to match for a colour", "It is shinier", "It is louder", "It is cheaper"],
    ["What does hsv stand for?", "Hue, saturation, value", "High sound voltage", "Heat, speed, volume", "Hard, soft, vital"],
    ["What does the mask tell you after inRange?", "Where the colour is", "How loud it is", "What the battery is", "What the name is"],
    ["Why convert before masking?", "The colour range works better in HSV", "To make it bigger", "To change the name", "To charge"]
  ];
  Q["5.3.7"] = [
    ["What does mask.nonzero() return?", "The positions of matching pixels", "The battery", "The sound", "The name"],
    ["What is xs.mean() used for?", "The average x position", "The average colour", "The battery level", "The sound"],
    ["What does x tell you about the object?", "Left, middle or right", "Its colour", "Its name", "Its battery"],
    ["What must be true before using xs.mean()?", "There are matching pixels", "The camera is off", "The screen is blue", "The battery is full"],
    ["Why check len(xs) > 0?", "To avoid errors when nothing is found", "To make it louder", "To change colour", "To charge"],
    ["What is the centre of the object?", "The average position of its pixels", "The corner only", "The colour", "The name"],
    ["What should you do if the object is on the left?", "Turn left", "Turn right", "Stop", "Reverse"],
    ["What does int(xs.mean()) do?", "Turns the average into a whole number", "Turns it into text", "Deletes it", "Prints it"],
    ["What does ys hold?", "The y positions of matching pixels", "The x positions", "The colour", "The battery"],
    ["What is the largest blob used for?", "Finding the main object", "Painting", "Charging", "Printing"]
  ];
  Q["5.3.8"] = [
    ["Why does lighting matter for vision?", "Light changes colours", "Light makes sound", "Light charges", "Light paints"],
    ["What should you test under?", "The lights where the robot will work", "Only sunlight", "Only darkness", "Only a torch"],
    ["What should you adjust if results change?", "The colour range", "The battery", "The name", "The paint"],
    ["What object can cause problems?", "Shiny objects", "Matte paper", "A black cloth", "Plain wood"],
    ["What causes glare?", "Bright windows or shiny surfaces", "Dark rooms", "Quiet rooms", "Cold rooms"],
    ["What is a good habit for vision projects?", "Test in the real environment", "Test in a different country", "Never test", "Test with paint"],
    ["Why does colour look different in bright light?", "The camera sees different values", "The colour changes its name", "The colour gets heavier", "The colour gets louder"],
    ["What can you do about changing light?", "Recalibrate the range", "Ignore it", "Paint the room", "Remove the camera"],
    ["What is the lesson's tip about windows?", "Avoid bright windows behind the object", "Put the object behind a window", "Turn on all lights only", "Ignore windows"],
    ["What does testing reveal?", "Whether the range works in real conditions", "The paint colour", "The battery brand", "The name"]
  ];
  Q["5.3.9"] = [
    ["What can a trained model recognise?", "Objects, not only colours", "Only colours", "Only sound", "Only smells"],
    ["Which tool from Level 1 trains models?", "Teachable Machine", "Word", "Excel", "Paint"],
    ["What does a model give along with labels?", "Confidence scores", "Paint", "Sound", "Battery"],
    ["How is object detection different from colour detection?", "It learns from examples rather than fixed colour ranges", "It is the same", "It uses paint", "It uses sound"],
    ["What is a label in object detection?", "The name of the object", "A sticker", "A battery", "A colour"],
    ["Why might a trained model be better?", "It handles varied shapes and lighting", "It is always faster", "It is always cheaper", "It is always louder"],
    ["What does a confidence score of 0.9 mean?", "The model is quite sure", "The model is unsure", "The model is broken", "The image is blue"],
    ["Why train with varied examples?", "To make the model more general", "To make it louder", "To make it heavier", "To paint"],
    ["Can a robot use the model's labels?", "Yes, to choose actions", "No, never", "Only for paint", "Only for sound"],
    ["What must you test after training?", "The model on new objects", "The paint", "The battery", "The name"]
  ];
  Q["5.3.10"] = [
    ["What is the red ball project?", "Find a red ball and print left, middle or right", "Build a car", "Paint a robot", "Write a song"],
    ["What do you use to find the red ball?", "A webcam and colour masking", "A microphone", "A printer", "A battery"],
    ["What do you print?", "Whether the ball is left, middle or right", "The colour of the room", "The battery", "The name"],
    ["How do you decide left, middle or right?", "From the ball's x position", "From its colour", "From its name", "From its size only"],
    ["What do you use the result for?", "Choosing a turn direction", "Painting", "Charging", "Printing"],
    ["What is the middle area?", "Near the centre of the image", "The corner", "The bottom", "The top"],
    ["Why check the lighting?", "Because it changes the red range", "To make it louder", "To make it brighter", "To charge"],
    ["What is a good test?", "Move the ball and check the printed side", "Keep the ball still", "Never test", "Paint the ball"],
    ["What library does the project use?", "OpenCV", "Teachable Machine only", "Word", "Excel"],
    ["What is a good extension?", "Make the robot chase the ball", "Paint the ball", "Print the ball", "Hide the ball"]
  ];

  // Chapter 4: Robot Operating System (ROS)
  Q["5.4.1"] = [
    ["What does ROS stand for?", "Robot Operating System", "Rapid Output Sensor", "Robot Output Switch", "Remote Object Servo"],
    ["What does ROS help parts of a robot do?", "Talk to each other", "Paint", "Charge", "Print"],
    ["Which robots use ROS?", "Real robots for cameras, navigation and arms", "Only paper toys", "Only lamps", "Only cakes"],
    ["Is ROS a complete operating system like Windows?", "No, it is a set of tools and libraries", "Yes, exactly", "It is a printer", "It is a paint"],
    ["What do robot programs in ROS talk through?", "Messages", "Paint", "Batteries", "Screens"],
    ["Why do many robot teams use ROS?", "It lets them share code", "It makes robots louder", "It makes robots heavier", "It paints robots"],
    ["What does ROS 2 run on?", "Ubuntu Linux", "Only a toaster", "Only a printer", "Only a phone case"],
    ["What is ROS's main idea?", "Split a robot into many programs that talk", "One huge program", "No programs", "Painting programs"],
    ["Which is an example of a robot part in ROS?", "A camera node", "A paint tin", "A label", "A sticker"],
    ["What is the benefit of separate programs?", "Each one can do one job well", "They are heavier", "They are louder", "They are brighter"]
  ];
  Q["5.4.2"] = [
    ["What is a node?", "A program with one job", "A battery", "A colour", "A label"],
    ["What is an example node?", "A camera node that publishes images", "A paint node", "A battery node", "A sticker node"],
    ["What does a vision node do?", "Finds objects", "Charges the robot", "Paints the robot", "Prints labels"],
    ["What does a drive node do?", "Controls motors", "Reads colours", "Prints", "Sings"],
    ["How many jobs should a node have?", "One", "Ten", "All of them", "None"],
    ["What is a robot in ROS usually made of?", "Many nodes working together", "One huge program", "A paint tin", "A battery"],
    ["What does a node send or receive?", "Messages on topics", "Paint", "Batteries", "Screens"],
    ["Why keep nodes small?", "They are easier to test and reuse", "They are heavier", "They are louder", "They are brighter"],
    ["What is the name for a program in ROS?", "Node", "Sketch", "Module only", "Board"],
    ["What helps nodes talk to each other?", "Topics", "Paint", "Batteries", "Labels"]
  ];
  Q["5.4.3"] = [
    ["What is a topic?", "A named channel for messages", "A robot's name", "A type of motor", "A battery setting"],
    ["What are example topic names?", "/distance and /cmd_vel", "Paint and sand", "Red and blue", "Left and right shoes"],
    ["What do nodes do with topics?", "Publish or subscribe", "Paint them", "Charge them", "Print them"],
    ["What is publishing?", "Sending messages to a topic", "Receiving messages only", "Painting", "Charging"],
    ["What is subscribing?", "Receiving messages from a topic", "Sending messages", "Painting", "Printing"],
    ["What is a good topic name style?", "Short and clear, like /left_line", "Random symbols", "Long sentences", "Emoji"],
    ["Can one topic have many subscribers?", "Yes", "No, never", "Only one ever", "Only on Sundays"],
    ["Why use topics?", "Nodes stay independent and share data", "To make paint", "To charge", "To print"],
    ["What is the data on a topic called?", "A message", "A battery", "A colour", "A sticker"],
    ["What is the role of the slash in /distance?", "It marks the topic name", "It divides numbers", "It starts a comment", "It stops the robot"]
  ];
  Q["5.4.4"] = [
    ["What is a message in ROS?", "The data sent on a topic", "A paint", "A battery", "A label"],
    ["What is std_msgs used for?", "Simple values", "Paint", "Batteries", "Labels"],
    ["What is geometry_msgs used for?", "Positions and speeds", "Music", "Paint", "Printing"],
    ["What is sensor_msgs used for?", "Camera images and laser scans", "Paint", "Batteries", "Labels"],
    ["What does a distance message hold?", "A number in centimetres", "A colour", "A battery", "A name"],
    ["What does a velocity message hold?", "Speeds", "Paint", "Labels", "Colours"],
    ["Why do messages have types?", "So nodes know what data to expect", "To make paint", "To charge", "To print"],
    ["Which message type holds a simple number?", "std_msgs", "geometry_msgs", "sensor_msgs only", "None"],
    ["What happens if the message types do not match?", "Nodes may not communicate correctly", "Robots get brighter", "Robots get louder", "Nothing"],
    ["What is a message package?", "A set of message types", "A paint kit", "A battery", "A sensor"]
  ];
  Q["5.4.5"] = [
    ["What does a publisher do?", "Sends messages", "Receives messages only", "Paints", "Charges"],
    ["What does a subscriber do?", "Receives messages and runs a function", "Sends messages only", "Paints", "Charges"],
    ["What does create_publisher need?", "A message type, topic and queue size", "A colour", "A battery", "A label"],
    ["What does create_subscription need?", "A message type, topic, a function and queue size", "A colour only", "A paint", "A label"],
    ["Do publisher and subscriber need to know each other's names?", "No, only the topic name", "Yes, always", "Only on Sundays", "Only in paint"],
    ["What is the function in a subscription for?", "To run when a message arrives", "To paint", "To charge", "To print"],
    ["What is a queue size?", "How many messages can wait", "A colour", "A battery", "A label"],
    ["Why are publishers and subscribers loosely connected?", "Nodes can change without rewriting each other", "They never change", "They are glued", "They are painted"],
    ["Which words describe the example?", "publisher and subscription", "paint and glue", "battery and label", "screen and sticker"],
    ["What is Float32 in the example?", "A message type for a decimal number", "A colour", "A battery", "A name"]
  ];
  Q["5.4.6"] = [
    ["What operating system does ROS 2 usually run on?", "Ubuntu Linux", "Only Windows 95", "Only a toaster", "Only paper"],
    ["What can run ROS without a robot?", "A simulator", "A paint tin", "A battery", "A sticker"],
    ["What small computer can run ROS?", "A Raspberry Pi", "A paper plane", "A pencil", "A cup"],
    ["What is a virtual machine?", "A computer running inside another computer", "A paint tool", "A battery", "A sensor"],
    ["Why use a simulator?", "To try ROS without hardware", "To make paint", "To charge", "To print"],
    ["What is a benefit of Linux for ROS?", "It is the usual platform", "It is paint", "It is a battery", "It is a sticker"],
    ["What should you install before using ROS?", "The ROS 2 packages for your system", "Paint", "A battery", "A label"],
    ["Is ROS required for every robot?", "No, it is used when a project needs many parts to talk", "Yes, always", "Only in paint", "Only in sound"],
    ["What is a Raspberry Pi?", "A small computer board", "A paint brush", "A battery", "A label"],
    ["Which setup is suggested for beginners?", "A simulator or a Raspberry Pi", "A paint kit", "A cake", "A sticker"]
  ];
  Q["5.4.7"] = [
    ["What does ros2 topic list show?", "The topics that exist", "The battery", "The paint colours", "The labels"],
    ["What does ros2 topic echo show?", "The messages on a topic", "The paint", "The battery voltage only", "The label"],
    ["Which command shows the /distance topic messages?", "ros2 topic echo /distance", "ros2 paint /distance", "ros2 battery /distance", "ros2 label /distance"],
    ["Why use these commands?", "To check what data is flowing", "To make paint", "To charge", "To print"],
    ["What kind of tool is rqt?", "A graphical tool for ROS", "A paint brush", "A battery", "A sticker"],
    ["What do you type in a terminal?", "ros2 topic list", "A colour name", "A song title", "A joke"],
    ["What is a terminal?", "A text window for commands", "A paint pot", "A battery", "A label"],
    ["If a topic is missing from the list, what might be wrong?", "The node that publishes it is not running", "The colour is wrong", "The paint is dry", "The battery is full"],
    ["Why check topics when debugging?", "To see whether data is flowing", "To make it louder", "To change colour", "To charge"],
    ["What does echo mean here?", "Repeat the messages to your screen", "Paint the screen", "Charge the screen", "Delete the screen"]
  ];
  Q["5.4.8"] = [
    ["What does a node graph show?", "Nodes as boxes and topics as arrows", "A paint pattern", "A battery chart", "A sound wave"],
    ["Why draw a graph before coding?", "To find the messages each part needs", "To make it louder", "To change colour", "To charge"],
    ["What should topic names be?", "Clear, like /left_line and /right_line", "Random", "Long sentences", "Emoji"],
    ["What do the arrows show?", "Which topic carries data between nodes", "Paint", "Battery", "Colour"],
    ["What goes in each box?", "A node name", "A colour", "A paint", "A battery"],
    ["What is a useful label on a topic arrow?", "The message type", "The paint colour", "The battery", "The sticker"],
    ["How does a graph help a team?", "Everyone sees how the parts connect", "It makes the robot heavier", "It paints the robot", "It charges"],
    ["What could a graph reveal?", "A missing connection", "The colour of the room", "The battery brand", "The weather"],
    ["Which element is an arrow?", "A topic", "A node", "A battery", "A motor"],
    ["What does a good graph make clearer?", "Who sends what to whom", "The paint colour", "The sound", "The name of the teacher"]
  ];
  Q["5.4.9"] = [
    ["Why do teams share ROS code?", "Packages can be reused on other robots", "Packages make paint", "Packages charge", "Packages print"],
    ["What is a navigation package?", "Code for moving a robot around", "A paint tin", "A battery", "A label"],
    ["How much change might a shared package need?", "Little", "Everything every time", "Huge changes", "A new robot"],
    ["What makes ROS useful for big projects?", "Many parts can be developed separately", "It removes all parts", "It paints the robot", "It charges it"],
    ["What is reuse?", "Using code again in another project", "Painting again", "Charging again", "Deleting"],
    ["Why is sharing good?", "Others can learn from and improve the code", "It makes the code secret", "It makes the robot heavy", "It changes colour"],
    ["What is a package?", "A group of code and files for one job", "A paint kit", "A battery", "A label"],
    ["Why use packages from others?", "To save time on common jobs", "To make it harder", "To make it louder", "To change colour"],
    ["What is a benefit of separate teams?", "Parts can be built in parallel", "Parts stop working", "Parts become paint", "Parts charge"],
    ["What should you check before reusing a package?", "That it fits your robot and version", "The paint colour", "The sticker", "The label"]
  ];
  Q["5.4.10"] = [
    ["What is the ROS graph project?", "Draw nodes and topics for a line-following robot", "Build a car", "Paint a robot", "Write a song"],
    ["Which parts does the robot have in the project?", "A camera, a motor driver and a controller", "Only a paint tin", "Only a label", "Only a battery"],
    ["What must you label on each topic?", "Its message type", "Its colour", "Its name only", "Nothing"],
    ["What does the graph show for the camera?", "A topic of images", "A paint", "A battery", "A label"],
    ["What does the controller do with the camera data?", "Decides turns", "Paints", "Charges", "Prints"],
    ["What does the motor driver receive?", "Drive commands", "Paint", "Battery labels", "Sounds"],
    ["Why draw before coding?", "To plan what each part needs", "To waste time", "To paint", "To charge"],
    ["What makes the graph useful?", "Clear arrows and labels", "Lots of colour", "Hidden arrows", "No names"],
    ["What skill does this project combine?", "ROS thinking with line following", "Only painting", "Only printing", "Only music"],
    ["What is a good next step after the graph?", "Build one node at a time and test topics", "Paint everything", "Delete the graph", "Print the graph"]
  ];

  // Chapter 5: Automation and the Smart Factory
  Q["5.5.1"] = [
    ["What does automation mean?", "A machine does steps in order without a person pressing each button", "A machine that paints", "A machine that prints", "A machine that charges"],
    ["Why do factories use automation?", "To make things quickly and safely", "To make things louder", "To make things heavier", "To make things blue"],
    ["Does automation need a person to press every button?", "No", "Yes, always", "Only on Mondays", "Only in paint"],
    ["What is a sequence in automation?", "Steps in order", "A colour", "A paint", "A battery"],
    ["Which of these is automated?", "A conveyor that moves boxes on a timer", "A bicycle with pedals", "A paper book", "A chair"],
    ["What does a factory automation system do with inputs?", "Reads sensors and switches", "Paints walls", "Charges phones", "Prints posters"],
    ["What does it do with outputs?", "Controls motors and valves", "Reads sensors", "Charges batteries", "Prints"],
    ["What is the benefit of automation for safety?", "Machines follow rules every time", "Machines are random", "Machines are louder", "Machines are slower"],
    ["What is a manual process?", "A person does each step", "A machine does each step", "A robot paints", "A computer prints"],
    ["What is the main goal of automation?", "Repeat tasks reliably", "Make noise", "Change colour", "Charge"]
  ];
  Q["5.5.2"] = [
    ["What does PLC stand for?", "Programmable Logic Controller", "Power Light Circuit", "Printer Line Cable", "Paint Level Control"],
    ["What does a PLC read?", "Inputs like switches and sensors", "Paint", "Music", "Heat only"],
    ["What does a PLC control?", "Outputs like motors and valves", "Music", "Colour", "Paint"],
    ["What is a PLC described as?", "A rugged computer", "A paper plane", "A paint tin", "A battery"],
    ["Which are typical PLC inputs?", "Buttons, sensors and limit switches", "Motors and valves", "LEDs only", "Speakers only"],
    ["Which are typical PLC outputs?", "Motors, lights and valves", "Buttons", "Sensors", "Switches"],
    ["Why is a PLC rugged?", "It works in tough factory conditions", "It is made of paper", "It is made of paint", "It is decorative"],
    ["What is the role of logic in a PLC?", "Decide what outputs do from inputs", "Paint the outputs", "Charge the inputs", "Delete the inputs"],
    ["Why are PLCs used in factories?", "They control machines reliably", "They make music", "They paint walls", "They make paper"],
    ["What is a switch in the example?", "An input", "An output", "A motor", "A battery"]
  ];
  Q["5.5.3"] = [
    ["What is a sequence?", "A list of steps in order", "A colour pattern", "A sound", "A battery"],
    ["What are the steps in the example?", "Start conveyor, wait for box, stop conveyor, push box", "Paint, sand, sleep", "Sing, dance, leave", "Charge, print, close"],
    ["Why write steps before coding?", "To check the logic", "To make paint", "To make it louder", "To charge"],
    ["What does wait for box mean?", "Wait until a sensor detects a box", "Wait a year", "Stop the robot", "Paint the box"],
    ["What happens after the box is detected?", "The conveyor stops and the box is pushed", "The robot paints", "The robot sings", "The robot charges"],
    ["How do you test a sequence?", "One step at a time", "All at once blindly", "Never", "Backwards only"],
    ["What could go wrong in a sequence?", "A step may run at the wrong time", "The robot becomes louder", "The robot charges", "Nothing"],
    ["What is a common way to write a sequence?", "A numbered list", "A paint tin", "A song", "A picture only"],
    ["What makes a sequence reliable?", "Clear, tested steps", "Random steps", "Skipped steps", "Hidden steps"],
    ["What does a sequence describe?", "The order of actions", "The colour", "The battery", "The weight"]
  ];
  Q["5.5.4"] = [
    ["What does a timer do?", "Waits a set time before the next step", "Paints the robot", "Charges the robot", "Prints a label"],
    ["What does millis() give you?", "Time since the board started, in milliseconds", "A colour", "A battery", "A name"],
    ["Why use millis instead of delay?", "The program can keep doing other things", "It makes the robot heavier", "It paints", "It charges"],
    ["What does delay() do to other work?", "Pauses everything", "Speeds it up", "Paints it", "Charges it"],
    ["What is a timer used for in a sequence?", "Wait between steps", "Change colour", "Charge", "Print"],
    ["What unit is millis() in?", "Milliseconds", "Metres", "Volts", "Litres"],
    ["What is a common use of timers?", "Running a task every few seconds", "Painting", "Printing", "Charging"],
    ["What does a timer help avoid?", "Blocking the whole program", "Good timing", "Accurate steps", "Smooth motion"],
    ["Which is better for a robot that must sense while it waits?", "millis-based timing", "delay alone", "No timing", "Painting"],
    ["What is the purpose of a timer in a factory?", "To control how long each step takes", "To make the factory louder", "To paint", "To charge"]
  ];
  Q["5.5.5"] = [
    ["What is an interlock?", "A safety rule that stops one machine when another is unsafe", "A paint tool", "A battery", "A sensor"],
    ["What is an example interlock?", "The conveyor does not start if a guard is open", "The robot paints when it is hot", "The sound plays on Sunday", "The battery charges on Monday"],
    ["Why test interlocks?", "To make sure they work when needed", "To paint them", "To charge them", "To make them louder"],
    ["How should you test an interlock?", "Make the unsafe condition happen on purpose, safely", "Ignore it", "Remove it", "Test it in a crowd"],
    ["What does a guard do?", "Protects people from moving parts", "Paints the floor", "Charges the robot", "Prints labels"],
    ["Who does an interlock protect?", "People and machines", "Only paint", "Only batteries", "Only labels"],
    ["What is the logic of an interlock?", "If unsafe, do not start", "If safe, paint", "If on, charge", "If blue, print"],
    ["Where do interlocks often appear?", "Machines with moving parts", "Paper books", "Garden tools only", "Cake shops"],
    ["Is an interlock a warning or a block?", "It blocks unsafe action", "It only warns", "It paints", "It charges"],
    ["What is a good interlock check?", "The machine stays off while the guard is open", "The machine starts anyway", "The guard is removed", "The guard is painted"]
  ];
  Q["5.5.6"] = [
    ["What is an emergency stop?", "A big red button that cuts power to moving parts", "A paint button", "A charge button", "A print button"],
    ["What should an emergency stop do?", "Stop the machine right away", "Speed up", "Paint", "Charge"],
    ["Where should an emergency stop be?", "Easy to reach", "Hidden", "Behind the machine", "In a cupboard"],
    ["Should every machine have one?", "Yes", "No, never", "Only robots with paint", "Only at night"],
    ["What should happen after an emergency stop is pressed?", "The machine stays stopped until reset", "It restarts at once", "It paints", "It charges"],
    ["Why test an emergency stop before running?", "To make sure it works", "To paint it", "To charge it", "To print it"],
    ["What colour is the usual emergency stop?", "Red", "Blue", "Green", "White"],
    ["Who resets the machine after an emergency stop?", "A responsible person, after checking safety", "The machine itself", "Nobody ever", "The paint"],
    ["Why do emergency stops cut power?", "To stop moving parts quickly and safely", "To make noise", "To change colour", "To charge"],
    ["What is a good habit before running a machine?", "Test the emergency stop", "Ignore it", "Hide it", "Paint it"]
  ];
  Q["5.5.7"] = [
    ["What does a colour sensor do on a conveyor?", "Detects blocks as they pass", "Paints blocks", "Charges blocks", "Prints blocks"],
    ["What decides which bin a block goes into?", "The sequence and the colour reading", "The paint", "The battery", "The label"],
    ["What is a pusher?", "A part that pushes a block into a bin", "A battery", "A sensor", "A paint tin"],
    ["How many bins are planned in the design?", "Two", "Ten", "One", "None"],
    ["What happens if the colour sensor is wrong?", "A block may go to the wrong bin", "The block turns blue", "The block charges", "The block sings"],
    ["Why calibrate the colour sensor?", "So the readings are reliable", "To make it louder", "To change colour", "To charge"],
    ["What sensor type checks the colour?", "A colour sensor", "A servo", "A buzzer", "A speaker"],
    ["What is the job of the conveyor?", "Move blocks along", "Paint blocks", "Charge blocks", "Print blocks"],
    ["Which step comes after detecting the colour?", "Choose the bin and push", "Paint the block", "Charge the block", "Delete the block"],
    ["What does sorting by colour make possible?", "Automatic separation of blocks", "Louder blocks", "Heavier blocks", "Brighter blocks"]
  ];
  Q["5.5.8"] = [
    ["What should you count?", "Finished items", "Paint pots", "Batteries", "Labels"],
    ["Where should you send the total?", "A database", "The paint tin", "The battery", "The label"],
    ["Why track totals over time?", "To see how the line performs", "To change colour", "To charge", "To print"],
    ["What table could store the counts?", "A table with time and count", "A paint table", "A battery table", "A colour table"],
    ["What SQL shows the number of rows?", "SELECT COUNT(*) FROM table;", "SELECT colour FROM table;", "DELETE FROM table;", "CREATE table;"],
    ["What is reporting?", "Sharing results clearly", "Painting", "Charging", "Printing"],
    ["What could a report show?", "Blocks sorted per hour", "The paint colour", "The battery brand", "The room"],
    ["Why count finished items carefully?", "So the data is accurate", "So the count is louder", "So the count is brighter", "So it charges"],
    ["What is a benefit of counting?", "Spotting slowdowns", "Making paint", "Making music", "Charging"],
    ["What should you do if the count looks wrong?", "Check the sensor and logic", "Ignore it", "Paint it", "Delete it"]
  ];
  Q["5.5.9"] = [
    ["What should you plan for a mini conveyor?", "A conveyor, a sensor, a pusher and two bins", "A paint tin", "A battery", "A sticker"],
    ["What should you draw before building?", "The layout and the sequence", "A painting", "A song", "A cake"],
    ["What is the purpose of a layout?", "To show where each part goes", "To make paint", "To charge", "To print"],
    ["Why plan the bins?", "To know where each block goes", "To change colour", "To make it heavier", "To charge"],
    ["Where should the sensor sit?", "Where it can see each block before the bin", "Hidden in a box", "On the ceiling", "In the bin"],
    ["Why plan before building?", "To avoid mistakes and wasted parts", "To make it louder", "To change colour", "To charge"],
    ["What is a good first build?", "A simple version that works", "A huge factory", "A paper model only", "A painting"],
    ["What can you test with a layout?", "How blocks move through the system", "The colour of the room", "The name of the teacher", "The battery brand"],
    ["What must the pusher do?", "Push blocks into the right bin", "Paint blocks", "Charge blocks", "Delete blocks"],
    ["What makes a plan useful?", "It is clear enough to build from", "It is secret", "It is painted", "It is empty"]
  ];
  Q["5.5.10"] = [
    ["What is the smart sorting line project?", "A line that detects, moves and sorts coloured blocks", "A paper plane", "A cake", "A bicycle"],
    ["What should the line do with each block?", "Drop it into the right bin", "Paint it", "Charge it", "Print it"],
    ["What safety feature must be included?", "An emergency stop", "A paint roller", "A sticker", "A battery label"],
    ["What should you log for every block?", "A database entry", "A paint mark", "A sticker", "A label"],
    ["What sensor detects the colour?", "A colour sensor", "A servo", "A buzzer", "A speaker"],
    ["What must the line do when the emergency stop is pressed?", "Stop the moving parts", "Speed up", "Paint", "Charge"],
    ["What skill does this project combine?", "Sensors, sequences, safety and data", "Only painting", "Only sound", "Only printing"],
    ["How do you know the project works?", "Blocks sort correctly and every block is logged", "It is painted", "It is loud", "It is heavy"],
    ["What is a good test?", "Run a batch of mixed blocks", "Run one block only", "Never run", "Run in the dark only"],
    ["What could you improve next?", "Add a live counter on a screen", "Paint the line", "Remove the sensor", "Make it heavier"]
  ];
})();
