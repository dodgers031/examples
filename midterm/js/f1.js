

// //Get input
const n1 = prompt("Enter number 1");
const n2 = prompt("Enter number 2");
// const n1 = 1;
// const n2 = 10;

//Convert input to number for validation
const numN1 = Number(n1);
const numN2 = Number(n2);

//Function to calculate sum
const sumNotDiv3or5 = (start,end) => {
    let tot = 0;
    for(let i = start; i <= end; i++){
        if (start % 3 !== 0 && i % 5 !==0) {
            tot += i;
        }
    }
    return tot
}
//Test Function
// console.log(sumNotDiv3or5(1,10));

// console.log(n1,n2,numN1, numN2);
if (numN1> 0 && numN2 > 0 && numN1<numN2) {
    // console.log("calculate sum");
    console.log("The sum of aklfjakjfd");
    console.log(sumNotDiv3or5(numN1,numN2));
}   else{
    console.log("you have an error");
}

