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
