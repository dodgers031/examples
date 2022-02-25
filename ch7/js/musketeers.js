//Create array
const musketeers = ["Athos", "Porthos", "Aramis"];

//Show array elements
for ( let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}

// Add element at the end
musketeers.push("D'Artagnan");

//Show elements using forEach loop
musketeers.forEach(musketeer => {
    console.log(musketeer);
})

//Remove element
musketeers.splice(2,1);

//Show elements using a for of loop
for (musketeer of musketeers){
    console.log(musketeer);
}