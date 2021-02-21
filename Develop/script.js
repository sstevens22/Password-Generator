// Assignment code here
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChar = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["#","$","%","&","*","+","-","<",">","?","@","^","_","~"];
var passLength = " "
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
if (passLength < 8 || passLength > 128) {
  window.alert("You did not enter a valid option, try again.");
  return generatePassword();
}

// Lowercase Prompt
var lowerCase = window.confirm("Would you like your password to contain lowercase letters?");
if (lowerCase) {
  userPasswordChoice = userPasswordChoice.concat(lowerChar);
}
console.log(userPasswordChoice)

// Uppercase Prompt
var Uppercase = window.confirm("Would you like your password to contain UPPERCASE letters?");
if (Uppercase) {
  userPasswordChoice = userPasswordChoice.concat(upperChar);
}
console.log(userPasswordChoice)

// Number Prompt
var numeric = window.confirm("Would you like your password to contain numbers?");
if (numeric) {
  userPasswordChoice = userPasswordChoice.concat(numericChar);
}
console.log(userPasswordChoice)

// Special Character Prompt
var special = window.confirm("Would you like your password to contain special characters?");
if (special) {
  userPasswordChoice = userPasswordChoice.concat(specialChar);
}
console.log(userPasswordChoice)

}

var newPassword = ""
// for loop for password choice
for (var i = 0; i < passLength; i++) {
  var char = Math.floor(Math.random() * userPasswordChoice)
  newPassword += userPasswordChoice[char];
  
}
console.log(newPassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  passwordText.textContent = newPassword;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
