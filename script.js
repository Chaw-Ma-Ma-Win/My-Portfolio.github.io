const crossBtn = document.querySelector('.mobile-cross');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
  menu.style.display = 'inline-block';
});
crossBtn.addEventListener('click', () => {
  menu.style.display = 'none';
});
