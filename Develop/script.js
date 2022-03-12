var entry
var confirmUpper;
var confirmLower;
var confirmNum;
var confirmChar;
var choices;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var userOptionsArr = []; 

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
    
entry = passwordLength = parseInt(prompt("Please choose the amount of characters for your password, it can be between 8 & 128."));

if (!entry) {
    alert("You must enter a password length");
}

else if (entry < 8 || entry > 128) {
    entry = parseInt(prompt("You must choose between 8 and 128"));
}

else {
confirmUpper = confirm("Would you like your password to contain Upper case letters?");
confirmLower = confirm("Would you like your password to contain Lower case letters?");
confirmNum = confirm("Would you like your password to contain Numbers?");
confirmChar = confirm("Would you like your password to contain Special Characters?");
};

if (confirmUpper && confirmLower && confirmNum && confirmChar) {
    userOptionsArr = userOptionsArr.concat(alphaU, alpha, number, character);
    choices = character.concat(alphaU, alpha, number, character)
}

if (!confirmUpper && !confirmLower && !confirmNum && !confirmChar) {
    alert("hi")
    return;
}

else if (confirmUpper && confirmNum && confirmChar) {
    userOptionsArr = userOptionsArr.concat(alphaU, number, character);
    choices = character.concat(alphaU, number, character);
}
else if (confirmLower && confirmNum && confirmChar) {
    userOptionsArr = userOptionsArr.concat(alpha, number, character);
    choices = character.concat(alpha, number, character);
}
else if (confirmUpper && confirmLower && confirmChar) {
    userOptionsArr = userOptionsArr.concat(alphaU, alpha, character);
    choices = character.concat(alphaU, alpha, character);
}
else if (confirmUpper && confirmLower && confirmNum) {
    userOptionsArr = userOptionsArr.concat(alphaU, alpha, number);
    choices = character.concat(alphaU, alpha, number);
}


else if (confirmNum && confirmChar) {
    choices = character.concat(number, character);
} 
else if (confirmLower && confirmChar) {
    choices = character.concat(alpha, character);
} 
else if (confirmUpper && confirmChar) {
    choices = character.concat(alphaU, character);
}
else if (confirmLower && confirmNum) {
    choices = character.concat(alpha, number);
} 
else if (confirmUpper && confirmLower) {
    choices = character.concat(alphaU, alpha);
} 
else if (confirmUpper && confirmNum) {
    choices = character.concat(alphaU, number);
}


else if (confirmUpper) {
    choices = alphaU;
}
else if (confirmLower) {
    choices = alpha;
}
else if (confirmNum) {
    choices = number;
}
else if (confirmChar) {
    choices = character;
}

 var password = [];

 for (var i = 0; i < entry; i++) {
     var pickChoices = choices[Math.floor(Math.random() * choices.length)];
     password.push(pickChoices);
 }

 var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}