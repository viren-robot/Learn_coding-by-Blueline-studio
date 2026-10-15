// Level 3: IRobolive (chapters 1-5, 10 lessons each)
(function () {
  var P = window.LH.P, U = window.LH.U, C = window.LH.C, T = window.LH.T, L = window.LH.L;

  window.LESSONS[3] = {
    1: [
      L("Why Python?",
        P("Python is a friendly language that reads almost like English. It is used for games, websites, science and robots. You will use it to control robots and work with databases.")),
      L("Running your first Python program",
        P("You can write Python in an online editor, the IDLE app that comes with Python, or VS Code. Your first program prints a message."),
        C(`print("Hello, robot!")`)),
      L("Variables store values",
        P("A variable is a name that holds a value. You can change the value later."),
        C(`name = "Ava"
battery = 80
battery = battery - 5   # now 75
print(name, battery)`)),
      L("Numbers, text and true or false",
        P("Python has several basic types. Knowing the type tells you what you can do with a value."),
        U("int: whole numbers, like 42", "float: decimals, like 3.5", "str: text in quotes, like \"hi\"", "bool: True or False")),
      L("Making decisions with if",
        P("An if statement runs code only when a condition is true. Use elif and else for other choices."),
        C(`battery = 15
if battery < 20:
    print("Charge me!")
elif battery < 50:
    print("Battery OK")
else:
    print("Battery full")`)),
      L("Indentation matters",
        P("Python uses indentation (spaces at the start of a line) to group code. Every line inside an if or loop must be indented the same amount."),
        T("Use four spaces for each indent level, and keep it consistent.")),
      L("Loops with for",
        P("A for loop repeats code for each item in a sequence. range(5) gives 0, 1, 2, 3, 4."),
        C(`for step in range(3):
    print("Step", step)`)),
      L("Loops with while",
        P("A while loop repeats as long as its condition is true. Be careful to change the condition, or the loop never stops."),
        C(`count = 0
while count < 3:
    print(count)
    count = count + 1`)),
      L("Lists store many values",
        P("A list holds several values in order. Use square brackets and index them from 0."),
        C(`speeds = [10, 20, 30]
print(speeds[0])        # 10
speeds.append(40)       # add to the end
for s in speeds:
    print(s)`)),
      L("Mini project: robot status",
        P("Combine variables, if, and a loop to check a battery level every step of a run."),
        C(`battery = 100
for minute in range(5):
    battery = battery - 10
    if battery < 30:
        print("Warning at minute", minute)
print("Final battery:", battery)`))
    ],
    2: [
      L("What is a function?",
        P("A function is a named block of code you can run whenever you need it. It saves you from copying the same code many times.")),
      L("Defining a function",
        P("Use def to define a function. The code inside is indented."),
        C(`def say_hello():
    print("Hello!")

say_hello()`)),
      L("Parameters: inputs to a function",
        P("Parameters let a function work with different values. Pass arguments when you call it."),
        C(`def move(distance):
    print("Moving", distance, "cm")

move(10)
move(25)`)),
      L("Return values",
        P("return sends a result back to the code that called the function."),
        C(`def double(x):
    return x * 2

result = double(7)   # 14
print(result)`)),
      L("Default values and named arguments",
        P("You can give parameters a default value. Callers can use the default or set a value by name."),
        C(`def drive(speed=50):
    print("Speed", speed)

drive()           # uses 50
drive(speed=80)   # uses 80`)),
      L("Getting input from the user",
        P("input() asks a question and returns what the user types, as text. Convert it to a number with int() or float()."),
        C(`age = int(input("How old are you? "))
print("Next year you will be", age + 1)`)),
      L("Repeating with a menu",
        P("Put input in a loop to make a small program that keeps running until the user chooses to quit."),
        C(`while True:
    choice = input("Type 'go' to drive or 'quit' to stop: ")
    if choice == "quit":
        break
    print("Driving...")`)),
      L("Temperature converter app",
        P("Write a function that converts Celsius to Fahrenheit. Use it in a loop so the user can convert as many values as they want."),
        C(`def to_fahrenheit(c):
    return c * 9 / 5 + 32

print(to_fahrenheit(20))   # 68.0`)),
      L("Organising code into files",
        P("When a program grows, split functions into separate .py files and import them. This keeps each file easy to read."),
        C(`# motors.py has a forward() function
from motors import forward
forward(50)`)),
      L("Mini project: a robot command app",
        P("Build a small app where each command, like forward, left or stop, calls a function. The app prints what the robot would do."),
        T("Start with just two commands, then add more when the first two work."))
    ],
    3: [
      L("What is a database?",
        P("A database stores data in an organised way so you can find it quickly. Instead of many loose files, you keep related data in tables.")),
      L("Tables, rows and columns",
        P("A table is a list of related data. Each column is one property, and each row is one record."),
        U("Table: robots", "Columns: id, name, wheels, colour", "Row: one robot, for example 1, Rex, 4, blue")),
      L("Primary keys",
        P("A primary key is a column with a unique value for each row. It lets you find one specific row, even when names repeat."),
        U("Student IDs are good primary keys", "Two robots can have the same name, but not the same id", "Databases often add the id number automatically")),
      L("Data types in databases",
        P("Each column has a type that says what kind of data it holds."),
        U("INTEGER: whole numbers", "REAL: decimal numbers", "TEXT: words", "DATE or TIMESTAMP: date and time")),
      L("Relationships between tables",
        P("Tables can link to each other. A table of tests can link to a robots table using the robot's id."),
        C(`robots:  id | name
tests:   id | robot_id | distance`)),
      L("Why databases beat text files",
        P("Databases handle lots of data safely, let several programs work together, and let you ask questions quickly."),
        U("Searching: find all robots with 4 wheels", "Safety: changes are checked and saved correctly", "Speed: works well with thousands of rows")),
      L("Designing a robot table",
        P("Before you create a table, write the columns you need and the type for each. Plan it on paper first."),
        U("Name each column in lowercase with no spaces", "Pick one primary key column", "Think about what you will search for")),
      L("Using SQLite from Python",
        P("SQLite is a small database that comes with Python. You can make a database file with one line of code and no install."),
        C(`import sqlite3
db = sqlite3.connect("robot.db")`)),
      L("Saving and closing",
        P("Call commit() to save your changes, and close() when you are done. Always close the database connection."),
        C(`db.commit()
db.close()`)),
      L("Mini project: a robot catalogue",
        P("Create a database table of robots with name and wheels. Add three robots, then print them all."),
        T("Check the table with a free SQLite viewer, like DB Browser for SQLite."))
    ],
    4: [
      L("What is SQL?",
        P("SQL (Structured Query Language) is the language you use to talk to databases. Most databases understand SQL, and it reads a lot like plain English.")),
      L("CREATE TABLE",
        P("CREATE TABLE makes a new table with its columns and types."),
        C(`CREATE TABLE scores (
  id INTEGER PRIMARY KEY,
  name TEXT,
  points INTEGER
);`)),
      L("INSERT adds rows",
        P("INSERT adds a new row. List the columns, then the values in the same order."),
        C(`INSERT INTO scores (name, points) VALUES ('Ava', 42);`)),
      L("SELECT reads data",
        P("SELECT chooses which columns to read from a table."),
        C(`SELECT name, points FROM scores;`)),
      L("WHERE filters rows",
        P("WHERE keeps only the rows that match a condition."),
        C(`SELECT name FROM scores WHERE points > 10;`)),
      L("Sorting with ORDER BY",
        P("ORDER BY sorts the results. Add DESC to show the largest values first."),
        C(`SELECT name, points FROM scores ORDER BY points DESC;`)),
      L("UPDATE changes rows",
        P("UPDATE changes existing rows. Always use WHERE, or you will change every row."),
        C(`UPDATE scores SET points = 50 WHERE name = 'Ava';`),
        T("Forgetting WHERE in an UPDATE or DELETE changes every row. Always check first with a SELECT.")),
      L("DELETE removes rows",
        P("DELETE removes rows that match a condition. Like UPDATE, always include WHERE."),
        C(`DELETE FROM scores WHERE points < 5;`)),
      L("Safe values in Python",
        P("When you put data from a user into SQL, use question marks (?) and pass the values separately. This keeps your program safe from SQL injection."),
        C(`db.execute("INSERT INTO scores (name, points) VALUES (?, ?)", ("Ben", 30))`)),
      L("Mini project: a high score board",
        P("Make a table of players, add scores with INSERT, then show the top three with ORDER BY and LIMIT 3."),
        C(`SELECT name, points FROM scores ORDER BY points DESC LIMIT 3;`))
    ],
    5: [
      L("What are sensors?",
        P("Sensors measure the world. A temperature sensor measures heat, a light sensor measures brightness, and a distance sensor measures how far away something is.")),
      L("Analog and digital readings",
        P("Digital sensors send on or off. Analog sensors send a range of values. The Arduino's analogRead() gives values from 0 to 1023."),
        U("analogRead(A0) returns 0 to 1023", "Map the value to a useful range, like 0 to 100 percent", "Calibrate by reading known values")),
      L("Printing readings with Serial",
        P("Serial.begin() opens the connection. Serial.println() sends a line that your computer can read."),
        C(`int sensorPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println(analogRead(sensorPin));
  delay(1000);
}`)),
      L("Reading Serial data in Python",
        P("The pyserial library lets Python read the lines the Arduino prints. Install it with pip, then open the same port."),
        C(`import serial
port = serial.Serial("COM3", 9600)   # use your own port name
line = port.readline().decode().strip()
print(line)`)),
      L("Adding timestamps",
        P("A timestamp records when each reading happened. Python's datetime module can make one for you."),
        C(`from datetime import datetime
now = datetime.now().isoformat()`)),
      L("Creating a readings table",
        P("Make a table with an id, a timestamp and a value so each sensor reading becomes one row."),
        C(`CREATE TABLE readings (
  id INTEGER PRIMARY KEY,
  time TEXT,
  value INTEGER
);`)),
      L("Logging readings into the database",
        P("Put the Serial reading and the insert in a loop. Commit after each batch so you do not lose data."),
        C(`db.execute("INSERT INTO readings (time, value) VALUES (?, ?)", (now, value))
db.commit()`)),
      L("Looking at history",
        P("Once readings are in a database, you can ask questions about them, like the average or the highest value of the last hour."),
        C(`SELECT AVG(value) FROM readings;
SELECT MAX(value) FROM readings;`)),
      L("Simple live dashboard idea",
        P("A live dashboard shows the newest values as they arrive. Start by printing the last five rows in your terminal, then draw a graph with a library like matplotlib."),
        T("Refresh the display every second, not every millisecond, so your computer stays fast.")),
      L("Mini project: logged sensor",
        P("Connect any sensor to the Arduino, log at least 50 readings, then write a SQL query that shows the average and the time of the highest reading.")
      )
    ]
  };
})();
