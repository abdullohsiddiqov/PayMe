
let number_input:HTMLInputElement = document.querySelector('.number_input')!;
let btn:HTMLButtonElement = document.querySelector('.btn')!;
let password_input:HTMLInputElement = document.querySelector('.password_input')!;

function InformationFNC(){ 
    btn.addEventListener('click', () =>{ 
        if(password_input.value === ""){ 
            password_input.style.border = "1px solid red";
        }
        if(number_input.value === ""){ 
            number_input.style.border = "1px solid red";
        }
        let password = password_input.value;
        let number = number_input.value;
        localStorage.setItem('password', password);
        console.log(localStorage.getItem('password'));
        localStorage.setItem('number', number);
        console.log(localStorage.getItem('number'));
        console.log(`password = ${password}`);
        console.log(`number = ${number}`);
    });
}
InformationFNC()