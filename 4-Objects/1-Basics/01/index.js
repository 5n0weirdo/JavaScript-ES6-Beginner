//Object-oriented Programming

let circle = {
  radius: 1,
  location: { //Object
    x: 1,
    y: 1
  },
  isVisible: true, //Boolean
  draw: function() {
    console.log("Draw");
  }
};

circle.draw(); //Draw Method
