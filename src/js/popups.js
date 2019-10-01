/**
 * Все попапы на странцие
 */
var popups = document.querySelectorAll('.popup');
var popupsArr = Array.prototype.slice.call(popups);

var openDayClass = 'popup--open';

/**
 * Обработчики открытия модалов
 */
var openLinks = document.querySelectorAll('[data-popup-open]');
var openLinksArr = Array.prototype.slice.call(openLinks);

openLinksArr.forEach(function(link) {
  link.addEventListener('click', function(){
    var id = this.getAttribute('data-popup-open');

    openDay(id);
  });
});

/**
 * Обработчики закрытия модалов
 */
var closeLinks = document.querySelectorAll('.js-popup-close');
var closeLinksArr = Array.prototype.slice.call(closeLinks);

closeLinksArr.forEach(function(link) {
  link.addEventListener('click', closeAllPopups);
});

/**
 * Открыть определенный попап
 */
function openDay(id) {
  var popup = document.getElementById(id);

  if (popup) {
    closeAllPopups();
    popup.classList.add(openDayClass);
  }
}

/**
 * Закрыть определенный попап
 */
function closeDay(id) {
  var popup = document.getElementById(id);

  if (popup) {
    closeAllPopups();
    popup.classList.remove(openDayClass);
  }
}

/**
 * Закрыть все модалы
 */
function closeAllPopups() {
  popupsArr.forEach(function(popup) {
    popup.classList.remove(openDayClass);
  });
}
