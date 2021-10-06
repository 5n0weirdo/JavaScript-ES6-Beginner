const courses = [
  {id: 1, name: "Web"},
  {id: 2, name: "Design"}
];

const found = courses.findIndex(function(course) {
  return course.name === "Web";
});

console.log(found);
