// Write a js program to sort array elements in ascending or descending order.

function sortingArray(array) {
    let ascending = Array.from(array.sort((a, b) => a - b));
    let descending = Array.from(array.sort((a, b) => b - a));
    return [ascending, descending];
}

let arr = [2, 1, 0, 3, 6, 5, 4];
let result = sortingArray(arr);
let ascendingOrder = result[0];
let descendingOrder = result[1];

console.log(ascendingOrder);
console.log(descendingOrder);