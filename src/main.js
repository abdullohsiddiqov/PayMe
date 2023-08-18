"use strict";
let number_input = document.querySelector('.number_input');
let btn = document.querySelector('.btn');
let password_input = document.querySelector('.password_input');
btn.addEventListener('click', () => {
    if (password_input.innerHTML == "") {
        password_input.style.border = "1px solid red";
    }
    if (number_input.innerHTML == "") {
        number_input.style.border = "1px solid red";
    }
    let password = password_input.value;
    let number = number_input.value;
    console.log(password);
    console.log(number);
});
