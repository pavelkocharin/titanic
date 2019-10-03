/**
 * Логика работы меню на мобильных
 */

var nav = document.querySelector('.nav-menu');
var toggler = document.querySelector('.mobile-menu-toggler');

toggler.addEventListener('click', function(){
  toggler.classList.toggle('mobile-menu-toggler--open');
  nav.classList.toggle('nav-menu--open');
});

nav.addEventListener('click', function(){
  if (nav.classList.contains('nav-menu--open')) {
    toggler.classList.toggle('mobile-menu-toggler--open');
    nav.classList.toggle('nav-menu--open');
  }
});
