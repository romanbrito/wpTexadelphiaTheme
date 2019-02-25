function SlideShow() {
  "use strict";
  var CHEVRON_LEFT = document.querySelector('.chevron-left');
  var CHEVRON_RIGHT = document.querySelector('.chevron-right');
  var SLIDES = document.querySelector('.slides');
  var NUMBER_SLIDES = 4;
  var slide = 0;

  this.Slider = function () {
    CHEVRON_RIGHT.addEventListener('click', function (e) {
      slide = slide + 1 > NUMBER_SLIDES - 1 ? 0 : slide + 1;
      SLIDES.style.transform = 'translate3d(-' + slide + '00%, 0px, 0px)';
    });

    CHEVRON_LEFT.addEventListener('click', function (e) {
      slide = slide - 1 < 0 ? NUMBER_SLIDES - 1 : slide - 1;
      SLIDES.style.transform = 'translate3d(-' + slide + '00%, 0px, 0px)';
    });
  };
}

var Scroll = new SlideShow();
Scroll.Slider();