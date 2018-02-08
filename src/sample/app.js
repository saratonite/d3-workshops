console.log('Hello d3')
import * as d3 from 'd3';
import '../shared/global.css'
const element = d3.select('#chart')

element.style("color","red")
    .style("background","orange")
    .text('Hello')