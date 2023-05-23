const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.mobile-cross');
const body = document.querySelector('body');
const list = document.querySelector('.cl');
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
