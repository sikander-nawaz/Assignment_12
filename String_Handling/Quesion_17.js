// Write a js program to count occurrences of a character in given string.

// SOLUTION:

function countOccurrence(str, char) {
    let count = 0;
    for (const key of str) {
        if (key === char) {
            count++
        };
    };
    return count;
};

let string = "Never give up."
console.log(countOccurrence(string, "e"));