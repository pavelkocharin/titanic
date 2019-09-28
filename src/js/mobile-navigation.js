/**
 * Логика работы меню на мобильных
 */

var nav = document.querySelector('.nav-menu');
var toggler = document.querySelector('.mobile-menu-toggler');

toggler.addEventListener('click', function(){
  toggler.classList.toggle('mobile-menu-toggler--open');
  nav.classList.toggle('nav-menu--open');
});
