// Mathemetical Operations
const number1 = Number(prompt("First Number: "));
const number2 = Number(prompt("Second Number: "));
//let number1 = Number(prompt("Number: "));

/*
const addition = number1 + number2;
const subtraction = number1 - number2;
const multiplication = number1 * number2;
const division = number1 / number2;
const exponentation = number1 ** number2;
const modulus = number1 % number2;
*/

// I used with template literals so it looks like calculator. Also we need to check for numbers. If user tries other data types we can just ask again in the prompt.
/*
console.log(`${number1} + ${number2} = ${addition}`)
console.log(`${number1} - ${number2} = ${subtraction}`)
console.log(`${number1} * ${number2} = ${multiplication}`)
console.log(`${number1} / ${number2} = ${division}`)
console.log(`${number1} ** ${number2} = ${exponentation}`)
console.log(`${number1} % ${number2} = ${modulus}`)
*/

// Incrementation and Decrementation
/*
console.log(number1) 
console.log(number1++); // First variable than increment
console.log(++number1); // First increment than variable
console.log(number1--); // First variable than decrement
console.log(--number1); // First decrement than variable
*/

// Comparison Operators
const isEqual = number1 == number2 // Loose Equality - Use === instead of ==
const isNotEqual = number1 != number2 // Loose Not Equality - Use !== instead of !=
const greaterThan = number1 > number2
const lessThan = number1 < number2
const eqGreaterThan = number1 >= number2
const eqLessThan = number1 <= number2


// Always check for numbers. Users can use other data types.
console.log(`${number1}, ${number2} is equal? - ${isEqual}`)
console.log(`${number1}, ${number2} is not equal? - ${isNotEqual}`)
console.log(`${number1}, ${number2} is greater than? - ${greaterThan}`)
console.log(`${number1}, ${number2} is less than? - ${lessThan}`)
console.log(`${number1}, ${number2} is equal and greater? - ${eqGreaterThan}`)
console.log(`${number1}, ${number2} is equal or lower? - ${eqLessThan}`)

// Assignment Operators
/*
Assignment (=): Equals/Assign

Addition Assignment (+=): Add and Assign

Subtraction Assignment (-=): Subtract and Assign

Multiplication Assignment (*=): Multiply and Assign
*/