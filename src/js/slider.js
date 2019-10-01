/**
 * Обработчики кликов на +/-
 */
var sliderButtons = document.querySelectorAll('.slider button');
var sliderButtonsArr = Array.prototype.slice.call(sliderButtons);

var itemsSelector = '.slider__item';
var activeClass = 'slider__item--active';

sliderButtonsArr.forEach(function(button) {
  button.addEventListener('click', changeSliderValue);
});

function changeSliderValue() {
  var button = this;
  var slider = findSlider(button);

  if (button.classList.contains('js-slider-minus')) {
    moveSliderLeft(slider)
  }
  if (button.classList.contains('js-slider-plus')) {
    moveSliderRight(slider)
  }
  if (button.classList.contains('js-slider-set')) {
    var value = button.getAttribute('data-id');
    updateSliderValue(slider, value);
  }
}

function moveSliderLeft(slider) {
  var values = getSliderValues(slider);
  var newValue = values.current - 1;

  if (newValue < values.first) {
    newValue = values.last;
  }

  updateSliderValue(slider, newValue);
}

function moveSliderRight(slider) {
  var values = getSliderValues(slider);
  var newValue = values.current + 1;

  if (newValue > values.last) {
    newValue = values.first;
  }

  updateSliderValue(slider, newValue);
}

function getSliderValues(slider) {
  var all = slider.querySelectorAll(itemsSelector);
  var active = slider.querySelector('.' + activeClass);
  var first = all[0];
  var last = all[all.length - 1];

  return {
    first: +first.getAttribute('data-id'),
    current: active ? +active.getAttribute('data-id') : 0,
    last: +last.getAttribute('data-id'),
  }
}

function updateSliderValue(slider, value) {
  var arr = Array.prototype.slice.call(slider.querySelectorAll(itemsSelector));

  arr.forEach(function(item){
    item.classList.remove(activeClass);
  });

  var el = slider.querySelector('[data-id="' +  value + '"]');

  if (el) {
    el.classList.add(activeClass);
  }
}

function findSlider(el) {
  var result = null;

  while (!result && el.parentNode) {
    if (el.parentNode.classList.contains('slider')) {
      result = el.parentNode;
    }
    el = el.parentNode;
  }

  return result;
}
