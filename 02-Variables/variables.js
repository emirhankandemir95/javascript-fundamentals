var a;
a = 1;

var b = 2;

var c = 3, d;
d = 4; // Semicolons are optional but recommended.

// Constants
const PI = 3.14; //Use UPPER_CASE only for global/hard-coded constants
//const birthYear = 1995; //Use camelCase for most variables (Local constants)

// Variables
let userScore = 50; // Initial score
userScore = 100; // Reassigning a new value

// Data Writing

// Window Alert
//alert("Hello World!")

const personName = "Emir"


// Output with console.log
console.log(personName)
console.log("Buse")
console.log("Kylo")

// Variable Definitions
const mentorName = "Emir Kandemir";
let courseStatus = "In Progress"; // I did escape with ("") because this is a string we should add "In Progress" like this.

// Some operations
//mentorName = "Jack Reacher"; // That is a const variable right now. You cant update the value.
console.log(mentorName); // Console will not go to that line. Assignment to constant variable error will show.


// Data Reading

//const birthYear = Number(prompt("What is your birth year?"));
//const currentYear = 2026;
//const age = currentYear - birthYear;
//console.log(`You are ${age} years old.`);


// Variable Types

const number = 5;
console.log(`Type of Variable: ${typeof (number)}`);

const myName = "Emir";
console.log(`Type of Variable: ${typeof (myName)}`);

const isTrue = true;
console.log(`Type of Variable: ${typeof (isTrue)}`);

let z; // We used let here because you need to declare when giving const 

console.log(z) // This throws a undefined.

// Need to know

const myNumber = 10;
const myString = "Harry";
console.log(myNumber + myString); // It would concatenated.

const myNewNumber = 15;
const myNewString = "Buse";
console.log(myNewNumber - myNewString); // This log outputs NaN.

const mySecondNumber = "5";
const myThirdNumber = 10;
console.log(mySecondNumber + myThirdNumber); // It would concatenated.

console.log(mySecondNumber - myThirdNumber); // In JavaScript (+) sign always prioritizes concatenate. But here (-) it would just do the math.