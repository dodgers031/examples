const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];

  
  //Create dl
  const dlElement = document.createElement("dl");

  //Loop through array to create dt and dd
  words.forEach(word => {
      //Create a dt
      const dtElement = document.createElement("dt");
      dtElement.textContent= word.term;
      dtElement.style.fontWeight = "bold";

      //Create dd
      const ddElement = document.createElement("dd");
      ddElement.textContent = word.definition;

      //Add to dl
      dlElement.appendChild(dtElement);
      dlElement.append(ddElement);
  })


  //Add dl to document
  document.getElementById("content")