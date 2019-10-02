/**
 * Все попапы на странцие
 */
var popups = document.querySelectorAll('.popup');
var popupsArr = Array.prototype.slice.call(popups);

var openPopupClass = 'popup--open';

/**
 * Обработчики открытия модалов
 */
var openLinks = document.querySelectorAll('[data-popup-open]');
var openLinksArr = Array.prototype.slice.call(openLinks);

openLinksArr.forEach(function(link) {
  link.addEventListener('click', function(){
    var id = this.getAttribute('data-popup-open');

    openPopup(id);
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
function openPopup(id) {
  var popup = document.getElementById(id);

  if (popup) {
    closeAllPopups();
    popup.classList.add(openPopupClass);
  }
}

/**
 * Закрыть определенный попап
 */
function closePopup(id) {
  var popup = document.getElementById(id);

  if (popup) {
    closeAllPopups();
    popup.classList.remove(openPopupClass);
  }
}

/**
 * Закрыть все модалы
 */
function closeAllPopups() {
  popupsArr.forEach(function(popup) {
    popup.classList.remove(openPopupClass);
  });
}
