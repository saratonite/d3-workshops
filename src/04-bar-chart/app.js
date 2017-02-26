document.addEventListener('DOMContentLoaded',function(){

  var data = [20,50,46,15,60,50,9,35]

  var width = 280;
  var height = 280;
  var barWidth = 30;
  var barOffset = 5;

  var chart = d3.select('.chart')
              .append('svg')
              .attr('width',width)
              .attr('height',height)
              .selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('fill','red')
                .attr('width',barWidth)
                .attr('height',function(d){
                  return d;
                })
                .attr('x',function(d,i){

                  return i* (barWidth+barOffset);

                })
                .attr('y',function(d){
                  return height - d;
                })



});
