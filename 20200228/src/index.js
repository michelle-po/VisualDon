import * as d3 from 'd3';


const villes =[
{nom :'Lausanne', population: 1398905},
{nom :'Lausanne', population: 1398905},
{nom :'Lausanne', population: 1398905},
{nom :'Lausanne', population: 1398905},
{nom :'Lausanne', population: 1398905}
];

console.log(d3);

const body = d3.select('body');
const ul = body.apppend('ul');

const li= ul.selectAll('li').data(villes).enter().append('li').text(d=>d.nom);