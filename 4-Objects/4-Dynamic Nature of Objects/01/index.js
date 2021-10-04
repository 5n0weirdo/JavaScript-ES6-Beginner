const circle = {
  radius: 1
};

//add properties
circle.color = "Black";
circle.draw = function drawCircle () {
  console.log("Draw circle");
}

//delete properties
delete circle.color;

console.log(circle);
