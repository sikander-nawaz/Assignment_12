// Write a js program to replace first occurrence of a character with another in a string.

// SOLUTION:

function replaceFirstOccurrence(str, char) {
    let index = str.indexOf(char);
    if (index !== -1){
        return str = str.replace(char, `(another)`);
    };
};

let string = "A man with lot of problems.";
console.log(replaceFirstOccurrence(string, "l"));