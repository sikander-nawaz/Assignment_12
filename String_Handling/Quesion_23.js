// Write a js program to remove all occurrences of a character from string.

// SOLUTION:

function removeAllOccurrence(str, char) {
    let indexes = [];
    for (let index = 0; index < str.length; index++) {
        if (str[index] === char) {
            indexes.push(index);
        };
    };

    console.log(indexes);
};

let string = "A man with low battery and heart.";
removeAllOccurrence(string, "a");