// Example: Get A Name
// This app gets the name input from the user and turn into a basic welcome app.
const getName = prompt("What is your name?"); // We can check if user input something other than the name.
console.log(`Hello ${getName}`);

// Example: Take A Number and Get Square
// This app take number input from user and takes a square of that number.
const getNumber = Number(prompt("What is your favourite number?"));
const squaredNumber = getNumber ** 2
console.log(`Squared Number: ${squaredNumber}`); // We should check if given inputs are Numbers so we don't throw something that we didn't want.

// Example: Take Two Number and Add Them
// This app take number input from user and add them together.
const getOneNumber = Number(prompt("What is your favourite number?"));
const getSecondNumber = Number(prompt("What is your second favourite number?"));
const addNumbers = getOneNumber + getSecondNumber;
console.log(`Result is: ${addNumbers}`); // If someone closes the input section we can just ask the questions again.

// Example: Take Grades and Mean Them
// This app takes grade inputs from user and average them.
const mathGrade = Number(prompt("What is your math grade?"));
const engGrade = Number(prompt("What is your english grade?"));
const historyGrade = Number(prompt("What is your history grade?"));
const averageGrade = (mathGrade + engGrade + historyGrade) / 3;
console.log(`Your note average is: ${averageGrade}`) // We hard coded here for 3. But we can always take the input from how much lesson will user take and loop it. And mean that lessons to given lesson numbers.