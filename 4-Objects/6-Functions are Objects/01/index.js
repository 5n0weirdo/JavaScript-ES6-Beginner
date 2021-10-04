function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("Draw");
  }
}

Circle.call({}, 1)
Circle.apply({}, [1, 3, 5]);

// const another = new Circle(1);

// const Circle1 = new function("radius", `
// this.radius = radius;
// this.draw = function() {
//   console.log("Draw");
// }
// `);
//
// const circle = new Circle1(2);
//
