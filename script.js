//Pseudocode:
// 1. make a list of numbers, a list of upper case letters, a list of lower case letters and a list of special characters (array seems best)
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


// Assignment Code
var generateBtn = document.querySelector("#generate");

  //two dimensional array containing the allowable characters in the password. Subarrays are: 0: Uppercase letters, 1: lowercase letters, 2: numbers, 3: special characters
var charSet = [
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

    function generatePassword(){
      var passwordType = [];                                //initializes an array to put the character sets that the user has chosen
      var brandNewPassword = "";
      getPasswordType(charSet, passwordType);               //calls the getPasswordType() function to get the user's choice of character sets, returns a populated array with those choices
      if(passwordType.length !== 0){
        var passwordLength = getPasswordLength();               //initializes a variable called passwordLength, then calls the getPasswordLength function, passing passwordLength through it
        for(var i = 0; i < passwordLength; i++){              // for each character in the password, populate the string with a randomly chosen index of the passwordType array.
          brandNewPassword += passwordType[Math.floor(Math.random() * passwordType.length)];
        }
      }
      return brandNewPassword; // returns the newly generated password
    };
  };
    function getPasswordType(allChar, userChar){
      var promptAnswer = prompt("Would you like to use uppercase characters? (y=yes/n=no)"); //prompts the user for if they wanna use uppercase 
      if(promptAnswer !== null){                                                            // checks to make sure the user did NOT hit cancel on the prompt which would return null
        if(promptAnswer.toLowerCase() === "y" || promptAnswer.toLowerCase() === "yes"){ // checks if the user said yes
          userChar.push(...allChar[0].slice(0))                                          //uses the spread function to slice each individual item on the sub array into passwordType
        };
      }
      else{
        return userChar.splice(0, userChar.length);         //clears the array and breaks out of the function if the user clicks on the cancel button
      };
      promptAnswer = prompt("Would you like to use lowercase characters? (y=yes/n=no)"); // repeat the above steps for all 4 sub arrays
      if(promptAnswer !== null){
        if(promptAnswer.toLowerCase() === "y" || promptAnswer.toLowerCase() === "yes"){
          userChar.push(...allChar[1].slice(0))
        };
      }
      else{
        return userChar.splice(0, userChar.length);
      };
      promptAnswer = prompt("Would you like to use numbers? (y=yes/n=no)");
      if(promptAnswer !== null){
        if(promptAnswer.toLowerCase() === "y" || promptAnswer.toLowerCase() === "yes"){
          userChar.push(...allChar[2].slice(0))
        };
      }
      else{
        return userChar.splice(0, userChar.length);
      };
      promptAnswer = prompt("Would you like to use special characters? (y=yes/n=no)");
      if(promptAnswer !== null){
        if(promptAnswer.toLowerCase() === "y" || promptAnswer.toLowerCase() === "yes"){
          userChar.push(...allChar[3].slice(0))
        };
      }
      else{
        return userChar.splice(0, userChar.length);
      };
      if(userChar.length === 0){                                                        //checks if the array is emplty (i.e. user didn't select any of the 4 sub arrays)
        alert("Error: no character sets chosen, please choose 'yes' or 'y' for at least one option"); // informs the user that they didn't chose any character set and
        getPasswordType(allChar, userChar);                                                           // recursively calls the function
      };
    };

    function getPasswordLength(){                                                                                                      //prompts the user for a password length
      passwordLength = prompt("How long do you want your password to be? Enter a number between 8 and 128","enter a number between 8 and 128"); //parses the user data into an integer or returns NaN if the user failed to enter a number
      if(passwordLength !== null){                                                                                          // checks to make sure that the user didn't hit cancel on prompt
        parseInt(passwordLength);                                                                                 // parses the string into a number                                                                                
        if(isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)){                                                                                    //checks if the user entered faulty data (either NaN or a value outside of the 8-128 range)
          alert("Error: Either that wasn't between 8 and 128 or that wasn't even a number");
          getPasswordLength();                                                                                                             // if the user did enter faulty data, the function recurssively calls itself
        }
        return passwordLength;
      }
      else {
        return;
      }
    };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(generateBtn);