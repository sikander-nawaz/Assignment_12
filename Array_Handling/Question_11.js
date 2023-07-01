// Write a js program to count frequency of each element in an array.

// SOLUTION:

let array = [1, 4, 5, 1, 2, 4, 3];
let frequencyNumber = 0;
function frequency(array, num) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === num) {
            frequencyNumber++;
        }
    }
}

frequency(array, 4);
console.log(frequencyNumber);