const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.mobile-cross');
const popupBtn = document.querySelector('.popup-btn');
const body = document.querySelector('body');
const popDiv = document.querySelector('.pop-div');
const list = document.querySelector('.cl');
const btn = document.querySelectorAll('.mobile-btn');
const one = document.querySelector('.one');
const projects = [
  {
    name: 'project-one',
    title: 'NETFLIX UI Clone',
    text: 'Designed for Open UI',
    description:
      'We’ve touched on executive summaries, project proposals and more. If you want a more in-depth look at them, below is some related content',
    image: 'img/UI.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    button: one,
    live: 'https://chaw-ma-ma-win.github.io/NETFLIX-movies/',
    source: 'https://github.com/Chaw-Ma-Ma-Win/NETFLIX-movies',
  },
];

const mobilePopup = document.querySelector('.mobile-popup');
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

btn.forEach((button) => button.addEventListener('click', () => {
  mobilePopup.style.display = 'inline';
  blur();
}));

const show = () => {
  projects.forEach((project) => {
    mobilePopup.innerHTML = `<div>
<div class="popup">
  <h1 class="none">${project.title}</h1>
  <h2 class="display-none">
    ${project.text}
  </h2>
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="#979493"
    xmlns="http://www.w3.org/2000/svg"
    class="popup-cross"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
      fill="#979493"
    />
  </svg>
</div>
<ul>
${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
</ul>
</div>
<div class="pop-description">
<img src="${project.image}" id="img" alt="" />
<div class="pop-text">
  <p class="none">${project.description}
  </p>
  <p class="display-none p-one">
  ${project.description}
  </p>
  <p class="display-none">
  ${project.description}
  </p>
  <button class="live">
    <a class="live-a"
      >See live
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z"
          fill="#fff"
        /></svg
    ></a>
  </button>
  <button class="source">
    <a class="source-a"
      >See source
      <svg
        width="16"
        height="18"
        viewBox="0 0 18 20"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.9852 7.46114C17.9852 6.32124 17.6192 5.25043 16.9205 4.31779C17.1867 3.41969 17.2532 2.27979 17.1867 0.967185C17.1534 0.414508 16.7209 0 16.1885 0C15.8891 0 13.3604 0.0345423 11.8965 1.38169C10.6321 1.1399 9.30128 1.1399 8.00368 1.38169C6.573 0.0345423 4.04435 0 3.71163 0C3.17928 0 2.74675 0.414508 2.71348 0.967185C2.61366 2.27979 2.71348 3.41969 2.97965 4.31779C2.28095 5.28497 1.91496 6.35579 1.91496 7.46114C1.91496 9.8791 3.71163 12.0553 6.43991 13.0915C6.3401 13.2988 6.27355 13.5406 6.20701 13.7824C3.31237 13.4715 1.94823 10.7427 1.88169 10.639C1.64878 10.1209 1.04989 9.91364 0.550818 10.19C0.0517425 10.4318 -0.147888 11.0535 0.118286 11.5717C0.184829 11.7444 2.01477 15.4404 6.04065 15.8549V18.9637C6.04065 19.5509 6.47319 20 7.0388 20H12.8614C13.427 20 13.8595 19.5509 13.8595 18.9637V14.8532C13.8595 14.2314 13.7264 13.6442 13.4935 13.1261C16.1885 12.0553 17.9852 9.91364 17.9852 7.46114Z"
          fill="#fff"
        /></svg
    ></a>
  </button>
</div>
</div>`;
    const live = document.querySelector('.live');
    const source = document.querySelector('.source');
    const liveATag = document.querySelector('.live-a');
    const sourceATag = document.querySelector('.source-a');
    live.addEventListener('click', () => {
      liveATag.setAttribute('href', project.live);
    });
    source.addEventListener('click', () => {
      sourceATag.setAttribute('href', project.source);
    });
  });
};
show();

const popupCross = document.querySelector('.popup-cross');
popupCross.addEventListener('click', () => {
  mobilePopup.style.display = 'none';
  noBlur();
});

body.addEventListener('mouseup', () => {
  mobilePopup.style.display = 'none';
  noBlur();
});
