function Navigation() {
  "use strict";
  var SITE = document.querySelector('.site');
  var TRIGGER = document.querySelector('.menu-toggle');

  this.revealMenu = function () {
    SITE.classList.toggle('reveal');
    TRIGGER.getAttribute('aria-expanded') === 'false' ? TRIGGER.setAttribute('aria-expanded', true) : TRIGGER.setAttribute('aria-expanded', false);
  };

  this.createEvent = function () {
    TRIGGER.addEventListener('click', this.revealMenu, false);
  };
}

var navigation = new Navigation();
navigation.createEvent();