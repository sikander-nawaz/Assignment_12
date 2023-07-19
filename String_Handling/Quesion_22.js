// Write a js program to remove last occurrence of a character from string.

// SOLUTION:

function removeLastOccurrence(str, char) {
    let lastIndex = str.lastIndexOf(char);     // It'll retuen index number.
    for (let index = 0; index < str.length; index++) {
        if (str[index] === char && index === lastIndex) {
            return str.slice(0, index) + str.slice(index + 1);
        };
    };
};

let string = "A man with low battery and heart.";
console.log(removeLastOccurrence(string, 'a'));