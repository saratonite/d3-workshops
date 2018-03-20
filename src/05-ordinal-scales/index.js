import * as d3 from 'd3';

import '../shared/console-to-dom';

const ordinalScale = d3.scaleOrdinal()
    .domain(['poor','good','great'])
    .range(['red','yellow','green'])

console.log(ordinalScale('good'))
console.log(ordinalScale('poor'))
console.log(ordinalScale('great'))