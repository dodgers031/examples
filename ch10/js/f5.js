const arrays = [[1, 4], [11], [3, 5, 7]];
// TODO: compute the value of the arraysSum variable
//Method 1 
//Create generic function to return sum or an array
const arrSum = (arr) => arr.reduce((sum, elem) => sum + elem,0);

//Test function
const myTest = [1,2,3];
console.log(arrSum(myTest));

//Use function in my reduce
const arraysSum = arrays.reduce((sum, elem) => sum + arrSum(elem), 0);
console.log(arraysSum); // Should show 31