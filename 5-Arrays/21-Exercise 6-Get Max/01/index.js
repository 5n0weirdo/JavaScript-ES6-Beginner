const numbers = [1, 2, 3, 4];

const max = getMax([1, 2, 5, 6]);

console.log(max);

function getMax(array) {
    if (array.length === 0) {
        return undefined;
    }
    // let max = [0];

    // for (let i = 1; i < array.length; i++)
    //     if(array[i] > max) {
    //         max = array[i];
    //     }
    // return max;

    return array.reduce ((accumulator, current) => (current > accumulator) ? current : accumulator);

}