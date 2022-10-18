const generatePassword = () => {
  const passwordLength = document.getElementById("password-length").value || 12;

  const symbols = "!@#$%^&*(){}[]=<>/,.";

  const numbers = "1234567890";

  const lowercase = "abcdefghijklmnopqrstuvwxyz";

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const isIncludeSymbol = document.getElementById("include-symbols").checked;

  const isIncludeNumber = document.getElementById("include-numbers").checked;

  const isIncludeLowercase =
    document.getElementById("include-lowercase").checked;

  const isIncludeUppercase =
    document.getElementById("include-uppercase").checked;

  let charSet = "";

  if (isIncludeSymbol) charSet += symbols;

  if (isIncludeNumber) charSet += numbers;

  if (isIncludeLowercase) charSet += lowercase;

  if (isIncludeUppercase) charSet += uppercase;

  let password = "";

  if (charSet === "") {
    alert("Please select at least one option");
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  document.getElementById("generated-password").innerHTML = password;
};




/*var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}


//var slider = document.getElementById("myRange");
//var output = document.getElementById("demo");
//output.innerHTML = slider.value;

//slider.oninput = function() {
//  output.innerHTML = this.value;
//}

//function myFunction() {
  //var copyText = document.getElementById("generated-password");
  //copyText.select();
  //navigator.clipboard.writeText(copyText.value);
  
  //var tooltip = document.getElementById("myTooltip");
  //tooltip.innerHTML = "Copied: " + copyText.value;
//}

//function outFunc() {
 // var tooltip = document.getElementById("myTooltip");
  //tooltip.innerHTML = "Copy to clipboard";
//}*/