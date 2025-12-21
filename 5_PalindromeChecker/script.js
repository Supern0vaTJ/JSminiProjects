const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

// madam
// noon
// peep
function palindrome (){
    const input = document.querySelector(".input-text").value;
    const word = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    let len = word.length;
    let start = word.substring(0,Math.floor(len/2));
    let end = word.substring(len - Math.floor(len/2));

    // let flip = end.split("").reverse().join("");
    let flip = [...end].reverse().join("");

    if(flip === start){
        result.textContent = `Yes! ${word} is a valid Palindrome`;
    } else {result.textContent = `Nah! ${word} is Not a valid Palindrome, please try something else!`;
    }
}