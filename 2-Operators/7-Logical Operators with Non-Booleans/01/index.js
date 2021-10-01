//Falsy:
//undefined
//null
//""
//0
//NaN

//Anything that is not Falsy -> Truthy

//Short-circuiting

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor); //"blue"
