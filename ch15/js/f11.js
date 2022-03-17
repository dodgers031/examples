//Create a table with 12 rows
const tblElement = document.createElement("table");


for (let i = 1; i <= 12; i++) {
    const rowElement = document.createElement("tr");
// Create table data
    const tdElement = document.createElement("td");
    tdElement.innerHTML = i;
    // Check if divisible by 4. If yes, add class for the blue background
    if (i % 4 ===0) {
        tdElement.classList.add("bgBlue")
    }

    // Add the table data to the tr. then tr to the table
    rowElement.appendChild(tdElement);
    tblElement.appendChild(rowElement);

}

//Add a table to document
document.getElementById("output").appendChild(tblElement);