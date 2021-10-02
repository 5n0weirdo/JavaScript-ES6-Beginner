//Falsy:
//undefined
//null
//""
//0
//NaN

//Anything that is not Falsy -> Truthy


let combo = [0, "", 1, 3, 5, null]
console.log(countTruthy(combo));

function countTruthy(array) {
  let count = 0;
  for (let value of array)
    if (value)
      count++;
  return count;
}
