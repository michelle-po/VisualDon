// importer les fonctions "d3"
import { select, geoNaturalEarth1, geoPath } from 'd3'

// importer les pays
import countries from './countries.json'
import data from './drugs.json'

// définir la taille du svg
const WIDTH = 1200
const HEIGHT = 600

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

// les coordonnées de ny
const sharm = [34.2351252662109, 27.847802624618062]
const miami=[-80.1936589,25.7742658]
const sanfrancisco=[-122.4199061,37.7790262]
const dubai=[55.1713,25.0657]
const mexique=[-86.9202746,20.4317585]


// pour projeter un point, nous devons utiliser la projection directement
svg.append('circle')
  .attr('cx', projection(sharm)[0])
  .attr('cy', projection(sharm)[1])
  .attr('r', 5)
  .attr('fill', 'red')



  svg.append('circle')
  .attr('cx', projection(miami)[0])
  .attr('cy', projection(miami)[1])
  .attr('r', 5)
  .attr('fill', 'red')



  svg.append('circle')
  .attr('cx', projection(sanfrancisco)[0])
  .attr('cy', projection(sanfrancisco)[1])
  .attr('r', 5)
  .attr('fill', 'red')



  svg.append('circle')
  .attr('cx', projection(dubai)[0])
  .attr('cy', projection(dubai)[1])
  .attr('r', 5)
  .attr('fill', 'red')


  svg.append('circle')
  .attr('cx', projection(mexique)[0])
  .attr('cy', projection(mexique)[1])
  .attr('r', 5)
  .attr('fill', 'red')