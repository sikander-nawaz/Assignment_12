// Write a js program to reverse order of words in a given string.

// SOLUTION:

function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
};

let sentence = "There is a laptop.";
console.log(reverseWords(sentence));