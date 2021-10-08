const numbers = [1, -1, 2, 3, 4];

const filtered = numbers.filter((n) => {
    return n >= 0;
});

//display the positive values
console.log(filtered);