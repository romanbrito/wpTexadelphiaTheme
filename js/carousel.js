(function () {

    const FIGURE = document.querySelectorAll('.slide');

    function slideShow(idx) {
        setTimeout(function () {
            if (FIGURE[idx].classList.value !== 'slide move') {
                FIGURE[idx].classList.add('move');
            }

            if (idx > 0) {
                FIGURE[idx - 1].classList.add('next');
            }


        }, idx * 3000)
    }


    for (let i = 0; i < FIGURE.length; i++) {
        slideShow(i)
    }

})();
