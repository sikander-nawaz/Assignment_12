// Write a js program to count total number of words in a string.

// SOLUTION:

function countWords(str) {
    let words = 0;
    let wordsInAarray = str.split(" ");

    for (let index = 0; index < wordsInAarray.length; index++) {
        words++;
    };

    return words;
};

let sentence = "Once upon a time, There was a nikama coder.";
console.log(countWords(sentence));