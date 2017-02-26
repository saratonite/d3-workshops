document.addEventListener('DOMContentLoaded',function(){

  var height = 280;
  var width = 280;
  var barWidth = 20;

  d3.select('.chart')
    .style('background','#ccc')
      .append('svg')
      .attr('width',width)
      .attr('height',height)
      .style('background','#ddd')
        .append('rect')
        .attr('x',function(){
          return 1;
        })
        .attr('y',function(){

          return height-50;

        })
        .attr('fill','red')
        .attr('stroke','black')
        .style('width',barWidth)
        .style('height',50);

    // Circle

    d3.select('svg')
      .append('circle')
      .attr('cx',20)
      .attr('cy',30)
      .attr('r',10)
      .style('fill','red')
      


});
