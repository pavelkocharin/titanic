/**
 * Все попапы на странцие
 */
var days = document.querySelectorAll('.day');
var daysArr = Array.prototype.slice.call(days);

var openDayClass = 'day--open';

/**
 * Обработчики открытия дней
 */
var openLinks = document.querySelectorAll('.js-open-day');
var openLinksArr = Array.prototype.slice.call(openLinks);

openLinksArr.forEach(function(link) {
  link.addEventListener('click', function(){
    var day = findDay(this);

    openDay(day);
  });
});

/**
 * Обработчики закрытия дней
 */
var closeLinks = document.querySelectorAll('.js-close-day');
var closeLinksArr = Array.prototype.slice.call(closeLinks);

closeLinksArr.forEach(function(link) {
  link.addEventListener('click', function() {
    var day = findDay(this);

    closeDay(day);
  });
});

var collapseAll = document.querySelector('.js-close-all-days');

if (collapseAll) {
  collapseAll.addEventListener('click', closeAllDays);
}

/**
 * Открыть определенный день
 */
function openDay(element) {
  element.classList.add(openDayClass);
}

/**
 * Закрыть определенный день
 */
function closeDay(element) {
  element.classList.remove(openDayClass);
}

/**
 * Свернуть все дни
 */
function closeAllDays() {
  daysArr.forEach(function(day) {
    day.classList.remove(openDayClass);
  });
}

function findDay(el) {
  var result = null;

  while (!result && el.parentNode) {
    if (el.parentNode.classList.contains('day')) {
      result = el.parentNode;
    }
    el = el.parentNode;
  }

  return result;
}
