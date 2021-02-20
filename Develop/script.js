// Assignment code here
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialChar = "#$%&'()*+,-./:;<=>?@][^_`{|}~"
var userPasswordChoice = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Password Length Prompt
var passLength = prompt("How long would you like your password? Choose a number between 8 and 128.");
console.log(passLength);
if (passLength === "" || passLength === null || isNaN(passLength)){
  window.alert("You did not enter a valid option, try again.");
  return generatePassword();
}
if (passlength < 8 || passLength > 128) {
  window.alert("You did not enter a valid option, try again.");
  return generatePassword();
}

// Lowercase Prompt
var lowerCase = window.confirm("Would you like your password to contain lowercase letters?");
if (lowerCase) {
  userPasswordChoice.push(lowerChar)
}
console.log(userPasswordChoice)

// Uppercase Prompt
var Uppercase = window.confirm("Would you like your password to contain UPPERCASE letters?");
if (Uppercase) {
  userPasswordChoice.push(upperChar)
}
console.log(userPasswordChoice)

// Number Prompt
var numeric = window.confirm("Would you like your password to contain numbers?");
if (numeric) {
  userPasswordChoice.push(numericChar)
}
console.log(userPasswordChoice)

// Special Character Prompt
var special = window.confirm("Would you like your password to contain special characters?");
if (special) {
  userPasswordChoice.push(specialChar)
}
console.log(userPasswordChoice)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText.textContent = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
