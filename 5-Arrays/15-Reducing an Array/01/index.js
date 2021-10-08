const numbers = [1, 2, 3, 4, -1];


const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);


//Longer method:
// for (let number of numbers)
//     sum += number;

// console.log(sum);