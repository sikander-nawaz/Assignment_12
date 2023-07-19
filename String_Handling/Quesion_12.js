// Write a js program to check whether a string is palindrome or not.

// SOLUTION:

function isPalindrome(str) {
    let cleanWords = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (cleanWords === cleanWords.split('').reverse().join('')) {
        return `${cleanWords}: Yes, It is Palindrome String.`;
    } else {
        return `${cleanWords}: No, It is not a Palindrome String.`;
    };
};

let string = "leves";
console.log(isPalindrome(string));