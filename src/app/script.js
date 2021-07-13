let formButton = document.querySelector('.form__button');
let inputEmail = document.querySelector('.email-input');
let inputPassword = document.querySelector('.password-input');
console.log(inputPassword);
let errorEmail = document.querySelector('.email-error');
let errorPassword = document.querySelector('.password-error');
let passwordControl = document.querySelector('.password-control');

inputEmail.onblur = ()=> {
  if(inputEmail.value === ''){
    inputEmail.classList.add('error');
    errorEmail.innerText = 'Please enter your email';
  }
  else{
    inputEmail.classList.remove('error');
    errorEmail.innerText = '';
  }
}

inputPassword.onblur = ()=> {
  if(inputPassword.value === ''){
    inputPassword.classList.add('error');
    errorPassword.innerText = 'Please enter your password';
  }
  else{
    inputPassword.classList.remove('error');
    errorPassword.innerText = '';
  }
}

passwordControl.onclick = () => {
  if(passwordControl.classList.contains('show')){
    passwordControl.classList.remove('show');
    passwordControl.classList.add('hidden');
    inputPassword.setAttribute('type', 'password');
  }
  else{
    passwordControl.classList.remove('hidden');
    passwordControl.classList.add('show');
    inputPassword.setAttribute('type', 'text');
  }
}

function validateEmail(email){
  if(!/[a-zA-Z\d]{8,}/.test(email)){
    return "Email should have at least 8 symbols";
  }
  if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
    return "Incorrect email";
  }
  return "";
}

function validatePassword(password) {
  if (!/[a-zA-Z\d]{8,}/.test(password)) {
    return "Password should have at least 8 symbols";
  }
  if (!/[A-Z]+/.test(password)) {
    return "Password should have at least one uppercase letter";
  }
  if (!/[0-9]+/.test(password)) {
    return "Password should have at least number";
  }
  if (!/[0-9]+/.test(password)) {
    return "Password should have at least number";
  }
  return "";
}

formButton.addEventListener('click', function (e) {
  e.preventDefault()
  let email = document.querySelector('.email-input').value;
  let password = document.querySelector('.password-input').value;
  if(validateEmail(email) !== ""){
    errorEmail.innerText = validateEmail(email);
    inputEmail.classList.add('error');
  }
  else{
    errorEmail.innerText = '';
    inputEmail.classList.remove('error');
  }
  if(validatePassword(password) !== ""){
    errorPassword.innerText = validatePassword(password);
    inputPassword.classList.add('error');
  }

  else{
    errorPassword.innerText = '';
    inputPassword.classList.remove('error');
  }
})
