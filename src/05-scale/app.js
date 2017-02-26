document.addEventListener('DOMContentLoaded',function(){

  var data = [20,100,50,280]

  var width = 280;
  var height = 280;
  var barWidth = 20;
  var barOffset = 5;

  /*Scales */
  /*var x = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, 420]);*/

      var xScale = d3.scaleBand()
        .rangeRound([0, width])
        .paddingInner(0.05)
        .align(0.1);

      var yScale = d3.scaleLinear()
        .rangeRound([0, height]);



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
                  console.log('yScale(d) : ',yScale(d))
                  return yScale(d);
                })
                .attr('x',function(d,i){

                  return i* (barWidth+barOffset);

                })
                .attr('y',function(d){
                  return height - d;
                })
                .attr('title',function(d){
                  return d;
                })



});
