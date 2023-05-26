const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.mobile-cross');
const popupCross = document.querySelector('.popup-cross');
const mobilePopup = document.querySelector('.mobile-popup');
const popupBtn = document.querySelector('.popup-btn');
const body = document.querySelector('body');
const popDiv = document.querySelector('.pop-div');
const list = document.querySelector('.cl');
const live = document.querySelector('.live');
const source = document.querySelector('.source');
const liveATag = document.querySelector('.live-a');
const sourceATag = document.querySelector('.source-a');
const btn = document.querySelectorAll('.mobile-btn');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const fullName = document.querySelector('#full-name');
const email = document.querySelector('#email');
const error = document.querySelector('.error');
const submitOne = document.querySelector('.submit');
const submitTwo = document.querySelector('.submit-one');

function showMenu() {
  menu.style.display = 'inline';
}
function closeMenu() {
  menu.style.display = 'none';
}
menuButton.addEventListener('click', () => {
  showMenu();
});

closeButton.addEventListener('click', () => {
  closeMenu();
});

list.addEventListener('mousedown', () => {
  setTimeout(closeMenu, 1000);
});

body.addEventListener('mouseup', () => {
  closeMenu();
});

function blur() {
  popDiv.classList.add('pop-blur');
}
blur();

function noBlur() {
  popDiv.classList.remove('pop-blur');
}
noBlur();

if (popupBtn.onClick === undefined) {
  mobilePopup.style.display = 'none';
}

popupBtn.addEventListener('click', () => {
  mobilePopup.style.display = 'inline';
  blur();
});

popupCross.addEventListener('click', () => {
  mobilePopup.style.display = 'none';
  noBlur();
});

body.addEventListener('mouseup', () => {
  mobilePopup.style.display = 'none';
  noBlur();
});

btn.forEach((button) => button.addEventListener('click', () => {
  mobilePopup.style.display = 'inline';
  blur();
}));

const projects = [
  {
    name: 'project-one',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/img-blur.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    source: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    btn: live,
    sourceBtn: source,
  },
  {
    name: 'project-two',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/img-blur.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    source: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    btn: live,
    sourceBtn: source,
  },
  {
    name: 'project-three',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/img-blur.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    source: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    btn: live,
    sourceBtn: source,
  },
  {
    name: 'project-four',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/img-blur.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    source: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    btn: live,
    sourceBtn: source,
  },
  {
    name: 'project-five',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/img-blur.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    source: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    btn: live,
    sourceBtn: source,
  },
  {
    name: 'project-six',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/img-blur.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    source: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    btn: live,
    sourceBtn: source,
  },
  {
    name: 'project-seven',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/img-blur.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    source: 'https://github.com/Chaw-Ma-Ma-Win/My-Portfolio.github.io',
    btn: live,
    sourceBtn: source,
  },
];

projects[0].btn.addEventListener('click', () => {
  liveATag.setAttribute('href', projects[0].live);
});

projects[0].sourceBtn.addEventListener('click', () => {
  sourceATag.setAttribute('href', projects[0].source);
});

projects[1].btn.addEventListener('click', () => {
  liveATag.setAttribute('href', projects[1].live);
});

projects[1].sourceBtn.addEventListener('click', () => {
  sourceATag.setAttribute('href', projects[1].source);
});
projects[2].btn.addEventListener('click', () => {
  liveATag.setAttribute('href', projects[2].live);
});

projects[2].sourceBtn.addEventListener('click', () => {
  sourceATag.setAttribute('href', projects[2].source);
});
projects[3].btn.addEventListener('click', () => {
  liveATag.setAttribute('href', projects[3].live);
});

projects[3].sourceBtn.addEventListener('click', () => {
  sourceATag.setAttribute('href', projects[3].source);
});
projects[4].btn.addEventListener('click', () => {
  liveATag.setAttribute('href', projects[4].live);
});

projects[4].sourceBtn.addEventListener('click', () => {
  sourceATag.setAttribute('href', projects[4].source);
});
projects[5].btn.addEventListener('click', () => {
  liveATag.setAttribute('href', projects[5].live);
});

projects[5].sourceBtn.addEventListener('click', () => {
  sourceATag.setAttribute('href', projects[5].source);
});

projects[6].btn.addEventListener('click', () => {
  liveATag.setAttribute('href', projects[6].live);
});

projects[6].sourceBtn.addEventListener('click', () => {
  sourceATag.setAttribute('href', projects[6].source);
});

submitOne.addEventListener('click', (e) => {
  const message = [];

  if (firstName.value === '' || lastName.value === '') {
    message.push('Please enter your name');
  }
  if (email.value !== email.value.toLowerCase()) {
    message.push('Please enter a valid email address');
  }

  if (message.length > 0) {
    e.preventDefault();
    error.innerText = message.join(',');
  }
});

submitTwo.addEventListener('click', (e) => {
  const message = [];

  if (fullName.value === '') {
    message.push('Please enter your name');
  }
  if (email.value !== email.value.toLowerCase()) {
    message.push('Please enter a valid email address');
  }

  if (message.length > 0) {
    e.preventDefault();
    error.innerText = message.join(',');
  }

  const obj = {
    email: email.value,
    name: fullName.value,
  };

  const convertObj = JSON.stringify(obj);

  localStorage.setItem('fact', convertObj);
});
