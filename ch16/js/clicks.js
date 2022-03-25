// Function to increment click count
const incrementClick = () => {
    //Get HTML element with click count
    const clickCountElement = document.getElementById("clickCount");
    // Assign count to variable and increment
    console.log("count:", clickCountElement.innerText);
    let count = Number(clickCountElement.innerText) + 1;
    //Assign new value to element
    clickCountElement.innerText = count;
}

// Get HTML elements
const btnClick = document.getElementById("myButton");
//Add Event Listener
btnClick.addEventListener("click",incrementClick);

// Deactivate
//Get button
const deactivateBtn = document.getElementById("deactivate");
//Add Event Listener
deactivateBtn.addEventListener("click", e => {
    document.getElementById("myButton").removeEventListener("click",incrementClick)
})
//Reactivate
//Get button
const reactivateBtn = document.getElementById("reactivate");
//Add Event Listener
reactivateBtn.addEventListener("click", e => {
    document.getElementById("myButton").addEventListener("click",incrementClick)
})
