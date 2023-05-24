import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ---------- Animation on scroll with GSAP

gsap.registerPlugin(ScrollTrigger);

// gsap.to(".picture-right", {
//   scrollTrigger: ".picture-right",
//   x: 500,
//   duration: 1.5,
// });

// ---------- Swiper Carousel

Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 1000,
  mousewheel: true,
  keyboard: true,
  spaceBetween: 50,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

// ---------- Changement de langue

var Language = document.querySelector(".carousel-language ");
var NoDisponibility = document.querySelector(".information");

Language.addEventListener("click", () => {
  NoDisponibility.classList.toggle("information-close");
});
