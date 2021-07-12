
// console.log("APSDKFAPSDFPAOSDIFPADSAFSD");
// @import "tailwindcss/base";
// @import "tailwindcss/components";
// @import "tailwindcss/utilities";
// $('body').on('click', '.password-control', function(){
//     if ($('#password-input').attr('type') == 'password'){
//         $(this).addClass('view');
//         $('#password-input').attr('type', 'text');
//     } else {
//         $(this).removeClass('view');
//         $('#password-input').attr('type', 'password');
//     }
//     return false;
// });
// function validateEmail(email) {
//    return  reg.terst(email);
// }
// let regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
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
if(!/[a-zA-Z\d]{8,}/.test(password)){
  return "Password should have at least 8 symbols";
}
if(!/[A-Z]+/.test(password)) {
     return "Password should have at least one uppercase letter";
}
if(!/[0-9]+/.test(password)) {
     return "Password should have at least number";
}
if(!/[0-9]+/.test(password)) {
     return "Password should have at least number";
}
return "";

}


let formButton = document.querySelector('.form__button');
let inputEmail = document.querySelector('.email-input');
let inputPassword = document.querySelector('.password-input');
let errorEmail = document.querySelector('.error-email');
let errorPassword = document.querySelector('.error-password');

formButton.addEventListener('click', function (e) {
e.preventDefault()
// errorEmail.innerHtml = '';
// errorPassword.innerHtml ='';
let email = document.querySelector('.email-input').value;
let password = document.querySelector('.password-input').value;
console.log(errorPassword);
console.log(errorPassword.innerText +'llll');
// console.log(regEmail.test(email))
// console.log(regPassword.test(password));
  console.log(validatePassword(password));
  // let er =
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
