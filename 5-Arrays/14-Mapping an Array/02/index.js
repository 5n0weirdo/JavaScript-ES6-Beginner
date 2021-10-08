const numbers = [1, -1, 2, 3,];

// const filtered = numbers.filter((n) => { 
//     return n >= 0;
// });

// const itemsBullet = filtered.map(n => {
//     const obj = {value: n};
//     return obj;
// });

const items = numbers
    .filter((n) => {
        return n >= 0;
    })
    .map(n => {
        const obj = { value: n } //[ { value: 1 }, { value: 2 }, { value: 3 } ]
        return obj;
    })
    .filter(obj => {
        return obj.value > 1; //[ { value: 2 }, { value: 3 } ]
    })
    .map(obj => {
        return obj.value;
    });

console.log(items);