const now = new Date();
const dateOne = new Date("May 14 2021 10:00");
const dateTwo = new Date(2020, 4, 11, 10, 0);

now.setFullYear(2020);

console.log(now.toDateString());
