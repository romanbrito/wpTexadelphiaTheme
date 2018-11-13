var BUTTON = document.querySelector('.menu-toggle');
var MENU_MAIN_NAVIGATION = document.querySelector('.menu-main-navigation-container');
BUTTON.addEventListener('click', function (e) {
  MENU_MAIN_NAVIGATION.classList.toggle('show-menu');
});
