// variables
const modal = document.querySelector(".modal"),
      btn = document.querySelector(".btn"),
      close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});


// Open modal function
function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}

// Close modal function
function closeModal() {
    modal.style.display = "none";
}


