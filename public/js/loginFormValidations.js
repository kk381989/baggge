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
