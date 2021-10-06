const movie = [
  {title: "Web Hacking", release: 2012, rating: 5}
];

//find element
const found = movie.findIndex(function(movieIndex) {
  return movieIndex.title === "Web Hacking";
});

console.log(found);

//add element
movie.push({title: "Horror meets Horror", release: 2010, rating: 6});

console.log(movie);
