// Write a js program to find reverse of a string.

// SOLUTION:

function reverseString(str) {
    let stringInArray = str.split("");
    console.log(stringInArray);

    let reverseOfArray = stringInArray.reverse();
    console.log(reverseOfArray);

    let result = reverseOfArray.join("");
    console.log(result);
};

let string = "Once upon a time in Saylani.";
reverseString(string);