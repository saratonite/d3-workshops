import * as d3 from 'd3';
import '../shared/global.css';

const data = ["Hello","World","Hello","Universe","Foo","Bar"]


const element = d3.selectAll('li')
                .data(data)
                .text((d) => d)
 