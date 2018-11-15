var ARTICLE_BUTTON = document.querySelectorAll('.article-button');
var CLOSE_ARTICLE_BUTTON = document.createElement('BUTTON');
var ARTICLE_CONTAINER = document.querySelectorAll('.article-container');
CLOSE_ARTICLE_BUTTON.innerHTML = 'CLOSE';
CLOSE_ARTICLE_BUTTON.classList.add('close-article-button');
var FRONTPAGE = document.querySelector('.site-content');

for (var i = 0; i < ARTICLE_CONTAINER.length; i++) {
  ARTICLE_CONTAINER[i].appendChild(CLOSE_ARTICLE_BUTTON.cloneNode(true));// same element in two different parents
}

var CLOSE_ART_BUTTON_ARR = document.querySelectorAll('.close-article-button');

  CLOSE_ART_BUTTON_ARR.forEach(function (element) {
    element.addEventListener('click', function (e) {
      element.parentNode.style.display = element.parentNode.style.display === 'flex' ? 'none' : 'flex';
      FRONTPAGE.style.zIndex = "2";
    });
  });

for (var i = 0; i < ARTICLE_BUTTON.length; i++) {
  ARTICLE_BUTTON[i].addEventListener('click', function (e) {
    var ART_CONTAINER = e.currentTarget.nextElementSibling
    ART_CONTAINER.style.display = 'flex';
    ART_CONTAINER.style.position = 'fixed';
    FRONTPAGE.style.zIndex = "3";
  });
}