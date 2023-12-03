// Assignment code here

// Function to prompt user for password criteria
function getPasswordCriteria() {
    var length = prompt("Choose a password length (between 8 and 128 characters):");
  
    // Validate the input for password length
    while (length < 8 || length > 128 || isNaN(length)) {
      alert("Please enter a valid number between 8 and 128.");
      length = prompt("Choose a password length (between 8 and 128 characters):");
    }
  
    // Prompt for character types
    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include uppercase letters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");
  
    // Validate that at least one character type is selected
    while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
      alert("Please select at least one character type.");
      includeLowercase = confirm("Include lowercase letters?");
      includeUppercase = confirm("Include uppercase letters?");
      includeNumeric = confirm("Include numeric characters?");
      includeSpecial = confirm("Include special characters?");
    }
  
    // Return an object with user choices
    return {
      length: length,
      includeLowercase: includeLowercase,
      includeUppercase: includeUppercase,
      includeNumeric: includeNumeric,
      includeSpecial: includeSpecial,
    };
  }
  
  // Function to generate a random password based on criteria
  function generatePassword() {
    var criteria = getPasswordCriteria();
  
    // Define character sets based on user choices
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()_-+=<>?/";
  
    // Combine character sets based on user choices
    var allChars = "";
    if (criteria.includeLowercase) allChars += lowercaseChars;
    if (criteria.includeUppercase) allChars += uppercaseChars;
    if (criteria.includeNumeric) allChars += numericChars;
    if (criteria.includeSpecial) allChars += specialChars;
  
    // Generate password
    var password = "";
    for (var i = 0; i < criteria.length; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
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