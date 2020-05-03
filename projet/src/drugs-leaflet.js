/////////////////////////////// avec leaflet

// importer les pays
import countries from '../data/countries.json'

// importer les fonctions des librairies que vous utilisez
import L from 'leaflet'
//import 'leaflet-defaulticon-compatibility'

export default map => {
  const div = select(`#${map}`)
// initialiser la carte, ici "carte" est l'id de la <div> de notre index.html
const leafMap = L.map('map').setView([0, 0], 1);

var geojson;

// le fond de carte, ici nous utilisons celles de openstreetmap.ch
const fondDeCarte =  L.tileLayer('https://api.maptiler.com/maps/positron/{z}/{x}/{y}.png?key=eiKhCNn6PEp5PueYXKV5',{
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 1,
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
  crossOrigin: true
}).addTo(leafMap);

// ajouter le fond de carte à "map"
fondDeCarte.addTo(leafMap)

// la couche avec les arbres
const data = L.geoJSON(countries)

// ajouter la couche à "map"
data.addTo(leafMap)

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
      color: 'white',
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
}).addTo(leafMap);
}