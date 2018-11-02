var TAB = document.querySelectorAll('.tab');
var FEEDBACK = document.querySelector('.tab-feedback');
var FRANCHISING = document.querySelector('.tab-franchising');
var TAB_ELEMENTS = [FEEDBACK, FRANCHISING];

for (var i = 0; i < TAB.length; i++) {
  TAB[i].addEventListener('click', function (e) {
    var idx = Number(e.target.getAttribute('data-tabindex'));
    for (var i = 0; i < TAB_ELEMENTS.length; i++) {
      TAB_ELEMENTS[i].classList.remove('active');
      TAB[i].classList.remove('active');
    }
    TAB_ELEMENTS[idx].classList.toggle('active');
    e.target.classList.toggle('active');
  });
}