// Lesson questions for Level 6 (VRoboVR). 10 questions per lesson.
// Key: "level.chapter.lesson". Each question: [question, correct answer, wrong, wrong, wrong]
(function () {
  window.LESSON_QUIZZES = window.LESSON_QUIZZES || {};
  var Q = window.LESSON_QUIZZES;

  // Chapter 1: What Are VR and AR?
  Q["6.1.1"] = [
    ["What does VR stand for?", "Virtual reality", "Very real", "Video radio", "Volume rate"],
    ["What does a VR headset show?", "A computer-made world instead of your room", "Only your room", "Only text", "Only sound"],
    ["Why does VR look three-dimensional?", "Each eye sees a slightly different image", "The screen is bent", "The sound is louder", "The colour is brighter"],
    ["Which device do you wear for VR?", "A headset", "A watch", "A glove only", "A hat only"],
    ["What replaces your view in VR?", "A virtual world", "A paint wall", "A sound", "A battery"],
    ["Which of these is a VR use?", "Games or training simulations", "Painting a wall", "Charging a phone", "Printing paper"],
    ["What is immersion?", "Feeling inside the virtual world", "Swimming", "A type of battery", "A sensor"],
    ["What does VR often need to track?", "Your head and sometimes your hands", "Your shoes", "Your hair colour", "Your phone"],
    ["Which part makes VR feel real?", "Tracking your movement", "Painting the room", "Turning off the lights", "Adding sound only"],
    ["What is a common headset sensor?", "An IMU", "A toaster", "A fan", "A kettle"]
  ];
  Q["6.1.2"] = [
    ["What does AR stand for?", "Augmented reality", "Automatic robot", "Area radio", "Advanced rig"],
    ["What does AR do?", "Adds graphics on top of the real world", "Replaces the whole world", "Turns off the room", "Charges the battery"],
    ["Which is a simple AR example?", "A phone camera filter", "A paper book", "A wooden table", "A sofa"],
    ["What do you still see in AR?", "The real world", "Only a virtual world", "Nothing", "Only black"],
    ["How is AR different from VR?", "AR keeps the real world visible", "AR replaces the real world", "They are identical", "AR is only sound"],
    ["Which device can show AR without a headset?", "A phone", "A pencil", "A paper plane", "A cup"],
    ["What could AR show on a robot?", "Its planned path", "Its colour only", "Its battery brand", "Nothing"],
    ["Why is AR useful for robots?", "It can show data over the real robot", "It makes the robot heavier", "It paints the robot", "It charges"],
    ["Where is AR often used?", "Phone filters and maps", "Only deep sea", "Only in caves", "Only in trees"],
    ["What is the key idea of AR?", "Adding information to the real view", "Hiding the real view", "Painting the view", "Turning off the view"]
  ];
  Q["6.1.3"] = [
    ["What tracks your head in a headset?", "An IMU and often cameras", "A printer", "A microwave", "A battery"],
    ["What happens when you turn your head?", "The picture turns with you", "The picture stays still", "The picture turns off", "The picture changes colour"],
    ["What is room tracking?", "Following your movement around a space", "Painting the room", "Counting the windows", "Charging the room"],
    ["What can controllers track?", "Hand positions and buttons", "Only shoe sizes", "Only sounds", "Only colours"],
    ["Which sensor measures rotation?", "A gyroscope", "A thermometer", "A kettle", "A fan"],
    ["Which sensor helps sense gravity?", "An accelerometer", "A speaker", "A light bulb", "A printer"],
    ["Why must tracking be fast?", "So the picture keeps up with your movement", "So the battery lasts longer", "So the screen is brighter", "So the sound is louder"],
    ["What is head tracking?", "Knowing which way your head points", "Measuring hair length", "Counting breaths", "Painting your face"],
    ["What is one benefit of tracking?", "A more realistic view", "A heavier headset", "A louder headset", "A brighter headset"],
    ["What can happen if tracking lags?", "The picture can feel wrong and cause discomfort", "The headset charges", "The headset paints", "Nothing ever"]
  ];
  Q["6.1.4"] = [
    ["Why do you see depth in VR?", "Your two eyes see slightly different images", "The screen is curved", "The room is dark", "The sound is loud"],
    ["What is stereo vision?", "Combining two views into one 3D view", "A type of sound", "A battery", "A paint"],
    ["What does your brain do with two images?", "Combines them into a 3D scene", "Ignores them", "Paints them", "Charges them"],
    ["How many eyes are needed for depth?", "Two", "One", "Three", "Ten"],
    ["What makes a headset show two images?", "A screen for each eye or split images", "A single printed picture", "A book", "A sticker"],
    ["What is depth?", "How far away things seem", "How bright they are", "How loud they are", "How heavy they are"],
    ["Why does a flat picture look flat?", "It gives no difference between the two eyes", "It is too bright", "It is too dark", "It is too quiet"],
    ["What helps create the illusion of depth?", "Slightly different images for each eye", "Painting the screen", "Adding more sound", "Turning off lights"],
    ["Can VR work with one eye?", "It loses the depth effect", "Yes, it works perfectly", "It charges", "It paints"],
    ["What is the name of this effect?", "Stereo vision", "Stereo sound only", "Battery effect", "Paint effect"]
  ];
  Q["6.1.5"] = [
    ["What is mixed reality?", "Blending virtual objects with real ones you can interact with", "Only a paint style", "Only a sound effect", "Only a battery"],
    ["What does XR mean?", "An umbrella term for VR, AR and mixed reality", "Extra red", "Extra radio", "Xylophone rock"],
    ["Which is a mixed reality example?", "A virtual table on a real floor that you can touch", "A paper book", "A chair", "A cup"],
    ["What makes mixed reality different from AR?", "Virtual objects behave as if they are part of the real room", "It has no screen", "It has no sound", "It is paint"],
    ["Why is XR a useful term?", "It covers many related technologies", "It is a paint brand", "It is a battery size", "It is a printer"],
    ["What is interaction in mixed reality?", "Touching or moving virtual objects", "Painting walls", "Charging", "Printing"],
    ["Which words are in XR?", "VR, AR and mixed reality", "Paint and sand", "Battery and glue", "Screen and label"],
    ["Is XR a single device?", "No, it is a family of technologies", "Yes, a single toy", "Yes, a paint roller", "Yes, a sticker"],
    ["What is one goal of mixed reality?", "To blend digital and real worlds", "To remove all screens", "To paint the sky", "To charge phones"],
    ["What should you remember about XR?", "It spans from full virtual to real world with additions", "It is only games", "It is only paper", "It is only sound"]
  ];
  Q["6.1.6"] = [
    ["Which field uses VR for training?", "Flight simulators for pilots", "Bakeries", "Gardens only", "Shoe shops"],
    ["How do designers use VR?", "They test rooms before building them", "They paint rooms", "They print rooms", "They sleep in rooms"],
    ["How do robot teams use VR?", "They test in simulation first", "They sleep robots", "They print robots", "They paint robots"],
    ["What is one medical use of VR?", "Practising surgery safely", "Charging a battery", "Painting teeth", "Printing labels"],
    ["Why test in simulation first?", "It is safer and cheaper to find problems", "It makes robots heavier", "It paints robots", "It charges robots"],
    ["What do engineers test in VR?", "Designs and movements", "Paint colours", "Shoe sizes", "Sounds only"],
    ["What is a simulation?", "A safe virtual copy of a real situation", "A real robot", "A paint tin", "A battery"],
    ["Who benefits from VR training?", "Anyone who must practise a skill safely", "Only painters", "Only cooks", "Only drivers of paper cars"],
    ["What is a common use in games?", "Immersive play", "Painting walls", "Printing books", "Charging"],
    ["Why are simulations useful for robots?", "They reveal problems before building", "They make robots shinier", "They make robots louder", "They make robots lighter"]
  ];
  Q["6.1.7"] = [
    ["What is motion sickness in VR?", "Feeling unwell when the picture moves but your body does not", "Seasickness only", "Paint poisoning", "A battery problem"],
    ["How can designers reduce discomfort?", "Keep movement slow and smooth", "Make the movement very fast", "Shake the view", "Flip the view upside down"],
    ["What helps your brain feel steady?", "A clear point to look at", "A flashing screen", "A spinning room", "No reference at all"],
    ["What should you do if you feel dizzy?", "Stop and take off the headset", "Keep going", "Spin faster", "Run around"],
    ["Why do some people feel sick in VR?", "Their eyes and body disagree about movement", "They are too tall", "They are too short", "They have blue eyes"],
    ["Is motion sickness the same for everyone?", "No, it varies between people", "Yes, always the same", "Only for children", "Only for adults"],
    ["What is a common cause of discomfort?", "Lag between head movement and picture", "A bright sun", "A cold room", "A soft chair"],
    ["What is a good first VR experience?", "A slow, calm scene", "A fast racing game", "A roller coaster", "A spinning room"],
    ["Which advice keeps you comfortable?", "Take breaks and stop if unwell", "Never stop", "Ignore dizziness", "Push through"],
    ["What helps reduce lag?", "Good tracking and fast rendering", "A slow computer", "A dim screen", "A loud speaker"]
  ];
  Q["6.1.8"] = [
    ["How often should you take a VR break?", "Every 20 minutes", "Every 5 hours", "Never", "Once a year"],
    ["What is the 20-20-20 idea in the lesson?", "Look at something 6 metres away for 20 seconds", "Walk 20 steps", "Eat 20 snacks", "Jump 20 times"],
    ["How far should you look away to?", "About 6 metres", "About 6 centimetres", "About 6 kilometres", "Straight at the screen"],
    ["When should you stop VR?", "If you feel dizzy", "Never", "Only when your battery dies", "Only when it is dark"],
    ["What kind of space is best?", "A clear area with no furniture nearby", "A crowded room", "A staircase", "A road"],
    ["Why look away from the screen?", "To rest your eyes and body", "To make the screen dirty", "To change colour", "To charge"],
    ["What is a good break habit?", "Stand up, stretch and look at distance", "Keep using VR without rest", "Lie down with the headset on", "Run around the room"],
    ["How long should a session be for beginners?", "Short sessions with breaks", "Many hours without stopping", "All day", "All night"],
    ["What could a break help prevent?", "Eye strain and discomfort", "Battery drain", "Paint dry", "Sound loss"],
    ["What do you do if a session makes you feel unwell?", "Remove the headset and rest", "Keep going", "Spin", "Run"]
  ];
  Q["6.1.9"] = [
    ["Why is VR risky in a crowded room?", "The headset blocks your view of the room", "The headset is too light", "The headset is too quiet", "The headset is too dim"],
    ["Who should be nearby when using VR?", "An adult", "Nobody", "A pet", "The headset"],
    ["What should you clear before VR?", "Trip hazards on the floor", "The paint", "The labels", "The shelves"],
    ["Where should cables be kept?", "Away from walking areas", "On the floor in a path", "In your mouth", "Under the chair"],
    ["When should you take the headset off?", "To check the room", "Never", "Only at the end of a day", "Only when painted"],
    ["Should you run around while wearing a headset?", "No, never", "Yes, always", "Only outside", "Only at night"],
    ["Why use a clear area?", "To avoid bumping into things", "To make the room louder", "To change colour", "To charge"],
    ["What might happen if you cannot see the room?", "You could trip or bump into something", "The headset charges", "The room paints", "Nothing"],
    ["Which is a safety habit?", "Use a guardian and a clear space", "Turn off the lights and run", "Put the headset on a chair and walk", "Use a broken cable"],
    ["What is the best place to try VR?", "A clear, open floor with an adult nearby", "Stairs", "A busy road", "A balcony"]
  ];
  Q["6.1.10"] = [
    ["What is the VR or AR project?", "Pick three apps and decide if each is VR, AR or neither", "Build a car", "Paint a house", "Write a book"],
    ["How many apps do you pick?", "Three", "Ten", "One", "Zero"],
    ["What should you decide for each app?", "Whether it is VR, AR or neither", "Its colour", "Its price", "Its brand"],
    ["What should each explanation be?", "One sentence", "Ten pages", "One word", "A poem"],
    ["What is a good example of AR?", "A phone filter that adds graphics to your face", "A full virtual world", "A paper book", "A chair"],
    ["What is a good example of VR?", "A game where you look around a computer world", "A paper map", "A cup", "A pen"],
    ["Why compare VR and AR?", "To understand the difference clearly", "To make it louder", "To change colour", "To charge"],
    ["What could AR do for a robot lab?", "Show a robot's planned route over the real floor", "Paint the floor", "Charge the robot", "Print labels"],
    ["What is the goal of the project?", "To recognise VR and AR in everyday apps", "To make a robot", "To paint walls", "To write code"],
    ["Which is neither VR nor AR?", "A plain paper book", "A VR game", "An AR filter", "A headset app"]
  ];

  // Chapter 2: Building 3D Worlds
  Q["6.2.1"] = [
    ["What is a 3D world made of?", "Objects placed in space", "Only text", "Only sound", "Only colour"],
    ["What does each object have?", "A position, rotation and size", "Only a name", "Only a colour", "Only a sound"],
    ["Why do 3D worlds need positions?", "So objects can be placed exactly", "So they can be painted", "So they can charge", "So they can sing"],
    ["What is the size of an object?", "How big it is in each direction", "Its colour", "Its battery", "Its name"],
    ["What is rotation?", "How an object is turned", "How loud it is", "How bright it is", "How heavy it is"],
    ["Which of these is a 3D object?", "A cube", "A word", "A sound", "A number"],
    ["What makes a world feel real?", "Objects with correct positions and lighting", "Only text", "Only sound", "Only numbers"],
    ["What can you build in a 3D world?", "A room, a table or a robot", "A paper plane only", "A cake only", "A song only"],
    ["What is the first step to build a world?", "Plan the objects and their positions", "Paint everything", "Delete the scene", "Print the scene"],
    ["Why is a 3D world useful for robots?", "It can simulate or show a robot's space", "It makes the robot heavier", "It paints the robot", "It charges the robot"]
  ];
  Q["6.2.2"] = [
    ["What does x describe?", "Left and right", "Up and down", "Forward and back", "Colour"],
    ["What does y describe?", "Up and down", "Left and right", "Forward and back", "Colour"],
    ["What does z describe?", "Forward and back", "Left and right", "Up and down", "Colour"],
    ["What is position (2, 0, 5)?", "2 right, 0 up or down, 5 forward", "2 up, 0 left, 5 back", "2 red, 0 blue, 5 green", "2 seconds, 0 metres, 5 volts"],
    ["What does y = 0 mean in the example?", "Floor level", "The sky", "The ceiling", "Underwater"],
    ["Which axis is up and down?", "y", "x", "z", "t"],
    ["Which axis is forward and back?", "z", "y", "x", "w"],
    ["Which axis is left and right?", "x", "y", "z", "q"],
    ["Why use three numbers for position?", "A point in 3D space needs three values", "To make numbers bigger", "To change colour", "To charge"],
    ["What is the origin?", "The point where the axes meet", "A battery", "A paint", "A sound"]
  ];
  Q["6.2.3"] = [
    ["What is a game engine?", "Software that runs scenes, physics and graphics", "A car engine", "A paint tin", "A battery"],
    ["Is Unity a game engine?", "Yes", "No, it is paint", "No, it is a battery", "No, it is a printer"],
    ["Is Unity Personal free?", "Yes, for learning and small projects", "No, it costs a fortune", "Only for schools", "Only for adults"],
    ["What does a game engine handle?", "Scenes, physics and graphics", "Only sound", "Only paint", "Only batteries"],
    ["Why use an engine instead of building from scratch?", "It provides ready tools", "It is slower", "It is heavier", "It is louder"],
    ["What is a scene?", "A collection of objects in a world", "A type of motor", "A paint roll", "A sound"],
    ["What does physics do in an engine?", "Makes objects fall and collide", "Paints objects", "Charges objects", "Prints objects"],
    ["What does graphics mean here?", "How the world looks on screen", "How it sounds", "How it charges", "How it prints"],
    ["What is a good first engine for beginners?", "Unity", "A printer", "A calculator", "A paint app"],
    ["What do you use an engine to make?", "Interactive worlds", "Paper only", "Paint only", "Bread"]
  ];
  Q["6.2.4"] = [
    ["What is a GameObject?", "Anything in a Unity scene", "A paint tin", "A battery", "A label"],
    ["Is a camera a GameObject?", "Yes", "No, never", "Only at night", "Only in paint"],
    ["What is a component?", "A part that adds behaviour to a GameObject", "A paint colour", "A battery", "A label"],
    ["What does a Mesh Renderer do?", "Shows what an object looks like", "Charges the object", "Prints the object", "Plays sound"],
    ["What does a Rigidbody give?", "Weight and gravity", "Paint", "A label", "A sound"],
    ["What does Transform store?", "Position, rotation and scale", "Battery", "Name only", "Colour only"],
    ["Which GameObject is a box?", "A Cube", "A Light", "A Camera only", "A Menu"],
    ["Why use components?", "To add behaviour without rewriting everything", "To make it heavier", "To change colour", "To charge"],
    ["What is the name of the basic object for the position?", "Transform", "Sound", "Paint", "Button"],
    ["Can one GameObject have several components?", "Yes", "No, never", "Only one ever", "Only on Sundays"]
  ];
  Q["6.2.5"] = [
    ["What do you use to build a floor?", "A Plane", "A Sphere only", "A Cube only", "A Light"],
    ["What do you use for a table?", "A Cube", "A Plane only", "A Light", "A Camera"],
    ["How do you place an object?", "Change its Transform values", "Print it", "Paint it", "Charge it"],
    ["Why name objects clearly?", "So they are easy to find, like RedBall", "So they are heavier", "So they are louder", "So they charge"],
    ["What is a good name for a ball?", "RedBall", "Thing", "Object1 only", "Blob"],
    ["What is the sign of a placed object?", "Its Transform position has the values you want", "It is painted", "It is charged", "It is printed"],
    ["What does the example room include?", "A floor, a table and a light", "A paint pot", "A battery", "A sticker"],
    ["What happens if you place an object below the floor?", "It may be hidden", "It becomes a light", "It charges", "It prints"],
    ["What is a sensible first room?", "A simple room with a few objects", "A huge city", "No objects", "A thousand objects"],
    ["Why build a room step by step?", "To check each part works", "To make it louder", "To change colour", "To charge"]
  ];
  Q["6.2.6"] = [
    ["What decides how an object looks?", "Its material", "Its name", "Its battery", "Its sound"],
    ["What is Albedo?", "The main colour of a material", "A sound", "A battery", "A label"],
    ["What does Smoothness change?", "How shiny a surface is", "How heavy it is", "How loud it is", "How big it is"],
    ["How do you apply a material?", "Drag it onto an object", "Print it", "Delete the object", "Charge it"],
    ["Should you use many colours at first?", "No, use a few", "Yes, use hundreds", "Only black", "Only white"],
    ["What is a material in Unity?", "A file that describes a surface", "A paint can", "A battery", "A sensor"],
    ["What does a shiny surface reflect?", "More light", "Less light", "Sound", "Heat"],
    ["What creates a new material?", "Create in the Project window", "Print", "Charge", "Delete"],
    ["What is the colour of Albedo changed with?", "The colour picker", "The battery", "The sound", "The label"],
    ["Why use materials?", "To make objects look distinct", "To make objects heavier", "To make objects louder", "To make objects charge"]
  ];
  Q["6.2.7"] = [
    ["What do lights do in a scene?", "Make the scene visible", "Print the scene", "Charge the scene", "Delete the scene"],
    ["What does a Directional light act like?", "The sun", "A candle", "A battery", "A printer"],
    ["What does a Point light act like?", "A lamp glowing from a point", "The sun", "A paint tin", "A battery"],
    ["Why is lighting important?", "It changes how objects look", "It changes the battery", "It changes the sound", "It prints"],
    ["What happens if a scene has no light?", "It may look dark", "It becomes louder", "It becomes heavier", "It charges"],
    ["Which light is best for a sun-like effect?", "Directional", "Point", "Spot only", "None"],
    ["What is a light's main job?", "Illuminate objects", "Store data", "Play sound", "Print"],
    ["Can you move a light?", "Yes", "No, never", "Only at night", "Only when painted"],
    ["What changes when you move a point light?", "Where the light glows from", "The name", "The battery", "The sound"],
    ["What makes a scene look realistic?", "Good lighting and shadows", "No lights", "Only sound", "Only colour"]
  ];
  Q["6.2.8"] = [
    ["What does the Main Camera show?", "What the player sees", "The battery", "The sound", "The paint"],
    ["How can you move the camera?", "Move or rotate it", "Print it", "Paint it", "Charge it"],
    ["What does parenting a camera do?", "Makes it follow another object", "Makes it paint", "Makes it charge", "Makes it print"],
    ["Why follow a character with the camera?", "To keep the action in view", "To make it louder", "To change colour", "To charge"],
    ["Which object is the camera usually attached to?", "The character or robot", "The paint", "The sound", "The label"],
    ["Can a scene have more than one camera?", "Yes", "No, never", "Only one ever", "Only in paint"],
    ["What is the default camera name?", "Main Camera", "Robot", "Light", "Plane"],
    ["What happens if the camera points at the sky?", "You see mostly the sky", "You see the floor", "You see the table", "Nothing"],
    ["What helps the viewer?", "A camera that frames the action clearly", "A camera that spins fast", "A camera turned off", "A dark camera"],
    ["Where is the camera's view shown?", "In the Game view", "In the battery", "On paper", "In the sound"]
  ];
  Q["6.2.9"] = [
    ["What do colliders do?", "Make objects solid", "Make objects charge", "Make objects paint", "Make objects print"],
    ["What happens if the floor has no collider?", "Objects fall through it", "Objects float", "Objects paint", "Objects charge"],
    ["What does a Rigidbody add?", "Weight and gravity", "Colour", "Sound", "Battery"],
    ["Why give the floor a collider?", "So objects stay on it", "So it is louder", "So it is brighter", "So it charges"],
    ["What is a collider?", "An invisible shape for collisions", "A paint roller", "A battery", "A label"],
    ["What happens when a ball hits a table with a collider?", "It bounces or stops", "It disappears", "It turns into a light", "It prints"],
    ["What does gravity do to a Rigidbody?", "Pulls it down", "Pushes it up", "Paints it", "Charges it"],
    ["Which is the common tip in the lesson?", "Give the floor a collider", "Remove all colliders", "Paint colliders", "Charge colliders"],
    ["What is physics in a game engine?", "Simulated movement and collisions", "Painting", "Printing", "Charging"],
    ["Why use physics in a robot simulation?", "To test how the robot moves and collides", "To make it louder", "To change colour", "To charge"]
  ];
  Q["6.2.10"] = [
    ["What is the virtual robot lab project?", "A room with a table, a robot model and a sign", "A car", "A drone", "A painted box"],
    ["What is the robot model made of?", "Cubes", "Water", "Paper only", "Sound"],
    ["What should the sign show?", "The robot's name", "The battery brand", "The paint colour", "The price"],
    ["Why make the room look like your lab?", "So the virtual copy is more useful", "So it is louder", "So it is heavier", "So it charges"],
    ["Which objects are in the project?", "Table, robot model and sign", "Only a light", "Only a camera", "Only a floor"],
    ["What skill does this project use?", "Placing and naming objects", "Painting", "Printing", "Charging"],
    ["What can the lab be used for later?", "Driving the virtual robot", "Painting walls", "Printing", "Charging"],
    ["What is the first step?", "Create the floor", "Paint the sky", "Charge the table", "Print the sign"],
    ["What is a good test?", "Check that the objects are where you planned", "Turn off the lights", "Delete everything", "Paint it all black"],
    ["What is the purpose of the lab?", "A base for the robot twin", "A paint shop", "A battery shop", "A printing shop"]
  ];

  // Chapter 3: Scripting Interactions
  Q["6.3.1"] = [
    ["What are scripts used for?", "Giving objects behaviour", "Printing labels", "Painting walls", "Charging batteries"],
    ["What language are Unity scripts written in?", "C#", "Paint", "English only", "Chinese only"],
    ["How do you attach a script?", "Drag it onto a GameObject", "Print it", "Paint it", "Charge it"],
    ["What does a script make an object do?", "Act or respond", "Glow only", "Sleep only", "Print"],
    ["Where do scripts live in a project?", "In the Assets folder", "In the battery", "On paper", "In the paint"],
    ["What is a script file ending?", ".cs", ".txt only", ".jpg", ".mp3"],
    ["Can one object have many scripts?", "Yes", "No, never", "Only one ever", "Only on Sundays"],
    ["Why use scripts instead of only components?", "To write your own behaviour", "To make it heavier", "To change colour", "To charge"],
    ["What is the link between scripts and GameObjects?", "Scripts run on GameObjects", "They never meet", "Scripts are paint", "Scripts are batteries"],
    ["What do you do after writing a script?", "Save it and press Play", "Print it", "Paint it", "Charge it"]
  ];
  Q["6.3.2"] = [
    ["What does MonoBehaviour give a script?", "Special functions like Update", "A paint tin", "A battery", "A label"],
    ["How often does Update() run?", "Every frame", "Once a day", "Once a year", "Never"],
    ["What is a frame?", "One picture the game draws", "A paint frame", "A battery", "A label"],
    ["Where do you put movement code?", "In Update()", "In a comment", "Outside all functions", "In the battery"],
    ["Does Update() run once or repeatedly?", "Repeatedly, every frame", "Only once", "Never", "Once per second only"],
    ["What must a class inherit from to use Update?", "MonoBehaviour", "Battery", "Paint", "Colour"],
    ["What is the name of the class in the example?", "Mover", "Battery", "Paint", "Colour"],
    ["What does void Update() do?", "Defines the function that runs every frame", "Deletes the object", "Paints the object", "Charges the object"],
    ["What happens if Update has a loop that never ends?", "The game freezes", "The game charges", "The game paints", "The game prints"],
    ["Why is Update useful?", "It keeps the object responsive", "It makes paint", "It makes sound only", "It charges"]
  ];
  Q["6.3.3"] = [
    ["What does Input.GetAxis(\"Horizontal\") return?", "A value from -1 to 1", "A colour", "A name", "A battery"],
    ["What does -1 mean for Horizontal?", "Left", "Right", "Up", "Down"],
    ["What does 1 mean for Horizontal?", "Right", "Left", "Down", "Up"],
    ["Which keys does Horizontal usually use?", "The left and right arrow keys", "The space bar only", "The letter Q only", "The mouse only"],
    ["What does Vertical usually use?", "Up and down or forward and back keys", "Colours", "Sounds", "Batteries"],
    ["What type is h in the example?", "float", "string", "bool only", "colour"],
    ["What does float mean here?", "A decimal number", "A word", "A true or false", "A colour"],
    ["Why use GetAxis instead of checking one key?", "It gives smooth values for movement", "It charges the computer", "It paints the screen", "It prints"],
    ["What is the example axis for forward and back?", "Vertical", "Horizontal", "Fire", "Jump"],
    ["What happens if no keys are pressed?", "The value is 0", "The value is 10", "The value is -10", "The value is random"]
  ];
  Q["6.3.4"] = [
    ["Why multiply by Time.deltaTime?", "So speed stays the same on different computers", "To change colour", "To make it louder", "To charge"],
    ["What is deltaTime?", "The time since the last frame", "The battery level", "The colour", "The score"],
    ["What does transform.Translate do?", "Moves the object", "Paints the object", "Charges the object", "Deletes the object"],
    ["What does new Vector3(h, 0, v) represent?", "A movement direction", "A colour", "A sound", "A battery"],
    ["What happens without deltaTime on a fast computer?", "The object moves faster", "The object stops", "The object paints", "The object charges"],
    ["What is a frame rate?", "How many frames are drawn each second", "How many batteries", "How many colours", "How many names"],
    ["What is speed in the example?", "A number you can set", "A colour", "A battery", "A label"],
    ["Why is deltaTime important for robots in VR?", "It keeps motion consistent", "It paints them", "It charges them", "It prints them"],
    ["Which two values are multiplied together with deltaTime?", "Movement vector and speed", "Colour and sound", "Battery and label", "Screen and paint"],
    ["What does a small deltaTime value mean?", "A short time since the last frame", "A long time", "A colour", "A battery"]
  ];
  Q["6.3.5"] = [
    ["What does the Mover script do?", "Moves the cube left and right with the arrow keys", "Paints the cube", "Charges the cube", "Prints the cube"],
    ["What is public float speed = 2f?", "A speed value you can change in the Inspector", "A colour", "A battery", "A label"],
    ["What is the Inspector?", "The panel that shows an object's settings", "A paint kit", "A battery", "A sensor"],
    ["Where does the script's class name come from?", "The file name", "The colour", "The battery", "The label"],
    ["What does using UnityEngine; do?", "Brings in Unity's classes", "Paints the screen", "Charges the computer", "Prints the code"],
    ["What must the file's class name match?", "The file name", "The colour", "The paint", "The label"],
    ["What does 2f mean?", "A float with the value 2", "A colour", "A string", "A bool"],
    ["What do you test after the script?", "Press Play and move the cube", "Print it", "Paint it", "Charge it"],
    ["What is the cube in the example?", "The object that gets the script", "A paint tin", "A battery", "A label"],
    ["What does transform.Translate use?", "The movement vector and deltaTime", "A colour", "A label", "A sound"]
  ];
  Q["6.3.6"] = [
    ["What does public do to a variable?", "Shows it in the Inspector", "Hides it", "Paints it", "Charges it"],
    ["Why use public variables?", "To change values without editing code", "To make code heavier", "To change colour", "To charge"],
    ["When can you change a public variable?", "In the Inspector, even while playing", "Never", "Only in the paint", "Only in the battery"],
    ["What is the tip in the lesson?", "Change the speed while running to feel the change", "Paint the speed", "Delete the speed", "Charge the speed"],
    ["What type is speed in the example?", "float", "string", "bool", "colour"],
    ["Where does the value appear?", "In the Inspector", "On the battery", "On the paper", "On the wall"],
    ["Why is this useful for testing?", "You can tune values quickly", "It makes paint", "It makes sound", "It charges"],
    ["What does a private variable do in comparison?", "Hides it from the Inspector", "Shows it", "Paints it", "Charges it"],
    ["What happens when you change a value while playing?", "The object uses the new value", "The game crashes", "The paint changes", "The battery changes"],
    ["Why tune values while playing?", "To see the effect right away", "To make it louder", "To change colour", "To charge"]
  ];
  Q["6.3.7"] = [
    ["What does Input.GetKeyDown do?", "Reacts once when a key is first pressed", "Reacts while held forever", "Paints the key", "Charges the key"],
    ["What does KeyCode.Space refer to?", "The space bar", "The enter key", "The shift key", "The mouse"],
    ["What does Debug.Log do?", "Prints a message to the Console", "Paints the object", "Charges the object", "Deletes the object"],
    ["What does the example print?", "Jump!", "Run!", "Stop!", "Nothing"],
    ["What is the difference between GetKey and GetKeyDown?", "GetKeyDown reacts once on press", "They are identical", "GetKey paints", "GetKeyDown charges"],
    ["Where do you see Debug.Log messages?", "In the Console", "On the paint", "On the battery", "On the label"],
    ["Why use GetKeyDown for jumping?", "A single press should jump once", "Jumping should last forever", "Jumping should paint", "Jumping should charge"],
    ["What does an if statement check in the example?", "Whether the space bar was pressed this frame", "The colour", "The name", "The battery"],
    ["Which keyword checks the press?", "if", "for", "while", "return only"],
    ["What is a good use of Debug.Log?", "Checking that code runs", "Painting", "Charging", "Printing"]
  ];
  Q["6.3.8"] = [
    ["What is a trigger collider?", "A shape that detects when something enters it", "A paint tin", "A battery", "A label"],
    ["What does OnTriggerEnter run?", "When another object enters the trigger", "When the game closes", "When the battery charges", "When paint dries"],
    ["What does the parameter Collider other give?", "The object that entered", "The colour", "The battery", "The name only"],
    ["What does other.name give?", "The name of the object that touched", "Its colour", "Its battery", "Its paint"],
    ["Why use a trigger?", "To detect contact without a solid bump", "To paint", "To charge", "To print"],
    ["What does the Debug.Log in the example show?", "Touched and the object's name", "Only the time", "A colour", "Nothing"],
    ["Can a trigger be used for a finish line?", "Yes", "No, never", "Only on paper", "Only in paint"],
    ["What is a good test for a trigger?", "Move an object into it and check the Console", "Paint it", "Charge it", "Print it"],
    ["Which function is called when a collision starts?", "OnTriggerEnter", "Update only", "Start only", "Awake only"],
    ["What is a trigger useful for in robots?", "Detecting a zone or target", "Painting", "Charging", "Printing"]
  ];
  Q["6.3.9"] = [
    ["What does transform.Rotate(0, 90 * Time.deltaTime, 0) do?", "Turns the object slowly around the up axis", "Moves the object up", "Paints it", "Charges it"],
    ["Which axis is up in Unity's rotate example?", "y", "x", "z", "w"],
    ["Why multiply by Time.deltaTime?", "To keep the turn speed steady", "To change colour", "To make it louder", "To charge"],
    ["What is 90 in the example?", "Degrees per second", "Metres", "Volts", "Litres"],
    ["Which function rotates an object?", "transform.Rotate", "transform.Paint", "transform.Charge", "transform.Print"],
    ["What do the three numbers in Rotate mean?", "Rotation around x, y and z", "Colour values", "Battery levels", "Names"],
    ["What happens with a zero for the y value?", "No turn around the up axis", "A full turn", "A colour change", "A battery change"],
    ["Why rotate a robot's sensor?", "To look in different directions", "To make paint", "To charge", "To print"],
    ["What is a degree?", "A unit for angles", "A unit for weight", "A unit for colour", "A unit for sound"],
    ["What does steady rotation help you check?", "Turning behaviour", "Paint quality", "Battery size", "Label colour"]
  ];
  Q["6.3.10"] = [
    ["What is the drive the virtual robot project?", "A virtual robot with a body and wheels driven by arrow keys", "A paper car", "A cake", "A drone"],
    ["What do you use to drive it?", "The arrow keys", "The mouse only", "The microphone", "The battery"],
    ["What should the robot stop at?", "The table", "The sky", "The door only", "The paint"],
    ["What parts does the virtual robot have?", "A body and wheels", "Only paint", "Only a sign", "Only a label"],
    ["What scripts are used?", "A movement script", "A paint script", "A charge script", "A print script"],
    ["What is a good test?", "Drive around and stop at the table", "Stand still", "Turn off the game", "Paint the robot"],
    ["What helps stop the robot at the table?", "A collider or trigger", "A paint", "A label", "A battery"],
    ["Why is this a useful step?", "It prepares for controlling a real robot", "It makes paint", "It charges", "It prints"],
    ["What should you tune first?", "The speed value", "The colour", "The label", "The battery"],
    ["What skill does this project combine?", "Scripting, input and physics", "Only painting", "Only printing", "Only sound"]
  ];

  // Chapter 4: Controlling a Real Robot from VR
  Q["6.4.1"] = [
    ["What is a digital twin?", "A virtual copy of a real object that stays in sync", "A paint pot", "Two identical toys", "A battery"],
    ["Why do engineers use digital twins?", "To test and monitor machines", "To paint machines", "To charge machines", "To print machines"],
    ["What must a digital twin stay in sync with?", "The real object", "A paint colour", "A battery", "A label"],
    ["Is a digital twin a copy?", "Yes, a virtual copy", "No, a paint", "No, a sound", "No, a battery"],
    ["What data keeps the twin updated?", "Sensor readings from the real robot", "Paint", "Labels", "Sound"],
    ["Can a digital twin send commands?", "Yes, to the real object", "No, never", "Only on paper", "Only in paint"],
    ["What is a benefit of a digital twin?", "Safe testing before real movement", "Louder robots", "Heavier robots", "Brighter robots"],
    ["What is the twin's job?", "Show and control the real robot", "Paint the robot", "Charge the robot", "Print the robot"],
    ["What is monitoring?", "Watching the robot's data", "Painting", "Charging", "Printing"],
    ["What word means a virtual copy linked to a real object?", "Digital twin", "Paper twin", "Paint twin", "Battery twin"]
  ];
  Q["6.4.2"] = [
    ["How does a VR button send a command?", "Over WiFi to the robot", "By paint", "By sound only", "By printing"],
    ["What does the example command say?", "forward", "stop everything now", "paint", "charge"],
    ["What receives the command on the robot?", "The ESP32", "The paint", "The battery", "The label"],
    ["What does the ESP32 do with the command?", "Moves the motors", "Paints the robot", "Charges the robot", "Prints a label"],
    ["Which Level 4 idea is this similar to?", "Sending commands over WiFi", "Painting", "Printing", "Charging"],
    ["What is a command?", "An instruction sent to the robot", "A colour", "A battery", "A sticker"],
    ["What function sends the command in the example?", "SendCommand", "Paint", "Charge", "Print"],
    ["What does the example send when Forward is pressed?", "forward", "back", "left", "right"],
    ["Why send commands in text?", "It is simple to read and send", "It is paint", "It is heavy", "It is loud"],
    ["What must the robot be ready to do?", "Receive and act on commands", "Paint itself", "Charge itself", "Print itself"]
  ];
  Q["6.4.3"] = [
    ["What is telemetry?", "Data the robot sends back", "Paint", "A battery", "A sticker"],
    ["What kinds of telemetry are mentioned?", "Distance and battery level", "Colour and name", "Paint and glue", "Sound and music"],
    ["Where can telemetry be shown?", "On a VR panel", "On the paint", "On a label", "On the battery"],
    ["Why send telemetry back?", "So the twin and the user know the robot's state", "To make it louder", "To change colour", "To charge"],
    ["What is battery level used for?", "Warning when the battery is low", "Painting", "Printing", "Singing"],
    ["What is distance telemetry used for?", "Avoiding obstacles", "Painting", "Printing", "Charging"],
    ["How often is telemetry sent?", "Regularly, several times a second or each second", "Once a year", "Never", "Only when painted"],
    ["What does the VR scene do with telemetry?", "Shows the numbers on a panel", "Paints the scene", "Prints the scene", "Charges the scene"],
    ["What is a good format for telemetry?", "Simple numbers with labels", "Random symbols", "Long poems", "Emoji only"],
    ["What is telemetry's main value?", "Knowing what the robot is doing", "Making it louder", "Making it heavier", "Making it brighter"]
  ];
  Q["6.4.4"] = [
    ["What does the virtual robot do with telemetry?", "Moves the same way as the real robot", "Paints itself", "Charges itself", "Prints itself"],
    ["If the real robot turns 30 degrees, what does the twin do?", "Turns 30 degrees", "Turns 90 degrees", "Stops", "Paints"],
    ["What is a twin update?", "Changing the virtual robot based on real data", "Painting the room", "Deleting the robot", "Charging the room"],
    ["Why keep the twin matched?", "So what you see matches what is happening", "So it is louder", "So it is heavier", "So it charges"],
    ["What could cause a mismatch?", "Lag or missing data", "Good data", "Perfect timing", "Painting"],
    ["What should you check if the twin and the robot differ?", "The data and the connection", "The paint colour", "The label", "The sound"],
    ["What is the simplest sync?", "Copy the rotation and position from telemetry", "Copy the colour", "Copy the sound", "Copy the paint"],
    ["What must be sent to update rotation?", "The angle", "The colour", "The name", "The label"],
    ["What does a good sync feel like?", "The twin follows the robot closely", "The twin is random", "The twin is frozen", "The twin is painted"],
    ["Why is updating the twin useful?", "To monitor the robot from the VR scene", "To paint the robot", "To charge the robot", "To print the robot"]
  ];
  Q["6.4.5"] = [
    ["What is latency?", "The delay between command and response", "A colour", "A battery", "A sticker"],
    ["What causes latency in a wireless robot?", "The wireless link and processing", "Paint", "Battery colour", "Labels"],
    ["What should controls handle?", "A short delay", "Perfect timing only", "No delay at all", "Instant reaction only"],
    ["Why avoid fast reactions that need perfect timing?", "A small delay could cause a mistake", "They make the robot louder", "They make it heavier", "They charge it"],
    ["What is a sensible design for lag?", "Controls that still work with a short lag", "Controls that freeze", "No feedback", "Only paint"],
    ["Should the robot react instantly to every command?", "Not always, safety first", "Yes, instantly always", "Only in paint", "Only at night"],
    ["What is a good test for latency?", "Press a button and time the response", "Paint the button", "Read a book", "Count stars"],
    ["What helps reduce delay?", "A good network and efficient code", "A louder speaker", "A dim screen", "A heavier robot"],
    ["What should the VR design show?", "That commands may take a moment", "That commands are instant always", "That nothing happens", "That the robot is painted"],
    ["Why is latency important for VR?", "It affects how the twin and the robot feel", "It makes paint dry", "It charges the battery", "It prints"]
  ];
  Q["6.4.6"] = [
    ["What must the real robot do if the VR app freezes?", "Still stop safely", "Keep going forever", "Paint itself", "Charge itself"],
    ["What failsafe is recommended?", "Stop if no message arrives for 1 second", "Speed up when no message arrives", "Spin when no message arrives", "Print when no message arrives"],
    ["Where should the stop be built?", "On the robot", "Only in the VR app", "On the paint", "On the battery"],
    ["Why not rely only on the VR app to stop the robot?", "The app could freeze", "The app is paint", "The app is too heavy", "The app is too loud"],
    ["How can you test the failsafe?", "Close the VR app and check the robot stops", "Paint the robot", "Charge the robot", "Throw the robot"],
    ["What is a physical stop button?", "A button on the robot that stops it", "A paint button", "A charging button", "A print button"],
    ["What happens if a robot keeps moving after the VR app closes?", "That is unsafe", "That is normal", "That is paint", "That is charging"],
    ["What is a safety design principle?", "The robot must be safe on its own", "The robot needs the app to be safe", "The robot must be painted", "The robot must be charged"],
    ["How often should you test safety?", "Before every session", "Once a year", "Never", "Only when painted"],
    ["Who should be near during tests?", "An adult", "Nobody", "A pet", "The robot"]
  ];
  Q["6.4.7"] = [
    ["What should you log?", "Commands and telemetry", "Only paint", "Only the colour", "Only the weather"],
    ["Why save each command?", "To see what was asked of the robot", "To make it louder", "To change colour", "To charge"],
    ["Why save telemetry?", "To see how the robot responded", "To paint it", "To charge it", "To print it"],
    ["What helps you replay a session?", "Timestamps", "Paint", "Labels", "Sound"],
    ["What do you do after a problem?", "Check the log to find what went wrong", "Ignore the log", "Delete the log", "Paint the log"],
    ["Which SQL command makes a table?", "CREATE TABLE", "INSERT", "SELECT", "UPDATE"],
    ["What is a good timestamp format?", "A date and time as text", "A colour", "A battery", "A label"],
    ["What does a log let you do later?", "Look back at what happened", "Paint over the past", "Charge the past", "Print the past"],
    ["Why store data in a database?", "It is organised and searchable", "It is louder", "It is heavier", "It is brighter"],
    ["What is a benefit of logging?", "Finding patterns and problems", "Making paint", "Making sound", "Making light"]
  ];
  Q["6.4.8"] = [
    ["What should the control panel have?", "A Forward button, a Stop button, a battery display and a distance display", "Only colours", "Only sound", "Only paint"],
    ["Which button should be large and easy to find?", "Stop", "Forward", "Left", "Right"],
    ["Why make the stop button large?", "So it is easy to press quickly in an emergency", "To make it pretty", "To make it heavier", "To change colour"],
    ["What should the panel show?", "Battery and distance", "Paint and labels", "Sound and colour", "Nothing"],
    ["What should be easy to read?", "The numbers and buttons", "Tiny text", "Hidden labels", "Paint"],
    ["Where is the panel placed?", "In the VR scene", "On paper", "On the battery", "On the robot's paint"],
    ["What is a good panel design principle?", "Clear, large and grouped controls", "Tiny and random", "Hidden", "Painted"],
    ["What should each button do?", "Send one command", "Paint the room", "Charge the room", "Print the room"],
    ["Why plan the panel on paper first?", "To think about layout before building", "To paint it", "To charge it", "To print it"],
    ["What makes a control panel usable?", "It is quick to understand and use", "It is hard to read", "It is random", "It is hidden"]
  ];
  Q["6.4.9"] = [
    ["What is a good way to test the twin?", "Send one command at a time", "Send everything at once", "Never test", "Paint the twin"],
    ["What should you compare?", "The real robot and the virtual robot", "The paint colours", "The battery brands", "The labels"],
    ["What should you test first?", "Forward, back, left, right and stop", "Only music", "Only paint", "Only labels"],
    ["What should you write down?", "Any difference between the two", "Nothing", "Only the colour", "Only the weather"],
    ["Why test one command at a time?", "To see clearly what each does", "To make it louder", "To make it heavier", "To charge"],
    ["What could cause a difference?", "Lag, a missing message or a wrong route", "Paint", "Battery colour", "Labels"],
    ["What should happen if they differ?", "Find out why and fix it", "Ignore it", "Paint over it", "Delete the twin"],
    ["Which test is about safety?", "Stop", "Colour", "Label", "Sound"],
    ["What does a successful test show?", "The twin and robot match", "The twin is painted", "The robot is loud", "The robot is charged"],
    ["How often should you retest?", "After each change", "Never", "Once a year", "Only at night"]
  ];
  Q["6.4.10"] = [
    ["What is the digital twin panel project?", "A VR panel that sends a command and shows battery level", "A paper car", "A cake", "A drone"],
    ["What command does the panel send?", "One command, such as forward", "A song", "A colour", "A label"],
    ["What value does the panel show?", "Battery level", "The room colour", "The name", "The label"],
    ["Where does the battery reading come from?", "The robot's telemetry", "The paint", "A label", "A sticker"],
    ["What skill does this project combine?", "VR interface, commands and telemetry", "Only painting", "Only printing", "Only sound"],
    ["How do you know it works?", "The robot moves and the battery shows", "It is painted", "It is loud", "It is heavy"],
    ["What is a good safety step?", "Test the stop before sending other commands", "Skip safety", "Ignore stop", "Turn off the screen"],
    ["What could you add next?", "A distance display", "More paint", "A bigger label", "A louder speaker"],
    ["Why is a single command a good start?", "It keeps the test simple", "It makes it heavier", "It makes it louder", "It charges"],
    ["What is the twin's purpose in the panel?", "To connect VR controls to the real robot", "To paint walls", "To print labels", "To charge phones"]
  ];

  // Chapter 5: Final Project: The VR Robot Lab
  Q["6.5.1"] = [
    ["What does the VR Robot Lab bring together?", "All six levels", "Only paint", "Only sound", "Only printing"],
    ["What three things does the lab build?", "A real robot, a virtual copy and a database", "A paint, a label and a sticker", "A song, a poem and a joke", "A car, a boat and a plane"],
    ["What does the database record?", "What happens in the lab", "The paint colour", "The room temperature", "The weather"],
    ["Which level covers VR basics?", "Level 6", "Level 1", "Level 2", "Level 3"],
    ["Which level covers sensors and autonomy?", "Level 5", "Level 4", "Level 3", "Level 2"],
    ["Which level covers wireless control?", "Level 4", "Level 6", "Level 1", "Level 2"],
    ["Which level covers Python and databases?", "Level 3", "Level 6", "Level 5", "Level 2"],
    ["Which level covers 3D printing?", "Level 2", "Level 6", "Level 1", "Level 5"],
    ["Which level covers Arduino and LEDs?", "Level 1", "Level 6", "Level 2", "Level 5"],
    ["What is the aim of the capstone?", "A working VR and robot system", "A painted room", "A printed poster", "A song"]
  ];
  Q["6.5.2"] = [
    ["What should your plan include?", "The real robot, the VR scene, the database and the network", "Only paint", "Only the battery", "Only a label"],
    ["What is the real robot's part?", "Sensors, motors and an ESP32", "A paint tin", "A label", "A sticker"],
    ["What is the VR scene's part?", "The virtual room and digital twin", "A printer", "A battery", "A label"],
    ["What does the database hold?", "Commands and readings", "Paint", "Labels", "Sound"],
    ["What connects the parts?", "WiFi", "Paint", "Tape only", "Glue"],
    ["Why draw the plan first?", "To see how the parts connect", "To paint it", "To charge it", "To print it"],
    ["What is a block diagram?", "A picture of parts and their links", "A paint pattern", "A song", "A cake"],
    ["What is a good first element to draw?", "The robot", "The paint", "The label", "The sticker"],
    ["What must the network carry?", "Commands and telemetry", "Paint", "Sound only", "Light only"],
    ["What should a plan avoid?", "Missing connections", "Clear labels", "Simple arrows", "Good names"]
  ];
  Q["6.5.3"] = [
    ["What should the real robot do before joining the VR scene?", "Work alone and be tested", "Paint itself", "Charge itself", "Print itself"],
    ["Why test the robot alone first?", "To find problems before connecting", "To make it louder", "To change colour", "To charge"],
    ["What parts does the real robot use?", "Sensors, motors and an ESP32", "Only paint", "Only a label", "Only a battery"],
    ["Which level helps build the robot?", "Levels 1 to 5", "Only Level 6", "Only Level 3", "No levels"],
    ["What should you check before a test?", "Stop button and failsafe", "Paint colour", "Label colour", "Sticker"],
    ["What is the first test?", "Each part on its own", "Everything at once", "No tests", "Paint"],
    ["What is the robot's main job in the lab?", "To move and sense for the twin", "To paint", "To charge", "To print"],
    ["What must the robot be able to do?", "Receive commands and send telemetry", "Only paint", "Only sing", "Only charge"],
    ["What should you keep in mind about the battery?", "Check the voltage before use", "Ignore it", "Paint it", "Charge it while running"],
    ["What makes the real robot safe?", "A stop button and failsafe", "A loud horn", "A paint job", "No checks"]
  ];
  Q["6.5.4"] = [
    ["What do you create in Unity for the lab?", "The room, a robot model and a telemetry panel", "A paper map", "A paint tin", "A battery"],
    ["Why match the real lab?", "So the virtual room is more useful", "To make it louder", "To make it heavier", "To charge"],
    ["What is the robot model made of in the earlier project?", "Cubes", "Water", "Paper only", "Sound"],
    ["What does the telemetry panel show?", "Live values from the robot", "Paint", "Labels", "Sound"],
    ["Which lesson taught the room building?", "Level 6, chapter 2", "Level 1, chapter 1", "Level 4, chapter 3", "Level 5, chapter 4"],
    ["What tool builds the virtual room?", "Unity", "Word", "Excel", "Paint"],
    ["What is a good first step?", "Build the floor and the table", "Paint the sky", "Charge the table", "Print the sign"],
    ["Why make the room match the real lab?", "The twin is easier to trust", "The room is louder", "The room is heavier", "The room is brighter"],
    ["What goes on the panel?", "Battery and distance readings", "Only colour", "Only sound", "Only paint"],
    ["What is the purpose of the virtual room?", "To show and control the real robot", "To paint walls", "To print labels", "To charge phones"]
  ];
  Q["6.5.5"] = [
    ["What is the first connection to build?", "One command and one reading", "The whole system at once", "The paint", "The label"],
    ["What command is used in the example?", "forward", "paint", "charge", "print"],
    ["What reading is shown in the example?", "Battery", "Colour", "Name", "Sound"],
    ["Which function sends the command?", "SendCommand", "Paint", "Charge", "Print"],
    ["How do you add more after the first works?", "Add one more command or reading at a time", "Add everything at once", "Remove everything", "Paint everything"],
    ["What does battery.text show in the example?", "The latest battery reading", "The room colour", "The name", "The label"],
    ["Why start small?", "Easier to find problems", "To make it louder", "To make it heavier", "To charge"],
    ["What language is used in the example?", "C# style Unity code", "Paint", "English only", "Music"],
    ["What must match between VR and the robot?", "The command names", "The colours", "The labels", "The sounds"],
    ["What is a good test after connecting?", "Send forward and check the robot moves", "Paint the robot", "Charge it", "Print it"]
  ];
  Q["6.5.6"] = [
    ["What tables does the example create?", "commands and telemetry", "paint and labels", "sound and colour", "battery and paint"],
    ["What does the commands table store?", "Time and command text", "Colour", "Battery", "Labels"],
    ["What does the telemetry table store?", "Time, battery and distance", "Colour and name", "Paint and labels", "Sound and sticker"],
    ["What type is battery in telemetry?", "REAL", "TEXT", "BOOL", "COLOUR"],
    ["What type is distance?", "REAL", "BOOL", "COLOUR", "DATE only"],
    ["Why have a timestamp on each row?", "To order and replay events", "To make it louder", "To make it heavier", "To charge"],
    ["What is the id column for?", "A unique key for each row", "A colour", "A name", "A sound"],
    ["Which keyword makes a table?", "CREATE TABLE", "INSERT", "SELECT", "UPDATE"],
    ["What does an INSERT add?", "A new row", "A new colour", "A new battery", "A new label"],
    ["What is the benefit of two tables?", "Commands and readings stay organised", "They are louder", "They are heavier", "They are brighter"]
  ];
  Q["6.5.7"] = [
    ["Where should you test first?", "In a safe space", "On a busy road", "Near water", "On a roof"],
    ["What do you check before every run?", "The stop button, failsafe and battery", "The paint", "The label", "The sticker"],
    ["What is the failsafe test?", "Close the VR app and check the robot stops", "Paint the robot", "Charge the robot", "Throw the robot"],
    ["What voltage should you check?", "The battery voltage", "The paint colour", "The sticker", "The label"],
    ["Why are safety checks repeated?", "Conditions change between runs", "To make it louder", "To change colour", "To charge"],
    ["What should you do if a check fails?", "Stop and fix it before continuing", "Ignore it", "Keep running", "Paint over it"],
    ["Who should be present?", "An adult", "Nobody", "A pet", "The robot"],
    ["What is a good order of checks?", "Stop button, failsafe, battery, then movement", "Movement first", "Battery last", "Never check"],
    ["What is the aim of safety checks?", "To protect people and equipment", "To make it louder", "To make it heavier", "To charge"],
    ["What makes a checklist useful?", "It is short and followed every time", "It is long and ignored", "It is painted", "It is secret"]
  ];
  Q["6.5.8"] = [
    ["What should you test end to end?", "The full system from start to finish", "Only the paint", "Only the label", "Only the sound"],
    ["What should you record?", "What works, what fails and how you fixed it", "Only the colour", "Only the weather", "Nothing"],
    ["What is an end-to-end test?", "A test of the whole path", "A paint test", "A battery test", "A label test"],
    ["Why run the full system?", "To see how the parts work together", "To make it louder", "To change colour", "To charge"],
    ["What might a full test reveal?", "Problems between parts", "Paint dry time", "Sticker colour", "Nothing"],
    ["What should you do with problems?", "Fix them and retest", "Hide them", "Paint them", "Ignore them"],
    ["How many times should you test?", "Until it works reliably", "Once", "Never", "Only on paper"],
    ["What is a test log?", "A record of each test and result", "A paint tin", "A battery", "A label"],
    ["What does a reliable system do?", "Works repeatedly", "Works once", "Works randomly", "Never works"],
    ["What is a good result of a full test?", "Clear evidence it works and where it fails", "A louder robot", "A brighter screen", "A heavier robot"]
  ];
  Q["6.5.9"] = [
    ["What should your write-up include?", "Plan, diagram, code highlights, tests and one lesson learned", "Only paint", "Only price", "Only a joke"],
    ["What helps show your project?", "Photos and a short video", "Only text", "A blank page", "A sticker"],
    ["What should you say about problems?", "What went wrong and how you fixed it", "Nothing", "Only colours", "Only weather"],
    ["What is a code highlight?", "An important piece of code and why it matters", "A colour", "A label", "A battery"],
    ["Why include the block diagram?", "It shows how the parts connect", "It is decoration only", "It makes it heavier", "It changes colour"],
    ["What is one lesson you might write?", "Test small steps before connecting everything", "Paint is best", "Batteries are blue", "Labels are fun"],
    ["Why document honestly?", "So others learn what really happened", "To hide problems", "To make it look perfect only", "To make it heavier"],
    ["What makes a write-up useful?", "Clear steps someone else can follow", "Vague notes", "No pictures", "No plan"],
    ["What is a test result?", "What happened when you tested", "A paint colour", "A label", "A sticker"],
    ["Who might read your write-up?", "Teachers, friends or family", "Nobody ever", "Only robots", "Only paint"]
  ];
  Q["6.5.10"] = [
    ["What should you show in the presentation?", "The real robot and the VR twin working together", "Only slides about paint", "Only the battery", "Nothing"],
    ["What should you explain about the database?", "What is stored and why", "Its colour", "Its name only", "Nothing"],
    ["What should you describe?", "One safety feature and one improvement", "Only the paint", "Only the price", "Nothing"],
    ["How should you end?", "Say what you learned and what you would improve", "Say nothing", "Leave the room", "Turn off the robot"],
    ["Why present your project?", "To share what you built and learned", "To make it heavier", "To change colour", "To charge"],
    ["What should you bring?", "The robot and your notes", "Only a paint brush", "Only a sticker", "Nothing"],
    ["What makes a demo convincing?", "Showing the system working clearly", "Hiding the robot", "Skipping tests", "Using no data"],
    ["What is one improvement you might suggest?", "Longer battery life or better failsafes", "A new paint job only", "A louder buzzer only", "Nothing at all"],
    ["What should the audience understand?", "How the parts work together", "The paint colour", "The room", "The weather"],
    ["What is the finish line of the whole course?", "A working connected system you can explain", "A painted box", "A printed poster", "Nothing"]
  ];
})();
