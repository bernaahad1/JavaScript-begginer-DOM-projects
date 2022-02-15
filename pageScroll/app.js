const links = document.querySelector(".links-container");
const navBtn = document.querySelector(".nav-toggle");

navBtn.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
