//Create an array of scores
const scores = [8,10,7,10,9,8,10];

//Modify the first element
scores[0] = 9;
console.log(scores[0]);

//Enter an element at the end
scores.push(5);
console.log(scores);

//Enter an element at the beginning
scores.unshift(10);
console.log(scores);

//Remove last element
scores.pop();
console.log(scores);

//Remove second, third, and fourth element
scores.splice(1,3);
console.log(scores);