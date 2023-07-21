// Write a js program to find last occurrence of a word in a given string.

// SOLUTION:

function lastWordOccurence(str, word) {
    let wordArray = str.split(" ");
    for (let i = wordArray.length -1; i >= 0; i--) {
        if (wordArray[i] === word) {
            return i;
        }
    }
};

let string = "A man with lot of problems and a man with lot of stress.";
console.log(lastWordOccurence(string, "man"));