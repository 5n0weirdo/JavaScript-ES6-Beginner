//String primitive
const message = "Hello World";

//number of characters in a string:
console.log(message.length); //5

//access a character:
console.log(message[1]); //e

//check if string has given character inside:
console.log(message.includes("World")); //true

//check if it starts with given value:
console.log(message.startsWith("Hello"));

//check if it ends with given value:
console.log(message.endsWith("World"));

//check index of given character:
console.log(message.indexOf("W"));

//replace a part of a string:
console.log(message.replace("World", "Developers"));

//change to uppercase
console.log(message.toUpperCase());

//get rids of white spaces:
console.log(message.trimLeft());

//split a string:
console.log(message.split(" "));

//String object
const another = new String("Hello");
