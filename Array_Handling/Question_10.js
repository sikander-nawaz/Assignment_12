// Write a js program to delete an element from an array at specified position.

// SOLUTION:

let array = [21, -2, 10, -6, 8, -3, -7, 20];

function dell(position) {
    array.splice(position, 1);
}

dell(1);

console.log(array);