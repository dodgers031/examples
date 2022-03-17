// Newspaper list
const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"];

//Get div element (will use in loop)
const divContent = document.getElementById("content");

// Loop to create link element , set properties, and add to HTML page
// Need to add a <br> after each link

newspapers.forEach(paper => {
    //Create link
    const linkElement = document.createElement("a");
    //Set Properties
    linkElement.href = paper;
    linkElement.textContent = paper;
    //Add to div (get the element and add in the loop. Could also get element outside of the loop and add only here)
    //document.getElementById("content").appendChild(linkElement);
    //Decided to use divContent outside of the loop
    divContent.appendChild(linkElement);
    // Add a <br>
    divContent.appendChild(document.createElement("br"));
})