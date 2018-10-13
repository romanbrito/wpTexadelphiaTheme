(function () {

    const placeImage = document.createElement('IMG');
    placeImage.src = "https://res.cloudinary.com/spottermart/image/upload/v1539125202/Texadelphia/founder.jpg";
    placeImage.style.visibility = "hidden";
    document.querySelector('.carousel').appendChild(placeImage);

    const CHEVRON_LEFT = document.querySelectorAll('.chevron-left');
    const CHEVRON_RIGHT = document.querySelectorAll('.chevron-right');

    const FIGURE = document.querySelectorAll('.slide');
    const DURATION = 7000; // milliseconds

    for (let i = 0; i < CHEVRON_LEFT.length; i++) {
        CHEVRON_LEFT[i].addEventListener('click', function (e) {
            console.log(e.currentTarget.parentNode.getAttribute('data-index-number'));
        });

    }

    for (let i = 0; i < CHEVRON_RIGHT.length; i++) {
        CHEVRON_RIGHT[i].addEventListener('click', function (e) {
            console.log(e.currentTarget.parentNode.getAttribute('data-index-number'));
        });
    }

    slideShow();

    function slide(idx) {
        setTimeout(function () {
            FIGURE[idx].classList.add('active');

            if (idx < 2) {
                // case idx 0
                if (idx < 1) {
                    FIGURE[FIGURE.length - 1].classList.add('next');
                    FIGURE[FIGURE.length - 2].classList.remove('active', 'next');
                } else {
                    // case idx 1
                    FIGURE[idx - 1].classList.add('next');
                    FIGURE[FIGURE.length - 1].classList.remove('active', 'next');
                }
            } else {
                // case > 1
                FIGURE[idx - 1].classList.add('next');
                FIGURE[idx - 2].classList.remove('active', 'next');
            }
        }, idx * DURATION)
    }

    function slideShow() {
        for (let i = 0; i < FIGURE.length; i++) {
            slide(i);
        }

        setTimeout(function () {
            slideShow();
        }, FIGURE.length * DURATION);
    }



})();
