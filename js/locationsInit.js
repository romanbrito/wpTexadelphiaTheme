var GETinfo = window.location.href.split('/');
$.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {

    var arrayToObject  = function arrayToObject(array) {
        return array.reduce(function (obj, item) {
            obj[item.id] = item;
            return obj;
        }, {})
    };

    var locationsObject = arrayToObject(data.locations)


    if (GETinfo[3] === "locations-menu") {
        loadMapsScript(data.locations);
    } else {
        loadMapsScript([ locationsObject[GETinfo[3]] ])
    }
});