//Get all body nodes
const bodyElement = document.body;
//Test
console.log(bodyElement);

//Iterate through all child nodes
for (let i = 0; i < bodyElement.clientHeight; i++) {
    console.log(bodyElement.childNodes[i]);
}

//Method 2 = Covert to array
const bodyElement2 = Array.from(document.body);
bodyElement2.forEach(element=> {
    console.log(element);
})