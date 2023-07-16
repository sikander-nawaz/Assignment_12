// Write a js program to merge two arrays to third array.

// SOLUTION:

function mergeArray(array1, array2) {
    let array = [...array1, ...array2];
    return array;
}

let arr1 = [0, 1, 2, 3];
let arr2 = [4, 5, 6, 7];
console.log(mergeArray(arr1, arr2));