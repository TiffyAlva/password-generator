// Assignment code here
function generatePassword() {
  console.log("You clicked the button")
  var length = prompt("What is the length of the password? Choose 8 to 128")
    if(length < 8 ) {
      alert('too short!')
    }
  var includeLowercase = confirm("Do you want to include lowercase?")
  var includeUppercase = confirm("Do you want to include uppercase?")
  var includeNumbercase = confirm("Do you want to include numbers?")
  var includeSpecialcase = confirm("Do you want to include special characters?")
  
  //empty string
  var basket = ""

  if (includeLowercase == true) {
    basket = basket + "abcde"
      
  } 
  if (includeUppercase == true){
    basket = basket + "ABCDE"
  }
  if (includeNumbercase == true){
    basket = basket + "12345"
  }
  if (includeSpecialcase == true){
    basket = basket + "!#&@$"
  }
 

  var password = ""

  for(i = 0; i < length; i++){
    var randomNumber = Math.floor(Math.random() * basket.length);
    var randomChar = basket.charAt(randomNumber)
    password = password + randomChar;
  }


  return password;
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











