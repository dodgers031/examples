// Add the paragraph using innerHTML
document.getElementById("content").innerHTML += 'Here is a more complete <a href = "https://en.wikipedia.org/wiki/List_of_programming_languages">list</a> of languages.';
// Method 2 - Create elements
const paraElement = document.createElement("p");
paraElement.appendChild(document.createTextNode("Here is a more complete "));

//create Link & append to ParaElement
const linkElement = document.createElement("a");
linkElement.href = "https://en.wikipedia.org/wiki/List_of_programming_languages.";
linkElement.textContent = "list";
// Append
paraElement.appendChild(linkElement)

//Append ending text
paraElement.appendChild(document.createTextNode(" of languages."));
document.getElementById("content").appendChild(paraElement);