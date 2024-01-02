//check if a string is a polidrome


//button to run the function 
document.getElementById('check-btn').addEventListener('click', (e)=>{
    return checkPolidrome(document.getElementById('text-input').value)
})

// Function to check if a string is a palindrome
const checkPalindrome = (input) => {
    // Remove non-alphanumeric characters from the input string
    let str = input.replace(/[^a-zA-Z0-9 ]/g, '');

    // Get the element where the result will be displayed
    let resultElement = document.getElementById('result');

    // Initialize an empty string to store the reversed version of the input
    let reversed = '';

    // Check if the input string is empty
    if (str === '') {
        // If empty, prompt the user to input a value
        alert('Please input a value');
    } else {
        // If not empty, reverse the string
        reversed = str.split("").reverse().join("");

        // Check if the original string is equal to its reversed version
        if (str === reversed) {
            // If equal, it's a palindrome
            resultElement.innerHTML = `${str} is a palindrome.`;
        } else {
            // If not equal, it's not a palindrome
            resultElement.innerHTML = `${str} is not a palindrome.`;
        }
    }
};

// Event listener for the button to run the checkPalindrome function
document.getElementById('check-btn').addEventListener('click', (e) => {
    // Get the input value from the text input and call the checkPalindrome function
    return checkPalindrome(document.getElementById('text-input').value);
});
