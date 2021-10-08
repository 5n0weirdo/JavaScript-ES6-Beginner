const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, 3.5, ...second, 6.5];
console.log(combined);

const copy = [...combined];
console.log("Copy: " + copy);