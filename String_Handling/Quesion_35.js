// Write a js program to trim leading white space characters from given string.

// SOLUTION:

function trimLeading(str) {
    return str.trimStart();
};

let string = "  A man with lot of problems and a man with lot of stress.";
console.log(trimLeading(string));