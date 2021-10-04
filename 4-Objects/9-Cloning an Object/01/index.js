const circle = {
  radius: 1,
  draw() {
    console.log("Draw Circle");
  }
};

//Modern ways:
const another1 = {...circle}; //spread operator
console.log(another1);

const another2 = Object.assign({
  color: "Black"
}, circle);
console.log(another2);

//Old way:
// const another = {};
// for (let key in circle)
//   another[key] = circle[key];
