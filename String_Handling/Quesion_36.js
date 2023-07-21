// Write a js program to trim trailing white space characters from given string.

// SOLUTION:

function trimTrailing(str) {
    return str.trimEnd();
};

let string = "A man with lot of problems and a man with lot of stress.  ";
console.log(trimTrailing(string));