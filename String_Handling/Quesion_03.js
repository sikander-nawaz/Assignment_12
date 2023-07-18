// Write a js program to concatenate two strings.

let concateStrings = function (string1, string2) {
    let newConcateString = string1.concat(string2);
    return newConcateString;
};

let str1 = "abc";
let str2 = "def";

console.log(concateStrings(str1, str2));