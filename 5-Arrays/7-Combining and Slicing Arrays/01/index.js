const first = [{id: 1}];
const second = [4, 5, 6];

// const combined = [...first,...second]

// console.log(combined);

const combined = first.concat(second);  //combine two arrays
first[0].id = 10;

const sliced = combined.slice(2, 4);

console.log(combined)
console.log(sliced);