

document.addEventListener('DOMContentLoaded',function(){
  console.log('App started');

  setColors();
  applySize();
});


function setColors(){

  d3.select('.chart').style('background-color','red');

  d3.selectAll('li').style('color','green');

  d3.selectAll('li:nth-child(even)').style('color','blue');
  d3.select('li:nth-child(3)')
      .style('color','red').html('This is the 3rd list item')
      .classed('big',true)
}

var data = [10,45,6,18]

function applySize(){
  d3.selectAll('li')
      .data(data)
      .style('font-size',function(d){
        return d+'px'
      })
}
