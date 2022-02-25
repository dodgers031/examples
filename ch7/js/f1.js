//Create an array of scores
const scores = [8,10,7,10,9,8,10];

console.log("Array length is: ", scores.length);
//console.log("First score is:", scores[0]);
//console.log("Index out of bounds test:", scores[7]);

for (let i = 0; i< scores.length; i++) {
    console.log(`for loop - i is ${i}, score is: ${scores[i]}`);
}

scores.forEach(score => {
    console.log(`forEach loop - score is: ${score}`)
})

for (score of scores) {
    console.log(`for of loop - score is: ${score}`)
}

//Play with array different data types
const elements = ["Hello", 7, { message: "Hi mom", personal: "I Love You!" }, true];

console.log(elements[2]);
console.log(elements[2].message);
console.log(elements[2].personal);