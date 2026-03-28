// Mathemetical Operations
const number1 = Number(prompt("First Number: "));
const number2 = Number(prompt("Second Number: "));

const addition = number1 + number2
const subtraction = number1 - number2
const multiplication = number1 * number2
const division = number1 / number2
const exponentation = number1 ** number2
const modulus = number1 % number2


// I used with template literals so it looks like calculator. Also we need to check for numbers. If user tries other data types we can just ask again in the prompt.
console.log(`${number1} + ${number2} = ${addition}`)
console.log(`${number1} - ${number2} = ${subtraction}`)
console.log(`${number1} * ${number2} = ${multiplication}`)
console.log(`${number1} / ${number2} = ${division}`)
console.log(`${number1} ** ${number2} = ${exponentation}`)
console.log(`${number1} % ${number2} = ${modulus}`)
