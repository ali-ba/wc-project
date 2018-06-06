var mymap = L.map('map').setView([60.160107, 94.765077], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/aloochii/cjdkp9kic010d2robvw0b5dis/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxvb2NoaWkiLCJhIjoiY2pkZXo5NWFwMDFwaDJwbnFrY3c3dXVmOSJ9.K75OnvxUocRQs_guWnUQbg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    minZoom: 1,
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


L.geoJSON(world).addTo(mymap);

    // control that shows state info on hover
    var stats = L.control();

    stats.onAdd = function(mymap) {
      this._div = L.DomUtil.create("div", "stats");
      this.update();
      return this._div;
    };

    stats.update = function(hov) {
      this._div.innerHTML =
        "<h4>FIFA WORLD CUP <br></h4>" +  
        (hov
          ? " <br> <b>" +
            hov.name +
            " <br><br>Finals Appearance <br><br>"+
            hov.GamesPlayed+
            "</b><br />"
          : "<p><br>Click on the countries for info</p>");
    };

    stats.addTo(mymap);


    function style(feature) {
      return {
        weight: 2,
        opacity: 1,
        color: "black",
        fillOpacity: 0.9,
        fillColor: 'red'
      };
    }

    function highlightFeature(e) {
      var layer = e.target;

      layer.setStyle({
        weight: 5,
        color: "black",
        dashArray: "",
        fillColor: 'blue',
        fillOpacity: 0.9
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }

      stats.update(layer.feature.properties);
    }

    var geojson;

    function resetHighlight(e) {
      geojson.resetStyle(e.target);
      stats.update();
    }

    function zoomToFeature(e) {
    mymap.fitBounds(e.target.getBounds());
}


    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    }

    geojson = L.geoJson(world, {
      style: style,
      onEachFeature: onEachFeature,
    }).addTo(mymap);






var russia = L.icon({
    iconUrl: 'images/trophy.png',

    iconSize:     [64, 64], // size of the icon
    iconAnchor:   [35, 34], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -36] // point from which the popup should open relative to the iconAnchor
});

var champs = L.marker([51.1657, 10.4515], {icon: russia}).addTo(mymap);
champs.bindPopup("<b> Current Holders ")

var Luzhniki = L.marker([55.7158, 37.5537]).addTo(mymap);
Luzhniki.bindPopup("<b> Luzhniki Stadiums in Moscow scheduled to host the final of the tournament! ")

var Otkrytiye = L.marker([55.8178, 37.4407]).addTo(mymap);
Otkrytiye.bindPopup("<b> Otkrytiye Arena - Moscow")

var Krestovsky = L.marker([59.9730, 30.2202]).addTo(mymap);
Krestovsky .bindPopup("<b> Krestovsky Stadium - Saint Petersburg")

var Kazan = L.marker([55.8210, 49.1610]).addTo(mymap);
Kazan.bindPopup("<b>Kazan Arena	- Kazan")

var Nizhny = L.marker([56.2965, 43.9361]).addTo(mymap);
Nizhny.bindPopup("<b> Nizhny Novgorod Stadium - Nizhny Novgorod")

var Samara	= L.marker([53.2781, 50.2389]).addTo(mymap);
Samara.bindPopup("<b> Cosmos Arena - Samara ")

var Volgograd = L.marker([48.4404, 44.3255]).addTo(mymap);
Volgograd.bindPopup("<b> Volgograd Arena - Volgograd ")

var Saransk	 = L.marker([54.1818, 45.2039]).addTo(mymap);
Saransk.bindPopup("<b>Mordovia Arena - Saransk")

var Rostov = L.marker([47.2096, 39.7384]).addTo(mymap);
Rostov.bindPopup("<b>Rostov Arena - Rostov")

var Sochi = L.marker([43.4020, 39.9557]).addTo(mymap);
Sochi.bindPopup("<b> Fisht Olympic Stadium - Sochi")

var Yekaterinburg = L.marker([56.8325, 60.5736]).addTo(mymap);
Yekaterinburg.bindPopup("<b> Central Stadium - Yekaterinburg")

var Kaliningrad = L.marker([54.6982, 20.5339]).addTo(mymap);
Kaliningrad.bindPopup("<b> Kaliningrad Stadium - Kaliningrad")
//----------------------------------------------------------------------------------------------------------//


new TypeIt('#example1', {
     speed: 200,
     autoStart: false,
     loop: true

})
.pause(500)
.delete()
.type('LEAFLET SUCKS :)')
.pause(500)
.delete()
.type('JOKES :)')
;

new TypeIt('#example3', {
     speed: 200,
     autoStart: false
});

new TypeIt('#example2', {
     speed: 29,
     autoStart: false,
     loop: true

})
.pause(800)
;
