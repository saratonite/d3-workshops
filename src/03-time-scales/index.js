import * as d3 from 'd3';

(function () {
        var body = document.querySelector('body');
        body.style['fontFamily'] = 'monospace';
        body.style['fontSize'] = '2em';
        console.log = function (x) { body.innerText += x + '\n'; };
}());

const timeScale = d3.scaleTime()
        .domain([new Date(2017, 0, 1), new Date()])
        .range([1,100]);

console.log(timeScale(new Date(2017,0,10)))
console.log(timeScale(new Date(2017,3,10)))
console.log(timeScale(new Date(2017,10,10)))

console.log(timeScale.invert(20))
