// Demonstrate ternary operator
// (boolean) ? true : false

// Get input (hard coded for demo)
//let x = 3;
// Modify to request input (assume valid input)
let x = Number (prompt("Please enter an integer:"));
let evenOdd = (x % 2 === 0) ? "even" : "odd";

console.log(`Your integer is ${evenOdd}`);