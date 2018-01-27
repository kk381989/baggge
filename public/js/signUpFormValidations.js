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
