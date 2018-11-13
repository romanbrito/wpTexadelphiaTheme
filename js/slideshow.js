(function () {
    // setting a copy of an image as placeholder
    const placeImage = document.createElement('IMG');
    placeImage.src = document.querySelector('.slide-images').getAttribute('src');
    placeImage.style.visibility = "hidden";
    placeImage.style.height = '100%';
    document.querySelector('.carousel').appendChild(placeImage);

    // getting elements and chevrons
    const FIGURE = document.querySelectorAll('.slide');
    const LENGTH = FIGURE.length;
    const CHEVRON_LEFT = document.querySelectorAll('.chevron-left');
    const CHEVRON_RIGHT = document.querySelectorAll('.chevron-right');
    const DURATION = 7000; // milliseconds
    let state = 0;
    let timeOutVar;

    // start automatic slideShow
    const timeOutVarStart = setTimeout(function () {
        slideShow(1);
    }, DURATION);

    // Returns the correct index to avoid negative or above last index
    function normalize(idx) {
        if (idx < 0) return LENGTH + idx;
        if (idx > LENGTH - 1) return idx - LENGTH;
        return idx;
    }

    // event listener, listen for left or right clicks
    for (let i = 0; i < CHEVRON_LEFT.length; i++) {
        // left chevron click event
        CHEVRON_LEFT[i].addEventListener('click', function (e) {
            // stop automatic slideShow
            clearTimeout(timeOutVarStart);
            clearTimeout(timeOutVar);
            console.log('chevron left');
            slideShow(1);
        });
        // right chevron click event (same number of left and right chevrons)
        CHEVRON_RIGHT[i].addEventListener('click', function (e) {
            // stop automatic slideShow
            clearTimeout(timeOutVarStart);
            clearTimeout(timeOutVar);
            slideShow(-1);
        });
    }

    // function that takes care of the sliding one slide at a time
    function slide(i) {
        // removing all classes, just keeping slide (reset)
        for (let i = 0; i < LENGTH; i++) {
            FIGURE[i].classList = 'slide';
        }
        // slide right case
        if (i < 0) {
            FIGURE[state].classList.add('slide-right-out');
            FIGURE[normalize(state + i)].classList.add('slide-right-in');
        } else {
            // slide left case
            FIGURE[state].classList.add('slide-left-out');
            FIGURE[normalize(state + i)].classList.add('slide-left-in');
        }

        // current slide
        state = normalize(state + i);

    }

    function slideShow(i) {
        slide(i);

        timeOutVar = setTimeout(function () {
            slideShow(i);
        }, DURATION);

    }

})();
