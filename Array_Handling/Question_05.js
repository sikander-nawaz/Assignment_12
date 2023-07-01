// Write a js program to find second largest element in an array.

// SOLUTION:

let arr = [-1, 2, 10, 6, 8];

let secondLargest = arr.sort((a, b)=> b-a);
console.log(`Second largest element: ${secondLargest[1]}`);