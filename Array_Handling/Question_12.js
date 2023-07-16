// Write a js program to print all unique elements in the array.

// SOLUTION:
 
let array = [0, 1, 2, 3, 3, 1, 2, 5, 6];

let newArray = Array.from(new Set(array));

console.log(newArray);