// Write a js program to find last occurrence of a character in a given string.

// SOLUTION:

function lastOccurence(str, char) {
    return str.lastIndexOf(char);
};

let string = "A man with stone heart.";
console.log(lastOccurence(string, "e"));