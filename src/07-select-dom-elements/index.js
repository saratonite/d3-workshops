import * as d3 from 'd3';

const div = d3.select('div')

console.log('div nodes',div.nodes())

const links = d3.selectAll('a')

console.log('links', links.nodes())

const secondLink = d3.selectAll('a:nth-child(2)')

console.log(secondLink.nodes());

const allLinks = d3.selectAll(document.links);
console.log('Total links', allLinks.size())


