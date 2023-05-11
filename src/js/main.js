// ---------- Swiper Carousel

import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = new Swiper(".swiper-container", {
  clickable: true,
  // cssMode: true,
  loop: true,
  speed: 1000,
  mousewheel: true,
  keyboard: true,
  spaceBetween: 50,

  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
});

// ---------- Burger Menu

var burgerMenu = document.querySelector(".nav-burger-menu");
var Nav = document.querySelector(".nav-desk");

burgerMenu.addEventListener("click", () => {
  Nav.classList.toggle("nav-menu-open");
  burgerMenu.classList.toggle("nav-bruger-menu-animation");
});

var links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    Nav.classList.remove("menu-open");
  });
});
