##D3 Steps


## Step 1 - Append SVG Element and Set width and height
var w= 535;
var h= 250;
var svg= d3.select('.gardenDiv')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

## Bind data 

svg.selectAll('rect.colorBar')
    .data(data)
    .enter()
    .append('rect')
    .attr('width', function(d,i){
        return d.width
    })
    .attr('height', function(d,i){
        return d.height*2
    })
    .attr('x', function(d,i){
        return i * (d.width+2)
    })
    .attr('y', function(d,i){
        return h - d.height*2
    })
    .attr('fill', 'white')
