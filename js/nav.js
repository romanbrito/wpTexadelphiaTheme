var BUTTON = document.querySelector('.menu-toggle');
var MENU_MAIN_NAVIGATION = document.querySelector('.menu-main-navigation-container');
var FRONTPAGE_ARTICLE = document.querySelector('.frontpage-article');
var CLOSE_BUTTON = document.createElement('BUTTON');
CLOSE_BUTTON.innerHTML = 'X';
CLOSE_BUTTON.classList.add('close-button');
MENU_MAIN_NAVIGATION.appendChild(CLOSE_BUTTON);


BUTTON.addEventListener('click', function (e) {
 showButton();
 showMenu();
});

CLOSE_BUTTON.addEventListener('click', function (e) {
  showButton();
  showMenu();
});

function showMenu() {
  if ( MENU_MAIN_NAVIGATION.style.display === 'flex') {
    MENU_MAIN_NAVIGATION.style.display= 'none';
    MENU_MAIN_NAVIGATION.classList.toggle('show-menu');
    FRONTPAGE_ARTICLE.classList.toggle('show-frontpage-article');
  } else {
    MENU_MAIN_NAVIGATION.style.display= 'flex';
    MENU_MAIN_NAVIGATION.classList.toggle('show-menu');
    FRONTPAGE_ARTICLE.classList.toggle('show-frontpage-article');
  }
}

function showButton() {
  if ( BUTTON.style.display !== 'none') {
    BUTTON.style.display= 'none';
  } else {
    BUTTON.style.display= 'block';
  }
}
