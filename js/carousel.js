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

    for (let i = 0; i < CHEVRON_LEFT.length; i++) {
        CHEVRON_LEFT[i].addEventListener('click', function (e) {
            state < LENGTH-1 ? state+=1: state=0;
            slide(state);
        });

    }

    for (let i = 0; i < CHEVRON_RIGHT.length; i++) {
        CHEVRON_RIGHT[i].addEventListener('click', function (e) {
            state > 0 ? state-=1: state=LENGTH-1;
            slide(state);
        });
    }

    slide(0);

    // Returns the correct index to avoid negative or above last index
    function normalize(idx) {
        if(idx < 0) return LENGTH + idx;
        if(idx > LENGTH - 1) return LENGTH - idx;
        return idx;
    }

    function slide(idx) {
            FIGURE[idx].classList.add('active');
            FIGURE[normalize(idx - 1)].classList.add('next');
            FIGURE[normalize(idx - 2)].classList.remove('active', 'next');
    }

})();
