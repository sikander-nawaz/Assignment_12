// Write a js program to put even and odd elements of array in two separate arrays.

// SOLUTION:

function separateNummbers(array) {
    let even = [];
    let odd = [];

    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            even.push(array[index]);
        } else {
            odd.push(array[index]);
        }
    }

    return [even, odd];
};

let arr = [0, 1, 2, 3, 4, 5, 6];
let result = separateNummbers(arr);
let evenNumbers = result[0];
let oddNumbers = result[1];
console.log(evenNumbers);
console.log(oddNumbers);