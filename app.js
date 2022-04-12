// mobile menu home page
const hamburgerIcon = document.querySelector(".menu-image");
const xIcon = document.querySelector(".close-menu");
const navbar = document.querySelector(".menu-appear");
const linkMenu = document.querySelectorAll(".menu-li");

hamburgerIcon.addEventListener("click", () => {
  navbar.classList.toggle("menu-open");
  hamburgerIcon.classList.toggle("disappear");
});

const closeMenu = () => {
  navbar.classList.remove("menu-open");
  hamburgerIcon.classList.remove("disappear");
};
xIcon.addEventListener("click", closeMenu);

linkMenu.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// mobile menu about section
const hamburgerIcon2 = document.getElementById("about-image");
const xIcon2 = document.getElementById("about-close");
const navbar2 = document.getElementById("about-appear");

hamburgerIcon2.addEventListener("click", () => {
  navbar2.classList.toggle("menu-open");
  hamburgerIcon2.classList.toggle("disappear");
});

const closeMenu2 = () => {
  navbar2.classList.remove("menu-open");
  hamburgerIcon2.classList.remove("disappear");
};
xIcon2.addEventListener("click", closeMenu2);

linkMenu.forEach((link) => {
  link.addEventListener("click", closeMenu2);
});
