
//import dessinerGraphiqueDrugs from './graphique-drugs.js'
import dessinerGraphiqueDrugs from './drugs-leaflet.js'
//import dessinerGraphiqueBatons from './batons.js'

dessinerGraphiqueDrugs('map')
//dessinerGraphiqueBatons('batons')

import countries from '../data/countries.json'

/////////////////////////////////////////////////////////////////////////////////////////////////
/*import L from 'leaflet'
//import 'leaflet-defaulticon-compatibility'

var map = L.map('map').setView([0, 0], 1);

      L.tileLayer('https://api.maptiler.com/maps/positron/{z}/{x}/{y}.png?key=eiKhCNn6PEp5PueYXKV5',{
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
        crossOrigin: true
      }).addTo(map);

// la couche avec les arbres
const data = L.geoJSON(countries)

// ajouter la couche à "map"
data.addTo(map)

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
      fillColor: getColor(feature.properties.drugs),
      weight: 2,
      opacity: 1,
      color: 'black',
      fillOpacity: 0.7
  };
}

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
}
function resetHighlight(e) {
  geojson.resetStyle(e.target);
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
  });
}

geojson = L.geoJson(data, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map);*/
