// Write a js program to find total number of alphabets, digits or special character in a string.

// SOLUTION:

function findLength(str) {
    let alphabets = 0;
    let numbers = 0;
    let specialCharacter = 0;

    for (const key of str) {
        if (/[a-zA-Z]/.test(key)) {
            alphabets++;
        } else if (/[0-9]/.test(key)) {
            numbers++;
        } else {
            specialCharacter++;
        };
    };

    console.log(alphabets);
    console.log(numbers);
    console.log(specialCharacter);
}

let string = "abcde2568@#$";
findLength(string);