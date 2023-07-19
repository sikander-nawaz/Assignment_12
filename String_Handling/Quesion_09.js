// Write a js program to count total number of vowels and consonants in a string.

// SOLUTION:

function characterChecking(str) {
    let vowels = 0;
    let consonants = 0;
    let withOutSpaces = str.replace(/\s/g, "");

    for (const char of withOutSpaces) {
        (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U')? vowels++ : consonants++ ; 
    };

    console.log(vowels);
    console.log(consonants);
};

let string = "abcdefghijkl mnopqrstuv wxyz";
characterChecking(string);