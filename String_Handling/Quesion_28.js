// Write a js program to find first occurrence of a word in a given string.

// SOLUTION:

function firstWordOccurrence(str, word) {
    let wordArray = str.split(" ");

    for (let index = 0; index < wordArray.length; index++) {
        if (wordArray[index] === word) {
            return index;
        }
    }
};

let string = "A man with lot of problems and a man with lot of stress.";
console.log(firstWordOccurrence(string, "lot"));