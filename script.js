var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password")

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChars = " !#$%&'()*+,-./:;<=>?@^_`{|}~"
var pwLength;

//decides length and what characters are used for password based on user input
function confirmChar() {
    var charPool = lowerCase; //by default, must have lowercase letters
    pwLength = prompt("How long would you like your password to be?\n8 through 128 characters."); //decides length
    if (pwLength >= 8 && pwLength <= 128){
      var charUpper = confirm("Hit OK if you would you like your password to include upper case characters.");
        if (charUpper === true) {
            charPool = charPool + upperCase; //adds uppercase letters to pool
        }
        var charNum = confirm("Hit OK if you would you like your password to include numbers.");
        if (charNum === true) {
            charPool = charPool + numbers; //adds numbers to pool
        }
        var charSpec = confirm("Hit OK if you wuld you like your password to include special characters.");
        if (charSpec === true) {
            charPool = charPool + specialChars; //adds special characters to pool
        }
        charCatalog = charPool.split('');        
    } else { //check for invalid inputs
    pwLength = 0;
    window.alert("Invalid entry. Please press OK and try again.");
    confirmChar();
    return pwLength;
    }
  generatePassword(charPool, charCatalog); 
}

//generates random number to select character in the array
function randomGenerator(charPool, charCatalog){
  return charCatalog[Math.floor(Math.random() *charPool.length)];
}

//function generates the password with decided characters
function generatePassword(charPool, charCatalog){
var finalPw = '';
  for(var i = 0; i < pwLength; i++){    
    finalPw += randomGenerator(charPool, charCatalog);
  }
//generats password to text box
password.value = finalPw 
return;
}

generateBtn.addEventListener("click", confirmChar);