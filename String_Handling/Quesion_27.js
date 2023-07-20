// Write a js program to replace all occurrences of a character with another in a string.

// SOLUTION:

function replaceAllOccurrence(str, char) {
    let indexes = [];

    for (let index = 0; index < str.length; index++) {
        if (str[index] === char){
            indexes.push(index);
        }

    }
    for (let i = indexes.length - 1; i >= 0; i--) {
        str = str.slice(0, indexes[i]) + `(another)` + str.slice(indexes[i] + 1);
    }

    return str;

};

let string = "A man with lot of problems.";
console.log(`Replacement of all characters in '${string}': \n${replaceAllOccurrence(string, "o")}`);