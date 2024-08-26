const menuBtn = document.querySelector('.burger-nav');
const navSide = document.querySelector('.menu-btn')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    navSide.classList.add('active');
    menuOpen = true;
  } else {
    navSide.classList.remove('active');
    menuOpen = false;
  }
});