
const name = document.forms["contactUsForm"]['yourName'];
const email = document.forms["contactUsForm"]["email"];
const subject = document.forms['contactUsForm']['subject'];
const question = document.forms['contactUsForm']['yourQuestion'];
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const questionError = document.getElementById('questionError');

function nameVerify() {
  if (name.value !== '') {
    name.style.border = '1px solid blue';
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

name.addEventListener("blur", nameVerify, true);
email.addEventListener("blur", emailVerify, true);
subject.addEventListener("blur", subjectVerify, true);
question.addEventListener("blur", questionVerify, true);


function contactUsFormVal() {
// name validation
  if (name.value === null || name.value === '') {
    name.style.border = '1px solid red';
    nameError.textContent = 'Your Name is required';
    name.focus();
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
