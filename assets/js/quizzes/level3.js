// Lesson questions for Level 3 (IRobolive). 10 questions per lesson.
// Key: "level.chapter.lesson". Each question: [question, correct answer, wrong, wrong, wrong]
(function () {
  window.LESSON_QUIZZES = window.LESSON_QUIZZES || {};
  var Q = window.LESSON_QUIZZES;

  // Chapter 1: Programming Basics with Python
  Q["3.1.1"] = [
    ["Why is Python described as friendly?", "It reads almost like English", "It only uses pictures", "It needs no computer", "It only works on phones"],
    ["Which of these uses Python?", "Games, websites, science and robots", "Only printing", "Only sound", "Only colours"],
    ["What will you use Python for in this level?", "Controlling robots and working with databases", "Making paper", "Painting walls", "Cooking food"],
    ["What kind of language is Python?", "A programming language", "A type of battery", "A printer driver", "A sensor"],
    ["What does it mean that Python reads like English?", "The commands use words people know", "It only uses numbers", "It has no rules", "It is spoken aloud"],
    ["Which statement is true about Python?", "It is used in many fields", "It only runs on one toy", "It cannot control hardware", "It needs a microwave"],
    ["What is a program?", "A set of instructions for a computer", "A physical object", "A type of motor", "A battery"],
    ["Why learn Python before robots?", "It helps you write logic that robots need", "It makes the robot heavier", "It charges the robot", "It paints the robot"],
    ["Which word describes a language for computers?", "Programming language", "Musical instrument", "Weather report", "Recipe"],
    ["What is the output of a Python program?", "Whatever the instructions tell it to show or do", "Always a sound", "Always a picture", "Always nothing"]
  ];
  Q["3.1.2"] = [
    ["What does print() do?", "Shows a message on the screen", "Deletes a file", "Turns on a motor", "Charges the battery"],
    ["What is printed by print(\"Hello, robot!\")?", "Hello, robot!", "Hello", "robot", "Nothing"],
    ["Which editors can you use for Python?", "IDLE, VS Code or an online editor", "Only a paper notebook", "Only a calculator", "Only a phone camera"],
    ["What symbols mark text in Python?", "Quotation marks", "Square brackets only", "Angle brackets only", "Slashes only"],
    ["Where does the message in print() go?", "To the screen", "To the battery", "To the motor", "To the USB cable"],
    ["What is the first program many people write?", "Hello, world", "A game engine", "A database", "A robot arm"],
    ["Can you change the text inside print()?", "Yes, change the words in the quotes", "No, never", "Only with a hammer", "Only on Sundays"],
    ["What does running a program mean?", "Making the computer carry out its instructions", "Going for a jog", "Turning off the screen", "Deleting the editor"],
    ["What is an editor?", "A tool to write code", "A type of motor", "A sensor", "A battery"],
    ["What should you check if nothing prints?", "Did you run the program and spell print correctly?", "Is the sky blue?", "Is the mouse broken?", "Is the room warm?"]
  ];
  Q["3.1.3"] = [
    ["What is a variable?", "A name that holds a value", "A type of motor", "A sensor", "A cable"],
    ["What does battery = 80 do?", "Stores the value 80 in battery", "Turns on a motor", "Prints a message", "Deletes the program"],
    ["What is battery after battery = battery - 5 when battery is 80?", "75", "85", "5", "80"],
    ["Can a variable's value change?", "Yes, you can assign it a new value", "No, never", "Only once", "Only with a printer"],
    ["What does print(name, battery) show?", "The name and battery values", "Only the name", "Only the battery", "Nothing"],
    ["What symbol assigns a value?", "=", "==", "!", "++"],
    ["What is the name in name = \"Ava\"?", "A variable holding the text Ava", "A number", "A colour", "A motor"],
    ["What is a good variable name?", "battery_level", "b l", "123abc only", "!!!"],
    ["What does battery - 5 do?", "Subtracts 5", "Adds 5", "Multiplies by 5", "Divides by 5"],
    ["Why use variables?", "To store and reuse values", "To make the program slower", "To make the screen darker", "To charge the battery"]
  ];
  Q["3.1.4"] = [
    ["What type is 42?", "int", "str", "bool", "float only"],
    ["What type is 3.5?", "float", "int", "bool", "str"],
    ["What type is \"hi\"?", "str", "int", "float", "bool"],
    ["What are the two bool values?", "True and False", "Yes and No only", "1 and 2", "On and off only"],
    ["Which type stores whole numbers?", "int", "str", "bool", "float"],
    ["Which type stores text?", "str", "int", "float", "bool"],
    ["Which type stores decimals?", "float", "bool", "int", "str"],
    ["Why know the type of a value?", "It tells you what you can do with it", "It changes the colour", "It charges the robot", "It uploads the code"],
    ["Is \"42\" in quotes an int or a str?", "str", "int", "float", "bool"],
    ["What type is True?", "bool", "int", "str", "float"]
  ];
  Q["3.1.5"] = [
    ["What does if do?", "Runs code only when a condition is true", "Runs code always", "Deletes code", "Prints the time"],
    ["What do elif and else add?", "Other choices", "More colours", "More batteries", "More motors"],
    ["In the example, what happens when battery is 15?", "Prints Charge me!", "Prints Battery full", "Prints nothing", "Crashes"],
    ["What does < mean?", "Less than", "Greater than", "Equal to", "Not equal"],
    ["Which branch runs when no condition is true?", "else", "elif", "if", "print"],
    ["What is the condition in battery < 20?", "battery is less than 20", "battery is 20", "battery is more than 20 only", "battery is text"],
    ["What happens if battery is 60?", "Prints Battery full", "Prints Charge me!", "Prints nothing", "Crashes"],
    ["How many branches can an if chain have?", "As many as you need", "Only one", "Exactly two", "Exactly ten"],
    ["Why use conditions in robots?", "To react differently to sensor values", "To change the colour", "To stop the printer", "To charge the board"],
    ["What symbol checks equality?", "==", "=", "!=", "<>"]
  ];
  Q["3.1.6"] = [
    ["What makes Python group code?", "Indentation", "Colours", "Brackets only", "Semicolons only"],
    ["How many spaces are suggested per indent level?", "Four", "One", "Ten", "Zero"],
    ["What happens if an indented line is not indented properly?", "Python may show an error", "The robot gets faster", "The code uploads", "Nothing"],
    ["Which code is inside the if?", "The indented lines below it", "The line above it", "Only the first line", "No lines"],
    ["Should indentation be consistent?", "Yes, use the same amount each time", "No, mix randomly", "Only in comments", "Only on Mondays"],
    ["Where do indented lines belong?", "Inside an if, loop or function", "In the USB cable", "In a comment", "In the colour"],
    ["What is a common Python error?", "Wrong indentation", "Too many colours", "Missing battery", "Too much light"],
    ["What do you use to indent?", "Spaces", "Stars", "Letters", "Numbers"],
    ["Why does Python use indentation?", "To show which lines belong together", "To make code slower", "To hide code", "To change colour"],
    ["What does an editor often do to help?", "Show indentation guides", "Change the colour of the robot", "Upload the code", "Print the code"]
  ];
  Q["3.1.7"] = [
    ["What does a for loop do?", "Repeats code for each item in a sequence", "Runs once", "Deletes items", "Stops the program"],
    ["What does range(5) give?", "0, 1, 2, 3, 4", "1 to 5", "5 only", "Nothing"],
    ["What is step in the loop example?", "The loop variable", "A motor", "A battery", "A colour"],
    ["How many times does for step in range(3) run?", "Three", "Two", "Four", "Zero"],
    ["What values does step take in range(3)?", "0, 1, 2", "1, 2, 3", "3, 4, 5", "Only 3"],
    ["What is printed by print(\"Step\", step) when step is 1?", "Step 1", "Step", "1 Step", "Nothing"],
    ["Which keyword begins a loop over items?", "for", "if", "print", "def"],
    ["What must the loop body do?", "Be indented", "Be empty", "Be in a comment", "Be deleted"],
    ["Why is a loop useful for robots?", "It repeats an action many times", "It stores battery", "It changes colour", "It uploads the code"],
    ["What does range(2, 5) give?", "2, 3, 4", "2, 3, 4, 5", "5, 4, 3", "Nothing"]
  ];
  Q["3.1.8"] = [
    ["What does a while loop repeat?", "As long as its condition is true", "Once only", "For each item", "Never"],
    ["What must you change to end a while loop?", "The condition", "The colour", "The printer", "The keyboard"],
    ["What happens if the condition never becomes false?", "The loop never stops", "The loop stops at once", "The program deletes itself", "The screen turns off"],
    ["In the example, what is the starting count?", "0", "3", "1", "10"],
    ["What does count = count + 1 do?", "Adds 1 to count", "Subtracts 1", "Sets count to 0", "Deletes count"],
    ["What does the example stop at?", "When count reaches 3", "When count reaches 10", "Never", "When count is 0"],
    ["What is the difference between for and while?", "while repeats on a condition, for repeats over a range or list", "They are the same", "while is slower", "for cannot repeat"],
    ["Which loop is best when the count is known?", "for", "while only", "if", "print"],
    ["What is an infinite loop?", "A loop that never stops", "A loop of one step", "A loop with no code", "A loop in a comment"],
    ["What can you do to avoid an infinite loop?", "Check that the condition changes", "Turn off the computer", "Remove the print", "Add more colours"]
  ];
  Q["3.1.9"] = [
    ["What is a list?", "A group of values in order", "A type of motor", "A sensor", "A battery"],
    ["What brackets make a list?", "Square brackets", "Curly braces only", "Round brackets only", "Angle brackets"],
    ["What is speeds[0] in the example?", "10", "20", "30", "40"],
    ["What does speeds.append(40) do?", "Adds 40 to the end", "Removes the first item", "Sorts the list", "Prints the list"],
    ["How are list items indexed?", "From 0", "From 1", "From -1 only", "Randomly"],
    ["What does the loop print in the example?", "Each speed in the list", "Only the first speed", "Nothing", "The word list"],
    ["What is the index of the third item?", "2", "3", "1", "0"],
    ["Can a list hold many values?", "Yes", "No, only one", "Only text", "Only colours"],
    ["Which function adds an item?", "append", "print only", "range only", "input only"],
    ["What is a list useful for in robots?", "Storing many sensor readings", "Changing the colour", "Charging the battery", "Printing a poster"]
  ];
  Q["3.1.10"] = [
    ["What does the mini project check?", "Battery level during a run", "The Wi-Fi name", "The colour", "The keyboard"],
    ["What does battery -= 10 mean in the example?", "Each minute the battery drops by 10", "The battery increases", "The battery is charged", "The battery is deleted"],
    ["When does the warning print?", "When battery is below 30", "When battery is above 100", "Every minute", "Never"],
    ["What is the starting battery?", "100", "0", "30", "10"],
    ["How many minutes does the loop run?", "Five", "Ten", "One", "Zero"],
    ["What does print(\"Final battery:\", battery) show?", "The final battery level", "The start battery", "Nothing", "A colour"],
    ["Which combination does this project use?", "Variables, if and a loop", "Only print", "Only colours", "Only sound"],
    ["What minute does the warning show first?", "The minute when battery drops under 30", "Minute zero", "Never", "Every minute"],
    ["Why check a battery in a loop?", "To keep watching it while the robot runs", "To change its colour", "To delete it", "To upload code"],
    ["What could you add to make it better?", "A stop when the battery is too low", "A bigger screen", "A new colour", "More paint"]
  ];

  // Chapter 2: Functions and Your First App
  Q["3.2.1"] = [
    ["What is a function?", "A named block of code you can run when needed", "A type of battery", "A physical part", "A colour"],
    ["Why use functions?", "To reuse code without copying it", "To make the program longer", "To make it slower", "To change colour"],
    ["What does a function have?", "A name and a block of code", "Only a colour", "Only a picture", "Only a number"],
    ["What is a benefit of a named function?", "Easy to read and reuse", "Harder to read", "Makes the code slower", "Stops the robot"],
    ["What do you do when you want to run a function?", "Call it by its name", "Delete it", "Print its colour", "Paint it"],
    ["Which of these is a function?", "A block of code you call by name", "A battery", "A resistor", "A motor"],
    ["What is the opposite of copying the same code many times?", "Using one function", "Using no code", "Using a colour", "Using a battery"],
    ["Why are functions good for robots?", "The same move can be reused in many places", "They make the robot lighter", "They change colours", "They charge the battery"],
    ["What word starts a function definition?", "def", "for", "while", "print"],
    ["What makes a function reusable?", "Calling it whenever needed", "Painting it", "Deleting it", "Hiding it"]
  ];
  Q["3.2.2"] = [
    ["What keyword defines a function?", "def", "func", "function", "define"],
    ["What must the function body have?", "Indentation", "Brackets only", "Colours", "Numbers only"],
    ["What does say_hello() do in the example?", "Prints Hello!", "Turns on a motor", "Charges the battery", "Deletes itself"],
    ["How do you run a function?", "Call it with its name and brackets", "Print its name only", "Delete it", "Paint it"],
    ["Where must the def line end?", "With a colon", "With a semicolon only", "With a full stop", "With a comma"],
    ["What do empty brackets after a function name mean?", "It takes no inputs", "It is broken", "It is a motor", "It is a battery"],
    ["How many times can you call a function?", "As many times as you like", "Only once", "Only twice", "Never"],
    ["What is a function definition?", "The code that says what the function does", "A printed label", "A battery", "A sensor"],
    ["What happens if you define but never call a function?", "Nothing runs", "It runs automatically", "It breaks Python", "It charges the robot"],
    ["What does a call do?", "Runs the function's code", "Deletes the function", "Changes the name", "Prints the colour"]
  ];
  Q["3.2.3"] = [
    ["What is a parameter?", "An input that a function receives", "A colour", "A motor", "A battery"],
    ["What does move(10) do with the parameter distance?", "Prints Moving 10 cm", "Moves 10 metres exactly", "Charges the robot", "Deletes distance"],
    ["What is the value passed in move(25)?", "25", "10", "distance", "cm"],
    ["What is an argument?", "The value you pass when calling", "A broken function", "A colour", "A cable"],
    ["Can one function be called with different values?", "Yes", "No, never", "Only once", "Only with a printer"],
    ["What is the parameter's name in the example?", "distance", "move", "cm", "Moving"],
    ["Why use parameters?", "To make one function work for many values", "To make it slower", "To change the colour", "To stop it"],
    ["How many parameters can a function have?", "Any number needed", "Exactly one", "Exactly ten", "None ever"],
    ["Where do parameters go?", "In the brackets of def", "In a comment", "On the screen", "In the battery"],
    ["Which call gives a different distance?", "move(25)", "move()", "say_hello()", "print()"]
  ];
  Q["3.2.4"] = [
    ["What does return do?", "Sends a result back to the caller", "Deletes the function", "Prints a message", "Restarts the program"],
    ["What does double(7) give in the example?", "14", "7", "9", "2"],
    ["What is stored in result?", "The value returned by double(7)", "The function name", "The number 7 only", "Nothing"],
    ["What happens after return runs?", "The function ends and gives the value back", "The program crashes", "The function repeats", "The screen clears"],
    ["What is x * 2 when x is 7?", "14", "9", "5", "72"],
    ["Does print() return a value?", "Print usually shows text instead of returning a number", "Yes, always a big number", "It returns a colour", "It returns a motor"],
    ["Why return a value instead of printing it?", "So the caller can use it again", "So it is louder", "So it is shorter", "So it uses less paint"],
    ["Which word means give back?", "return", "print", "def", "for"],
    ["Can you use the returned value in other code?", "Yes", "No, never", "Only in comments", "Only on paper"],
    ["What is a good name for a function that returns a sum?", "add_numbers", "x", "123", "!!!"]
  ];
  Q["3.2.5"] = [
    ["What does drive(speed=50) use if no value is given?", "50", "0", "80", "Nothing"],
    ["What does drive(speed=80) use?", "80", "50", "0", "Nothing"],
    ["What is a default value?", "A value used when none is given", "A broken value", "A colour", "A motor"],
    ["What is a named argument?", "An argument given with its parameter name", "A colour", "A broken argument", "A battery"],
    ["Which call uses a named argument?", "drive(speed=80)", "drive(80)", "drive()", "drive(speed)"],
    ["Why use default values?", "So you do not need to pass every value", "So the code breaks", "So it is louder", "So it is slower"],
    ["What does drive() print if the default is 50?", "Speed 50", "Speed 80", "Speed 0", "Nothing"],
    ["Can named arguments be in any order?", "Yes, when named", "No, never", "Only in comments", "Only with numbers"],
    ["Where is the default written?", "In the def line after an equals sign", "In a comment", "On the screen", "In the USB"],
    ["What does speed=50 in def mean?", "Speed defaults to 50", "Speed must be 50 always", "Speed is a colour", "Speed is deleted"]
  ];
  Q["3.2.6"] = [
    ["What does input() do?", "Asks a question and returns the typed text", "Prints a number", "Turns on a motor", "Charges the battery"],
    ["What type does input() return?", "Text (str)", "int", "bool", "float"],
    ["How do you turn text into a whole number?", "int()", "str()", "bool()", "print()"],
    ["In the example, what is age + 1 if age is 10?", "11", "101", "9", "10"],
    ["What does int() do with \"12\"?", "Turns it into the number 12", "Turns it into text", "Deletes it", "Prints it"],
    ["What does float() do?", "Turns text into a decimal number", "Turns text into a bool", "Deletes text", "Uploads"],
    ["What does input(\"How old are you? \") show?", "The question text", "The answer", "Nothing", "A colour"],
    ["What happens if the user types letters into int()?", "Python raises an error", "It becomes 0 always", "It becomes a motor", "Nothing happens"],
    ["Why ask the user questions?", "To make the program interactive", "To make the screen darker", "To charge the battery", "To change colour"],
    ["Which function gets input from the user?", "input", "print", "int", "range"]
  ];
  Q["3.2.7"] = [
    ["What does while True: do?", "Repeats forever until a break", "Runs once", "Deletes the code", "Prints True"],
    ["What does break do?", "Leaves the loop", "Restarts the program", "Prints a message", "Adds a number"],
    ["What is the quit word in the example?", "quit", "stop only", "end only", "exit only"],
    ["What happens when the user types go?", "Prints Driving...", "Quits", "Crashes", "Prints nothing"],
    ["Why use a menu loop?", "So the user can keep giving commands", "So the program ends at once", "So the screen breaks", "So the robot charges"],
    ["What is choice compared with?", "quit", "go only", "driving", "numbers"],
    ["What must you type to quit?", "quit", "exit now", "stop me", "bye bye"],
    ["What does == check?", "Equality", "Assignment", "Division", "Addition"],
    ["Where does the choice get its value?", "From input()", "From print()", "From range()", "From a battery"],
    ["Why is a while True loop with break useful?", "It repeats until the user stops it", "It never runs", "It deletes input", "It changes colours"]
  ];
  Q["3.2.8"] = [
    ["What formula converts Celsius to Fahrenheit?", "c * 9 / 5 + 32", "c * 5 / 9 - 32", "c + 9", "c / 2"],
    ["What is the result of to_fahrenheit(20)?", "68.0", "20", "100", "32"],
    ["What is the Fahrenheit of 0 Celsius?", "32", "0", "100", "212"],
    ["What do you need to convert many values?", "A loop", "A colour", "A battery", "A cable"],
    ["What does return c * 9 / 5 + 32 give back?", "The Fahrenheit value", "The Celsius value", "A colour", "A function name"],
    ["Why use a function for conversion?", "It can be reused many times", "It makes the code louder", "It is required by Python", "It is slower"],
    ["What type does 68.0 have?", "float", "int", "str", "bool"],
    ["What happens if you give the function a text value?", "It causes an error", "It becomes 0", "It becomes Fahrenheit", "Nothing"],
    ["Which step in the converter comes first?", "Ask for a temperature", "Print the colour", "Delete the code", "Charge the board"],
    ["What is a good way to end the converter?", "A quit word in the loop", "Turning off the computer", "Deleting the file", "Pressing reset forever"]
  ];
  Q["3.2.9"] = [
    ["Why put functions in separate files?", "To keep each file easy to read", "To make the file heavier", "To change colours", "To stop Python"],
    ["What file type holds Python code?", ".py", ".txt only", ".jpg", ".mp3"],
    ["What does the import line do?", "Brings in functions from another file", "Deletes the file", "Prints the file", "Charges the board"],
    ["What is forward(50)?", "A call to the forward function with 50", "A colour", "A battery", "A cable"],
    ["What is the file name in the example?", "motors.py", "motor.doc", "robot.exe", "file.jpg"],
    ["What does the comment in the example say?", "motors.py has a forward function", "The robot is blue", "Nothing", "It charges"],
    ["Why is it useful to organise code this way?", "Each file has one job", "It hides the code", "It makes it louder", "It breaks the robot"],
    ["Which keyword brings in code from another file?", "from ... import", "def", "print", "while"],
    ["Can you use functions from several files?", "Yes", "No, never", "Only one file", "Only in comments"],
    ["What does a program with many files help with?", "Finding and fixing problems", "Making the robot heavier", "Changing colours", "Charging"]
  ];
  Q["3.2.10"] = [
    ["What does the robot command app do?", "Calls a function for each command", "Paints the robot", "Charges the battery", "Plays music"],
    ["Which commands are suggested to start?", "Two, like forward and stop", "Twenty", "None", "Only colours"],
    ["What does the app print for each command?", "What the robot would do", "The colour", "Nothing", "The battery brand"],
    ["Why start with two commands?", "So you can finish and test quickly", "So the app is slower", "So the app is bigger", "So it is louder"],
    ["What do you add after the first two work?", "More commands", "A bigger screen", "A new colour", "More paint"],
    ["How does each command connect to code?", "Through a function", "Through a colour", "Through the battery", "Through a cable"],
    ["What is a good test?", "Type each command and check the printed action", "Type nothing", "Turn off the computer", "Close the editor"],
    ["What could a command like stop do?", "Print that the robot stops", "Charge the robot", "Change the colour", "Upload the code"],
    ["What skills does this project combine?", "Functions, input and loops", "Only painting", "Only sound", "Only printing"],
    ["What is a good next step after the app works?", "Connect the commands to real motors", "Delete the app", "Paint the computer", "Turn the computer off"]
  ];

  // Chapter 3: What is a Database?
  Q["3.3.1"] = [
    ["What does a database store?", "Data in an organised way", "Only pictures", "Only music", "Only colours"],
    ["Why is a database better than loose files?", "You can find data quickly and keep it organised", "It is always shorter", "It is always louder", "It charges the battery"],
    ["What do you keep in tables?", "Related data", "Random words", "Motors", "Batteries"],
    ["What is a database used for in robots?", "Storing test results and sensor readings", "Painting walls", "Making music", "Charging batteries"],
    ["What is a record?", "One row of related data", "A battery", "A motor", "A colour"],
    ["What helps many programs work together?", "A database", "A paper notebook only", "A paint brush", "A hammer"],
    ["What is the main purpose of a database?", "Store and retrieve data", "Play music", "Print posters", "Charge"],
    ["Which is an example of a database?", "A table of robots and tests", "A paint tin", "A tyre", "A spoon"],
    ["Why organise data?", "So you can search and sort it", "So it looks pretty only", "So it is heavier", "So it is louder"],
    ["Which is faster for thousands of rows?", "A database", "Reading a paper list by eye", "Guessing", "Ignoring the data"]
  ];
  Q["3.3.2"] = [
    ["What is a table?", "A list of related data", "A motor", "A cable", "A battery"],
    ["What is a column?", "One property of each record", "One row", "A whole table", "A colour"],
    ["What is a row?", "One record", "One property", "The table name", "A type"],
    ["What is the example table's name?", "robots", "motors", "colours", "cables"],
    ["How many columns are listed in the example?", "Four", "Two", "Six", "One"],
    ["What is the example row?", "1, Rex, 4, blue", "Rex only", "blue only", "4 only"],
    ["Which word describes one item in a table?", "Row", "Column", "Table", "Type"],
    ["Which word describes one property like wheels?", "Column", "Row", "Table", "Record only"],
    ["What do the columns id, name, wheels and colour describe?", "Properties of each robot", "Motors", "Batteries", "Cables"],
    ["How many rows does a table with three robots have?", "Three", "One", "Ten", "Zero"]
  ];
  Q["3.3.3"] = [
    ["What is a primary key?", "A column with a unique value for each row", "A password", "A battery", "A colour"],
    ["Why do you need a primary key?", "To find one exact row", "To make it louder", "To change the colour", "To charge"],
    ["Can two robots have the same name?", "Yes, but they need different ids", "No, never", "Only on Tuesdays", "Only in colour"],
    ["What is a good primary key example?", "A student id", "A colour", "A shoe size", "A joke"],
    ["Do databases often add ids automatically?", "Yes", "No, never", "Only when printing", "Only in pictures"],
    ["Why must a primary key be unique?", "So each row can be found exactly", "So rows look different", "So the table is shorter", "So the table is louder"],
    ["What does INTEGER PRIMARY KEY do in SQLite?", "Makes an id that grows automatically", "Deletes the table", "Adds colour", "Plays music"],
    ["Which column would make a good key for robots?", "id", "colour", "wheels", "name only"],
    ["What goes wrong if two rows share a key?", "You cannot tell them apart", "The table is faster", "The table is louder", "Nothing"],
    ["What is a unique value?", "A value that appears only once in the column", "A value used everywhere", "A colour", "A name"]
  ];
  Q["3.3.4"] = [
    ["What type stores whole numbers?", "INTEGER", "TEXT", "DATE only", "BOOL only"],
    ["What type stores decimal numbers?", "REAL", "TEXT", "INTEGER", "COLOUR"],
    ["What type stores words?", "TEXT", "REAL", "INTEGER", "MOTOR"],
    ["What type stores dates and times?", "DATE or TIMESTAMP", "INTEGER only", "REAL only", "TEXT only"],
    ["Why does each column have a type?", "It says what kind of data it holds", "It makes the table red", "It charges the board", "It deletes rows"],
    ["What type is wheels most likely to be?", "INTEGER", "TEXT", "REAL", "DATE"],
    ["What type is a distance like 12.5 cm?", "REAL", "INTEGER only", "TEXT only", "DATE"],
    ["What type is a robot's name?", "TEXT", "INTEGER", "REAL", "DATE"],
    ["What happens if you put text into an INTEGER column?", "It can cause an error or be stored badly", "It becomes a motor", "It always works perfectly", "It uploads"],
    ["Which type would store the time a test ran?", "TIMESTAMP", "INTEGER only", "BOOL only", "COLOUR"]
  ];
  Q["3.3.5"] = [
    ["What can tables do?", "Link to each other", "Print themselves", "Charge robots", "Change colour"],
    ["What links a test to a robot in the example?", "The robot's id", "The robot's colour", "The robot's name only", "The screen"],
    ["Which table has the robot_id column?", "tests", "robots", "colours", "cables"],
    ["What is a relationship between tables?", "A link using a key", "A paint", "A cable", "A battery"],
    ["Why link tables instead of repeating data?", "It avoids repeating information", "It makes data bigger", "It changes colour", "It stops the robot"],
    ["What is a foreign key?", "A column that refers to another table's key", "A battery", "A colour", "A motor"],
    ["How many robots can one test belong to?", "One, in this example", "Ten always", "None", "All robots"],
    ["What does distance in tests store?", "A measured value", "A colour", "A name", "A motor"],
    ["What is the id in the tests table for?", "Finding one test", "Changing colour", "Charging", "Printing"],
    ["What does the layout example show?", "Two tables linked by keys", "A picture", "A song", "A motor"]
  ];
  Q["3.3.6"] = [
    ["What do databases handle well?", "Lots of data safely", "Only one number", "Only pictures", "Only sound"],
    ["What is a benefit of searching a database?", "Find all robots with four wheels quickly", "Make the printer louder", "Charge the battery", "Change the colour"],
    ["What helps keep changes safe in a database?", "Checks and saving rules", "Paper", "A hammer", "Glue"],
    ["Which is an advantage of databases for speed?", "They work well with thousands of rows", "They are always slow", "They print faster", "They are louder"],
    ["Can several programs use the same database?", "Yes", "No, never", "Only one at a time ever", "Only on paper"],
    ["What is a text file bad at compared with a database?", "Searching and checking data quickly", "Storing words", "Being opened", "Being read"],
    ["Why are databases safer for important data?", "Changes are checked and saved correctly", "They use less power", "They are heavier", "They are shinier"],
    ["What does searching mean?", "Finding rows that match a question", "Painting rows", "Deleting rows", "Printing rows"],
    ["Which is an advantage for a robot team?", "Shared data for everyone", "Secret data only", "No data", "Loud data"],
    ["What should a good database do?", "Store, find and protect data", "Only show colours", "Only play sound", "Only print"]
  ];
  Q["3.3.7"] = [
    ["What should you write before creating a table?", "The columns and their types", "The paint colour", "The price", "The brand"],
    ["What is a good column name style?", "Lowercase with no spaces", "UPPERCASE WITH SPACES", "Symbols only", "Emoji"],
    ["How many primary key columns should you pick?", "One", "None", "Five", "Ten"],
    ["Why think about what you will search for?", "So you add the right columns", "So the table is louder", "So the table is redder", "So it charges"],
    ["What should you plan first?", "The design on paper", "The colour of the screen", "The keyboard", "The battery"],
    ["What is a good test for your design?", "Can it answer the questions you care about?", "Is it blue?", "Is it heavy?", "Is it loud?"],
    ["Which column would help search robots by colour?", "colour", "id only", "photo only", "music"],
    ["Why avoid spaces in column names?", "They are harder to use in code", "They make the table heavy", "They change colour", "They break the printer"],
    ["What is the first column in a good robots table?", "An id primary key", "A random number", "A colour", "A name with no key"],
    ["What should you do before filling in rows?", "Confirm the columns and types", "Paint the table", "Delete the database", "Turn off the computer"]
  ];
  Q["3.3.8"] = [
    ["What is SQLite?", "A small database that comes with Python", "A printer", "A battery", "A game"],
    ["What does sqlite3.connect(\"robot.db\") do?", "Opens or creates a database file", "Deletes a file", "Prints a message", "Turns on a motor"],
    ["What do you need to install to use sqlite3 in Python?", "Nothing extra, it comes built in", "A new computer", "A printer", "A camera"],
    ["What is robot.db?", "A database file name", "A motor", "A colour", "A password"],
    ["What does import sqlite3 do?", "Brings the SQLite library into the program", "Prints the database", "Deletes the file", "Charges"],
    ["What does db hold in the example?", "The connection to the database", "A colour", "A motor", "A number"],
    ["Why is SQLite good for beginners?", "No server to set up", "It is always huge", "It is always slow", "It needs a robot"],
    ["What kind of database is SQLite?", "A small file-based database", "A printer", "A motor", "A cable"],
    ["Where is the database saved?", "In the file robot.db", "In the printer", "In the colour", "Nowhere"],
    ["Which line opens a connection?", "sqlite3.connect", "print", "for", "def"]
  ];
  Q["3.3.9"] = [
    ["What does commit() do?", "Saves your changes", "Deletes the database", "Turns off the computer", "Prints the table"],
    ["What does close() do?", "Ends the connection", "Opens the database", "Adds a row", "Prints a number"],
    ["Why must you close the connection?", "To finish cleanly and free resources", "To make it louder", "To change colour", "To charge the battery"],
    ["What happens if you do not commit?", "Changes may not be saved", "Everything is saved", "The table becomes red", "The robot charges"],
    ["When should you commit?", "After making changes", "Before connecting", "Never", "Only on Sundays"],
    ["What is the order in the example?", "Commit, then close", "Close, then commit", "Print, then delete", "Delete, then print"],
    ["What is a database connection?", "A link between your program and the database file", "A cable", "A motor", "A battery"],
    ["Why is it good to close connections?", "It stops data problems", "It makes the screen bright", "It charges the printer", "It makes the code longer"],
    ["Which function saves changes?", "commit", "close", "connect", "print"],
    ["What could go wrong without close?", "The file may stay locked or unsaved", "The screen turns red", "The robot sings", "The code becomes a poem"]
  ];
  Q["3.3.10"] = [
    ["What is the mini project?", "A catalogue of robots in a table", "A car", "A drone", "A display"],
    ["How many robots are added in the example?", "Three", "One", "Ten", "Zero"],
    ["What columns does the catalogue have?", "Name and wheels", "Only colour", "Only sound", "Only photos"],
    ["What do you do to print all robots?", "Read and print the rows", "Delete them", "Paint them", "Charge them"],
    ["What tool helps check the table?", "A free SQLite viewer like DB Browser", "A hammer", "A spoon", "A paint roller"],
    ["What is DB Browser for SQLite?", "A viewer for SQLite files", "A game", "A robot", "A printer"],
    ["What must you do after adding rows?", "Commit the changes", "Delete the table", "Turn off the screen", "Paint the table"],
    ["What is a good test for the catalogue?", "Print all rows and check them", "Guess the answer", "Ignore it", "Delete all"],
    ["What could you add to the catalogue later?", "More robot columns, like colour", "A new paint job", "A bigger screen", "A louder speaker"],
    ["What skills does this project use?", "Tables, rows and inserting data", "Painting", "Printing posters", "Music"]
  ];

  // Chapter 4: SQL: Talking to a Database
  Q["3.4.1"] = [
    ["What does SQL stand for?", "Structured Query Language", "Simple Quick Lamp", "Smart Quiz Level", "Solid Quality Link"],
    ["What is SQL used for?", "Talking to databases", "Painting pictures", "Playing music", "Charging batteries"],
    ["Which databases understand SQL?", "Most databases", "Only paper", "Only phones", "Only cars"],
    ["Does SQL read like plain English?", "A lot, yes", "Not at all", "Only in pictures", "Only in colour"],
    ["What does SQL let you do?", "Create, read, change and delete data", "Only print", "Only paint", "Only charge"],
    ["What is SQLite?", "A small database that comes with Python", "A printer", "A game", "A battery"],
    ["Why start with SQLite?", "No install needed", "It is very expensive", "It needs a huge server", "It needs a robot"],
    ["What is a query?", "A question you ask the database", "A type of motor", "A cable", "A colour"],
    ["Which SQL command reads data?", "SELECT", "INSERT", "UPDATE", "DELETE"],
    ["What is the main idea of SQL?", "Asking databases to do work for you", "Painting the database", "Charging the database", "Printing the database"]
  ];
  Q["3.4.2"] = [
    ["What does CREATE TABLE do?", "Makes a new table", "Deletes a table", "Reads a table", "Prints a table"],
    ["What columns does the scores table have?", "id, name and points", "colour and size only", "motor and battery", "Only id"],
    ["What type is id?", "INTEGER PRIMARY KEY", "TEXT", "REAL", "BOOL"],
    ["What type is name?", "TEXT", "INTEGER", "REAL", "BOOL"],
    ["What type is points?", "INTEGER", "TEXT", "DATE", "BOOL"],
    ["What must end a SQL statement?", "A semicolon", "A comma", "A colon", "A question mark"],
    ["What does IF NOT EXISTS mean if used?", "Create only if the table is missing", "Delete the table", "Read the table", "Print the table"],
    ["What is the purpose of the id column?", "A unique key for each row", "A colour", "A price", "A sound"],
    ["Why does CREATE TABLE need types?", "So each column stores the right kind of data", "So the table is louder", "So the table is red", "So it charges"],
    ["What happens if the table already exists without IF NOT EXISTS?", "You may get an error", "It charges", "It turns red", "Nothing ever happens"]
  ];
  Q["3.4.3"] = [
    ["What does INSERT do?", "Adds a new row", "Deletes a row", "Reads a row", "Prints a row"],
    ["What does the example insert?", "Ava with 42 points", "A motor", "A colour", "A battery"],
    ["What do you list after INTO scores?", "The column names", "The colours", "The battery", "The motor"],
    ["What must the values match?", "The order of the column names", "The colour of the table", "The size of the screen", "The price"],
    ["What are the values in the example?", "'Ava' and 42", "Only 42", "Only Ava", "Nothing"],
    ["Which keyword starts the insert?", "INSERT", "SELECT", "UPDATE", "DELETE"],
    ["Why are the quotes used around Ava?", "Because it is text", "Because it is a number", "Because it is a colour", "Because it is a motor"],
    ["What does VALUES introduce?", "The values to insert", "The table name", "The colour", "The file"],
    ["Does id need to be given?", "No, it can be added automatically", "Yes, always by hand", "Only on Tuesdays", "Never"],
    ["What happens if you insert with a wrong number of values?", "An error happens", "The row becomes red", "The table grows", "Nothing"]
  ];
  Q["3.4.4"] = [
    ["What does SELECT do?", "Reads data from a table", "Adds a row", "Deletes a row", "Changes a row"],
    ["What does SELECT name, points FROM scores return?", "The name and points columns", "The id column only", "All colours", "A motor"],
    ["What does FROM tell SQL?", "Which table to use", "What colour to use", "Which motor to use", "Which battery to use"],
    ["What does SELECT * mean?", "All columns", "No columns", "Only the first column", "A motor"],
    ["What is SELECT followed by?", "The columns you want", "The table name only", "A colour", "A number"],
    ["What do you get from SELECT?", "The rows that match", "A sound", "A picture", "A motor"],
    ["What does the semicolon do?", "Ends the statement", "Starts a new table", "Deletes data", "Prints data"],
    ["Which statement reads the scores?", "SELECT name, points FROM scores;", "INSERT INTO scores;", "DELETE FROM scores;", "UPDATE scores;"],
    ["Can SELECT read only some columns?", "Yes", "No, never", "Only with pictures", "Only in colour"],
    ["Why use SELECT?", "To ask the database what it holds", "To make the database louder", "To change colour", "To charge"]
  ];
  Q["3.4.5"] = [
    ["What does WHERE do?", "Keeps only rows matching a condition", "Adds rows", "Deletes tables", "Prints colours"],
    ["What rows does the example return?", "Rows where points is greater than 10", "All rows", "No rows ever", "Only ids"],
    ["What does > mean?", "Greater than", "Less than", "Equal", "Not"],
    ["Which keyword filters rows?", "WHERE", "FROM", "SELECT", "VALUES"],
    ["What does WHERE points > 10 keep?", "Scores above 10", "Scores below 10 only", "Scores equal to 0", "Names"],
    ["What is a condition?", "A test that is true or false", "A colour", "A motor", "A battery"],
    ["Can WHERE use = to match a name?", "Yes, WHERE name = 'Ava'", "No, never", "Only with numbers", "Only with pictures"],
    ["What does WHERE use to compare text?", "Quotes around the text", "Brackets", "Colons", "Stars"],
    ["What happens if no rows match?", "The query returns no rows", "The database breaks", "The table is deleted", "The robot charges"],
    ["Why is WHERE important?", "It limits results to what you need", "It makes the table red", "It charges the robot", "It deletes everything"]
  ];
  Q["3.4.6"] = [
    ["What does ORDER BY do?", "Sorts the results", "Deletes rows", "Adds a row", "Prints a colour"],
    ["What does DESC do?", "Sorts from largest to smallest", "Sorts from smallest to largest", "Deletes rows", "Adds rows"],
    ["What order does ORDER BY use by default?", "Smallest to largest", "Largest to smallest", "Random", "Colour order"],
    ["What do you add to sort the largest first?", "DESC", "ASC only", "LIMIT only", "WHERE"],
    ["In the example, what is sorted?", "points", "name only", "id only", "colour"],
    ["Which keyword sorts results?", "ORDER BY", "SELECT", "INSERT", "CREATE"],
    ["What is the example output order?", "Largest points first", "Smallest points first", "Random", "Names only"],
    ["Can you sort by a text column?", "Yes", "No, never", "Only numbers", "Only colours"],
    ["What does ASC mean?", "Ascending, smallest to largest", "Ascending, largest to smallest", "Asleep", "Accurate"],
    ["Why sort results?", "To see the best or worst first", "To make them louder", "To change colour", "To charge the battery"]
  ];
  Q["3.4.7"] = [
    ["What does UPDATE do?", "Changes existing rows", "Adds new tables", "Prints rows", "Deletes tables"],
    ["What does the example change?", "Ava's points to 50", "The table name", "The colour", "The battery"],
    ["Why must you use WHERE with UPDATE?", "Otherwise every row changes", "To make it faster", "To change the colour", "It is not needed"],
    ["What does SET do?", "Sets new values for columns", "Deletes rows", "Reads rows", "Creates tables"],
    ["Which name does the example update?", "Ava", "Ben", "Cara", "Everyone"],
    ["What happens without WHERE in an update?", "Every row is changed", "Nothing happens", "The table is deleted", "The robot charges"],
    ["How do you stay safe with UPDATE?", "Check with a SELECT first", "Never use it", "Use it blindly", "Turn off the computer"],
    ["Which keyword begins the update?", "UPDATE", "SELECT", "INSERT", "DELETE"],
    ["What does points = 50 set?", "The points value to 50", "The name to 50", "The id to 50", "The colour"],
    ["Why use UPDATE instead of INSERT?", "To change a row that already exists", "To add a new table", "To read rows", "To delete the database"]
  ];
  Q["3.4.8"] = [
    ["What does DELETE do?", "Removes rows", "Adds rows", "Reads rows", "Changes columns"],
    ["What rows does the example delete?", "Rows where points is less than 5", "All rows", "No rows", "Only ids"],
    ["What does < mean?", "Less than", "Greater than", "Equal", "Not"],
    ["Why must you include WHERE with DELETE?", "To avoid deleting every row", "To make it louder", "To change colour", "It is not needed"],
    ["What is safer before a delete?", "Run a SELECT with the same WHERE", "Delete immediately", "Delete everything", "Close the program"],
    ["What does DELETE FROM scores WHERE points < 5 remove?", "Low scores only", "The whole table", "Names", "Colours"],
    ["What is the main risk of DELETE?", "Losing data", "Making it louder", "Changing colours", "Charging"],
    ["Which keyword names the table?", "FROM", "WHERE", "SET", "VALUES"],
    ["Can DELETE remove one row?", "Yes, with a WHERE that matches one row", "No, never", "Only all rows", "Only tables"],
    ["What is a good habit with DELETE?", "Double-check the condition", "Delete without thinking", "Never check", "Use random conditions"]
  ];
  Q["3.4.9"] = [
    ["Why use ? in an INSERT?", "To keep values separate and safe", "To make the query shorter only", "To change the colour", "To charge the board"],
    ["What is SQL injection?", "A risk where unsafe text changes a query", "A type of battery", "A motor", "A cable"],
    ["What does db.execute do with the values tuple?", "Fills the ? placeholders safely", "Deletes the tuple", "Prints the tuple", "Adds a colour"],
    ["What is a tuple?", "A fixed group of values", "A type of motor", "A cable", "A colour"],
    ["Which value fills the first ?", "Ben", "30", "points", "scores"],
    ["Which value fills the second ?", "30", "Ben", "scores", "points"],
    ["Why separate values from the SQL text?", "It keeps user input from changing the query", "It makes it louder", "It changes colour", "It uploads faster"],
    ["Does the example insert Ben?", "Yes, with 30 points", "No, it inserts Ava", "It deletes Ben", "It prints nothing"],
    ["Which method runs the SQL?", "execute", "print", "range", "append"],
    ["Why is this safer than joining strings together?", "It protects against harmful input", "It is shorter only", "It is louder", "It is brighter"]
  ];
  Q["3.4.10"] = [
    ["What is the high score board?", "A table of players with the top scores shown", "A car", "A drone", "A display"],
    ["What does LIMIT 3 do?", "Shows only three rows", "Deletes three rows", "Adds three rows", "Prints three colours"],
    ["Which order shows the top scores first?", "ORDER BY points DESC", "ORDER BY points", "ORDER BY name", "ORDER BY id DESC only"],
    ["What do you insert in this project?", "Players and their scores", "Motors", "Batteries", "Colours"],
    ["Which SQL command adds players?", "INSERT", "DELETE", "CREATE only", "PRINT"],
    ["How many top players are shown?", "Three", "Ten", "One", "All"],
    ["Which clause limits the results?", "LIMIT", "SET", "VALUES", "FROM"],
    ["Which clause sorts the scores?", "ORDER BY", "WHERE only", "VALUES", "CREATE"],
    ["What does the example query return?", "The top three names and points", "All colours", "The table name", "A motor"],
    ["What skills does this project combine?", "CREATE, INSERT, SELECT and sorting", "Only painting", "Only sound", "Only printing"]
  ];

  // Chapter 5: Sensors and Live Data
  Q["3.5.1"] = [
    ["What do sensors do?", "Measure the world", "Print pictures", "Charge batteries", "Play music"],
    ["What does a temperature sensor measure?", "Heat", "Sound", "Light only", "Distance"],
    ["What does a light sensor measure?", "Brightness", "Heat", "Distance", "Speed"],
    ["What does a distance sensor measure?", "How far away something is", "The colour", "The time", "The weight"],
    ["Why use sensors in robots?", "To know what is happening around them", "To change colour", "To print", "To play music"],
    ["Which of these is a sensor?", "An ultrasonic distance sensor", "A motor", "A battery", "A cable"],
    ["What is the output of a sensor?", "A reading", "A colour", "A printed label", "A sound"],
    ["Can sensors measure something you cannot see?", "Yes, such as distance by sound or light", "No, never", "Only colours", "Only smell"],
    ["What do readings let a program do?", "Make decisions", "Paint itself", "Print posters", "Charge"],
    ["What is a common sensor type in robots?", "Distance and light sensors", "Only cameras", "Only paper", "Only microphones"]
  ];
  Q["3.5.2"] = [
    ["What is a digital sensor?", "One that sends on or off", "One that sends a range of values", "One that sends colours", "One that sends music"],
    ["What is an analog sensor?", "One that sends a range of values", "One that only sends on or off", "One that sends colours", "One that prints"],
    ["What range does analogRead() return?", "0 to 1023", "0 to 13", "1 to 10", "0 to 100 only"],
    ["What function reads an analog pin?", "analogRead", "digitalWrite", "pinMode", "delay"],
    ["Why map a value to a useful range?", "So it is easier to understand", "So it is louder", "So it charges", "So it changes colour"],
    ["What is calibration?", "Checking readings against known values", "Painting the sensor", "Charging the sensor", "Deleting the sensor"],
    ["What does mapping 0 to 1023 to 0 to 100 percent give?", "An easier to read percentage", "A colour", "A sound", "A battery"],
    ["Is a light sensor usually analog?", "Yes, often", "Never", "Only digital", "Only sound"],
    ["Which pin does analogRead use in the example?", "A0", "Pin 13", "Reset", "5V"],
    ["What must you know about readings to use them?", "What the range means", "The colour of the case", "The brand", "The weight"]
  ];
  Q["3.5.3"] = [
    ["What does Serial.begin(9600) start?", "A connection to the computer", "A motor", "A sound", "A battery"],
    ["What does Serial.println(analogRead(sensorPin)) send?", "The reading on its own line", "A colour", "A motor signal", "A sound"],
    ["What is sensorPin set to in the example?", "A0", "13", "5V", "GND"],
    ["How often does the example print?", "Once per second", "Never", "Every hour", "Every millisecond only"],
    ["Where does the reading get printed?", "The Serial Monitor", "The battery", "The motor", "The screen"],
    ["What does the delay(1000) in loop do?", "Waits one second between readings", "Stops the board", "Changes the pin", "Uploads code"],
    ["Which function runs once at the start?", "setup", "loop", "delay", "print"],
    ["What must match between Arduino and Python?", "The baud rate", "The colour", "The pin name", "The file name"],
    ["What does println add at the end?", "A new line", "A colour", "A sound", "A battery"],
    ["Why print readings during testing?", "To check values are sensible", "To charge the board", "To change colour", "To make it louder"]
  ];
  Q["3.5.4"] = [
    ["What library reads serial data in Python?", "pyserial", "pygame", "numpy only", "turtle"],
    ["How do you install pyserial?", "With pip", "With a printer", "With a paper notebook", "With a hammer"],
    ["What does serial.Serial(\"COM3\", 9600) open?", "The port at the given speed", "A new file", "A motor", "A battery"],
    ["What does readline() return?", "One line of data as bytes", "A colour", "A motor signal", "A battery"],
    ["Why decode and strip the line?", "To turn bytes into clean text", "To make it louder", "To change the colour", "To charge the board"],
    ["What port name is used on Windows in the example?", "COM3", "/dev/null", "USB only", "Pin A0"],
    ["Why must the port name be correct?", "So Python connects to the right device", "So the printer works", "So the screen is blue", "So the battery charges"],
    ["What must the speed match?", "The Arduino's Serial.begin speed", "The screen size", "The printer speed", "The battery"],
    ["What could you see if the port is wrong?", "An error or no data", "A colour", "A sound", "A new file"],
    ["What does port.readline() wait for?", "A line of data from the board", "A keyboard press only", "The battery", "The screen"]
  ];
  Q["3.5.5"] = [
    ["What does a timestamp record?", "When a reading happened", "The colour of a sensor", "The name of a robot", "The weight"],
    ["What module makes the time in the example?", "datetime", "pyserial", "turtle", "math"],
    ["What does datetime.now().isoformat() give?", "The current date and time as text", "A colour", "A motor", "A number"],
    ["Why store time with each reading?", "To see when each value happened", "To change colour", "To make it louder", "To charge"],
    ["What type is a timestamp usually stored as?", "TEXT or TIMESTAMP", "BOOL", "INTEGER only", "COLOUR"],
    ["What is the import line?", "from datetime import datetime", "import colour", "print datetime", "def datetime"],
    ["Why are timestamps useful in logs?", "They show the order of events", "They change colour", "They play music", "They charge the battery"],
    ["Which method gives the current time?", "now()", "range()", "append()", "sleep()"],
    ["What happens to timestamps if you log every second?", "You get a time for each reading", "Only one time ever", "No time at all", "A colour"],
    ["What is a good format for time?", "ISO format, like 2026-10-15T10:00", "Only a colour", "Only a word", "Only a number 1"]
  ];
  Q["3.5.6"] = [
    ["What does CREATE TABLE readings make?", "A table for sensor values", "A motor", "A colour", "A battery"],
    ["What columns are in the readings table?", "id, time and value", "colour and motor", "name and wheels", "only id"],
    ["Which column type is value?", "INTEGER", "TEXT", "DATE", "BOOL"],
    ["Which column type is time?", "TEXT", "INTEGER", "BOOL", "COLOUR"],
    ["What makes each reading one row?", "Inserting one row for each value", "Adding colours", "Changing the table", "Deleting rows"],
    ["What is the id column for?", "A unique key for each reading", "A colour", "A price", "A sound"],
    ["Why use a readings table?", "To store many readings over time", "To print one reading", "To paint", "To charge"],
    ["What keyword makes a new table?", "CREATE TABLE", "INSERT", "SELECT", "UPDATE"],
    ["What does IF NOT EXISTS help with?", "Avoiding an error if the table is already there", "Deleting tables", "Painting tables", "Charging"],
    ["What would go wrong without an id?", "Rows would be harder to find and tell apart", "The table would be red", "The table would sing", "Nothing"]
  ];
  Q["3.5.7"] = [
    ["What does each logged reading become?", "A new row", "A new table", "A new colour", "A new motor"],
    ["What should you do after a batch of inserts?", "Commit the changes", "Delete the table", "Turn off the screen", "Print the table"],
    ["Why commit after a batch?", "So you do not lose data", "To make it louder", "To change colour", "To charge"],
    ["What do ? placeholders help with?", "Inserting values safely", "Painting", "Charging", "Printing"],
    ["What are now and value in the example?", "The time and the reading", "Two colours", "Two motors", "Two batteries"],
    ["Which keyword inserts a row?", "INSERT", "SELECT", "DELETE", "CREATE"],
    ["What is logging?", "Saving data over time", "Painting data", "Deleting data", "Charging data"],
    ["How often should you log in the example?", "Each reading from the sensor", "Once per year", "Never", "Every hour exactly"],
    ["What could happen if you forget to commit?", "The new readings may not be saved", "The table turns red", "The sensor charges", "Nothing"],
    ["What does a log file or table help you do?", "Review data later", "Paint the sensor", "Charge the sensor", "Print posters"]
  ];
  Q["3.5.8"] = [
    ["What does AVG(value) calculate?", "The average value", "The maximum value", "The number of rows", "The colour"],
    ["What does MAX(value) find?", "The highest value", "The lowest value", "The average", "The colour"],
    ["What does MIN(value) find?", "The lowest value", "The highest value", "The average", "The number of rows"],
    ["What does COUNT(*) show?", "How many rows there are", "The colour", "The average", "The name"],
    ["Which function gives the average?", "AVG", "MAX", "MIN", "SUM"],
    ["Why ask questions of logged data?", "To understand what happened", "To change colour", "To charge the battery", "To print posters"],
    ["What does SELECT MAX(value) FROM readings return?", "The highest reading", "All readings", "The table name", "A colour"],
    ["What is a good question for logs?", "What was the highest reading today?", "What colour is the sky?", "Is the room blue?", "What is the battery brand?"],
    ["Which statement finds the average of all readings?", "SELECT AVG(value) FROM readings;", "SELECT value FROM colour;", "DELETE FROM readings;", "CREATE TABLE avg;"],
    ["Why are these queries useful for sensors?", "They summarise many readings quickly", "They make the robot louder", "They change colour", "They charge"]
  ];
  Q["3.5.9"] = [
    ["What is a live dashboard?", "A display that shows the newest values as they arrive", "A printed poster", "A car", "A battery"],
    ["How can you start a simple dashboard?", "Print the last five rows in the terminal", "Paint the screen", "Charge the board", "Delete the database"],
    ["Which library can draw graphs?", "matplotlib", "turtle only", "pygame only", "random"],
    ["How often should a dashboard refresh?", "About once per second", "Every millisecond", "Never", "Once per year"],
    ["Why not refresh every millisecond?", "It can slow the computer down", "It makes the screen blue", "It charges the battery", "It is not possible"],
    ["What do you show on a live dashboard?", "The newest readings", "Only old readings", "Only colours", "Only music"],
    ["What is the simplest first dashboard?", "Printing the latest rows", "A 3D model", "A video game", "A robot arm"],
    ["Why is a dashboard useful?", "It lets you watch what the robot is doing", "It makes the robot heavier", "It paints the robot", "It charges"],
    ["What is the term for refreshing a display regularly?", "Updating", "Painting", "Deleting", "Charging"],
    ["What could a graph show?", "How a reading changes over time", "The name of the robot only", "The colour of the table", "The weather in another country"]
  ];
  Q["3.5.10"] = [
    ["What is the mini project?", "Log at least 50 readings from a sensor", "Build a car", "Print a poster", "Paint a robot"],
    ["How many readings must you log?", "At least 50", "Exactly 5", "Exactly 500", "None"],
    ["What SQL shows the average?", "SELECT AVG(value) FROM readings;", "SELECT colour FROM readings;", "DELETE FROM readings;", "CREATE readings;"],
    ["What do you need to find the time of the highest reading?", "The time column with the highest value", "The colour", "The name only", "The motor"],
    ["What SQL finds the highest value?", "SELECT MAX(value) FROM readings;", "SELECT MIN(value) FROM readings;", "SELECT AVG(id) FROM readings;", "SELECT * FROM colours;"],
    ["Which sensor can you connect?", "Any sensor you have", "Only a microphone", "Only a camera", "Only a motor"],
    ["What must you check before logging?", "The readings look sensible", "The colour is right", "The paint is dry", "The battery is blue"],
    ["Which skill does this project combine?", "Sensors, Serial, Python and SQL", "Only painting", "Only sound", "Only printing"],
    ["What is the final output of the project?", "A logged dataset and a query result", "A painted robot", "A song", "A poster"],
    ["What would make the project better?", "A live graph of the readings", "A bigger screen only", "More paint", "A louder speaker"]
  ];
})();
