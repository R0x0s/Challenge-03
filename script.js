// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var lowercaseCheck = false;
var uppercaseCheck = false;
var numberCheck = false;
var specialCheck = false;
var passwordLength = "";
var password = "";
var validInput = true;


function determineLength(){
  passwordLength = prompt("Choose length of password between 8 and 128 characters please");
  if (passwordLength<8) {
    alert("Your password must be between 8 to 128 characters long");
    validInput = false;
  }else if (passwordLength>128) {
    alert("Your password must be between 8 to 128 characters long");
    validInput = false;
  }else if (isNaN(passwordLength)) {
    alert("Your password must be between 8 to 128 characters long");
    validInput = false;
  }else{
    alert("Good choice, the next questions will determine your unique password");
    determineCharacters();
  }
} 


function determineCharacters(){
  lowercaseCheck = false;
  uppercaseCheck = false;
  numberCheck = false;
  specialCheck = false;
  var characterOptions = 0;
  var Charset = "";
  Charset = prompt( " If you want lower case type 1\n If you want Uppper case type 2\n If you want numbers type 3\n If you want special characters type 4\n  You can select multiple numbers! :D");
   if (Charset.indexOf("1") != -1){
    lowercaseCheck = true;
    characterOptions++;
   }
   if (Charset.indexOf("2") != -1){
    uppercaseCheck = true;
    characterOptions++;
   }
   if (Charset.indexOf("3") != -1){
    numberCheck = true;
    characterOptions++;
   }
   if (Charset.indexOf("4") != -1){
    specialCheck = true;
    characterOptions++;
   }
   if (characterOptions==0){
    validInput = false;
    alert("Must choose at least one option");
    
   }
};


function generatePassword() { 
  validInput = true;
  determineLength();
  var allChars="";
  var output="";
  //allChar+=___Check is the same as allChar = allChar + ___Check
  if (lowercaseCheck){
    allChars+=lowercaseChar;
  }
  if (uppercaseCheck){
    allChars+=uppercaseChar;
  }
  if (numberCheck){
    allChars+=numberChar;
  }
  if (specialCheck){
    allChars+=specialChar;
  }
  // at one character at a time, adds a random character from the available characters based on user decision to the output.
  for (var i = 0; i < passwordLength; i++) {
    output+=allChars[Math.floor(Math.random() * (allChars.length-1))]
  }
  if (validInput){
    return output;
  }else{
     return false;
  }

};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
