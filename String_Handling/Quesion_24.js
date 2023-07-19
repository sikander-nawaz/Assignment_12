// Write a js program to remove all repeated characters from a given string.

// SOLUTION:

function removeRepeatedCharacters(str) {
    let uniqueChars = new Set();
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " " && !uniqueChars.has(str[i])) {
            result += str[i];
            uniqueChars.add(str[i]);
            
        } else if (str[i] === " ") {
            uniqueChars.clear();
            result += str[i];
        };
    };

    return result;
};

let string = "A maan with low battery and heart.";
console.log(removeRepeatedCharacters(string));