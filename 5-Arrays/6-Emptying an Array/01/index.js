const numbers = [2, 3, 4, 5];


//Solution 1
// if nothing else references to the original array
//change array const to let first

// numbers = [];

//Solution 2
numbers.length = 0;
console.log(numbers)

// Solution 3
// numbers.splice(0, numbers.length);


// Solution 4
// while(numbers.length > 0)
//   numbers.pop();

;
