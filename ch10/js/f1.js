const movieList = [
    {
      title: "Batman",
      year: 1989,
      director: "Tim Burton",
      imdbRating: 7.6
    },
    {
      title: "Batman Returns",
      year: 1992,
      director: "Tim Burton",
      imdbRating: 7.0
    },
    {
      title: "Batman Forever",
      year: 1995,
      director: "Joel Schumacher",
      imdbRating: 5.4
    },
    {
      title: "Batman & Robin",
      year: 1997,
      director: "Joel Schumacher",
      imdbRating: 3.7
    },
    {
      title: "Batman Begins",
      year: 2005,
      director: "Christopher Nolan",
      imdbRating: 8.3
    },
    {
      title: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      imdbRating: 9.0
    },
    {
      title: "The Dark Knight Rises",
      year: 2012,
      director: "Christopher Nolan",
      imdbRating: 8.5
    }
  ];

  // Understand the array of objects
  // Print the first object in the array
  console.log(movieList[0]);
  // Print the title of the first movie
  console.log(movieList[0].title);
  //Print imdbRating of the third movie
  console.log("Third movie imdb rating is:" ,movieList[2].imdbRating);
  //Print amount of movies there are
  console.log("Number of movies:", movieList.length)
  // Discuss Arrays
  const anArray = [1,2,3,4];
  anArray.push(5);

  console.log(anArray);

  