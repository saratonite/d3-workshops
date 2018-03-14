console.log('Hello d3')
import * as d3 from 'd3';

const h1 = document.createElement('h1')
        h1.textContent = d3.version;
document.body.appendChild(h1);