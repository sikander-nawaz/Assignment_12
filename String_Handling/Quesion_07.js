// Write a js program to toggle case of each character of a string.

// SOLUTION:

function toggleCase(str) {
    let toggledString = " ";
    for (let index = 0; index < str.length; index++) {
        const element = str.charAt(index);

        if (element === element.toUpperCase()) {
            toggledString += element.toLowerCase();
        } else {
            toggledString += element.toUpperCase();
        };
    };

    return toggledString;
};

let string = "Go to The Hell.";
console.log(toggleCase(string));