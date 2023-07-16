// Write a js program to sort even and odd elements of array separately.

// SOLUTION:

function sortingEvenOdd(array) {
    let even = [];
    let odd = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if (element % 2 === 0) {
            even.push(element);
        } else {
            odd.push(element);
        }
    }

    even.sort((a, b) => a - b);
    odd.sort((a, b) => a - b);

    return [even, odd];
}

let arr = [0, 1, 2, 3, 4, 5, 6];
let result = sortingEvenOdd(arr);
let sortedEvenNumbers = result[0];
let sortedOddNumbers = result[1];

// console.log(`Even Numbers: ${sortedEvenNumbers}`);
// console.log(`Odd Numbers: ${sortedOddNumbers}`);

console.log(sortedEvenNumbers);                             // [ 0, 2, 4, 6 ]
console.log(sortedOddNumbers);                              // [ 1, 3, 5 ]
console.log("Even Numbers:" + sortedEvenNumbers);          // Even Numbers:0,2,4,6