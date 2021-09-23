// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var charSet = [
    ["A", "B", "C", "D"]
  ]
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(generateBtn);

//Pseudocode:
// 1. make a list of number, a list of upper case letters, a list of lower case letters and a list of special characters (array seems best)
// 2. When the user has clicked on the 'generate password button',
// 3. Ask the user if they want uppercase letters in their password, if yes then keep track of that
// 4. Ask the user if they want lowercase letters in their password, if yes then keep track of that
// 5. Ask the user if they want numbers in their password, if yes then keep track of that
// 6. Ask the user if they want special characters in their password, if yes then keep track of that
// 7. If the user answered no to the previous 4 questions, and go back to step 2
// 8. If the user answered yes to at least one, sum up the lists chosen into a new unique list.
// 9. Then, have a window pop up asking the user for a character length between 8-128
//10. if the user gives us a number less than 8 and greater than 128, ask again
//11. if the user gives us a number more than 8 and less than 128, then keep track of that number
//12. For each character in the desired password, randomly pick a character from the new unique list
//13. Repeat step 12 'x' number of times where x is the number that the user gave us on line 5.
//14. Display this generated password in the textarea.
//15. Make a button appear that says "copy".
//16. If that copy button is clicked, copy that password to the user clipboard.
//17. If the user pressed 'generate password' again, clear the textbox and go to step