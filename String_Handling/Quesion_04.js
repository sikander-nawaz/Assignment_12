// Write a js program to compare two strings.

function compareStrings(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    for (let index = 0; index < str1.length; index++) {
        if (str1[index] !== str2[index]) {
            return false;
        }
    }

    return true
};

let string1 = "abc";
let string2 = "xyz"

console.log(compareStrings(string1, string2));