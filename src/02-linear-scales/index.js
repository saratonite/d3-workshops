console.log('Hello d3')
import * as d3 from 'd3';
(function () {
  var body = document.querySelector('body');
  body.style['fontFamily'] = 'monospace';
  body.style['fontSize'] = '2em';
  console.log = function (x) { body.innerText += x + '\n'; };
}());


var linearScale = d3.scaleLinear()
  .domain([0, 100]) // Domain (Input) value Range
  .range([0, 600])  // Output Value range
  .clamp(true); // Prevent out of range

console.log(linearScale(-20));
console.log(linearScale(99));
console.log(linearScale(50));
console.log(linearScale(100));
console.log(linearScale(105));

console.log(linearScale.invert(300)); // Conert range -> domain 
