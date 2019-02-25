function Article() {
  "use strict";
  var SITE = document.querySelector('.site');
  var ARTICLE_BUTTON = document.querySelectorAll('.article-button');

  this.main = function () {
    for (var i = 0; i < ARTICLE_BUTTON.length; i++) {
      var closeButton = ARTICLE_BUTTON[i].nextElementSibling.querySelector('.close-article-button');
      this.openArticle(ARTICLE_BUTTON[i]);
      this.closeArticle(closeButton, ARTICLE_BUTTON[i]);
    }
  };

  this.openArticle = function (button) {
    button.addEventListener('click', function (e) {
      var articleContainer = button.nextElementSibling;
      SITE.classList.add('article-active');
      button.classList.add('show-article');
      articleContainer.classList.add('show-article');
    });
  };

  this.closeArticle = function (closeButton, articleButton) {
    closeButton.addEventListener('click', function (e) {
      var articleContainer = closeButton.parentElement;
      SITE.classList.remove('article-active');
      articleContainer.classList.remove('show-article');
      articleButton.classList.remove('show-article');
    });
  };

}

var article = new Article();
article.main();