// Write a js program to print all negative elements in an array.

// SOLUTION:

function negativeElement(array) {
    let nums = [];
    for (const num of array) {
        if (num < 0){
            nums.push(num);
        }
    }

    return nums;
};


let arr = [-1, 2, -5, 4];
console.log(negativeElement(arr));