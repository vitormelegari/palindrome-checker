// takes an input from the user and stores it inside a variable
const getUserInput = () => {
    let textInput = document.getElementById("text-input").value;
    return textInput;
};

// takes a string and returns a new string with only letters and numbers (no symbols or spaces)
// returns null if the string has no letters or numbers
const stringCleaner = (str) => {
    // alphanumeric characters to use for comparision
    const alphanumericChars = "0123456789abcdefghijklmnopqrstuvwxyz";
    // each alphanumeric char is converted to lowercase and stored here
    let cleanString = "";
    // check every char to see if it is a letter or a number
    for (const char of str) {
        if (alphanumericChars.includes(char.toLowerCase())) {
            cleanString += char.toLowerCase();
        }
    }
    if (cleanString === "") {
        return null;
    } else {
        return cleanString;
    }
};

// turns a string into an array, reverts it, then turns it back into a string
const reverseString = (str) => {
    const reversedString = str.split("").reverse().join("");
    return reversedString;
};

// runs when the "CHECK" button is pressed
// takes a string and checks if it is a palindrome
const checkIfPalindrome = () => {
    // this references the span element where the result will be shown
    const result = document.getElementById("result");
    // call the function to store the input from the user inside a variable
    let userInput = getUserInput();
    // shows a warning if the user input has no value
    if (userInput.length === 0) {
        window.alert("Please input a value");
    } else {
        // call function to remove any spaces or symbols from the string provided
        let cleanString = stringCleaner(userInput);
        // call the function to reverse string and store it inside a variable
        let reversedString = reverseString(cleanString);
        // checks if clean string and the reversed string are the same
        if (cleanString === reversedString) {
            // if they're the same, the string provided is a palindrome :D
            result.textContent = `${userInput} is a palindrome.`;
        } else {
            // if they're differrent, the string provided is not a palindrome :(
            result.textContent = `${userInput} is not a palindrome.`;
        }
    }
};
