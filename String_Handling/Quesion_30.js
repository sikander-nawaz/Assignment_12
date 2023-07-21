// Write a js program to search all occurrences of a word in given string.

// SOLUTION:

function allWordOccurrence(str, word) {
    let wordArray = str.split(" ");
    let indexes = [];

    for (let index = 0; index < wordArray.length; index++) {
        if (wordArray[index] === word) {
            indexes.push(index);
        }
    }
    return indexes;
};

let string = "A man with lot of problems and a man with lot of stress.";
console.log(allWordOccurrence(string, "man"));