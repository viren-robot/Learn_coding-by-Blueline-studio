// Level 4: IRoboVerse (chapters 1-5, 10 lessons each)
(function () {
  var P = window.LH.P, U = window.LH.U, C = window.LH.C, T = window.LH.T, L = window.LH.L;

  window.LESSONS[4] = {
    1: [
      L("Why robots need wireless control",
        P("A wire is limiting. Wireless control lets you drive a robot from across the room, or let it talk to a database on your computer.")),
      L("Infrared (IR)",
        P("Infrared uses invisible light, like a TV remote. It is cheap and simple, but the remote needs a clear line of sight to the receiver."),
        U("Short range, usually a few metres", "Needs a clear line between remote and receiver", "Can be disturbed by bright sunlight")),
      L("Bluetooth",
        P("Bluetooth is a short-range radio standard. It connects phones to robots easily, usually within about 10 metres."),
        U("Good for controlling a robot from a phone app", "Uses little power", "Works through some walls, but range varies")),
      L("RF radio control (2.4 GHz)",
        P("RC transmitters use radio waves around 2.4 GHz. The signal goes through walls and is hard to block, which is why RC cars and drones use it."),
        U("A transmitter sends the commands", "A receiver decodes them and passes them to the motors", "Each transmitter and receiver pair must be bound together")),
      L("WiFi",
        P("WiFi connects devices to your home network. A robot with WiFi can be controlled from any phone or laptop on the same network, and it can send data to the internet."),
        U("Long range inside a home", "Lets your robot talk to a database or a web page", "Uses more power than Bluetooth")),
      L("The ESP32 chip",
        P("The ESP32 is a small, low-cost chip with both WiFi and Bluetooth built in. It is popular for robot and drone projects because it is powerful and cheap."),
        U("Runs Arduino-style code", "Can host a web page", "Has many pins for motors and sensors")),
      L("Choosing a control method",
        P("Each method suits different jobs. Choose the one that matches range, power, and how you want to control the robot."),
        U("Remote toy car: RF", "Phone control in the same room: Bluetooth", "Web control from anywhere in the house: WiFi", "Simple buttons on a box: IR")),
      L("Latency: the delay in control",
        P("Latency is the time between pressing a button and the robot reacting. Wireless links add a small delay, so robots should not need instant reactions to be safe."),
        T("Design controls that still work if a message arrives a bit late.")),
      L("Safety and failsafes",
        P("A failsafe is a rule that makes the robot stop when something goes wrong. For example, a robot should stop if it loses the signal."),
        U("If no message arrives for 1 second, stop the motors", "Use a big stop button on the transmitter", "Test failsafes before you drive")),
      L("Mini project: choose the right remote",
        P("List three robots you want to build. For each one, pick IR, Bluetooth, RF or WiFi, and explain your choice in two sentences.")
      )
    ],
    2: [
      L("What is an RC car?",
        P("An RC (radio-controlled) car is a robot vehicle that a person drives with a remote. It has motors, wheels, a battery, and a receiver.")),
      L("Parts of an RC car",
        P("Most small robot cars use the same main parts, which you can swap and upgrade."),
        U("Chassis: the frame everything mounts to", "Drive motors and wheels", "Motor driver: switches the motors on and off", "Battery and power switch", "Receiver or microcontroller", "Steering servo for front wheels")),
      L("Differential drive",
        P("A differential drive robot has two drive wheels, one on each side. Spin them at different speeds to turn, or in opposite directions to spin on the spot."),
        U("Both forward: straight", "Left wheel slower: turn left", "Wheels in opposite directions: spin on the spot")),
      L("Steering with a servo",
        P("Car-style steering uses a servo to turn the front wheels. The servo angle decides how sharp the turn is."),
        C(`steering.write(90);   // straight ahead
steering.write(60);   // turn one way
steering.write(120);  // turn the other way`)),
      L("Batteries: safety first",
        P("LiPo and 18650 batteries store a lot of energy. Use the right charger, never leave them charging unattended, and stop using a battery that is swollen or hot."),
        T("Ask an adult to supervise charging. Store batteries in a fireproof bag or box.")),
      L("Wiring the motor driver",
        P("Connect the motor driver to the battery, the motors, and the controller. Common grounds are important for the signals to work."),
        U("Battery positive to the driver's motor power input", "Motor outputs to the two drive motors", "Control pins from the board to IN1, IN2, and the speed pins", "All grounds connected together")),
      L("Writing drive functions",
        P("Make small functions for each movement so the rest of your code stays easy to read."),
        C(`void forward()  { leftMotor(255);  rightMotor(255); }
void backward() { leftMotor(-255); rightMotor(-255); }
void turnLeft() { leftMotor(100);  rightMotor(255); }
void stop()     { leftMotor(0);    rightMotor(0); }`)),
      L("Testing with the wheels off the ground",
        P("Before the first drive, lift the car so the wheels spin in the air. Check that each wheel moves in the right direction."),
        T("Keep the switch within reach so you can cut power quickly.")),
      L("Driving a square",
        P("Test your controls by driving the robot in a square. Measure how close it gets to a square, then adjust the timing or the motor speeds."),
        U("Drive forward for a set time", "Turn 90 degrees using a fixed turn time", "Record the result and make small changes")),
      L("Mini project: a remote-controlled car",
        P("Combine the drive functions with a receiver so a remote button controls the motion. Start with forward and stop only, then add the rest.")
      )
    ],
    3: [
      L("What is a web server on a robot?",
        P("A web server is a program that waits for requests and sends back responses. An ESP32 can run a tiny web server so your robot responds to a phone's browser.")),
      L("Client and server",
        P("In a web conversation, the client asks and the server answers. Your phone is the client, and the ESP32 is the server."),
        U("Client: phone or laptop, asks for an action", "Server: ESP32, does the action and replies")),
      L("IP addresses",
        P("An IP address identifies a device on your network, like 192.168.1.50. Print it to the Serial Monitor so you know where to go."),
        C(`Serial.println(WiFi.localIP());`)),
      L("Connecting the ESP32 to WiFi",
        P("Give the ESP32 your network name and password, then wait until it connects."),
        C(`#include <WiFi.h>

const char* ssid = "YourNetwork";
const char* password = "YourPassword";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
  Serial.println(WiFi.localIP());
}`),
        T("Never share your WiFi password in a photo or in your code on the internet.")),
      L("Routes: one link per action",
        P("Each action can have its own address, called a route. For example, /forward could move the robot forward."),
        U("/forward: drive forward", "/back: drive backward", "/left and /right: turn", "/stop: stop the motors")),
      L("Sending a web page",
        P("The server sends HTML, a web page language, that contains buttons. Each button links to one route."),
        C(`<a href="/forward"><button>Forward</button></a>
<a href="/stop"><button>Stop</button></a>`)),
      L("Handling requests on the ESP32",
        P("The ESP32 web server library calls a function when a route is requested. Your function then moves the motors."),
        C(`server.on("/forward", []() {
  forward();
  server.send(200, "text/plain", "Going forward");
});`)),
      L("Security basics",
        P("Anyone on the same network can reach your robot's web page. Use a password or only allow trusted devices on your home network."),
        U("Change the default password", "Do not open your robot to the internet", "Keep the stop command easy to reach")),
      L("Testing and debugging",
        P("If a button does nothing, check the Serial Monitor first. Print the route name when it is called to see whether the request arrives."),
        U("Is the phone on the same WiFi?", "Did the ESP32 print its IP address?", "Does the route name match the link exactly?")),
      L("Mini project: a control panel",
        P("Build a web page with Forward, Back, Left, Right and Stop buttons. Add a status line that says what the robot is doing.")
      )
    ],
    4: [
      L("What is a quadcopter?",
        P("A quadcopter is a drone with four rotors. It flies by changing the speed of each rotor, which tilts the body and lifts it into the air.")),
      L("Why four rotors?",
        P("Two rotors spin clockwise and two spin counter-clockwise. This cancels out the spinning force so the drone does not rotate out of control."),
        U("Opposite spins balance the drone", "Changing speeds lets it move in every direction", "Four motors can lift more weight than two")),
      L("Throttle: climbing and descending",
        P("Throttle raises or lowers the speed of all four rotors together. More speed means more lift."),
        U("Throttle up: the drone climbs", "Throttle down: the drone falls, slowly")),
      L("Pitch: moving forward and back",
        P("Pitch tilts the drone nose up or down. The drone then moves forward or backward."),
        U("Back rotors faster: nose down, moves forward", "Front rotors faster: nose up, moves backward")),
      L("Roll and yaw",
        P("Roll tilts the drone left or right so it moves sideways. Yaw turns the drone around its vertical axis by changing the balance of the spin directions."),
        U("Roll: left or right tilt", "Yaw: spin left or right on the spot")),
      L("The IMU and balance",
        P("An IMU has a gyroscope and an accelerometer. It measures how fast the drone rotates and which way is down. The flight controller uses this to keep the drone level."),
        U("Gyroscope: rotation speed", "Accelerometer: tilt and gravity", "Flight controller: adjusts the rotors many times each second")),
      L("PID control in simple terms",
        P("A PID controller compares the target angle with the real angle. It makes corrections based on the current error, the past errors, and how fast the error is changing."),
        T("You do not need to tune PID to learn the idea. Just know that the drone keeps correcting itself.")),
      L("ESP drones and their parts",
        P("A small ESP drone uses an ESP32 or similar chip to read sensors and control the motors. Most parts are small, light, and easy to replace."),
        U("Small brushed motors with propellers", "A flight controller board", "A battery, usually a small LiPo", "Propeller guards for safety")),
      L("Drone safety rules",
        P("Drones can cause injury and damage. Fly in an open space, wear eye protection, keep your fingers away from the propellers, and always have an adult supervise."),
        T("Check local drone rules before you fly outside, and never fly near people, animals, roads or airports.")),
      L("Mini project: draw the four rotors",
        P("Draw a quadcopter with four rotors and arrows showing the spin direction. Label which rotors speed up for climb, pitch, roll and yaw.")
      )
    ],
    5: [
      L("Final project overview",
        P("Your final project brings Level 1 to Level 4 together into one connected robot. Plan it, build it, test it, and present it.")),
      L("Plan the system",
        P("Draw a block diagram with inputs, outputs, and the data your robot will send and receive."),
        U("Inputs: remote buttons, sensors", "Processing: the ESP32 and the code", "Outputs: motors, lights, the web page", "Data: readings sent to a database")),
      L("Choose your build",
        P("Pick a vehicle or drone. Keep the design simple enough to finish in the time you have."),
        U("Option A: an RC car with a phone control page", "Option B: a small drone with a remote", "Option C: a robot that logs sensor data")),
      L("Build the chassis or frame",
        P("Use the design skills from Level 2. Print or build the frame, then test-fit the parts before you mount the electronics."),
        T("Leave space for the battery and for wires to move freely.")),
      L("Wire the electronics",
        P("Wire the motor driver, battery, ESP32, and sensors. Double-check the power wiring before you turn on the battery."),
        U("Check polarity on every battery connection", "Keep motor wires away from sensor wires", "Label each wire with tape")),
      L("Write the control code",
        P("Write the control code in small steps. Test one function at a time: drive, then sensor, then logging."),
        C(`void loop() {
  handleWebClient();   // handle phone commands
  readSensors();       // read distance and battery
  sendTelemetry();     // send data to the database
}`)),
      L("Log data to a database",
        P("Send each sensor reading to your database with a timestamp. Later you can ask SQL questions about how the robot performed."),
        C(`INSERT INTO telemetry (time, battery, distance)
VALUES ('2026-10-15 10:00', 7.4, 52);`)),
      L("Testing and safety checks",
        P("Test in a safe space first, with wheels off the ground or the drone tethered. Check the failsafe and the stop button before every run."),
        U("Test the stop button", "Test the signal loss failsafe", "Check battery voltage before flying or driving")),
      L("Documenting your project",
        P("Write down what you built, how it works, and what you learned. Include photos, the block diagram, and a short video if you can."),
        U("Plan and diagram", "Build steps", "Code highlights", "Test results and problems you fixed")),
      L("Present your robot",
        P("Show your robot working, explain your database, and describe one safety feature and one improvement you would make next.")
      )
    ]
  };
})();
