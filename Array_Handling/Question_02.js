// Write a js program to print all negative elements in an array.

// SOLUTION:

let arr = [1, 5, -7, 8, -9, 10];
let value = arr.filter(item => item < 0);
console.log(value);