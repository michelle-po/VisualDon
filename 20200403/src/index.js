import * as d3 from 'd3'
import lakes from './lakes.json'
import districts from './districts.json'

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

 const groupelakes = svg.append('g')
groupelakes.selectAll('path')
  .data(lakes.features)
  .enter()
  .append('path')
  .attr('d', pathCreator)
  .attr('fill', 'blue')
  .attr('stroke', 'white')
  .attr('stroke-width', 1)

  const groupedistricts = svg.append('g')
  groupedistricts.selectAll('path')
    .data(districts.features)
    .enter()
    .append('path')
    .attr('d', pathCreator)
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', 1)

