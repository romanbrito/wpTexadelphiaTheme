(function () {

    const placeImage = document.createElement('IMG');
    placeImage.src = "https://res.cloudinary.com/spottermart/image/upload/v1539125202/Texadelphia/founder.jpg";
    placeImage.style.visibility = "hidden";
    document.querySelector('.carousel').appendChild(placeImage);

    const CHEVRON_LEFT = document.querySelectorAll('.chevron-left');
    const CHEVRON_RIGHT = document.querySelectorAll('.chevron-right');

    const FIGURE = document.querySelectorAll('.slide');
    const DURATION = 7000; // milliseconds
    const LENGTH = FIGURE.length;

    let state = 0;

    function left(cb) {
        for (let i = 0; i < LENGTH; i++) {
            if (FIGURE[i].classList.value === 'slide active_right') {
                FIGURE[i].classList.add('active');
            } else {
                FIGURE[i].style.left = '100%';
            }
        }
        cb();
    }

    function right(cb) {
        for (let i = 0; i < LENGTH; i++) {
            // identify reverse
            if (FIGURE[i].classList.value === 'slide active') {
                FIGURE[i].classList.add('active_right');
            } else {
                FIGURE[i].style.left = '-100%';
            }
        }
        cb();
    }

    for (let i = 0; i < CHEVRON_LEFT.length; i++) {
        CHEVRON_LEFT[i].addEventListener('click', function (e) {
            state < LENGTH - 1 ? state += 1 : state = 0;
            left(function () {
                slide(state)
            });
        });

    }

    for (let i = 0; i < CHEVRON_RIGHT.length; i++) {
        CHEVRON_RIGHT[i].addEventListener('click', function (e) {
            console.log('calling event handler');
            state > 0 ? state -= 1 : state = LENGTH - 1;
            right(function () {
                slideRight(state)
            });
        });
    }

    //initial slide
    left(function () {
        slide(0);
    });
    // right(function () {
    //     slideRight(0);
    // });

    // Returns the correct index to avoid negative or above last index
    function normalize(idx) {
        if (idx < 0) return LENGTH + idx;
        if (idx > LENGTH - 1) return idx - LENGTH;
        return idx;
    }

    function slide(idx) {
        FIGURE[idx].classList.remove('active_right', 'next_right');
        FIGURE[idx].classList.add('active');
        FIGURE[normalize(idx - 1)].classList.remove('active_right');
        FIGURE[normalize(idx - 1)].classList.add('next');
        FIGURE[normalize(idx - 2)].classList.remove('active', 'next');
    }

    function slideRight(idx) {
        FIGURE[idx].classList.remove('active', 'next');
        FIGURE[idx].classList.add('active_right');
        FIGURE[normalize(idx + 1)].classList.remove('active');
        FIGURE[normalize(idx + 1)].classList.add('next_right');
        FIGURE[normalize(idx + 2)].classList.remove('active_right', 'next_right');
    }

})();
