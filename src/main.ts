
let number_input:HTMLInputElement = document.querySelector('.number_input')!;
let btn:HTMLButtonElement = document.querySelector('.btn')!;
let password_input:HTMLInputElement = document.querySelector('.password_input')!;

btn.addEventListener('click', () =>{ 
    if(password_input.innerHTML == ""){ 
        password_input.style.border = "1px solid red";
    }
    if(number_input.innerHTML == ""){ 
        number_input.style.border = "1px solid red";
    }
    let password = password_input.value;
    let number = number_input.value;
    console.log(password);
    console.log(number);
});
