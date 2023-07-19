// Write a js program to remove all occurrences of a character from string.

// SOLUTION:

function removeAllOccurrence(str, char) {
    let indexes = [];
    for (let index = 0; index < str.length; index++) {
        if (str[index] === char) {
            indexes.push(index);
        }
    }

    for (let i = indexes.length - 1; i >= 0; i--) {
        str = str.slice(0, indexes[i]) + str.slice(indexes[i] + 1);
    }

    return str;
}

let string = "A man with low battery and heart.";
console.log(removeAllOccurrence(string, "a"));