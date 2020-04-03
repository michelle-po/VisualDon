import * as d3 from 'd3'
import cantons from './cantons.json'



const xMin = 2486148
const yMin = 1076497
const xMax = 2833837
const yMax = 1295164
const WIDTH = 1000
const HEIGHT = WIDTH * ((yMax - yMin) / (xMax - xMin))
const projection = d3.geoTransform({
  point: function(x, y) {
    this.stream.point(
      (x - xMin) / (xMax - xMin) * WIDTH,
      HEIGHT - (y - yMin) / (yMax - yMin) * HEIGHT
    )
  }
})
const pathCreator = d3.geoPath().projection(projection)

const svg = d3.select(document.body).append('svg')
  .attr('width', WIDTH)
  .attr('height', HEIGHT)

const groupecantons = svg.append('g')
groupecantons.selectAll('path')
  .data(cantons.features)
  .enter()
  .append('path')
  .attr('d', pathCreator)
  .attr('fill', 'none')
  .attr('stroke', 'black')
  .attr('stroke-width', 3)

    // les coordonnées de la gare d'Yverdon
    const yverdon = [2539070, 1181442]

    // projeter le point
    const yverdonX = projectX(yverdon[0])
    const yverdonY = projectY(yverdon[1])
    
    // dessiner le point
    svg.append('circle')
      .attr('cx', yverdonX)
      .attr('cy', yverdonY)
      .attr('r', 10)
      .attr('fill', 'red')