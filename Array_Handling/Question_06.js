// Write a js program to count total number of even and odd elements in an array.

// SOLUTION:

let array = [21, 2, 10, 6, 8, 3, 7, 20];
let even = [];
let odd = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        even.unshift(array[i]);
    }else{
        odd.unshift(array[i]);
    }
}

console.log(`Total Number of Even Elements: ${even.length}`);
console.log(`Total Number of Odd Elements: ${odd.length}`);