const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

function translate() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

nextBtn.addEventListener("click", function () {
  counter++;
  if (counter >= slides.length) {
    counter = 0;
  }
  translate();
});

prevBtn.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  translate();
});
