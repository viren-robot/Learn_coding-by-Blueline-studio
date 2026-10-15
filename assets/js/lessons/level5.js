// Level 5: VRoboTech (chapters 1-5, 10 lessons each)
(function () {
  var P = window.LH.P, U = window.LH.U, C = window.LH.C, T = window.LH.T, L = window.LH.L;

  window.LESSONS[5] = {
    1: [
      L("Why sensors matter",
        P("A robot is only as smart as what it can sense. Good sensing answers three questions: what is near me, where am I, and how am I moving?")),
      L("Distance with ultrasonic sensors",
        P("An HC-SR04 ultrasonic sensor sends a sound pulse and times the echo. Distance = echo time x speed of sound / 2.")),
      L("Timing the echo",
        P("The sensor's Echo pin stays HIGH for as long as the sound takes to return. pulseIn() measures that time in microseconds."),
        C(`long us = pulseIn(ECHO, HIGH);`)),
      L("Converting time to centimetres",
        P("Sound travels about 58 microseconds per centimetre there and back, so dividing by 58 gives the distance."),
        C(`long distanceCm = us / 58;`)),
      L("Infrared line sensors",
        P("A line sensor has an infrared light and a light detector. Dark surfaces absorb more light, so the reading changes over a black line."),
        U("Mount it close to the floor", "Check the reading on white and on black", "Use a threshold to decide 'on the line'")),
      L("The IMU: gyroscope and accelerometer",
        P("An IMU measures how fast the robot rotates (gyroscope) and which way gravity pulls (accelerometer). Together they show tilt and turning.")),
      L("Filtering noisy readings",
        P("Sensors jump around. Averaging several readings gives a steadier value."),
        C(`long total = 0;
for (int i = 0; i < 5; i++) {
  total += readDistanceCm();
  delay(10);
}
long average = total / 5;`)),
      L("Calibration",
        P("Calibration means measuring known values and adjusting your numbers so they match reality. Put an object at a known distance and compare."),
        T("Recalibrate sensors when you move the robot to a new room with different light.")),
      L("Sensor fusion idea",
        P("Combining sensors gives better results than one sensor alone. A robot can use wheel encoders and an IMU together to estimate its position.")),
      L("Mini project: distance logger",
        P("Log averaged distance readings to the Serial Monitor, then move an object toward the sensor and watch the numbers change.")
      )
    ],
    2: [
      L("What is autonomy?",
        P("An autonomous robot senses, decides, and acts without a person controlling each move. Line followers and obstacle avoiders are good first examples.")),
      L("The control loop",
        P("Robots repeat a loop many times per second: sense the world, decide what to do, then act.")),
      L("Line following logic",
        P("If the left sensor sees the line, steer left. If the right sensor sees it, steer right. If both see it, drive straight."),
        C(`if (leftOnLine && !rightOnLine) turnLeft();
else if (rightOnLine && !leftOnLine) turnRight();
else forward();`)),
      L("Proportional (P) control",
        P("Steering harder when the robot is further from the line makes the robot correct faster. The correction equals Kp times the error."),
        C(`int error = leftValue - rightValue;
int correction = Kp * error;`)),
      L("Tuning Kp",
        P("If Kp is too small, the robot is slow to correct. If it is too big, the robot wobbles from side to side."),
        U("Start with a small Kp", "Increase it until the robot follows the line", "Back off slightly if it wobbles")),
      L("Obstacle avoidance",
        P("A robot can check the distance ahead and turn when an obstacle is close. Combine the distance sensor with a turning function."),
        C(`if (readDistanceCm() < 20) {
  turnRight();
} else {
  forward();
}`)),
      L("Planning a route",
        P("A simple route is a list of moves. Store the moves in an array and run them one by one.")),
      L("Speed and safety",
        P("Slow robots are easier to control and safer around people. Speed up only after the robot behaves correctly at low speed."),
        T("Always have a stop button within reach when testing autonomous code.")),
      L("Testing on a track",
        P("Build a track with black tape on white paper. Run the robot several times and record where it leaves the line."),
        U("Note the starting position", "Count how many runs succeed", "Change one setting at a time")),
      L("Mini project: a line follower",
        P("Combine the line sensors, a P controller and a stop rule. Your robot should follow a curved track and stop at the finish line.")
      )
    ],
    3: [
      L("What is computer vision?",
        P("Computer vision lets a computer understand images from a camera. A camera image is a grid of tiny dots called pixels.")),
      L("Pixels and colour values",
        P("Each pixel holds red, green and blue values, usually from 0 to 255. Mixing them makes every colour you see."),
        C(`// a red pixel: red = 255, green = 0, blue = 0`)),
      L("Finding colours with thresholds",
        P("To find a colour, keep only pixels whose values are inside a range. The result is a mask that shows where the colour is.")),
      L("Installing OpenCV",
        P("OpenCV is a free library for images and video. Install it for Python with pip, then import it in your code."),
        C(`pip install opencv-python`)),
      L("Reading a camera frame",
        P("OpenCV's VideoCapture reads frames from a camera. Each frame is an image you can process."),
        C(`import cv2
cap = cv2.VideoCapture(0)   # 0 = the first camera
ok, frame = cap.read()`)),
      L("Colour masks in code",
        P("Convert the frame to HSV colour space, then keep pixels in the colour range you want."),
        C(`hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
mask = cv2.inRange(hsv, lower, upper)`)),
      L("Finding the object's position",
        P("Find the largest blob in the mask and read its centre. The x position tells you if the object is left, middle or right."),
        C(`ys, xs = mask.nonzero()
if len(xs) > 0:
    x = int(xs.mean())`)),
      L("Lighting and calibration",
        P("Light changes colours. Test your colour range under the lights where the robot will work, and adjust the range if results change."),
        T("Avoid shiny objects and bright windows behind the object.")),
      L("Object detection with a trained model",
        P("Teachable Machine (Level 1) and other tools can train a model to recognise objects, not just colours. The model gives labels and confidence scores.")),
      L("Mini project: find the red ball",
        P("Use a webcam to find a red ball and print whether it is left, middle or right of the centre. Use the result to choose a turn direction.")
      )
    ],
    4: [
      L("What is ROS?",
        P("ROS (Robot Operating System) is a set of tools and libraries that helps different parts of a robot talk to each other. Real robots use it for cameras, navigation and arms.")),
      L("Nodes: one job each",
        P("A node is a program with one job, like reading a camera or driving motors. A robot is usually many nodes working together."),
        U("camera node: publishes images", "vision node: finds objects", "drive node: controls motors")),
      L("Topics: named channels",
        P("A topic is a named channel, like /distance or /cmd_vel. Nodes publish messages to topics, and other nodes subscribe to receive them.")),
      L("Messages: the data",
        P("A message is the data on a topic. For example, a distance message holds a number in centimetres, and a velocity message holds speeds."),
        U("std_msgs: simple values", "geometry_msgs: positions and speeds", "sensor_msgs: camera images and laser scans")),
      L("Publishers and subscribers",
        P("A publisher sends messages. A subscriber receives them and runs a function. The two never need to know each other's names in the code, only the topic name."),
        C(`publisher = node.create_publisher(Float32, "/distance", 10)
subscriber = node.create_subscription(Float32, "/distance", on_distance, 10)`)),
      L("Running ROS on a Raspberry Pi or Linux",
        P("ROS 2 runs on Ubuntu Linux. A Raspberry Pi or a virtual machine can run it, and simulators let you try ROS without a robot.")),
      L("Using rqt and topic lists",
        P("Tools like ros2 topic list and ros2 topic echo show which topics exist and what data they carry."),
        C(`ros2 topic list
ros2 topic echo /distance`)),
      L("Drawing a ROS graph",
        P("A node graph shows boxes for nodes and arrows for topics. Drawing one before you code helps you find the messages each part needs."),
        T("Name topics clearly, like /left_line and /right_line.")),
      L("Why teams use ROS",
        P("ROS lets teams share code. A navigation package written by one person can be used on another robot with little change.")),
      L("Mini project: the ROS graph of your robot",
        P("Draw the nodes and topics for a line-following robot with a camera, a motor driver and a controller. Label each topic with its message type.")
      )
    ],
    5: [
      L("What is automation?",
        P("Automation means a machine performs steps in order without a person pressing each button. Factories use it to make things quickly and safely.")),
      L("PLCs: the factory brain",
        P("A PLC (Programmable Logic Controller) is a rugged computer that reads inputs like switches and sensors, then controls outputs like motors and valves."),
        U("Inputs: buttons, sensors, limit switches", "Outputs: motors, lights, valves")),
      L("Sequences",
        P("A sequence is a list of steps in order. Write each step before you code it so you can check the logic."),
        C(`1. Start conveyor
2. Wait until box is detected
3. Stop conveyor
4. Push box into the bin`)),
      L("Timers and waiting",
        P("A timer waits for a set time before the next step. In robot code, millis() gives you time without stopping everything else.")),
      L("Interlocks",
        P("An interlock is a safety rule. For example, the conveyor should not start if a guard is open."),
        T("Every interlock should be tested by making the unsafe condition happen on purpose, safely.")),
      L("Emergency stops",
        P("An emergency stop is a big red button that cuts power to moving parts. It should be easy to reach, and it should stop the machine right away."),
        U("Cut power to motors when pressed", "Stay stopped until someone resets it", "Test it every time before running")),
      L("Sorting with sensors",
        P("A colour sensor can detect blocks as they pass. The sequence then decides which bin each block goes into.")),
      L("Counting and reporting",
        P("Count finished items and send the total to a database, so you can see how the line performs over time.")),
      L("Designing a mini conveyor",
        P("Plan a conveyor, a sensor, a pusher and two bins. Draw the layout and the sequence before building.")),
      L("Mini project: the smart sorting line",
        P("Build a sorting line that detects coloured blocks, moves them along, and drops each into the right bin. Add an emergency stop and log every block to a database.")
      )
    ]
  };
})();
