var questions = document.querySelectorAll('.questions-item__button');
var questionsArr = Array.prototype.slice.call(questions);

questionsArr.forEach(function(el) {
  el.addEventListener('click', function(){
    this.parentNode.classList.toggle('questions-item--open');
  });
});
