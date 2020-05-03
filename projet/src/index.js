
//import dessinerGraphiqueDrugs from './graphique-drugs.js'
import dessinerGraphiqueDrugs from './drugs-leaflet.js'
//import dessinerGraphiqueBatons from './batons.js'

//dessinerGraphiqueDrugs('map')
//dessinerGraphiqueBatons('batons')



/////////////////////////////////////////////////////////////////////////////////////////////////
import countries from '../data/countries.json'
import L from 'leaflet'
//import 'leaflet-defaulticon-compatibility'
var map = L.map('map').setView([20, 0], 2);

      L.tileLayer('https://api.maptiler.com/maps/positron/{z}/{x}/{y}.png?key=eiKhCNn6PEp5PueYXKV5',{
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
        crossOrigin: true
      }).addTo(map);


////////////////////pop up étas

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Taux de mortes par drogues sur 100.000 habitants </h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.drug +'</sup>'
        : 'Passer sur un étas');
};

info.addTo(map);


///////////////////////////couleurs

function getColor(d) {
  return d > 15 ? '#084594' :
         d > 10  ? '#2171b5' :
         d > 5  ? '#4292c6' :
         d > 4  ? '#6baed6' :
         d > 3   ? '#9ecae1' :
         d > 2   ? '#c6dbef' :
         d > 1   ? '#deebf7' :
         d > 0.5   ? '#f7fbff' :
                    '#FFFFFF';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.drug),
        weight: 1,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.8
    };
}

L.geoJson(countries, {style: style}).addTo(map);


//////////////////// highlight
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 4,
      color: '#666',
      fillOpacity: 0.7,
      fillColor:'red'
  });



  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
  info.update(layer.feature.properties);
}

///////////////////////////

var geojson;

function resetHighlight(e) {
  geojson.resetStyle(e.target);
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
  info.update();
}

function onEachFeature(feature, layer) {
  layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
  });
}

geojson = L.geoJson(countries, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map);


//legende
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 0.5, 1, 2, 3, 4, 5, 10, +15],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i]+1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);
