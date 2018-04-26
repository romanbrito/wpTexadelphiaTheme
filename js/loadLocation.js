function loadMapsScript(data) {

    // locations coordinates array
    var destinations = data.map(function (current_location, index) {
        return current_location.coordinates;
    });

    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBZAdtCTX8ZlyU39tML3S_dOmmWWAh6cdk", function () {
        console.log('google maps script loaded');

        var g_map = GoogleMap();

        // render map with markers
        g_map.addMarkers(g_map.getGoogleMaps(data).map, data);

        // render in order of distance to current postion
        getCurrentPosition(function (current_position) {

            g_map.getDistance(current_position, destinations, function (distance) {

                var location_distance = distance.map(function (element, index) { // merging distance with locations array
                    data[index].distance = element.distance.value;
                    data[index].miles = element.distance.text;
                    return data[index];
                }).sort(function (a, b) {  // sorting locations array
                    return a.distance - b.distance;
                });

                Location.renderLocations(location_distance, function () {
                    menuClickEvent(location_distance);
                });

                Location.searchLocations(data, function () {
                    menuClickEvent(data)
                });

            });
        });
    });

    Location.renderLocations(data, function () {
        menuClickEvent(data);
    });

    Location.searchLocations(data, function () {
        menuClickEvent(data);
    });
}

function menuClickEvent(data) {
    var $menu = $("[rel*='Menu-']");

    $menu.click(function (evt) {
        var rel_elements = $(evt.target).attr("rel").split("-");
        var menu_type = rel_elements[1];
        var label = rel_elements[2];
        var name = rel_elements[3];
        var arrPos = rel_elements[4];

        var menuArr = (menu_type === 'House') ? data[arrPos].houseMenuUrl : data[arrPos].cateringMenuUrl;

        Menu.renderMenu(menu_type, label, name, menuArr);

    });
}