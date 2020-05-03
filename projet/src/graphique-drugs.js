//////////////ancienne avec D3


import { select, geoNaturalEarth1, geoPath } from 'd3'

// importer les pays
import countries from '../data/countries.json'
import deathrateDrugs from '../data/data-drugs.json'
// importer les fonctions des librairies que vous utilisez

export default carte => {
  const div = select(`#${carte}`)
  // dessiner le graphique

const cleanDeathRate = deathrateAlcool.filter(d => d.Year === 2017).filter(d => d.Code !== "")

const getDeathRateByCountry = (countryCode) => cleanDeathRate.find(d => d.Code === countryCode)

const getFillByCountry = ({properties}) => {
  if(typeof getDeathRateByCountry(properties.iso_a3) !== 'undefined') { 

    return getDeathRateByCountry(properties.iso_a3).deathRate > 10.00 
    ? 'yellow' : 'orange'

  }else{
    return 'white';
  }
} 

// définir la taille du svg
const WIDTH = 1280
const HEIGHT = 720

// ajouter un <svg> à la <div id="carte">
const svg = select('#carte').append('svg')
  .attr('width', WIDTH)
  .attr('height', HEIGHT)

// définir la projection pour faire entrer tous les pays dans le <svg>
const projection = geoNaturalEarth1().fitExtent([[0, 0], [WIDTH, HEIGHT]], countries)

// définir le créateur d'attribut "d" pour l'élément <path>
const pathCreator = geoPath().projection(projection)

// ajouter un <path> par pays au <svg>
svg.selectAll('path')
    .data(countries.features)
    .enter()
    .append('path')
    .attr('d', pathCreator)
    .attr('fill',getFillByCountry)
    .attr('stroke','black')
}