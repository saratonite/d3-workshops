document.addEventListener('DOMContentLoaded',function(){

  //simpleDataBinding();

  DataBinding();



});

var data = ["Hello","World","Hello","Universe","Foo","Bar"]

function simpleDataBinding(){

  d3.select('li')
    .data(data)
    .text(function(d){
      return d;
    })
    .style('color','red');


}

function DataBinding(){
  var li = d3.select('ul')
            .selectAll('li')
            .data(data)
            .text(function(d){

              return d;

            })

      li.enter()
        .append('li')
        .text(function(d){ return d});
      li.exit().remove();
}
