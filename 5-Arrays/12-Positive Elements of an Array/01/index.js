const numbers = [1, -1, 2, 3];

//every()
//some()


//check if numbers are positive:
const atleastOnePositive = numbers.some((value) => {
    return value >= 0;  
});

console.log(atleastOnePositive);