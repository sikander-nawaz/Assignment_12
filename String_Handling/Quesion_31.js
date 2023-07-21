// Write a js program to count occurrences of a word in a given string.

// SOLUTION:

function countOccurrence(str, word) {
    let wordArray = str.split(" ");
    let count = 0;

    for (const key of wordArray) {
        if (key === word) {
            count++;
        };
    };

    return count;
};

let string = "A man with lot of problems and a man with lot of stress.";
console.log(countOccurrence(string, "and"));