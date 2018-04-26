function GoogleMap(){return{getGoogleMaps:function(o){var e=new google.maps.Map(document.getElementById("map")),n=new google.maps.LatLngBounds;return o.map(function(o,t){var a=new google.maps.LatLng(o.coordinates);n.extend(a),e.fitBounds(n),e.panToBounds(n)}),{map:e}},addMarkers:function(a,o){var e=o.map(function(o,t){return new google.maps.Marker({position:o.coordinates,label:o.label,map:a})});o.map(function(o,t){return e[t].addListener("click",function(){window.open("https://www.google.com/maps/dir/?api=1&destination="+o.coordinates.lat+","+o.coordinates.lng,"_blank")})}),$.getScript("https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js",function(){new MarkerClusterer(a,e,{gridSize:15,imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"})})},getDistance:function(o,t,a){(new google.maps.DistanceMatrixService).getDistanceMatrix({origins:[o],destinations:t,travelMode:"DRIVING",unitSystem:google.maps.UnitSystem.IMPERIAL,avoidHighways:!1,avoidTolls:!1},function(o,t){"OK"===t?a(o.rows[0].elements):alert("Geocode was not successful due to: "+t)})}}}var Menu=function(i){return{renderMenu:function(o,t,a,e){var n="";n+='<div class="modal fade" id="'+t+o+'Modal" role="dialog">',n+='<div class="modal-dialog modal-lg">',n+='<div class="modal-content">',n+='<div class="modal-header">',n+='<button type="button" class="close" data-dismiss="modal">&times;</button>',n+='<p class="modal-title">'+a+" "+o+' Menu<a href="../wp-content/themes/texsite/pdf/'+o+"_"+t+'.pdf" target="_blank"><i class="fa fa-print" aria-hidden="true"></i></a></p>',n+="</div>",n+='<div class="modal-body">',n+='<div class="smaller-screen-locations">',e.map(function(o){return n+='<img src="../wp-content/themes/texsite/images/'+o+'.jpg" alt="'+o+' menu" width="100%"> <p></p>'}),n+="</div>",n+='<div class="large-screen-locations">',n+='<object rel="pdf-'+o+"-"+t+'" id="'+t+"-"+o+'-pdf" class="pdf-image" type="application/pdf" data="../wp-content/themes/texsite/pdf/'+o+"_"+t+'.pdf" style="width: 100%">',n+="Your browser does not support objects",n+="</object>",n+="</div>",n+="</div>",n+='<div class="modal-footer">',n+='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',n+="</div>",n+="</div>",n+="</div>",n+="</div>",i("#menus").html(n)}}}(jQuery),Location=function(i){function s(o,t){var a="";return a+="<li>",a+='<div class="row main-location">',a+='<div class="location-info col-lg-6">',a+="<h4>"+o.name+"</h4>",a+="<p>"+o.address+"</p>",a+="<p>"+o.city+", ",a+=o.state+" ",a+=o.zip+"</p>",a+='<a href="tel:'+o.phone+'">T. '+o.phone+"</a>",a+="<p>"+o.hours1+"</p>",a+="<p>"+o.hours2+"</p>",a+="<p>"+o.hours3+"</p>",o.miles?a+="<p>Distance: "+o.miles+"</p>":a+="<p></p>",a+="</div>",a+='<div class="location-buttons col-lg-6">',a+='<div class="row">',a+='<a rel="Menu-House-'+o.label+"-"+o.name+"-"+t+'" class="btn btn-default col-lg-6 col-md-6 col-sm-6 col-xs-6" role="button" data-toggle="modal" data-target="#'+o.label+'HouseModal"> Menu</a>',a+='<a rel="Menu-Catering-'+o.label+"-"+o.name+"-"+t+'" class="btn btn-default col-lg-6 col-md-6 col-sm-6 col-xs-6" role="button" data-toggle="modal" data-target="#'+o.label+'CateringModal"> Catering Menu</a>',a+="</div>",a+='<div class="row">',a+='<a class="btn btn-danger" href="https://www.google.com/maps/dir/?api=1&destination='+o.coordinates.lat+","+o.coordinates.lng+'" target="_blank" role="button"> Directions</a>',a+="</div>",a+="</div>",a+="</div>",a+="</li>"}return{renderLocations:function(o,t){var a='<ul class="searchresults">';i.each(o,function(o,t){a+=s(t,o)}),a+="</ul>",i("#update").html(a),t()},searchLocations:function(t,n){i("#search").keyup(function(){var o=i("#search").val(),a=new RegExp(o,"i"),e='<ul class="searchresults">';i.each(t,function(o,t){-1==t.name.search(a)&&-1==t.address.search(a)&&-1==t.zip.search(a)&&-1==t.state.search(a)&&-1==t.city.search(a)||(e+=s(t,o))}),e+="</ul>",i("#update").html(e),n()})}}}(jQuery);function getCurrentPosition(a){if(navigator.geolocation)navigator.geolocation.getCurrentPosition(function(o){var t={lat:o.coords.latitude,lng:o.coords.longitude};a(t)},function(){console.log("geolocation error");a(null)});else{console.log("The browser does not support geolocation");a(null)}}function loadMapsScript(a){var e=a.map(function(o,t){return o.coordinates});$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBZAdtCTX8ZlyU39tML3S_dOmmWWAh6cdk",function(){console.log("google maps script loaded");var t=GoogleMap();t.addMarkers(t.getGoogleMaps(a).map,a),getCurrentPosition(function(o){t.getDistance(o,e,function(o){var t=o.map(function(o,t){return a[t].distance=o.distance.value,a[t].miles=o.distance.text,a[t]}).sort(function(o,t){return o.distance-t.distance});Location.renderLocations(t,function(){menuClickEvent(t)}),Location.searchLocations(a,function(){menuClickEvent(a)})})})}),Location.renderLocations(a,function(){menuClickEvent(a)}),Location.searchLocations(a,function(){menuClickEvent(a)})}function menuClickEvent(l){$("[rel*='Menu-']").click(function(o){var t=$(o.target).attr("rel").split("-"),a=t[1],e=t[2],n=t[3],i=t[4],s="House"===a?l[i].houseMenuUrl:l[i].cateringMenuUrl;Menu.renderMenu(a,e,n,s)})}var GETinfo=window.location.href.split("/");$.getJSON("../wp-content/themes/texsite/json/locations.json",function(o){console.log(o.locations),console.log(GETinfo[3]),"locations-menu"===GETinfo[3]?loadMapsScript(o.locations):"great-hills"===GETinfo[3]?loadMapsScript([o.locations[0]]):"lakeline"===GETinfo[3]?loadMapsScript([o.locations[1]]):"sunset"===GETinfo[3]?loadMapsScript([o.locations[2]]):"frisco-warren-pkwy"===GETinfo[3]?loadMapsScript([o.locations[3]]):"las-colinas"===GETinfo[3]?loadMapsScript([o.locations[4]]):"old-town"===GETinfo[3]?loadMapsScript([o.locations[5]]):"plano"===GETinfo[3]?loadMapsScript([o.locations[6]]):"richardson"===GETinfo[3]?loadMapsScript([o.locations[7]]):"arlington-uta-campus"===GETinfo[3]?loadMapsScript([o.locations[8]]):"okc"===GETinfo[3]?loadMapsScript([o.locations[9]]):"laredo"===GETinfo[3]?loadMapsScript([o.locations[10]]):"mcallen"===GETinfo[3]?loadMapsScript([o.locations[11]]):"houston-westheimer"===GETinfo[3]&&loadMapsScript([o.locations[12]])});