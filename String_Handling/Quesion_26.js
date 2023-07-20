// Write a js program to replace last occurrence of a character with another in a string.

// SOLUTION:

function replaceLastOccurrence(str, char) {
    let index = str.lastIndexOf(char);
    if (index !== -1){
        return str = str.slice(0, index)+ `(another)` + str.slice(index + 1);
    };
};

let string = "A man with lot of problems.";
console.log(replaceLastOccurrence(string, "l"));