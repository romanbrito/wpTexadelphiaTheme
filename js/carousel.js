(function () {

    const placeImage = document.createElement('IMG');
    placeImage.src = "https://res.cloudinary.com/spottermart/image/upload/v1539125202/Texadelphia/founder.jpg";
    placeImage.style.visibility = "hidden";
    document.querySelector('.carousel').appendChild(placeImage);

    const FIGURE = document.querySelectorAll('.slide');
    const DURATION = 3000; // milliseconds

    slideShow();

    function slide(idx) {
        setTimeout(function () {
            FIGURE[idx].classList.add('move');

            if(idx < 2) {
                // case idx 0
                if(idx < 1) {
                    FIGURE[FIGURE.length -1].classList.add('next');
                    FIGURE[FIGURE.length -2].classList.remove('move', 'next');
                } else {
                    // case idx 1
                    FIGURE[idx - 1].classList.add('next');
                    FIGURE[FIGURE.length -1].classList.remove('move', 'next');
                }
            } else {
                // case > 1
                FIGURE[idx - 1].classList.add('next');
                FIGURE[idx - 2].classList.remove('move', 'next');
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
