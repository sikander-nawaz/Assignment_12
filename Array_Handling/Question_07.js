// Write a js program to count total number of negative elements in an array.

// SOLUTION:

let array = [21, -2, 10, -6, 8, -3, -7, 20];
let negativeElement = 0;

for (let index = 0; index < array.length; index++) {
    if(array[index] < 0){
        negativeElement++;
    }
}

console.log(negativeElement);