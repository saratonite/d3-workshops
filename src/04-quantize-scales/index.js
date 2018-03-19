import * as d3 from 'd3';
import '../shared/console-to-dom';

const quantizeScale = d3.scaleQuantize()
        .domain([0,100])
        .range(["RED","GREEN","BLUE"])

console.log(quantizeScale(20))
console.log(quantizeScale(50))
console.log(quantizeScale(90))