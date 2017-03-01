document.addEventListener('DOMContentLoaded',function(){

  data =  [56,45,84,20,30,40,50,60,90,80,81,399];
  var width = 600;
  var height = 400;

  // Create SVG
  var svg = d3.select('.chart')
              .append('svg')
              .attr('width',width)
              .attr('height',height)
              .style('background','#fff')
// Scales

/*xScale */
var xScale = d3.scaleLinear()
            .domain([0,data.length])
            .range([0,width])


/*Alternative xScale */

//\\ var xScale = d3.scaleBand().padding(0.1).domain([1,2,3,4,5,6]).rangeRound([0,width]);

//yScale #TODO

var yScale = d3.scaleOrdinal()
            .range(height);

// Axis #TODO


  // Enter data
    svg.selectAll('rect')
        .data(data)
          .enter()
            .append('rect')
            .attr('width',10)
            .attr('height',function(d){
              return d;
            })
            .attr('x',function(d,i){

              return xScale(i);
            })
            .attr('y',function(d){
              return height-d;
            })

});
