// Lesson questions for Level 2 (IRoboCraft). 10 questions per lesson.
// Key: "level.chapter.lesson". Each question: [question, correct answer, wrong, wrong, wrong]
(function () {
  window.LESSON_QUIZZES = window.LESSON_QUIZZES || {};
  var Q = window.LESSON_QUIZZES;

  // Chapter 1: Introduction to 3D Printing
  Q["2.1.1"] = [
    ["What does a 3D printer build objects from?", "Thin layers, one on top of another", "One solid block", "Paper folded into shapes", "Water frozen in moulds"],
    ["In which direction does a printed object grow?", "From the bottom up", "From the top down", "From left to right only", "Randomly"],
    ["What do you do before a 3D printer can make a part?", "Design it on a computer", "Paint the printer", "Connect a monitor", "Turn it upside down"],
    ["What is the main idea of 3D printing?", "Adding material layer by layer", "Cutting material away", "Melting metal with lasers only", "Folding sheets"],
    ["Which step comes first in making a printed part?", "Design the object in CAD", "Print the object", "Remove the supports", "Sand the part"],
    ["What makes a 3D printer useful for robots?", "It makes custom parts quickly", "It charges batteries", "It plays music", "It makes Wi-Fi"],
    ["What is a 3D model?", "A digital design of an object", "A real object from a shop", "A type of motor", "A paint colour"],
    ["Which file type do printers commonly read?", "STL", "MP3", "DOCX", "JPEG only"],
    ["Why do printed objects need careful design?", "Layers and overhangs affect the result", "Colour is the only factor", "Printers ignore design", "Objects print themselves"],
    ["What is the output of a 3D printer?", "A physical object", "A sound", "A web page", "A battery"]
  ];
  Q["2.1.2"] = [
    ["What does FDM stand for?", "Fused deposition modelling", "Fast digital motor", "Final design machine", "Flexible data module"],
    ["What does the motor do in an FDM printer?", "Pushes filament into the hot nozzle", "Heats the room", "Prints the label", "Turns on Wi-Fi"],
    ["What happens to the filament in the hot end?", "It melts", "It freezes", "It turns into metal", "It disappears"],
    ["What does the nozzle do?", "Deposits a thin line of melted plastic", "Shines a light", "Plays music", "Stores data"],
    ["What happens after each layer?", "The bed moves down or the nozzle moves up", "The printer turns off", "The filament is removed", "The model is deleted"],
    ["What is extruded in an FDM printer?", "Melted filament", "Paper", "Wood", "Glass"],
    ["Which part moves the nozzle across the bed?", "The printer's motion system", "The USB cable", "The screen", "The spool holder only"],
    ["Why must the nozzle be hot?", "So the plastic melts", "So the printer looks good", "So the bed sticks", "So the code uploads"],
    ["What is a hot end?", "The part that melts the filament", "The part that cools the model", "The display", "The power supply"],
    ["What shape is each printed line?", "A thin line that builds a layer", "A full sphere", "A star", "A grid of dots"]
  ];
  Q["2.1.3"] = [
    ["What is PLA made from?", "Plant starch", "Metal", "Glass", "Rubber"],
    ["Which filament is easiest for beginners?", "PLA", "ABS", "Metal", "Glass"],
    ["What is PETG known for?", "Strength and a bit of flexibility", "Being very soft", "Being transparent only", "Conducting electricity"],
    ["What is ABS known for?", "Strength and heat resistance, but it can smell", "Being edible", "Being magnetic", "Melting at room temperature"],
    ["What is filament?", "Plastic used by the printer", "A type of wire for motors", "A display", "A battery"],
    ["Which filament is most likely to have a smell when printing?", "ABS", "PLA", "PETG", "Filament is always odourless"],
    ["Which filament is a good choice for functional parts?", "PETG", "PLA only for every part", "Paper", "Sand"],
    ["What should you check before buying filament?", "The type and the diameter", "The colour of the box only", "The price only", "The shop's logo"],
    ["Is PLA made from fossil fuels?", "No, it is made from plant starch", "Yes, it is made from oil", "It is made from metal", "It is made from air"],
    ["Why choose a filament?", "It depends on the part's job", "It is always the same", "Only the colour matters", "It never matters"]
  ];
  Q["2.1.4"] = [
    ["What is layer height?", "The thickness of each printed layer", "The height of the printer", "The weight of the part", "The speed of the motor"],
    ["What is a typical layer height?", "About 0.1 to 0.3 mm", "About 10 cm", "About 10 m", "About 1 km"],
    ["What do thinner layers give?", "Smoother surfaces but longer print times", "Faster prints", "Weaker parts", "Louder sound"],
    ["What is a good everyday layer height?", "0.2 mm", "5 mm", "0.01 km", "1 metre"],
    ["Which setting gives fine detail for small parts?", "0.1 mm", "0.3 mm", "0.5 mm", "1 mm"],
    ["Which setting prints fast for rough prototypes?", "0.3 mm", "0.1 mm", "0.05 mm", "0.02 mm"],
    ["What happens to print time with thinner layers?", "It gets longer", "It gets shorter", "It stays the same", "It stops"],
    ["Why might you choose 0.3 mm?", "To print quickly when detail does not matter", "To make the printer quieter", "To change the colour", "To print smaller parts"],
    ["What does a smooth surface depend on?", "Layer height", "The USB cable", "The room light", "The printer's name"],
    ["What is a prototype?", "A first version to test an idea", "A final shop product", "A type of motor", "A screen"]
  ];
  Q["2.1.5"] = [
    ["What is infill?", "The pattern inside a printed part", "The paint on the outside", "A type of nozzle", "The power cable"],
    ["What is a typical infill for most prints?", "10 to 20 percent", "100 percent always", "0 percent always", "50 percent always"],
    ["What does higher infill do?", "Makes the part stronger and heavier", "Makes the part weaker and lighter", "Makes it louder", "Makes it transparent"],
    ["Why not print 100 percent infill every time?", "It uses more plastic and time", "It breaks the printer", "It removes colour", "It stops the layers"],
    ["What often matters more than infill for strength?", "Walls and top layers", "The bed colour", "The nozzle name", "The room temperature"],
    ["What shape is a common infill pattern?", "Honeycomb", "Circle only", "Random dots only", "Heart"],
    ["What does infill save?", "Plastic and time", "Electricity only", "Wi-Fi", "Screen space"],
    ["Where is infill?", "Inside the part", "On the USB cable", "Outside the printer", "On the screen"],
    ["Which part of a print usually gives strength?", "The outer walls", "The printer's feet", "The filament spool", "The label"],
    ["What setting controls the amount of infill?", "Infill percentage in the slicer", "The printer's colour", "The room light", "The bed level"]
  ];
  Q["2.1.6"] = [
    ["What are supports?", "Temporary structures under overhangs", "Permanent wings", "Filament spools", "Wires"],
    ["Why are supports needed?", "Printing in mid-air is impossible without them", "They make prints heavier", "They change colour", "They upload code"],
    ["When is a part likely to need supports?", "When it leans out more than about 45 degrees", "When it is flat on the bed", "When it has no edges", "When it is tiny"],
    ["Who can add supports automatically?", "Slicer apps", "The printer's motor", "The USB port", "The screen"],
    ["How should you remove supports?", "Carefully, for example with pliers", "By hitting the part with a hammer", "By melting it", "By ignoring it"],
    ["What is an overhang?", "A part that sticks out with nothing under it", "A part on the floor", "A hole", "A wire"],
    ["What could happen to an overhang without support?", "It can sag", "It becomes bigger", "It changes colour", "It uploads"],
    ["Which angle is a common support threshold?", "About 45 degrees", "About 5 degrees", "About 90 minutes", "About 1 metre"],
    ["Can supports be designed to avoid?", "Yes, by changing the part's shape", "No, never", "Only in space", "Only for metal"],
    ["What type of support is temporary?", "Support material under overhangs", "The base plate", "The frame", "The motor"]
  ];
  Q["2.1.7"] = [
    ["Why must the first layer stick to the bed?", "If it lifts, the whole print can fail", "It makes the print lighter", "It changes the colour", "It charges the printer"],
    ["What can you use to clean the bed?", "Isopropyl alcohol", "Hot water and sugar", "Oil", "Paint"],
    ["What is a brim?", "A thin edge around the base to help it stick", "A type of nozzle", "A motor", "A cable"],
    ["When is a brim useful?", "For parts with small contact areas", "For tall thin towers only", "Never", "For electronics only"],
    ["Why level the bed?", "So the nozzle is close enough to the bed", "So the printer is louder", "So the filament glows", "So the screen works"],
    ["What happens if the nozzle is too far from the bed?", "The first layer may not stick", "The print becomes a sphere", "The printer plays music", "The filament disappears"],
    ["What is a raft?", "A thick base under the part", "A type of motor", "A paint brush", "A battery"],
    ["Which problem happens when a corner lifts?", "Warping", "Melting", "Sparking", "Freezing"],
    ["Why is bed adhesion important?", "A loose first layer ruins the print", "It makes the printer heavier", "It changes the colour", "It charges the battery"],
    ["What is one common cause of poor first-layer sticking?", "A bed that is not level", "A blue filament", "A USB cable", "A short sketch"]
  ];
  Q["2.1.8"] = [
    ["What does a slicer do?", "Cuts a 3D model into layers and creates printer instructions", "Paints the model", "Charges the printer", "Plays music"],
    ["What are printer instructions called?", "G-code", "Sound code", "CSS", "HTML"],
    ["Which slicer apps are mentioned?", "Cura and PrusaSlicer", "Word and Excel", "Chrome and Safari", "Photoshop and Paint"],
    ["What file do you import into a slicer?", "STL", "PNG only", "DOCX", "MP3"],
    ["What can you preview in a slicer?", "The layers", "The sound", "The Wi-Fi", "The battery"],
    ["What do you choose in the slicer?", "Material and layer height", "The room colour", "The USB cable", "The printer's owner"],
    ["Where can you save G-code?", "An SD card or USB stick", "The paper tray", "The screen", "The nozzle"],
    ["Why preview before printing?", "To find problems early", "To make the printer hotter", "To change the filament", "To charge the batteries"],
    ["What does a slicer calculate?", "The path of the nozzle for each layer", "The name of the printer", "The price of plastic", "The weather"],
    ["What is the output of slicing?", "G-code for the printer", "A new 3D model", "A paper report", "A paint job"]
  ];
  Q["2.1.9"] = [
    ["What should you never touch straight after printing?", "The nozzle or hot bed", "The room", "The cable", "The screen"],
    ["Why are moving printer parts a risk?", "They can pinch fingers", "They sing", "They glow", "They are soft"],
    ["Where should a printer sit?", "On a stable surface away from water", "On a wobbly chair", "Next to a pool", "In a bath"],
    ["Where is it best to print?", "A ventilated room with an adult nearby", "A closed cupboard", "A bathroom", "Under a blanket"],
    ["Who should help remove prints or change filament?", "An adult", "Nobody", "A pet", "The printer itself"],
    ["When should you handle a hot nozzle?", "Only after it cools down", "Immediately", "While it is printing", "Always"],
    ["What is a good habit when printing?", "Keep an eye on the printer", "Leave it alone for days", "Cover the vents", "Pull the filament during printing"],
    ["Why ventilate the room?", "Some plastics can give off fumes", "To make the printer colder", "To make the room darker", "To help the Wi-Fi"],
    ["What should you do if the printer smells strange?", "Turn it off and tell an adult", "Keep printing", "Add more filament", "Put it in a drawer"],
    ["Which tip is in the lesson?", "Ask an adult to help with removing prints", "Use the printer without supervision", "Touch the nozzle to test heat", "Print at night unsupervised"]
  ];
  Q["2.1.10"] = [
    ["What is a test print for?", "To check the printer's accuracy", "To waste plastic", "To change the colour", "To charge the battery"],
    ["What is a calibration cube?", "A test cube that checks size accuracy", "A type of battery", "A sensor", "A motor"],
    ["What tool measures the cube accurately?", "Calipers", "A paint brush", "A spoon", "A cup"],
    ["What do you do if the cube is too big?", "Adjust steps or flow settings", "Paint it", "Cut the power cable", "Ignore the cube"],
    ["Why keep a log of settings?", "To repeat settings that work", "To change the printer's name", "To store photos", "To hide results"],
    ["What size is the calibration cube in the activity?", "20 mm", "2 metres", "200 mm", "2 mm"],
    ["What do you check after printing the cube?", "Whether the walls are straight and the top is flat", "The colour of the bed", "The printer's weight", "The USB speed"],
    ["Why calibrate before a big print?", "So the part fits as designed", "So the printer is louder", "So the bed is hotter", "So the filament is cheaper"],
    ["What is a good first test?", "A small, quick print", "A huge print with no test", "Printing the same file ten times", "Printing nothing"],
    ["What should you record after a test?", "What worked and what did not", "Only the price", "Nothing", "The weather"]
  ];

  // Chapter 2: Designing Parts with CAD
  Q["2.2.1"] = [
    ["What does CAD stand for?", "Computer-aided design", "Central automatic data", "Circuit access device", "Compact aluminium design"],
    ["What is CAD used for?", "Drawing 3D objects with exact measurements", "Playing music", "Charging batteries", "Sending emails"],
    ["Why use CAD before printing?", "To design a part exactly before making it", "To make the printer quieter", "To paint the part", "To skip design"],
    ["What do you export from CAD for printing?", "An STL file", "An MP3 file", "A JPEG only", "A ZIP only"],
    ["Which of these is a CAD tool?", "Tinkercad", "Excel", "Chrome", "Calculator"],
    ["What does an exact measurement help with?", "Parts that fit together", "Louder sound", "Brighter lights", "Faster uploads"],
    ["What is a 3D design?", "An object drawn in three dimensions", "A flat picture", "A sound", "A text file"],
    ["Which is an advantage of CAD?", "You can change a design easily", "You can only draw once", "It needs paper", "It needs a microphone"],
    ["What is a sketch in CAD?", "A rough plan before the 3D model", "A finished print", "A battery", "A cable"],
    ["What can CAD help you test before printing?", "Fit and size", "Wi-Fi speed", "Battery life", "Colour of the sky"]
  ];
  Q["2.2.2"] = [
    ["What is Tinkercad?", "A free browser-based CAD tool", "A paid game console", "A type of motor", "A printer brand"],
    ["What do you use to place shapes?", "The Workplane", "The USB port", "The printer bed", "The speaker"],
    ["What is the Ruler tool useful for?", "Measuring and lining things up", "Printing labels", "Playing music", "Charging"],
    ["What does Snap grid do?", "Helps line up shapes precisely", "Changes the colour", "Turns off the computer", "Stores files"],
    ["What do you need to start Tinkercad?", "A free account in a browser", "A printer", "A microphone", "A 3D scanner"],
    ["What is the best website address for Tinkercad?", "tinkercad.com", "tinkerkad.com", "tincard.net", "cadtinker.org"],
    ["What is the Workplane?", "The surface where you build your design", "A printed sheet", "The printer bed", "A menu"],
    ["Why is Tinkercad good for beginners?", "Shapes are dragged and combined", "It needs coding", "It needs a big computer", "It is only for experts"],
    ["What can you do with a selected shape?", "Move, resize and rotate it", "Upload it to the printer only", "Play it", "Delete the internet"],
    ["Which tool helps you line up edges?", "Align", "Print", "Upload", "Share"]
  ];
  Q["2.2.3"] = [
    ["Which shapes are common starting points?", "Boxes, cylinders, spheres and wedges", "Only stars", "Only text", "Only pictures"],
    ["What do solid shapes do?", "Add material", "Remove material", "Charge the battery", "Upload code"],
    ["What do hole shapes do?", "Subtract material", "Add material", "Light an LED", "Play music"],
    ["How do you join shapes together?", "Group them", "Print them twice", "Turn off the screen", "Paint them"],
    ["Where do you set a shape's size?", "In the dimension boxes", "In the printer settings", "In the USB cable", "On the bed"],
    ["What unit is used for 3D printing in the lesson?", "Millimetres", "Kilometres", "Light-years", "Litres"],
    ["Which shape would make a hole for a bolt?", "A cylinder set to hole", "A sphere set to solid", "A wedge set to solid", "A box set to solid"],
    ["What do you do first when designing?", "Start with simple shapes", "Print the design", "Paint the design", "Delete everything"],
    ["What is a common starting shape for a base?", "A box", "A star", "A spiral", "A heart"],
    ["What happens when you group a hole and a block?", "The hole cuts through the block", "The block grows", "The hole becomes a motor", "The block disappears"]
  ];
  Q["2.2.4"] = [
    ["What do you do to make a hole in a block?", "Put a hole shape on top and group", "Print the block twice", "Paint the hole", "Turn the block off"],
    ["What size is the block in the example?", "40 by 20 by 5 mm", "4 by 2 by 0.5 m", "400 by 200 by 50 km", "1 by 1 by 1 cm only"],
    ["What size hole is used for a bolt?", "3.3 mm", "30 mm", "0.3 m", "3 km"],
    ["What do you select before grouping?", "Both the block and the hole", "Only the floor", "Only the ruler", "Nothing"],
    ["What is the purpose of a bolt hole?", "To hold parts together", "To store electricity", "To play music", "To cool the printer"],
    ["Is the hole solid or empty after grouping?", "Empty", "Solid", "Glowing", "Painted"],
    ["Which tool groups shapes?", "Group", "Print", "Upload", "Share"],
    ["What must the hole be to go through the block?", "Taller than the block", "Shorter than a grain of sand", "Not in the design", "Smaller than a dot"],
    ["What does a hole shape do in Tinkercad?", "Cuts material away", "Adds material", "Adds colour", "Uploads code"],
    ["Why combine shapes?", "To make complex parts from simple ones", "To make the file smaller", "To delete the design", "To rename the file"]
  ];
  Q["2.2.5"] = [
    ["What is the best unit for 3D printing measurements?", "Millimetres", "Miles", "Gallons", "Pounds"],
    ["Which tool gives better measurements than a ruler?", "Calipers", "A spoon", "A cup", "A pencil"],
    ["Why measure real parts?", "So the design matches the real world", "To make the parts heavier", "To change the colour", "To make the printer faster"],
    ["What should you do before designing?", "Write each measurement on a sketch", "Print the design blind", "Turn off the screen", "Close the browser"],
    ["What does a caliper measure?", "Length, width and depth", "Sound", "Wi-Fi strength", "Colour"],
    ["What is a common mistake in measuring?", "Using the wrong unit", "Using calipers", "Writing measurements down", "Checking twice"],
    ["Why check measurements twice?", "To avoid errors", "To waste time", "To change the colour", "To make the printer heavier"],
    ["What is a sketch used for?", "To plan the design before CAD", "To print the final part", "To power the robot", "To send emails"],
    ["Which unit should you use in Tinkercad for printing?", "Millimetres", "Inches only", "Yards", "Miles"],
    ["What do good measurements help you avoid?", "Parts that do not fit", "Good prints", "Clear designs", "Accurate files"]
  ];
  Q["2.2.6"] = [
    ["What is clearance?", "A small gap between parts so they slide together", "A type of paint", "A motor speed", "A battery"],
    ["Why are printed parts never exact?", "Printers have small errors", "Printers are perfect", "CAD is always wrong", "Plastic never changes"],
    ["What clearance is suggested for a 3 mm bolt hole?", "About 3.2 to 3.4 mm", "Exactly 3 mm always", "About 1 mm larger than the bolt", "About 10 mm"],
    ["What happens without clearance?", "Parts can jam", "Parts become lighter", "Parts become shinier", "Nothing"],
    ["What is tolerance?", "The allowed difference in size", "A type of motor", "The speed of the printer", "A colour"],
    ["When might you reduce clearance?", "For a snug fit, carefully", "Always to zero", "Never", "Only for colour"],
    ["What is a good way to check clearance?", "Print a small test piece", "Guess once", "Ignore it", "Use a spoon"],
    ["What is a common mistake?", "Making the hole too small", "Making the hole too big", "Using a bolt", "Using a screw"],
    ["What does the tip say to do when you change clearance?", "Print a tiny test piece first", "Print the whole robot", "Delete the design", "Paint the design"],
    ["Which is a sensible clearance for a moving joint?", "A small gap so it turns freely", "No gap at all", "A huge gap", "A gap that is a metre wide"]
  ];
  Q["2.2.7"] = [
    ["What does a bracket do?", "Holds two parts at an angle", "Stores electricity", "Plays music", "Cools the printer"],
    ["What is a simple first step for a bracket?", "A flat base plate", "A spiral", "A random sphere", "A missing part"],
    ["What size is the base in the example?", "40 by 30 by 3 mm", "4 by 3 by 300 mm", "400 by 300 by 30 mm", "1 by 1 by 1 mm"],
    ["What holes does the bracket need?", "3.3 mm holes for M3 screws", "Huge holes", "No holes", "Holes in the printer bed"],
    ["What is a gusset?", "A support that adds strength", "A type of motor", "A cable", "A sensor"],
    ["Why add rounded corners?", "They can make the part stronger", "They make it louder", "They change the colour", "They charge the battery"],
    ["What is an upright plate?", "A plate that stands up from the base", "A flat floor", "A wire", "A motor"],
    ["What thickness is the upright plate in the example?", "3 mm", "30 cm", "0.3 mm only", "30 m"],
    ["What are M3 screws?", "Screws with a 3 mm size", "Motors", "Batteries", "Sensors"],
    ["What is the final goal of the bracket?", "A part that holds two others together", "A musical instrument", "A battery", "A display"]
  ];
  Q["2.2.8"] = [
    ["Why duplicate a part?", "To make matching parts like left and right mounts", "To make the file bigger", "To delete the design", "To change the colour"],
    ["What is the shortcut to duplicate in Tinkercad?", "Ctrl+D", "Ctrl+Z", "Alt+F4", "Shift+P"],
    ["What does mirroring do?", "Flips a part to make its opposite", "Deletes the part", "Changes its colour", "Stretches it"],
    ["What does Align do?", "Lines up edges exactly", "Prints the part", "Adds a motor", "Renames the file"],
    ["Which two mounts are often matching?", "Left and right wheel mounts", "Top and sky", "Bed and rug", "Screen and bag"],
    ["Why use mirror instead of building twice?", "It saves time", "It makes the part weaker", "It makes the printer slower", "It changes the material"],
    ["What do you mirror in the example?", "A matching part", "The printer", "The USB cable", "The screen"],
    ["What helps you match two parts exactly?", "Align and the ruler", "The microphone", "The printer's light", "The filament colour"],
    ["Why line up edges?", "So parts fit together", "So the printer makes noise", "So the screen flickers", "So it looks blue"],
    ["What do you get after mirroring?", "A matching copy facing the other way", "A blank screen", "A motor", "A battery"]
  ];
  Q["2.2.9"] = [
    ["What format does the printer read?", "STL", "PDF only", "MP4", "EXE"],
    ["Where do you click to export in Tinkercad?", "Export", "Delete", "Hide", "Undo"],
    ["What file extension should you choose?", ".stl", ".mp3", ".doc", ".jpg only"],
    ["Why export one part at a time?", "It is easier to check each one", "It makes the file larger", "It changes the colour", "It uploads faster"],
    ["Why name your files clearly?", "So you can find the right version later", "To make the file heavier", "To change the printer's brand", "To stop the printer"],
    ["What example name does the lesson show?", "bracket_v2.stl", "file1.exe", "untitled.mp3", "printer.doc"],
    ["What should you check before printing?", "The size in the slicer", "The colour of the room", "The Wi-Fi name", "The keyboard"],
    ["Why save each version?", "So you can compare them later", "So you can delete the design", "So you can charge the printer", "So you can paint the file"],
    ["What is an STL file?", "A 3D mesh file for printing", "A sound file", "A text document", "A photo album"],
    ["Which step comes right before printing?", "Slicing the STL file", "Painting the printer", "Charging the battery", "Closing the browser"]
  ];
  Q["2.2.10"] = [
    ["What is a printability checklist for?", "To catch problems before printing", "To make the printer louder", "To paint the part", "To charge the battery"],
    ["Why must a base be flat and wide?", "So it stands up on the print bed", "So it floats", "So it plays music", "So it charges"],
    ["What overhang angle is a concern?", "Over 45 degrees", "Under 5 degrees", "Exactly 0 degrees", "Exactly 360 degrees"],
    ["What wall thickness is suggested as a minimum?", "At least 1 mm", "Under 0.1 mm", "Zero", "10 metres"],
    ["Why check the hole sizes?", "So the screws fit", "So the printer is brighter", "So the bed is hotter", "So the filament is cheaper"],
    ["Which question is on the checklist?", "Are the holes the right size for your screws?", "Is the room blue?", "Is the printer happy?", "Is the cable long?"],
    ["What happens if walls are too thin?", "The part can be weak or break", "It becomes a motor", "It plays music", "It charges"],
    ["Why review the design before printing?", "To avoid wasting time and plastic", "To make the file bigger", "To hide errors", "To change the name"],
    ["What is a common printability issue?", "Large overhangs with no supports", "Using a clear name", "Checking the base", "Measuring twice"],
    ["What does a good printable part have?", "A stable base and sensible walls", "No base at all", "Walls under 0.01 mm", "Holes smaller than dust"]
  ];

  // Chapter 3: Gears and Gear Ratios
  Q["2.3.1"] = [
    ["What is a gear?", "A wheel with teeth", "A type of battery", "A sensor", "A display"],
    ["What happens when two gears mesh?", "One turns the other", "They melt", "They stop working", "They charge"],
    ["What can gears change?", "Speed, direction and force", "Only colour", "Only sound", "Only weight"],
    ["Why are gears useful in robots?", "They change the speed and force of motors", "They light LEDs", "They upload code", "They store data"],
    ["What do the teeth do?", "Let one gear push another", "Store power", "Play music", "Cool the motor"],
    ["What is a gear train?", "Several gears linked together", "A toy train", "A cable", "A battery"],
    ["What might a gear train change?", "The output speed and force", "The colour", "The Wi-Fi", "The file name"],
    ["What is the input gear?", "The gear driven by the motor", "The gear that drives nothing", "The gear on the screen", "The gear in a book"],
    ["What is the output gear?", "The gear that moves the load", "The gear on the battery", "The gear on the USB port", "The gear in a drawer"],
    ["What do gears have that wheels often do not?", "Teeth that mesh", "Rubber tyres", "Spokes only", "Paint"]
  ];
  Q["2.3.2"] = [
    ["What must two meshing gears share?", "The same module or tooth size", "The same colour", "The same weight", "The same name"],
    ["What is pitch in gears?", "The spacing between teeth", "The colour of teeth", "The weight of teeth", "The sound of teeth"],
    ["Why must tooth sizes match?", "So teeth fit between each other", "So the gears are louder", "So the gears are shinier", "So the gears are heavier"],
    ["What does more teeth on a gear mean?", "A larger gear", "A smaller gear", "A heavier gear only", "No change"],
    ["What is a module?", "A size measure for gear teeth", "A type of motor", "A sensor", "A type of cable"],
    ["Where might gear sizes be printed?", "On the gear's label", "On the USB port", "On the screen", "In the battery"],
    ["Why use standard gears?", "They fit together reliably", "They are always bigger", "They change colour", "They break easily"],
    ["What happens if tooth sizes do not match?", "Gears will not mesh properly", "Gears become faster", "Gears charge", "Gears play music"],
    ["What affects the gear ratio?", "The number of teeth", "The colour", "The light", "The room temperature"],
    ["What is a common module in simple printed gears?", "A standard size listed in the design", "A random number each time", "A colour", "A sound"]
  ];
  Q["2.3.3"] = [
    ["What happens when two gears mesh directly?", "They turn in opposite directions", "They turn the same way", "They stop", "They melt"],
    ["What does an idler gear do?", "Keeps the same direction between two gears", "Stops the motor", "Reverses the power", "Stores electricity"],
    ["How many gears keep the same direction as the first?", "Three", "Two", "One", "Four"],
    ["Do idler gears change the gear ratio?", "No", "Yes, always double", "Yes, always halve", "Only when the sun shines"],
    ["Why use an idler gear?", "To keep both gears turning the same way", "To make them stop", "To make them louder", "To make them lighter"],
    ["What direction do two directly meshing gears turn?", "Opposite", "The same", "Up and down", "Sideways"],
    ["What is one reason to add an idler?", "To connect gears that are far apart", "To remove the motor", "To change the colour", "To store data"],
    ["In a train of three gears, what is the first and third direction?", "The same", "Opposite", "Random", "Stopped"],
    ["What must the idler gear do with the teeth?", "Mesh with both neighbours", "Stay away from both", "Melt", "Glow"],
    ["Why are gear directions important?", "They decide how a mechanism moves", "They change the paint", "They charge the battery", "They set Wi-Fi"]
  ];
  Q["2.3.4"] = [
    ["What is a gear ratio?", "Driven gear teeth divided by driver gear teeth", "Driver teeth divided by driven teeth only", "The colour ratio", "The weight of the gear"],
    ["In the example, what is the driver?", "20 teeth", "60 teeth", "3 teeth", "10 teeth"],
    ["What is the ratio in the example?", "3", "0.33", "40", "80"],
    ["What does a ratio of 3 mean for output speed?", "Output is 3 times slower", "Output is 3 times faster", "Output is the same", "Output stops"],
    ["What does a ratio of 3 mean for torque?", "About 3 times stronger", "About 3 times weaker", "No change", "Zero"],
    ["Which formula is correct?", "Ratio = driven teeth / driver teeth", "Ratio = driver teeth / driven teeth", "Ratio = driven + driver", "Ratio = driven x driver"],
    ["If the driven gear has 40 teeth and driver 10, what is the ratio?", "4", "0.25", "50", "30"],
    ["If the driven gear has fewer teeth than the driver, the output is...", "Faster", "Slower", "Stopped", "Louder"],
    ["Which is a 1 to 3 ratio example?", "Output 3 times faster with a third of the torque", "Output 3 times slower", "Output unchanged", "Output reversed"],
    ["Why calculate the ratio before building?", "To plan the speed and force you need", "To change the colour", "To charge the battery", "To name the gear"]
  ];
  Q["2.3.5"] = [
    ["What does a bigger driven gear do?", "Turns slower with more force", "Turns faster with less force", "Stops", "Makes sound"],
    ["What does a smaller driven gear do?", "Spins faster with less force", "Stops", "Turns slower with more force", "Glows"],
    ["What is torque?", "Turning strength", "Colour", "Sound", "Weight"],
    ["What is the trade-off with gears?", "Speed versus force", "Colour versus sound", "Weight versus colour", "Wi-Fi versus battery"],
    ["What does a ratio of 3 to 1 do to torque?", "Increases it by about 3 times", "Decreases it", "Makes no change", "Stops it"],
    ["Why do real gears lose a little power?", "Friction", "Colour", "Sound only", "Light"],
    ["Which is better for lifting a heavy load?", "A higher torque output", "A higher speed output only", "No gears at all", "A glowing gear"],
    ["Which is better for a fast small car?", "A higher speed output", "Only torque", "No gears", "A rock"],
    ["What is the speed of the output in a 1 to 3 ratio?", "Three times faster", "Three times slower", "Half", "Double"],
    ["Which gears would a robot arm need?", "High torque for lifting", "Very high speed only", "No force", "Only colour"]
  ];
  Q["2.3.6"] = [
    ["What is a compound gear train?", "Gears chained together in stages", "A single gear", "A toy", "A battery"],
    ["How do you find the total ratio of a compound train?", "Multiply the ratio of each stage", "Add the ratios", "Subtract the ratios", "Divide by two"],
    ["In the example, what is stage 1's ratio?", "3", "1", "10", "30"],
    ["In the example, what is stage 2's ratio?", "3", "1", "12", "36"],
    ["What is the total ratio in the example?", "9", "6", "3", "36"],
    ["Why use a compound train?", "To get a big ratio with small gears", "To make the printer louder", "To change colour", "To store data"],
    ["What does a ratio of 9 do to speed?", "Output is 9 times slower", "Output is 9 times faster", "No change", "Stops"],
    ["What does each stage multiply?", "The ratio", "The colour", "The weight only", "The name"],
    ["Which stage ratio is 12 to 36?", "3", "1", "12", "36"],
    ["What is a benefit of multi-stage gears?", "Large reductions in a small space", "Louder gears", "Shinier gears", "Lighter gears only"]
  ];
  Q["2.3.7"] = [
    ["What is a worm gear?", "A screw that turns a wheel", "A small motor", "A type of sensor", "A kind of battery"],
    ["What do worm gears give?", "A very high ratio and a locking effect", "Very high speed", "No force", "Only colour"],
    ["What is a rack?", "A flat gear bar", "A round gear", "A bicycle", "A battery"],
    ["What does a pinion do with a rack?", "Moves it in a straight line", "Melts it", "Charges it", "Stops it"],
    ["What does rack and pinion turn into?", "Straight motion from rotation", "Rotation from straight motion only", "Sound", "Light"],
    ["Where is rack and pinion used?", "Steering systems", "Phones only", "Books", "Paper"],
    ["Why are worm gears good for slow strong movement?", "They give high ratios", "They are very fast", "They are light", "They are quiet only"],
    ["Which gear can lock in place?", "A worm gear", "A spur gear only", "A pulley", "A wheel"],
    ["What is the shape of a rack?", "Flat with teeth", "Round", "Spiral", "Star"],
    ["What motion does a worm gear turn?", "Rotation into rotation at a high ratio", "Straight motion only", "Sound", "Colour"]
  ];
  Q["2.3.8"] = [
    ["What causes gears to lose energy?", "Friction", "Colour", "Sound only", "Light"],
    ["What helps gears be more efficient?", "Smooth and aligned gears", "Rough and crooked gears", "Bigger teeth only", "Dirt"],
    ["What can you add to moving gears?", "A little lubricant, if allowed", "Water", "Sand", "Glue"],
    ["Where does lost energy go?", "Into heat", "Into a bigger battery", "Into Wi-Fi", "Into colour"],
    ["What problem can tight gears cause?", "Jamming", "Brighter LEDs", "Faster uploads", "Louder music"],
    ["What should you leave between meshing teeth?", "A small clearance", "No gap ever", "A huge gap", "Glue"],
    ["Why is efficiency important?", "More of the motor's power reaches the output", "It changes colour", "It stores data", "It speeds up uploads"],
    ["What is the main energy loss in gears?", "Friction", "Light", "Sound only", "Colour"],
    ["What should you check if a gear feels stiff?", "Alignment and clearance", "The screen", "The Wi-Fi name", "The file name"],
    ["What is the tip about tight gears?", "Leave a small clearance between teeth", "Make the teeth overlap", "Glue them tight", "Add more teeth at random"]
  ];
  Q["2.3.9"] = [
    ["What does a gearbox do?", "Holds gears in place and keeps them aligned", "Stores electricity", "Plays music", "Charges batteries"],
    ["What should you plan first in a gearbox?", "The shaft positions", "The colour", "The logo", "The price"],
    ["What do you measure first?", "The motor shaft diameter", "The colour of the room", "The screen size", "The cable length"],
    ["What sets the distance between two shafts?", "The sum of two gear radii", "The colour", "The weight", "The speed"],
    ["Why add bearings or bushings?", "For smooth turning", "To make it louder", "To change colour", "To store data"],
    ["What is a bushing?", "A bearing sleeve that reduces friction", "A type of battery", "A sensor", "A display"],
    ["What helps a gearbox stay quiet?", "Good alignment and bearings", "Loose parts", "Missing screws", "Painting it blue"],
    ["Which step comes first when designing a gearbox?", "Plan the shaft positions", "Paint the gears", "Print without measuring", "Delete the motor"],
    ["What is a common mistake in gearboxes?", "Gears not aligned", "Good bearings", "Measured shafts", "Clear plans"],
    ["Why keep a gearbox enclosed?", "To hold gears in place and keep them clean", "To make it heavier", "To change the speed", "To store data"]
  ];
  Q["2.3.10"] = [
    ["How do you test a gearbox?", "Turn the input slowly and count output turns", "Shake it", "Charge it", "Paint it"],
    ["What do you mark on each gear?", "One tooth, with a pen", "The whole gear", "The screen", "The cable"],
    ["What do you compare the count with?", "The calculated ratio", "The room colour", "The file name", "The battery"],
    ["What should you write down?", "The difference between expected and measured", "Only the colour", "Nothing", "The weather"],
    ["What could cause a difference?", "Slipping or loose teeth", "A blue LED", "A USB port", "The room"],
    ["How many output turns should a 3 to 1 gearbox make per input turn?", "About one third", "Three", "Ten", "Zero"],
    ["Why mark a tooth?", "So you can count turns accurately", "To change the colour", "To store data", "To charge"],
    ["What is slipping?", "The gear turns but the output does not match", "A type of gear", "A battery", "A sensor"],
    ["What should you do after finding a difference?", "Check the fit and adjust the design", "Ignore it", "Delete the gearbox", "Paint it"],
    ["Why test a gearbox by hand first?", "To check it moves smoothly before powering it", "To make it louder", "To change colour", "To store data"]
  ];

  // Chapter 4: Levers, Pulleys and Wheels
  Q["2.4.1"] = [
    ["What is a simple machine?", "A device that changes the size or direction of a force", "A computer", "A battery", "A printer"],
    ["How many classic simple machines are there?", "Six", "Two", "Ten", "Twenty"],
    ["Which is NOT a classic simple machine?", "Battery", "Lever", "Pulley", "Wedge"],
    ["What does a simple machine change?", "The size or direction of a force", "The colour", "The sound", "The data"],
    ["Which simple machine uses a bar and a pivot?", "Lever", "Pulley", "Screw", "Wedge"],
    ["Which simple machine uses a rope and a wheel?", "Pulley", "Lever", "Inclined plane", "Screw"],
    ["Which simple machine is a slope?", "Inclined plane", "Lever", "Pulley", "Wheel"],
    ["Which simple machine is a spiral?", "Screw", "Lever", "Wedge", "Pulley"],
    ["What is a wedge used for?", "Splitting or lifting", "Playing music", "Charging", "Printing"],
    ["Why are simple machines useful?", "They make work easier", "They make work louder", "They make work colourful", "They make work disappear"]
  ];
  Q["2.4.2"] = [
    ["What is a lever?", "A bar that turns around a point", "A wheel with spokes", "A type of motor", "A sensor"],
    ["What is the fulcrum?", "The pivot point", "The weight", "The handle", "The battery"],
    ["What is the effort?", "The force you apply", "The load", "The pivot", "The colour"],
    ["What is the load?", "The thing you want to move", "The force you apply", "The pivot", "The paint"],
    ["What happens when you push one end of a lever?", "The other end lifts", "Nothing", "Both ends fall", "It disappears"],
    ["Where is the fulcrum on a seesaw?", "In the middle", "At one end", "Off the seesaw", "On the ground only"],
    ["What helps a lever lift more easily?", "Longer effort arm", "Shorter effort arm only", "Less pivot", "More weight"],
    ["What does the handle of a lever do?", "Lets you apply effort", "Stores electricity", "Plays music", "Cools the load"],
    ["Which is the pivot in a lever?", "The fulcrum", "The load", "The effort", "The battery"],
    ["Why use a lever?", "To lift or move something with less effort", "To make noise", "To store data", "To change colour"]
  ];
  Q["2.4.3"] = [
    ["What is a first-class lever?", "The fulcrum is in the middle, like a seesaw", "The load is in the middle", "The effort is in the middle", "It has no fulcrum"],
    ["What is a second-class lever?", "The load is in the middle, like a wheelbarrow", "The fulcrum is in the middle", "The effort is in the middle", "It has no load"],
    ["What is a third-class lever?", "The effort is in the middle, like tweezers", "The load is in the middle", "The fulcrum is at the end", "It has no effort"],
    ["Which lever class is a wheelbarrow?", "Second class", "First class", "Third class", "No class"],
    ["Which lever class is a seesaw?", "First class", "Second class", "Third class", "No class"],
    ["Which lever class is tweezers?", "Third class", "First class", "Second class", "No class"],
    ["How many ways can the fulcrum, load and effort be arranged?", "Three classes", "One", "Ten", "Five"],
    ["What does a third-class lever usually give?", "Speed and range, not force", "Only colour", "Only sound", "Nothing"],
    ["What does a second-class lever usually give?", "Force advantage", "Only speed", "Only colour", "Nothing"],
    ["Why know the lever classes?", "To choose the right lever for a job", "To change the colour", "To store data", "To upload code"]
  ];
  Q["2.4.4"] = [
    ["What is mechanical advantage?", "How much a machine multiplies your force", "The colour of the machine", "The speed of the battery", "The number of wires"],
    ["For a lever, what do you divide?", "Effort arm length by load arm length", "Load by colour", "Effort by time", "Length by weight"],
    ["In the example, what is the effort arm?", "40 cm", "10 cm", "4 cm", "400 cm"],
    ["In the example, what is the load arm?", "10 cm", "40 cm", "4 cm", "100 cm"],
    ["What is the mechanical advantage in the example?", "4", "0.25", "50", "30"],
    ["What does a mechanical advantage of 4 mean?", "The machine multiplies your force by about 4", "It is four times heavier", "It is four times slower", "It is four colours"],
    ["What happens when the load arm gets shorter?", "The advantage gets bigger", "The advantage gets smaller", "Nothing changes", "The lever breaks"],
    ["Why measure the arms?", "To calculate the advantage", "To change the colour", "To charge the battery", "To name the lever"],
    ["What is the unit for arm length in the example?", "Centimetres", "Litres", "Kilograms", "Volts"],
    ["What does a longer effort arm do?", "Makes the job easier", "Makes the job harder", "Stops the lever", "Makes it glow"]
  ];
  Q["2.4.5"] = [
    ["What does a fixed pulley change?", "The direction of the rope", "The weight of the load", "The colour of the rope", "The speed of light"],
    ["What does a moving pulley reduce?", "The effort needed", "The rope length", "The weight", "The colour"],
    ["What is the trade-off with a moving pulley?", "You pull more rope", "You pull less rope", "It costs nothing", "It has no trade-off"],
    ["Is a fixed pulley easier to pull down?", "Yes, because you pull down", "No, never", "Only at night", "Only in water"],
    ["What advantage does a fixed pulley give?", "No force advantage, but easier direction", "A huge force advantage", "A speed advantage only", "A sound advantage"],
    ["How much effort does a moving pulley roughly save?", "About half", "All of it", "None", "Double"],
    ["What combines fixed and moving pulleys?", "A block and tackle", "A lever only", "A screw", "A wedge"],
    ["What is a block and tackle good for?", "Big lifting", "Painting", "Printing labels", "Charging"],
    ["What is a pulley?", "A wheel with a rope or belt", "A bar with a pivot", "A slope", "A screw"],
    ["Which pulley is fixed to a ceiling or frame?", "A fixed pulley", "A moving pulley", "A wheel", "A lever"]
  ];
  Q["2.4.6"] = [
    ["What connects two pulleys?", "A belt", "A screw", "A wedge", "A battery"],
    ["What sets the speed ratio of pulleys?", "Their diameters", "Their colours", "Their weights", "Their names"],
    ["What is the speed ratio formula?", "Driven diameter divided by driver diameter", "Driver divided by driven", "Driven plus driver", "Driven times driver"],
    ["In the example, what is the driver diameter?", "20 mm", "40 mm", "2 mm", "400 mm"],
    ["In the example, what is the driven diameter?", "40 mm", "20 mm", "4 mm", "400 mm"],
    ["Which pulley turns half as fast in the example?", "The driven pulley", "The driver pulley", "Both equally", "Neither"],
    ["Is a belt drive like a gear train?", "Yes, both set a speed ratio", "No, never", "Only in cars", "Only in boats"],
    ["What is the diameter?", "The distance across a circle through its centre", "The weight", "The colour", "The number of teeth"],
    ["Why use a belt instead of gears?", "It can be quieter and cheaper", "It always gives more torque", "It never slips", "It needs no setup"],
    ["What happens if a belt is too loose?", "It can slip", "It becomes stronger", "It charges", "It glows"]
  ];
  Q["2.4.7"] = [
    ["What is a wheel and axle?", "A larger wheel on a smaller rod", "A bar on a pivot", "A slope", "A screw"],
    ["What does a steering wheel show?", "A large wheel on a small axle", "A small wheel on a big axle only", "A spiral", "A wedge"],
    ["What do bigger wheels do?", "Roll over bumps more easily", "Make the robot heavier only", "Stop the robot", "Make it louder"],
    ["What is the axle?", "The rod the wheel turns on", "The tyre", "The paint", "The battery"],
    ["What happens when you turn a big wheel?", "The axle turns with a different movement", "The axle melts", "Nothing", "The wheel disappears"],
    ["Why do car wheels roll?", "To reduce friction", "To add weight", "To change colour", "To store energy"],
    ["What is a common wheel material for grip?", "Rubber", "Glass", "Ice", "Air"],
    ["What do wheels help robots do?", "Move across the floor", "Print labels", "Play sound", "Store data"],
    ["What is the difference between a small and big wheel?", "The big wheel rolls over bumps more easily", "The small wheel is always better", "They are identical", "The big wheel is quieter only"],
    ["Which part of a wheel and axle is the input for a motor?", "The axle", "The screen", "The USB cable", "The battery"]
  ];
  Q["2.4.8"] = [
    ["Why do robots use wheels instead of dragging?", "Rolling creates much less friction", "Dragging is faster", "Wheels make noise", "Wheels charge"],
    ["What gives better grip?", "Rubber tyres", "Smooth hard wheels", "Ice", "Oil"],
    ["What do smooth hard wheels do on the floor?", "Slide more easily", "Grip better", "Charge the battery", "Print"],
    ["How can you test different wheels?", "Use the same floor for each", "Use different floors each time", "Use no floor", "Use water"],
    ["What is friction?", "A force that resists sliding", "A colour", "A sound", "A battery"],
    ["Which is easier to move, a rolling wheel or a sliding block?", "A rolling wheel", "A sliding block", "They are the same", "Neither"],
    ["What is rolling resistance?", "Friction when a wheel rolls", "A type of motor", "A sensor", "A colour"],
    ["Why compare wheels on the same floor?", "To make the test fair", "To make the floor louder", "To change the colour", "To charge"],
    ["What affects grip?", "The wheel material", "The room colour", "The screen", "The Wi-Fi"],
    ["Which surface gives the most grip for a rubber wheel?", "A clean, dry floor", "Wet ice", "Oil", "Soap"]
  ];
  Q["2.4.9"] = [
    ["What does a crank do?", "Turns circular motion into back-and-forth motion", "Turns back-and-forth into sound", "Charges a battery", "Stores data"],
    ["What is a linkage?", "Bars joined by pivots that move in a planned way", "A type of cable", "A battery", "A screen"],
    ["Where are four-bar linkages used?", "Walking robots and car suspensions", "Phones only", "Books", "Paper"],
    ["What makes a piston move back and forth?", "A crank arm on a rotating shaft", "A battery", "A display", "A cable"],
    ["What is a pivot?", "A point where parts turn", "A cable", "A paint", "A screen"],
    ["What kind of motion does a crank produce?", "Back and forth", "Random", "Sound", "Colour"],
    ["Why are linkages useful?", "They turn one motion into another", "They store data", "They charge", "They glow"],
    ["How many bars does a four-bar linkage have?", "Four", "Two", "Ten", "One"],
    ["What do walking robots use linkages for?", "Leg motion", "Printing", "Playing music", "Charging"],
    ["What is a crank arm?", "A short bar that rotates around a shaft", "A type of motor", "A battery", "A wire"]
  ];
  Q["2.4.10"] = [
    ["What is the mini project?", "A lifting arm with a pivot, handle and cup", "A car", "A drone", "A display"],
    ["What do you add to see effort change?", "A pulley", "A battery", "A screen", "A USB"],
    ["Why keep the load light?", "For safety and to test the pivot", "So it glows", "So it prints", "So it uploads"],
    ["What must be strong enough?", "The pivot", "The paint", "The label", "The screen"],
    ["What is the cup for?", "To hold the load at the end", "To store power", "To play music", "To print"],
    ["What does the handle give you?", "Something to push or pull", "Light", "Sound", "Data"],
    ["What is a good way to test the arm?", "Lift small loads and check the pivot", "Lift huge loads at once", "Drop it", "Ignore it"],
    ["Where should the pivot be for an easy lift?", "Close to the load, with effort applied far away", "Close to the handle only", "Off the arm", "Under the cup"],
    ["What should you check if the arm wobbles?", "The pivot fixing", "The paint", "The file name", "The screen"],
    ["What does this project combine?", "Lever and pulley ideas", "Only colours", "Only sounds", "Only Wi-Fi"]
  ];

  // Chapter 5: Build and Test a Printed Robot
  Q["2.5.1"] = [
    ["What should you sketch before building?", "Your robot", "The room", "The printer's name", "The cable"],
    ["What must you decide when planning?", "Where motors, wheels, battery and board go", "The name of the teacher", "The price", "The weather"],
    ["Why sketch first?", "To avoid mistakes when building", "To make the robot heavier", "To change the colour", "To charge the battery"],
    ["What is planning mainly about?", "Layout and parts", "Music", "Colour only", "Weather"],
    ["What do you decide about the battery?", "Where it goes", "Its colour", "Its name", "Its taste"],
    ["Where do wheels go?", "Where you planned", "Anywhere", "On the battery", "On the screen"],
    ["What helps you see problems before printing?", "A plan", "A blind guess", "A mirror", "A hammer"],
    ["Is planning part of the build?", "Yes, it is the first step", "No, never", "Only at the end", "Only for toys"],
    ["Why draw the board's position?", "To leave room for wires", "To make the board louder", "To make it blue", "To store data"],
    ["What does a good sketch show?", "Parts and their positions", "Only the brand", "Only the colour", "Nothing"]
  ];
  Q["2.5.2"] = [
    ["What should a parts list include?", "Size, quantity and purpose of each part", "Only the colour", "Only the price", "Nothing"],
    ["What is in the motors group of the example?", "Motors, wheels and driver", "A fridge", "A bicycle", "A kettle"],
    ["What is in the electronics group?", "Battery, board and switch", "Paint and brushes", "Food", "Books"],
    ["What is in the fixings group?", "Screws, bolts, nuts and spacers", "Batteries", "Motors", "Sensors"],
    ["Why write a parts list?", "To keep the build organised", "To make it louder", "To charge it", "To paint it"],
    ["What does quantity tell you?", "How many of a part you need", "How heavy it is", "What colour it is", "How fast it is"],
    ["What does purpose tell you?", "What the part is for", "Its colour", "Its serial number", "Its taste"],
    ["Why check the list before buying?", "To avoid missing parts", "To make the list longer", "To change the colour", "To charge"],
    ["What should you add to a parts list?", "Sizes and quantities", "Random notes only", "Nothing", "A song"],
    ["What is a parts list useful for when something breaks?", "Finding a replacement", "Painting", "Charging", "Printing a poster"]
  ];
  Q["2.5.3"] = [
    ["What is a chassis?", "The frame that holds everything", "The paint", "The battery", "The screen"],
    ["What should a chassis be?", "Flat, rigid and wide enough", "Soft and tiny", "Round and loose", "Clear and fragile"],
    ["Why keep the centre of weight low?", "To keep the robot stable", "To make it louder", "To make it faster", "To change the colour"],
    ["What should you leave space for?", "Wiring and the battery", "A piano", "A bicycle", "A window"],
    ["What should the mounting holes match?", "Your parts", "A random pattern", "The paint", "Nothing"],
    ["What makes a chassis stable?", "A wide, low design", "A narrow tall design", "No base", "Wobbly parts"],
    ["What is rigidity?", "Resistance to bending", "Colour", "Sound", "Speed"],
    ["Why avoid a wobbly chassis?", "Parts can move and misalign", "It charges better", "It looks shinier", "It glows"],
    ["What should you design around?", "Your real parts' sizes", "Guesswork", "Colour", "The weather"],
    ["What should a good chassis hold securely?", "Motors, board and battery", "Only paint", "Only paper", "Nothing"]
  ];
  Q["2.5.4"] = [
    ["Why print parts in separate pieces?", "So each part is easier to test", "To make them heavier", "To change the colour", "To charge the battery"],
    ["What do you do before gluing or screwing?", "Test-fit each piece", "Paint them", "Cut them", "Delete them"],
    ["What should you adjust if a part does not slide in?", "The clearance", "The colour", "The battery", "The name"],
    ["What is a test-fit?", "Checking that parts fit before final assembly", "A paint test", "A battery test", "A speed test"],
    ["When should you glue?", "After test-fitting", "Before printing", "Never", "Before measuring"],
    ["What is the risk of skipping test-fits?", "Parts may not fit at all", "Better prints", "Shinier parts", "Quieter motors"],
    ["Which file should you update after a fit problem?", "The design file", "The Wi-Fi file", "The music file", "The photo file"],
    ["What does a loose fit mean?", "Parts move too easily", "Parts are glued", "Parts are painted", "Parts are charged"],
    ["What does a tight fit mean?", "Parts are hard to join", "Parts fall apart", "Parts glow", "Parts charge"],
    ["Why test-fit in small steps?", "To find problems early", "To waste plastic", "To change colour", "To delay"]
  ];
  Q["2.5.5"] = [
    ["What are M3 bolts often used for?", "Small robots", "Large buildings", "Electronics only", "Paint"],
    ["What do spacers do?", "Keep the board away from the chassis", "Make wires longer", "Change colours", "Store power"],
    ["Why keep electronics away from metal?", "To avoid short circuits", "To make them louder", "To change colour", "To speed them up"],
    ["How do you tighten bolts?", "By hand, then add a small extra turn", "Hit them with a hammer", "Glue them", "Leave them loose"],
    ["What is a nut used with?", "A bolt", "A sensor", "A battery", "A cable"],
    ["Why not overtighten bolts?", "They can crack printed parts", "They become louder", "They become shinier", "They charge"],
    ["What do you call a fixing that holds parts together?", "A fastener", "A sensor", "A motor", "A wire"],
    ["Where do spacers sit?", "Between the board and the chassis", "On the screen", "Inside the battery", "On the cable"],
    ["What size is M3 in the example?", "3 mm", "30 cm", "3 metres", "0.3 mm"],
    ["Why use spacers?", "To leave space for wires and air", "To make the board heavier", "To change colour", "To store data"]
  ];
  Q["2.5.6"] = [
    ["What is a drivetrain?", "The motors, gears and wheels that move the robot", "The screen", "The battery", "The USB port"],
    ["What should you mount first?", "The motors", "The paint", "The screen", "The label"],
    ["Why check both wheels turn freely?", "To make sure neither is jammed", "To make the robot louder", "To change colour", "To charge"],
    ["How do you make the robot drive straight?", "Line up the wheels", "Paint the chassis", "Add a bigger battery", "Remove the wheels"],
    ["Why tighten motor mounts?", "So they do not wobble", "To make them louder", "To change the colour", "To store data"],
    ["What happens if a motor mount wobbles?", "The drive can be uneven", "The robot glows", "The robot charges", "The robot plays music"],
    ["What is the job of the drivetrain?", "To move the robot", "To store energy", "To play sound", "To show images"],
    ["What do you check after mounting the motors?", "Wheels turn freely and straight", "The label colour", "The screen", "The USB cable"],
    ["What makes a robot turn?", "Different speeds on each side", "The same speed on both sides", "No motion", "The screen"],
    ["What is a common drivetrain error?", "Wheels rub the chassis", "Wheels spin freely", "Wheels are aligned", "Motors are tight"]
  ];
  Q["2.5.7"] = [
    ["What should you keep separate where possible?", "Motor power and logic power", "Colours", "Screws", "Labels"],
    ["What should all the GND wires do?", "Connect together", "Stay apart", "Be cut", "Be painted"],
    ["What is the warning in the lesson?", "Check polarity before connecting the battery", "Paint the battery", "Charge the board in water", "Ignore the wires"],
    ["What can reversed power do?", "Destroy parts", "Make them louder", "Make them shinier", "Make them charge"],
    ["What is polarity?", "Which way power flows, plus or minus", "A colour", "A size", "A sound"],
    ["Why separate motor and logic power?", "Motors can cause voltage drops that disturb the board", "Motors need paint", "Logic needs music", "Board needs colour"],
    ["Which wire is usually ground?", "Black", "Red", "Yellow", "Orange"],
    ["Which wire is usually positive?", "Red", "Black", "Brown", "Green"],
    ["What is a short circuit?", "A direct connection that bypasses the load", "A long wire", "A colourful wire", "A slow motor"],
    ["What should you do before connecting the battery?", "Check every connection", "Shake the robot", "Remove the wheels", "Paint the wires"]
  ];
  Q["2.5.8"] = [
    ["Why move joints by hand first?", "To check for jams and loose parts", "To make them louder", "To change colour", "To charge"],
    ["What do you do with each wheel?", "Rotate it slowly", "Paint it", "Glue it", "Remove it"],
    ["How far should each arm joint move?", "Through its full range", "Not at all", "Only halfway", "Backwards only"],
    ["What should you fix before power goes on?", "Any rubbing", "The colour", "The name", "The file"],
    ["What does rubbing mean?", "Parts touching and creating friction", "Parts glowing", "Parts charging", "Parts printing"],
    ["What is a jam?", "A part that cannot move freely", "A type of jam", "A sound", "A colour"],
    ["Why test before powering?", "To avoid damage from forcing parts", "To make the motors louder", "To change colour", "To charge"],
    ["What wrong direction could you find?", "A wheel that turns the wrong way", "A bright LED", "A loud buzzer", "A green screen"],
    ["What is a range of motion?", "How far a joint can move", "The screen size", "The battery life", "The colour"],
    ["Which order is safest?", "Test by hand, then power on", "Power on, then test by hand", "Never test", "Test only with the lights off"]
  ];
  Q["2.5.9"] = [
    ["What does testing reveal?", "Problems to fix", "New colours", "Better music", "Extra Wi-Fi"],
    ["What should you write down after each test?", "One problem and one fix", "Nothing", "Only the weather", "Only the price"],
    ["What do you do with the updated part?", "Print it and test again", "Throw it away", "Paint it blue", "Keep the old one forever"],
    ["Why keep older versions?", "To compare them", "To make the file bigger", "To change colour", "To delete the design"],
    ["What do good engineers do after a failure?", "Iterate and improve", "Give up", "Blame the printer", "Ignore it"],
    ["What is iteration?", "Repeating a process to improve it", "A type of paint", "A battery", "A cable"],
    ["Why not change everything at once?", "You cannot tell what fixed the problem", "It is faster", "It is louder", "It is brighter"],
    ["What is one good result of testing?", "Clear next steps", "A louder robot", "A brighter screen", "A longer cable"],
    ["What should be recorded for each test?", "What worked and what did not", "Only the time", "Only the colour", "Nothing"],
    ["What mindset does the lesson encourage?", "Test, learn, improve", "Never try", "Blame others", "Quit early"]
  ];
  Q["2.5.10"] = [
    ["What is the final project?", "A printed robot arm with a base, links and a servo gripper", "A car", "A drone", "A display"],
    ["How many positions should you test the arm in?", "Three", "One", "Ten", "Zero"],
    ["How should the arm move at first?", "Slowly", "As fast as possible", "Randomly", "Backwards"],
    ["Where should your fingers be?", "Clear of the joints", "Inside the joints", "On the motor", "In the gripper"],
    ["What parts make up the arm?", "A base, two or more links and a gripper", "Only a battery", "Only a screen", "Only paint"],
    ["What holds the gripper?", "A servo", "A paper clip", "A spring only", "Glue only"],
    ["What is the goal of the final test?", "To check the arm moves to different positions", "To paint it", "To charge it", "To break it"],
    ["What should you record from the test?", "What worked and what needs changing", "Only the colour", "Nothing", "The time of day"],
    ["Why use a free arm design?", "To save time and learn from a tested design", "To make it expensive", "To hide it", "To make it heavy"],
    ["What is a joint in the arm?", "A place where two parts pivot", "A battery", "A display", "A cable"]
  ];
})();
