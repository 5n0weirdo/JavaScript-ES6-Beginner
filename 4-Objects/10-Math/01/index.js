let random = getRandom(2, 3);
console.log(random);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

let max = maxNum(7, 12);
console.log(max);

function maxNum(num1, num2) {
  return Math.max(num1, num2);
}
