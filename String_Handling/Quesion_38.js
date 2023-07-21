// Write a js program to remove all extra blank spaces from given string.

// SOLUTION:

function removeExtraBlankSpaces(str) {
    return str.replace(/\s/g, "");
};

let string = "A man with lot of problems and a man with lot of stress.  ";
console.log(removeExtraBlankSpaces(string));