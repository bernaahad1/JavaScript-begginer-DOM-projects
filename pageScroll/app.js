//date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//menu links
const linksCont = document.querySelector(".links-container");
const navBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navBtn.addEventListener("click", function () {
  //linksCont.classList.toggle("show-links");
  const containerHaight = linksCont.getBoundingClientRect().height;
  const linksHaight = links.getBoundingClientRect().height;
  if (containerHaight == 0) {
    linksCont.style.height = `${linksHaight}px`;
  } else {
    linksCont.style.height = 0;
  }
});

//fixed navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 400) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

//smooth scrolling
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //prevent default
    e.preventDefault();
    //navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHaight = linksCont.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position -= navHeight;
    }
    if (navHeight > 82) {
      position += containerHaight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    //close links menu after selectingand scrolling
    linksCont.style.height = 0;
  });
});
