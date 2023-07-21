// Write a js program to remove last occurrence of a word in given string.

// SOLUTION:

function lastWordOccurrence(str, word) {
    let wordArray = str.split(" ");
    let index = wordArray.lastIndexOf(word);

    if (index !== -1) {
        wordArray.splice(index, 1);
        str = wordArray.join(" ");
    };

    return str;
};

let string = "A man with lot of problems and a man with lot of stress.";
console.log(lastWordOccurrence(string, "lot"));