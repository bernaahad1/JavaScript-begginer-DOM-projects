const btns = document.querySelectorAll("button");
const texts = document.querySelectorAll(".content");

btns.forEach(function (element, index) {
  element.addEventListener("click", function () {
    const activeElements = document.querySelectorAll(".active");
    activeElements.forEach(function (item) {
      item.classList.remove("active");
    });
    element.classList.toggle("active");
    texts[index].classList.toggle("active");
  });
});
