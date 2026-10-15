// Level 6: VRoboVR (chapters 1-5, 10 lessons each)
(function () {
  var P = window.LH.P, U = window.LH.U, C = window.LH.C, T = window.LH.T, L = window.LH.L;

  window.LESSONS[6] = {
    1: [
      L("What is virtual reality?",
        P("Virtual reality (VR) replaces what you see with a computer-made world. A headset shows a different picture to each eye, which creates depth.")),
      L("What is augmented reality?",
        P("Augmented reality (AR) keeps the real world and adds computer graphics on top. A phone camera filter is a simple example of AR.")),
      L("How headsets track your movement",
        P("A headset uses an IMU (gyroscope and accelerometer) and often cameras to track your head. When you turn, the picture turns with you."),
        U("Head tracking: rotation and tilt", "Room tracking: moving around in a space", "Controllers: tracked hands and buttons")),
      L("Two eyes, one world",
        P("Each eye sees a slightly different image. Your brain combines them into a 3D scene. This is called stereo vision.")),
      L("Mixed reality and XR",
        P("XR is an umbrella term for VR, AR and mixed reality. Mixed reality blends virtual objects with real ones that you can interact with.")),
      L("Where VR is used",
        P("VR and AR are used in games, training, medicine, design and science. Engineers test robots in VR before building them."),
        U("Flight simulators train pilots", "Designers test rooms before building them", "Robot teams test in simulation first")),
      L("Comfort and motion sickness",
        P("Some people feel dizzy in VR, especially when the picture moves but the body does not. Good design reduces the problem."),
        U("Keep movement slow and smooth", "Give a clear point to look at", "Stop if you feel unwell")),
      L("VR comfort rules",
        P("Follow these rules every time you use a headset."),
        T("Take a break every 20 minutes. Look at something 6 metres away for 20 seconds. Stop if you feel dizzy, and use a clear space with no furniture nearby.")),
      L("Safety with headsets",
        P("A headset blocks your view of the room. Always use it in a clear area, with an adult nearby, and never run around while wearing one."),
        U("Clear the floor of trip hazards", "Keep cables away from walking areas", "Take the headset off to check the room")),
      L("Mini project: VR or AR?",
        P("Pick three apps or games you know. For each one, decide if it is VR, AR or neither, and explain your choice in one sentence.")
      )
    ],
    2: [
      L("Building 3D worlds",
        P("A 3D world is made of objects placed in space. Each object has a position, rotation and size.")),
      L("Coordinates: x, y and z",
        P("Every point in 3D space has three numbers. x is left and right, y is up and down, and z is forward and back."),
        C(`Position (x, y, z) = (2, 0, 5)
x = 2 steps right
y = 0 at floor level
z = 5 steps forward`)),
      L("Game engines like Unity",
        P("A game engine runs your scene, physics and graphics. Unity is a free engine for learning and small projects. Unity Personal is free for individuals.")),
      L("GameObjects and components",
        P("In Unity, everything in a scene is a GameObject. Components add behaviour, like a Mesh Renderer for looks or a Rigidbody for physics."),
        U("Cube: a box GameObject", "Transform: position, rotation and scale", "Mesh Renderer: what it looks like")),
      L("Building your first room",
        P("Create a floor with a Plane, a table with a Cube, and a light. Place each object by changing its Transform values."),
        T("Name your objects clearly, like Floor, Table and RedBall.")),
      L("Materials and colours",
        P("Materials decide how an object looks. Create a material, change its colour, and drag it onto an object."),
        U("Albedo is the main colour", "Smoothness changes how shiny a surface is", "Use a few colours at first")),
      L("Lighting the scene",
        P("A light makes the scene visible. Directional lights act like the sun, and point lights glow like a lamp.")),
      L("Cameras in a scene",
        P("The Main Camera is what the player sees. Move it, rotate it, or parent it to a character to follow the action.")),
      L("Physics and colliders",
        P("Colliders make objects solid, so a ball does not fall through the table. Rigidbody gives objects weight and gravity."),
        T("Give the floor a collider, or everything will fall away.")),
      L("Mini project: a virtual robot lab",
        P("Build a room with a table, a robot model made of cubes, and a sign with the robot's name. Make it look like your real lab.")
      )
    ],
    3: [
      L("Scripts give objects behaviour",
        P("Scripts are the code that makes objects act. In Unity you write C# scripts and attach them to GameObjects.")),
      L("MonoBehaviour and Update()",
        P("A script that inherits from MonoBehaviour can use special functions. Update() runs once every frame.")),
      L("Reading keyboard input",
        P("Input.GetAxis returns a value between -1 and 1 for keys like the arrow keys. Use it to move objects."),
        C(`float h = Input.GetAxis("Horizontal");   // -1 left, 1 right
float v = Input.GetAxis("Vertical");     // -1 back, 1 forward`)),
      L("Moving with Time.deltaTime",
        P("Frames take different time on different computers. Multiply movement by Time.deltaTime so speed stays the same on all of them."),
        C(`transform.Translate(new Vector3(h, 0, v) * speed * Time.deltaTime);`)),
      L("A complete movement script",
        P("Attach this script to a cube. Press Play, then move it with the arrow keys."),
        C(`using UnityEngine;

public class Mover : MonoBehaviour
{
    public float speed = 2f;

    void Update()
    {
        float h = Input.GetAxis("Horizontal");
        transform.Translate(new Vector3(h, 0, 0) * speed * Time.deltaTime);
    }
}`)),
      L("Public variables in the Inspector",
        P("A public variable appears in the Inspector panel, so you can change its value without editing the code."),
        T("Change the speed in the Inspector while the game is running to see how it feels.")),
      L("Jumping with a key",
        P("Use Input.GetKeyDown to react once when a key is first pressed, such as the space bar."),
        C(`if (Input.GetKeyDown(KeyCode.Space))
{
    Debug.Log("Jump!");
}`)),
      L("Reacting to touch with triggers",
        P("A trigger collider detects when another object enters it. OnTriggerEnter runs when that happens."),
        C(`void OnTriggerEnter(Collider other)
{
    Debug.Log("Touched " + other.name);
}`)),
      L("Rotating objects",
        P("Use transform.Rotate to turn an object. Multiply by Time.deltaTime so the turn speed is steady."),
        C(`transform.Rotate(0, 90 * Time.deltaTime, 0);   // turn slowly around the up axis`)),
      L("Mini project: drive the virtual robot",
        P("Make a virtual robot with a body and wheels. Use the arrow keys to drive it around the lab, and stop it at the table.")
      )
    ],
    4: [
      L("What is a digital twin?",
        P("A digital twin is a virtual copy of a real object that stays in sync with it. Engineers use digital twins to test and monitor machines.")),
      L("Sending commands from VR",
        P("A VR button can send a command, such as 'forward', to the real robot over WiFi. The robot's ESP32 receives it and moves the motors."),
        C(`// In VR, when the Forward button is pressed:
SendCommand("forward");`)),
      L("Receiving telemetry",
        P("Telemetry is data the robot sends back, like distance or battery level. The VR scene can show these numbers on a panel.")),
      L("Updating the virtual robot",
        P("Use the telemetry to move the virtual copy too. If the real robot turns 30 degrees, the twin turns 30 degrees.")),
      L("Latency: the delay",
        P("Wireless messages take time. The virtual robot may show a position that is a little behind the real one."),
        T("Design controls that still work with a short delay, and avoid fast reactions that depend on perfect timing.")),
      L("Safety in digital twins",
        P("If the VR app freezes, the real robot must still stop safely. Build a failsafe on the robot that stops it when no message arrives."),
        U("No message for 1 second: stop", "Stop button on the robot", "Test by turning off the VR app")),
      L("Logging twin data",
        P("Save each command and telemetry reading to a database. You can replay a session later to find what went wrong.")),
      L("Designing the VR control panel",
        P("Plan a panel with a Forward button, a Stop button, a battery display and a distance display. Keep the Stop button large and easy to find.")),
      L("Testing the twin",
        P("Test by sending one command at a time. Check that the real robot and the virtual robot do the same thing."),
        U("Test forward, back, left and right", "Test stop", "Write down any difference between the two")),
      L("Mini project: a digital twin panel",
        P("Create a VR panel that sends one command to a real robot and shows its battery level in the scene.")
      )
    ],
    5: [
      L("The VR Robot Lab overview",
        P("The VR Robot Lab brings all six levels together. You will build a real robot, a virtual copy, and a database that records what happens.")),
      L("Plan the lab",
        P("Draw the whole system: the real robot, the VR scene, the database, and the network between them."),
        U("Real robot: sensors, motors, ESP32", "VR scene: virtual room and digital twin", "Database: stores commands and readings", "Network: WiFi connecting all parts")),
      L("Build the real robot",
        P("Use what you learned in Levels 1 to 5 to build a robot with sensors and motors. Test it on its own first."),
        T("Test each part before connecting it to the VR scene.")),
      L("Build the virtual room",
        P("Create the room, a robot model, and a telemetry panel in Unity. Make the room match your real lab as closely as you can.")),
      L("Connect VR to the robot",
        P("Send commands from VR to the robot and read telemetry back. Start with one command and one reading, then add more."),
        C(`// In VR: send command and display result
SendCommand("forward");
battery.text = "Battery: " + latestBattery + " V";`)),
      L("Log everything",
        P("Create a table for commands and a table for telemetry. Each row should have a timestamp."),
        C(`CREATE TABLE commands (id INTEGER PRIMARY KEY, time TEXT, command TEXT);
CREATE TABLE telemetry (id INTEGER PRIMARY KEY, time TEXT, battery REAL, distance REAL);`)),
      L("Safety checks",
        P("Before every run, check the stop button, the failsafe, the battery level and the space around the robot."),
        U("Test the stop button", "Test the failsafe by closing the VR app", "Check the battery voltage")),
      L("Testing the whole system",
        P("Run the full system from start to finish. Record what works, what fails, and how you fixed each problem.")),
      L("Documenting your project",
        P("Write up your plan, block diagram, code highlights, test results, and one lesson you learned. Add photos or a short video."),
        U("Plan and diagram", "Build and code", "Tests and fixes", "Safety features")),
      L("Present the VR Robot Lab",
        P("Show the real robot and the VR twin working together. Explain your database and one improvement you would make next.")
      )
    ]
  };
})();
