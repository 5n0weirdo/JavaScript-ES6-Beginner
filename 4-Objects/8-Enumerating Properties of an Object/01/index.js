const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  }
};

//get access to properties and methods in an object:

for (let key in circle)
  console.log(key, circle[key]);

for (let key of Object.keys(circle))
  console.log(key);

//as an array
for (let entry of Object.entries(circle))
    console.log(entry);

//check if a given property or method exists in object: in operator
if ("radius" in circle) {
  console.log("Yes");
}
