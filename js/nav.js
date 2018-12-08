var SITE = document.querySelector('.site');
var TRIGGER = document.querySelector('.menu-toggle');
var REVEAL = document.querySelector('.menu-main-navigation-container');
var CLOSE_BUTTON = document.createElement('BUTTON');
CLOSE_BUTTON.innerHTML = 'X';
CLOSE_BUTTON.classList.add('close-button');
REVEAL.appendChild(CLOSE_BUTTON);

// Toggle reveal class to site class
function revealMenu() {
  SITE.classList.toggle('reveal');
  TRIGGER.getAttribute('aria-expanded') == 'false' ? TRIGGER.setAttribute('aria-expanded', true) : TRIGGER.setAttribute('aria-expanded', false);
}

// Hide nave when click happens elsewhere
function clickTarget(e) {
  if ( TRIGGER.getAttribute('aria-expanded') == 'true' && !REVEAL.contains(e.target) ) {
    revealMenu();
  }
}

// Listen for clicks on TRIGGER button
TRIGGER.addEventListener('click', revealMenu, false);
CLOSE_BUTTON.addEventListener('click', revealMenu, false);

// Listen for clicks
SITE.addEventListener('click', function (e) {
  clickTarget(e);
}, true);