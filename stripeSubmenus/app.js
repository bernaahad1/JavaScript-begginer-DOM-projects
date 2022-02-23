const navBtns = document.querySelectorAll(".link-btn");
const main = document.querySelector("main");
const dorpdown = document.querySelectorAll(".dropdown");

function clearDropdown() {
  dorpdown.forEach(function (element) {
    if (!element.classList.contains("hidden")) {
      element.classList.add("hidden");
    }
  });
}
navBtns.forEach(function (btn, index) {
  btn.addEventListener("mouseover", function () {
    clearDropdown();
    dorpdown[index].classList.remove("hidden");
  });
  dorpdown[index].addEventListener("mouseleave", function () {
    dorpdown[index].classList.add("hidden");
  });
});
