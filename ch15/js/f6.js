//Test to change the background color of a div
//const divElements = document.querySelector("div");
//console.log(divElements);
//divElement.style.backgroundColor = "yellow";

// //Used below to test an array.From
//const divElements = Array.from(document.querySelectorAll("div"));
// divElements.forEach(element => {
//     element.style.backgroundColor = "yellow";
// })\

// for (let i = 0; i < divElements.length ; i++ )
//     divElements[i].style.backgroundColor = "green";
const bgColor = prompt("Please enter a background color");
//Loop to change all div elements to red
const divElements= Array.from(document.querySelectorAll("div"));
divElements.forEach(element =>{
    element.style.backgroundColor = bgColor;
})