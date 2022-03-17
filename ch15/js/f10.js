//Meant to have ID's on links and would have made this easy
// Create the link
const liElement = document.createElement("li");
const cobLink= document.createElement("a");
cobLink.textContent = "College of Business";
cobLink.href = "https://www.csulb.edu/college-of-business";
//Add link to line
liElement.appendChild(cobLink);
//console.log(liElement);

// Add the line item to the end of the document for testing
//document.body.appendChild(liElement);

// Above worked now add
const ulElements = document.getElementsByTagName("ul");
const lastUl = ulElements[ulElements.length - 1];
console.log(lastUl);

//InsertCOB link before the second child node
lastUl.insertBefore(liElement, lastUl.childNodes[3]);