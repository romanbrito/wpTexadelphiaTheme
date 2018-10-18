(function () {
    // setting a copy of an image as placeholder
    const placeImage = document.createElement('IMG');
    placeImage.src = document.querySelector('.slide-images').getAttribute('src');
    placeImage.style.visibility = "hidden";
    document.querySelector('.carousel').appendChild(placeImage);

    // getting elements and chevrons
    const FIGURE = document.querySelectorAll('.slide');
    const LENGTH = FIGURE.length;
    const CHEVRON_LEFT = document.querySelectorAll('.chevron-left');
    const CHEVRON_RIGHT = document.querySelectorAll('.chevron-right');
    const DURATION = 3000; // milliseconds

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
            const idx = parseInt(e.currentTarget.parentNode.getAttribute('data-index-number'));
            slide(1, idx);
        });
        // right chevron click event (same number of left and right chevrons)
        CHEVRON_RIGHT[i].addEventListener('click', function (e) {
            const idx = parseInt(e.currentTarget.parentNode.getAttribute('data-index-number'));
            slide(-1, idx);
        });
    }

    // function that takes care of the sliding one slide at a time
    function slide(i, idx) {
        // removing all classes, just keeping slide (reset)
        for (let i = 0; i < LENGTH; i++) {
            FIGURE[i].classList = 'slide';
        }
        // slide right case
        if (i < 0) {
            FIGURE[idx].classList.add('slide-right-out');
            FIGURE[normalize(idx + i)].classList.add('slide-right-in');
        } else {
            // slide left case
            FIGURE[idx].classList.add('slide-left-out');
            FIGURE[normalize(idx + i)].classList.add('slide-left-in');
        }
    }

})();
