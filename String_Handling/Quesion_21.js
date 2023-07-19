// Write a js program to remove first occurrence of a character from string.

// Solution:

let removeFirstOccurrence = (str, char) => {
    for (let index = 0; index < str.length; index++) {
        if (str[index] === char) {
            return str.slice(0, index) + str.slice(index + 1);
        };
    };
};

let string = "A man with low battery and heart.";
console.log(removeFirstOccurrence(string, 'e'));