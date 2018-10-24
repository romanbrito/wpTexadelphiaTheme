function FetchInstagram(token, selector) {
    this.token = token;
    this.selector = selector;
}

FetchInstagram.prototype.fetchData = function () {
    return fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=" + this.token,
        {method: 'GET'})
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            return data.data;
        })
        .catch(function (err) {
            console.log(err);
        });
};

FetchInstagram.prototype.textHTML = function (imageSrc, imageAlt, link) {
    let element = "<div class='panel social'>";
    element += "<a href='" + link + "' target='_blank'>";
    element += "<img src='" + imageSrc + "' alt='" + imageAlt + "' width='100%'/>";
    element += "</a>";
    element += "</div>";
    return element;
};

FetchInstagram.prototype.setHTML = function () {
    const self = this;
    const ELEMENT = document.querySelector(this.selector);

    function getHTMLoutput(data) {
        let output = "<div class='panel social'>" +
            "<a href='https://www.instagram.com/texadelphianation/' target='_blank'>            " +
            "<svg class=\"svg-social\" aria-hidden=\"true\" data-prefix=\"fab\" data-icon=\"instagram\" role=\"img\"\n" +
            "                 xmlns=\"http://www.w3.org/2000/svg\"\n" +
            "                 viewBox=\"0 0 448 512\">\n" +
            "                <path fill=\"currentColor\"\n" +
            "                      d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"\n" +
            "                      class=\"\"></path>\n" +
            "            </svg>" +
            "</a>" +
            "</div>";
        data.map(function (image) {
            output += self.textHTML(image.images.low_resolution.url, image.caption.text, image.link);
        });
        return output;
    }

    function insertHTMLoutput(output) {
        ELEMENT.innerHTML = output;
    }

    this.fetchData()
        .then(getHTMLoutput)
        .then(insertHTMLoutput);
};

const INSTAGRAM_TOKEN = "3959116306.6ae6b94.93ae2da0898848099338d9cde7ac0ad2";
const texadelphiaInstagram = new FetchInstagram(INSTAGRAM_TOKEN, '.instagram-images');

texadelphiaInstagram.setHTML();