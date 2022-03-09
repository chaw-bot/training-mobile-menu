const menuBtn = document.querySelector('.menu-bars i');
const closeBtn = document.querySelector('.menu-close');
const mobileNav = document.querySelector('#mobile-nav');
const container = document.querySelector('header');
const logo = document.querySelector('#logo');

const openMenu = () => {
  container.style.padding = '250px';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  mobileNav.style.display = 'block';
  logo.style.display = 'none';
};

const closeMenu = () => {
  container.style.padding = '15px';
  mobileNav.style.display = 'none';
  menuBtn.style.display = 'block';
  logo.style.display = 'block';
};

const toggleMenu = () => {
  if (menuBtn.style.display === 'block') {
    openMenu();
  } else {
    menuBtn.style.display = 'block';
  }
};

toggleMenu();
closeMenu();
