// Write a js program to trim both leading and trailing white space characters from given string.

// SOLUTION:

function trimBoth(str) {
    return str.trim();
};

let string = "  A man with lot of problems and a man with lot of stress.  ";
console.log(trimBoth(string));