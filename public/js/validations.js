// signUp form validations
const userName = document.getElementById('userName');
const emailId = document.getElementById('emailId');
const mobileNumber  = document.getElementById('mobileNumber');
const passWord = document.getElementById('passWord');
const letter = document.getElementById('letter');
const capital = document.getElementById('capital');
const number = document.getElementById('number');
const length = document.getElementById('length');
const splChars = document.getElementById('splChars');


// When the user clicks on the password field, show the message box
passWord.onfocus = function() {
  document.getElementById('message').style.display = 'block';
}

// When the user clicks outside of the password field, hide the message box
passWord.onblur = function() {
  document.getElementById('message').style.display = 'none';
}

passWord.onkeyup = function() {
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const sChars = '!`@#$%^&*()+=-[]\\\';,./{}|\':<>?~_';

  if(passWord.value.match(lowerCaseLetters)) {
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  } else {
    letter.classList.remove('valid');
    letter.classList.add('invalid');
}
  if(passWord.value.match(upperCaseLetters)) {
    capital.classList.remove('invalid');
    capital.classList.add('valid');
  } else {
    capital.classList.remove('valid');
    capital.classList.add('invalid');
}

  if(passWord.value.match(numbers)) {
    number.classList.remove('invalid');
    number.classList.add('valid');
  } else {
    number.classList.remove('valid');
    number.classList.add('invalid');
}
  if(passWord.value.match(sChars)) {
    splChars.classList.remove('invalid');
    splChars.classList.add('valid');
  } else {
    splChars.classList.remove('valid');
    splChars.classList.add('invalid');
}

   // Validate length
  if(passWord.value.length >= 6) {
    length.classList.remove('invalid');
    length.classList.add('valid');
  } else {
    length.classList.remove('valid');
    length.classList.add('invalid');
}
}



function validateMobileRechargeForm() {
    var x = document.forms['mobileRechargeForm']['number'].value;
    var y = document.forms['mobileRechargeForm']['amount'].value;
    if (x == '') {
        alert('Please enter a number');
        return false;
    }
    else if (x.length < 10 || x.length > 10) {
        alert('Please enter a valid number');
        return false;
    }
    else if (y == '') {
        alert('Please enter amount');
        return false;
        }
}

function validateDthRechargeForm() {
  const x = document.forms["dthRechargeForm"]["number"].value;
  const y = document.forms["dthRechargeForm"]["amount"].value;
  if (x === '' || x === null) {
    alert('Please enter a number');
    return false;
  } else if (x.length < 10 || x.length > 10) {
    alert('Please enter a valid number');
    return false;
  } else if (y === '' || y === null) {
    alert('Please enter amount');
    return false;
  }
}

function validateElectricityRechargeForm() {
    var x = document.forms['electricityRechargeForm']['number'].value;
    var y = document.forms['electricityRechargeForm']['amount'].value;
    if (x == '') {
        alert('Please enter a number');
        return false;
    }
    else if (x.length < 10 || x.length > 10) {
        alert('Please enter a valid number');
        return false;
    }
    else if (y == '') {
        alert('Please enter amount');
        return false;
        }
}
