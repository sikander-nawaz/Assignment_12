// Write a js program to delete all duplicate elements from an array.

function delDuplicate(array) {
    return [...new Set(array)];
}

let arr = [0, 1, 2, 3, 3, 1, 2, 5, 6];

console.log(delDuplicate(arr));