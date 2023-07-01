// Write a js program to find sum of all array elements.

// SOLUTION:

let arr = [1, 5, 7, 52, 4, 65];

let sum = arr.reduceRight((prev, curr) => prev + curr);
console.log(sum);