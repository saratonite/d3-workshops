

document.addEventListener('DOMContentLoaded',function(){

  generateChart();

});

var data = [
  {color:'red',usage:50},
  {color:'orange',usage:80},
  {color:'green',usage:30},
  {color:'blue',usage:20}

]

function generateChart(){

  d3.selectAll('li')
    .data(data)
    .style('background',function(d){ return d.color;})
    .style('width',function(d){ return d.usage+ '%'})

}
