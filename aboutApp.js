// mobile menu about section
const hamburgerIcon2 = document.getElementById('about-image');
const xIcon2 = document.getElementById('about-close');
const navbar2 = document.getElementById('about-appear');
const linkMenu = document.querySelectorAll('.menu-li');

hamburgerIcon2.addEventListener('click', () => {
  navbar2.classList.toggle('menu-open');
  hamburgerIcon2.classList.toggle('disappear');
});

const closeMenu2 = () => {
  navbar2.classList.remove('menu-open');
  hamburgerIcon2.classList.remove('disappear');
};
xIcon2.addEventListener('click', closeMenu2);

linkMenu.forEach((link) => {
  link.addEventListener('click', closeMenu2);
});
