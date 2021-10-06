const numbers = [3, 4];

// Add to end of array
numbers.push(5, 6);

console.log(numbers)

// Add to beginning of array
numbers.unshift(1, 2);

console.log(numbers);

// Add to middle of array
numbers.splice(2, 0, "a");

console.log(numbers);
