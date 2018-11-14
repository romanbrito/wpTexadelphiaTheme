var ARTICLE_BUTTON = document.querySelectorAll('.article-button');

for (var i = 0; i < ARTICLE_BUTTON.length; i++) {
  ARTICLE_BUTTON[i].addEventListener('click', function (e) {
    console.log(e.currentTarget.nextElementSibling);
  });
}