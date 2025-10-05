const generate = document.querySelector('.generate');
const reset = document.querySelector('.reset');
const hex = document.querySelector('.countcolor');

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = `#${randomColor.padStart(6, '0')}`;
  document.body.style.backgroundColor = color;
  hex.innerHTML = color;
};

const resetColor = () => {
  document.body.style.backgroundColor = '#ffffff';
  hex.innerHTML = '#ffffff';
};

generate.addEventListener("click", generateColor);
reset.addEventListener("click", resetColor);
