//variables

let openBtn = document.getElementById("open-btn");
let modalContainer = document.querySelector(".modal-container");
let closeBtn = document.getElementById("close-btn");

//event listeners

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

// Project 3 Accordian JS

const accordian = document.querySelectorAll(".content-container");

for (i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
