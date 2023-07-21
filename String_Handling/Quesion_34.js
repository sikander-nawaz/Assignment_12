// Write a js program to remove all occurrence of a word in given string.

// SOLUTION:

function removeAll(str, word) {
    let wordArray = str.split(" ");

    for (let index = 0; index < wordArray.length; index++) {
        if (wordArray[index] === word) {
            wordArray.splice(index, 1);
        }
    }
    str = wordArray.join(" ");
    return str;
};


let string = "A man with lot of problems and a man with lot of stress.";
console.log(removeAll(string, "man"));