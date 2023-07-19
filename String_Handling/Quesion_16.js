// Write a js program to search all occurrences of a character in given string.

function occurrences(str, char) {
    let storeIndex = [];

    for (let index = 0; index < str.length; index++) {
        if (str[index] === char) {
            storeIndex.push(index);
        }
    }

    return `The Character occur at (${storeIndex.join(", ")}) index(s).`
};

let string = "A man with serious condition.";
console.log(occurrences(string, "i"));