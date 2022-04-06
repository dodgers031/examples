// const n1 = prompt("Enter a number for the multiplication table")
const n1 = 8;

//Display title
const paraTitle = document.createElement("p");
paraTitle.textContent = `Multiplication table ${n1} by ${n1}`;
paraTitle.style.textAlign = "center";

//Add to HTML doc
const divOutput = document.getElementById("output")
divOutput.appendChild(paraTitle);

//Create Table
const tblElement = document.createElement("table");
tblElement.setAttribute("align","center");

//Inside the table first
for (let i = 1; i <= n1; i++){
    //Create Rows
    const rowElement = document.createElement("tr");
    for (let j = 0; j <= n1; j++){
        const tdElement = document.createElement("td");
        //Assign text value and add to row
        tdElement.innerText = i * j;
        if (i===j)
        tdElement.classList.add("bgYellow")
        rowElement.appendChild(tblElement);
    }
    tblElement.appendChild(rowElement);

}
//
divOutput.appendChild(tblElement);