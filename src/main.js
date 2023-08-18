"use strict";
let number_input = document.querySelector('.number_input');
let btn = document.querySelector('.btn');
let password_input = document.querySelector('.password_input');
function InformationFNC() {
    btn.addEventListener('click', () => {
        if (password_input.value === "") {
            password_input.style.border = "1px solid red";
            // number = null || number_input.value;
        }
        if (number_input.value === "") {
            number_input.style.border = "1px solid red";
            // password = null || password_input.value;
        }
        const data = {
            password: password_input.value,
            number: number_input.value,
            console() {
                console.log(this.password);
                console.log(this.number);
            }
        };
        console.log(data);
        localStorage.setItem('data', JSON.stringify(data));
        // console.log(`password = ${password}`);
        // console.log(`number = ${number}`);
    });
}
InformationFNC();
