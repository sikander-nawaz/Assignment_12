// Write a js program to search an element in an array.

// SOLUTION:

function searchElement(array, element) {
    return array.includes(element);
}

let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(searchElement(arr, 3));