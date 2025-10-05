
const number = document.querySelector(".number");
const button = document.querySelector(".add");

let generateNumber = () =>{
    const randomNumber = Math.floor(Math.random()*10) + 1;
    number.innerHTML = randomNumber;
} 

button.addEventListener("click", generateNumber);
