//Get all paragraph elements and convert to array ( my preference)
const paraElements = Array.from(document.getElementsByTagName("p"));
//Test
//console.log(paraElements);

paraElements.forEach(para =>{
    para.style.backgroundColor = "yellow";
    para.style.fontWeight = "bold";
})