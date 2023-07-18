// Write a js program to copy one string to another string.

let copyString = (string) => {
    let newString = string.slice();
    return newString;
}

let str = "abcdef";
console.log(copyString(str));