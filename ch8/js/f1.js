//Create a string
let myString = "This is a test string";

//Print String length
console.log("My string length is: ", myString.length);

//Test string methods
console.log(myString.toLocaleLowerCase());

// Let's validate that the original string is not changed
console.log(myString);

//Let's do the same with uppercase
console.log(myString.toUpperCase());
console.log(myString);

//Compare string
let str1= "ABC";
let str2= "abc";
let str3= "Abc";
let str4= "ABC";

console.log(str1 === str2);
console.log(str2 === str3);
console.log(str3 === str4);
console.log(str2 === str4);
console.log(str1 === str3);
console.log(str1 === str4);
console.log("=========");

console.log(str2.toUpperCase() === str3.toUpperCase());
console.log(str2.toUpperCase() === str1);

//Loop through string
//Use the index method
for (let i= 0; i < myString.length; i++) {
    console.log(`Character at index ${i} is ${myString[i]}`);
}

// Use the for of method
for (ch of myString){
    console.log(ch);
}

//Validate that forEach fails
//myString.forEach(ch => {
//    console.log(ch);
//})

//Create an array from the string, then use forEach loop
const strArray = Array.from(myString);
strArray.forEach(ch => {
    console.log(`Using forEach: character is: ${ch}`);
})

//Searching for values
console.log(myString.indexOf("i")); //Should give 2
console.log(myString.indexOf("z")); //Not found, Should give -1
console.log(myString.indexOf("i",3)); //Modify starting index for search

console.log("test startsWith");
console.log(myString.startsWith("Thi"));
console.log(myString.startsWith("Th"));
console.log(myString.startsWith("T"));
console.log(myString.startsWith("t"));
console.log(myString.startsWith("a"));

// Test endsWith on your own
console.log("test endsWith");
console.log(myString.endsWith("ing"));
console.log(myString.endsWith("ng"));
console.log(myString.endsWith("g"));
console.log(myString.endsWith("G"));
console.log(myString.endsWith("a"));

//Test Split
const days = "sun,mon,tues,wed,thu,fri,sat";
const daysArray= days.split(",");
//display daysArray
console.log("daysArray length is:", daysArray.length);
console.log(daysArray);

const myString = "Hello Everyone";
console.log(myString.length);
console.log()