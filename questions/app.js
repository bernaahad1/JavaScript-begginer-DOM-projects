const questions = [...document.querySelectorAll(".question-answer")];
const paragr = [...document.querySelectorAll(".answer-content")];

questions.forEach(function (element) {
  const btn = element.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    const contentP = element.querySelector(".answer-content");
    contentP.classList.toggle("hide-content");
  });
});
