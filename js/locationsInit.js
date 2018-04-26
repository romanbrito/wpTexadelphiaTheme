var GETinfo = window.location.href.split('/');
$.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
    console.log(data.locations)
    console.log(GETinfo[3])
    if (GETinfo[3] === "locations-menu") {
        loadMapsScript(data.locations);
    } else if (GETinfo[3] === "great-hills") {
        loadMapsScript([data.locations[0]]);
    } else if (GETinfo[3] === "lakeline") {
        loadMapsScript([data.locations[1]]);
    } else if (GETinfo[3] === "sunset") {
        loadMapsScript([data.locations[2]]);
    } else if (GETinfo[3] === "frisco-warren-pkwy") {
        loadMapsScript([data.locations[3]]);
    } else if (GETinfo[3] === "las-colinas") {
        loadMapsScript([data.locations[4]]);
    } else if (GETinfo[3] === "old-town") {
        loadMapsScript([data.locations[5]]);
    } else if (GETinfo[3] === "plano") {
        loadMapsScript([data.locations[6]]);
    } else if (GETinfo[3] === "richardson") {
        loadMapsScript([data.locations[7]]);
    } else if (GETinfo[3] === "arlington-uta-campus") {
        loadMapsScript([data.locations[8]]);
    } else if (GETinfo[3] === "okc") {
        loadMapsScript([data.locations[9]]);
    } else if (GETinfo[3] === "laredo") {
        loadMapsScript([data.locations[10]]);
    } else if (GETinfo[3] === "mcallen") {
        loadMapsScript([data.locations[11]]);
    } else if (GETinfo[3] === "houston-westheimer") {
        loadMapsScript([data.locations[12]]);
    }
});