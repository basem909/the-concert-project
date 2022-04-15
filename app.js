// mobile menu home page
const hamburgerIcon = document.querySelector('.menu-image');
const xIcon = document.querySelector('.close-menu');
const navbar = document.querySelector('.menu-appear');
const linkMenu = document.querySelectorAll('.menu-li');

hamburgerIcon.addEventListener('click', () => {
  navbar.classList.toggle('menu-open');
  hamburgerIcon.classList.toggle('disappear');
});

const closeMenu = () => {
  navbar.classList.remove('menu-open');
  hamburgerIcon.classList.remove('disappear');
};
xIcon.addEventListener('click', closeMenu);

linkMenu.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// singers variable
const stars = [
  {
    photo: './assets/images/amr-diab.png',
    name: 'Amr Diab',
    description: 'an Egyptian pop superstar',
    program: 'Amr will perform a variuos number of his well known songs.',
  },
  {
    photo: './assets/images/mohamed-hamaki.jpg',
    name: 'Mohamed Hamaki',
    description: 'an Egyptian pop superstar',
    program: 'Mohamed will perform a variuos number of his well known songs.',
  },
  {
    photo: './assets/images/omar-kamal.jpeg',
    name: 'Mohamed Abdelsalam',
    description: 'an Egyptian DJ player',
    program: 'Mohamed will perform some of his top hits in Egypt.',
  },
  {
    photo: './assets/images/opera-aida.jpeg',
    name: 'Opera Aida choral',
    description: 'the Egyptian operal choral of Egypts opera house',
    program:
      'the Egyptian operal choral will perform some of their finest operas.',
  },
  {
    photo: './assets/images/wegz.jpeg',
    name: 'Wegz',
    description: 'an Egyptian rap superstar',
    program: 'Wegz will perform a variuos number of his well known rap songs.',
  },
  {
    photo: './assets/images/lurdiana.jpeg',
    name: 'Lurdiana',
    description: 'a Brazilian belly-dancer based in Egypt',
    program: 'Lordiana will perform ones of her exquisite dances.',
  },
];

const starsSection = document.getElementById('stars');
const starsTitle = document.createElement('h2');
starsTitle.textContent = 'Our Stars';
starsTitle.classList.add('stars-title');
starsSection.appendChild(starsTitle);
const starsCards = document.createElement('div');
starsCards.classList.add('stars-cards');
starsSection.appendChild(starsCards);

const starCard1 = document.createElement('section');
starCard1.classList.add('star-card');
starsCards.appendChild(starCard1);
const starPhoto1 = document.createElement('img');
starPhoto1.setAttribute('src', stars[0].photo);
starPhoto1.classList.add('star-photo');
starCard1.appendChild(starPhoto1);
const starDetails1 = document.createElement('section');
starDetails1.classList.add('star-details');
starCard1.appendChild(starDetails1);
const starName1 = document.createElement('h3');
starName1.textContent = stars[0].name;
starName1.classList.add('star-name');
starDetails1.appendChild(starName1);
const starDescreption1 = document.createElement('p');
starDescreption1.textContent = stars[0].description;
starDescreption1.classList.add('star-description');
starDetails1.appendChild(starDescreption1);
const starProgram1 = document.createElement('p');
starProgram1.textContent = stars[0].program;
starProgram1.classList.add('star-program');
starDetails1.appendChild(starProgram1);

const starCard2 = document.createElement('section');
starCard2.classList.add('star-card');
starsCards.appendChild(starCard2);
const starPhoto2 = document.createElement('img');
starPhoto2.setAttribute('src', stars[1].photo);
starPhoto2.classList.add('star-photo');
starCard2.appendChild(starPhoto2);
const starDetails2 = document.createElement('section');
starDetails2.classList.add('star-details');
starCard2.appendChild(starDetails2);
const starName2 = document.createElement('h3');
starName2.textContent = stars[1].name;
starName2.classList.add('star-name');
starDetails2.appendChild(starName2);
const starDescreption2 = document.createElement('p');
starDescreption2.textContent = stars[1].description;
starDescreption2.classList.add('star-description');
starDetails2.appendChild(starDescreption2);
const starProgram2 = document.createElement('p');
starProgram2.textContent = stars[1].program;
starProgram2.classList.add('star-program');
starDetails2.appendChild(starProgram2);

