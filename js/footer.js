// dropdown toggle
var DROP_DOWN = document.querySelectorAll('.dropdown-toggle');
for (var i = 0; i < DROP_DOWN.length; i++) {
  DROP_DOWN[i].addEventListener('click', function (e) {
    e.preventDefault();
    var SUBMENU = e.currentTarget.parentElement.nextElementSibling;
    var CHEVRON_UP = e.currentTarget.children[0];
    var CHEVRON_DOWN = e.currentTarget.children[1];

    // show submenu
    SUBMENU.classList.toggle('toggled-on');
    CHEVRON_DOWN.classList.toggle('toggle-on');
    CHEVRON_UP.classList.toggle('toggle-on');
  });
}