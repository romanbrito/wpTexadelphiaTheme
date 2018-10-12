(function () {

    const placeImage = document.createElement('IMG');
    placeImage.src = "https://res.cloudinary.com/spottermart/image/upload/v1539125202/Texadelphia/founder.jpg";
    placeImage.style.visibility = "hidden";
    document.querySelector('.carousel').appendChild(placeImage);

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
