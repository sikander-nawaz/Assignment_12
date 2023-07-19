// Write a js program to find first occurrence of a character in a given string.

// SOLUTION:

function firstOccurence(str, char) {
    return str.indexOf(char, 0);
};

let string = "A man with stone heart.";

console.log(firstOccurence(string, "z"));