const starCard3 = document.createElement('section');
starCard3.classList.add('star-card');
starsCards.appendChild(starCard3);
const starPhoto3 = document.createElement('img');
starPhoto3.setAttribute('src', stars[2].photo);
starPhoto3.classList.add('star-photo');
starCard3.appendChild(starPhoto3);
const starDetails3 = document.createElement('section');
starDetails3.classList.add('star-details');
starCard3.appendChild(starDetails3);
const starName3 = document.createElement('h3');
starName3.textContent = stars[2].name;
starName3.classList.add('star-name');
starDetails3.appendChild(starName3);
const starDescreption3 = document.createElement('p');
starDescreption3.textContent = stars[2].description;
starDescreption3.classList.add('star-description');
starDetails3.appendChild(starDescreption3);
const starProgram3 = document.createElement('p');
starProgram3.textContent = stars[2].program;
starProgram3.classList.add('star-program');
starDetails3.appendChild(starProgram3);

const starCard4 = document.createElement('section');
starCard4.classList.add('star-card');
starsCards.appendChild(starCard4);
const starPhoto4 = document.createElement('img');
starPhoto4.setAttribute('src', stars[3].photo);
starPhoto4.classList.add('star-photo');
starCard4.appendChild(starPhoto4);
const starDetails4 = document.createElement('section');
starDetails4.classList.add('star-details');
starCard4.appendChild(starDetails4);
const starName4 = document.createElement('h3');
starName4.textContent = stars[3].name;
starName4.classList.add('star-name');
starDetails4.appendChild(starName4);
const starDescreption4 = document.createElement('p');
starDescreption4.textContent = stars[3].description;
starDescreption4.classList.add('star-description');
starDetails4.appendChild(starDescreption4);
const starProgram4 = document.createElement('p');
starProgram4.textContent = stars[3].program;
starProgram4.classList.add('star-program');
starDetails4.appendChild(starProgram4);

const starCard5 = document.createElement('section');
starCard5.classList.add('star-card');
starsCards.appendChild(starCard5);
const starPhoto5 = document.createElement('img');
starPhoto5.setAttribute('src', stars[4].photo);
starPhoto5.classList.add('star-photo');
starCard5.appendChild(starPhoto5);
const starDetails5 = document.createElement('section');
starDetails5.classList.add('star-details');
starCard5.appendChild(starDetails5);
const starName5 = document.createElement('h3');
starName5.textContent = stars[4].name;
starName5.classList.add('star-name');
starDetails5.appendChild(starName5);
const starDescreption5 = document.createElement('p');
starDescreption5.textContent = stars[4].description;
starDescreption5.classList.add('star-description');
starDetails5.appendChild(starDescreption5);
const starProgram5 = document.createElement('p');
starProgram5.textContent = stars[4].program;
starProgram5.classList.add('star-program');
starDetails5.appendChild(starProgram5);

const starCard6 = document.createElement('section');
starCard6.classList.add('star-card');
starsCards.appendChild(starCard6);
const starPhoto6 = document.createElement('img');
starPhoto6.setAttribute('src', stars[5].photo);
starPhoto6.classList.add('star-photo');
starCard6.appendChild(starPhoto6);
const starDetails6 = document.createElement('section');
starDetails6.classList.add('star-details');
starCard6.appendChild(starDetails6);
const starName6 = document.createElement('h3');
starName6.textContent = stars[5].name;
starName6.classList.add('star-name');
starDetails6.appendChild(starName6);
const starDescreption6 = document.createElement('p');
starDescreption6.textContent = stars[5].description;
starDescreption6.classList.add('star-description');
starDetails6.appendChild(starDescreption6);
const starProgram6 = document.createElement('p');
starProgram6.textContent = stars[5].program;
starProgram6.classList.add('star-program');
starDetails6.appendChild(starProgram6);

// mobile menu about section
const hamburgerIcon2 = document.getElementById('about-image');
const xIcon2 = document.getElementById('about-close');
const navbar2 = document.getElementById('about-appear');

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