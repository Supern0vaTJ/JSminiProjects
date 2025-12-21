const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const sub = document.querySelector(".sub");
// const reset = document.querySelector(".reset");

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e)=>{
    if(e.target.classList.contains("add")){
        count.innerHTML = Number(count.innerHTML) +1
    }
    else if(e.target.classList.contains("sub")){
        count.innerHTML = Number(count.innerHTML) - 1
    }
    else if(e.target.classList.contains("reset")){
        count.innerHTML = Number(count.innerHTML = 0)
    }
});

// add.addEventListener("click", () => {
//     count.innerHTML = Number(count.innerHTML) +1;
// })
// sub.addEventListener("click", () => {
//     count.innerHTML = Number(count.innerHTML) -1;
// })
// reset.addEventListener("click", () => {
//     count.innerHTML = 0;
// })