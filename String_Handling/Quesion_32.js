// Write a js program to remove first occurrence of a word from string.

// SOLUTION:

function removeFirstWprd(str, word) {
    let wordArray = str.split(" ");
    let index = wordArray.indexOf(word);

    if (index !== -1) {
        wordArray.splice(index, 1);
        str = wordArray.join(" ")
    }

    return str;

};

let string = "A man with lot of problems and a man with lot of stress.";
console.log(removeFirstWprd(string, "man"));