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


// login form validation
const loginUserName = document.forms["loginForm"]["userName"];
const loginPassWord = document.forms["loginForm"]["passWord"];
const userNameError = document.getElementById('userNameError');
const passWordError = document.getElementById('passWordError');


function userNameVerify() {
  if (loginUserName.value !== '') {
    loginUserName.style.border = '1px solid blue';
    userNameError.innerHTML = '';
    return true;
  }
  return false;
}

function passWordVerify() {
  if (loginPassWord.value !== '') {
    loginPassWord.style.border = '1px solid blue';
    passWordError.innerHTML = '';
    return true;
  }
  return false;
}
loginUserName.addEventListener("blur", userNameVerify, true);
loginPassWord.addEventListener("blur", passWordVerify, true);

function loginFormVal() {
// userName validation
  if (loginUserName.value === null || loginUserName.value === '') {
    loginUserName.style.border = '1px solid red';
    userNameError.textContent = 'Please enter Email id or Number ';
    loginUserName.focus();
    return false;
  }
  // passWord validation
  if (loginPassWord.value === null || loginPassWord.value === '') {
    loginPassWord.style.border = '1px solid red';
    passWordError.textContent = 'Password is required';
    loginPassWord.focus();
    return false;
  }
}


// contact us form validations
// const yourname = document.forms["contactUsForm"]['yourName'];
// const email = document.forms["contactUsForm"]["email"];
// const subject = document.forms['contactUsForm']['subject'];
// const question = document.forms['contactUsForm']['yourQuestion'];
const yourname = document.getElementById('yourName');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const question = document.getElementById('question');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const questionError = document.getElementById('questionError');

function nameVerify() {
  if (yourname.value !== '') {
    yourname.style.border = '1px solid blue';
    nameError.innerHTML = '';
    return true;
  }
  return false;
}

function emailVerify() {
  if (email.value !== '') {
    email.style.border = '1px solid blue';
    emailError.innerHTML = '';
    return true;
  }
  return false;
}

function subjectVerify() {
  if (subject.value !== '') {
    subject.style.border = '1px solid blue';
    subjectError.innerHTML = '';
    return true;
  }
  return false;
}
function questionVerify() {
  if (question.value !== '') {
    question.style.border = '1px solid blue';
    questionError.innerHTML = '';
    return true;
  }
  return false;
}

yourname.addEventListener("blur", nameVerify, true);
email.addEventListener("blur", emailVerify, true);
subject.addEventListener("blur", subjectVerify, true);
question.addEventListener("blur", questionVerify, true);


function contactUsFormVal() {
// name validation
  if (yourname.value === null || yourname.value === '') {
    yourname.style.border = '1px solid red';
    nameError.textContent = 'Your Name is required';
    yourname.focus();
    return false;
  }
  // email validation
  if (email.value === null || email.value === '') {
    email.style.border = '1px solid red';
    emailError.textContent = 'Email Id is required';
    email.focus();
    return false;
  }

  // subject validation
  if (subject.value === null || subject.value === '') {
    subject.style.border = '1px solid red';
    subjectError.textContent = 'Subject is required';
    subject.focus();
    return false;
  }
  // question validation
  if (question.value === null || question.value === '') {
    question.style.border = '1px solid red';
    questionError.textContent = 'This field is mendatory';
    question.focus();
    return false;
  }
  const atpos = email.indexOf('@');
  const dotpos = email.lastIndexOf('.');
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    emailError.textContent = 'Not a valid e-mail address';
    email.focus();
    return false;
  }
}


// sign up form validations
const signUpUserName = document.forms["signUpForm"]["userName"];
const signUpEmailId = document.forms["signUpForm"]["emailId"];
const signUpMobileNumber = document.forms["signUpForm"]["mobileNumber"];
const signUpPassWord = document.forms["signUpForm"]["passWord"];
const userNameErr = document.getElementById('userNameErr');
const emailIdErr = document.getElementById('emailIdErr');
const mobileNumberErr = document.getElementById('mobileNumberErr');
const passWordErr = document.getElementById('passWordErr');


function signUpUserNameVerify() {
  if (signUpUserName.value !== '') {
    signUpUserName.style.border = '1px solid blue';
    userNameErr.innerHTML = '';
    return true;
  }
  return false;
}
function signUpEmailIdVerify() {
  if (signUpUserName.value !== '') {
    signUpEmailId.style.border = '1px solid blue';
    emailIdErr.innerHTML = '';
    return true;
  }
  return false;
}

function signUpMobileNumberVerify() {
  if (signUpMobileNumber.value !== '') {
    signUpMobileNumber.style.border = '1px solid blue';
    mobileNumberErr.innerHTML = '';
    return true;
  }
  return false;
}
function signUpPassWordVerify() {
  if (signUpPassWord.value !== '') {
    signUpPassWord.style.border = '1px solid blue';
    passWordErr.innerHTML = '';
    return true;
  }
  return false;
}

signUpUserName.addEventListener("blur", signUpUserNameVerify, true);
signUpEmailId.addEventListener("blur", signUpEmailIdVerify, true);
signUpMobileNumber.addEventListener("blur", signUpMobileNumberVerify, true);
signUpPassWord.addEventListener("blur", signUpPassWordVerify, true);

function signUpFormVal() {
// userName validation
  if (signUpUserName.value === null || signUpUserName.value === '') {
    signUpUserName.style.border = '1px solid red';
    userNameErr.textContent = 'Please enter your name ';
    signUpUserName.focus();
    return false;
  }


  if (signUpEmailId.value === null || signUpEmailId.value === '') {
    signUpEmailId.style.border = '1px solid red';
    emailIdErr.textContent = 'Email Id is required';
    signUpEmailId.focus();
    return false;
  }


  if (signUpMobileNumber.value === null || signUpMobileNumber.value === '') {
    signUpMobileNumber.style.border = '1px solid red';
    mobileNumberErr.textContent = 'Mobile Number is required';
    signUpMobileNumber.focus();
    return false;
  }
  // passWord validation
  if (signUpPassWord.value === null || signUpPassWord.value === '') {
    signUpPassWord.style.border = '1px solid red';
    passWordErr.textContent = 'Password is required';
    signUpPassWord.focus();
    return false;
  }
}
