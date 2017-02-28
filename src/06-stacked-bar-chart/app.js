(function(){


// The data
var myData = [
  {"level":"Actual","Unknown":50,"Not Covered":100,"Non Preferred Restricted":40,"Non Preferred Unestricted":60,"Preferred Restricted":100,"Preferred Unrestricted":50,"total":400},
  {"level":"Expected Post Review","Unknown":100,"Not Covered":50,"Non Preferred Restricted":70,"Non Preferred Unestricted":30,"Preferred Restricted":50,"Preferred Unrestricted":20,"total":320}
]

// The Columns
var myColumns = ["Unknown","Not Covered","Non Preferred Restricted","Non Preferred Unestricted","Preferred Restricted","Preferred Unrestricted"];


/**
* #Todo Create total property dynamically

*/

if(myData && myData.length){

  var mapedData = myData.map(function(d){

    return d;
  });

  console.log('Maped data',mapedData);

}

// From CSV
var svg = d3.select("#stacked"),
    margin = {top: 20, right: 180, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    console.log(width);

// X Scale
var x = d3.scaleBand()
    .rangeRound([0, width])
    .padding(0.3)
    .align(0.3);


// Y Scale

var y = d3.scaleLinear()
    .rangeRound([height, 0]);


// Z Scale for color range

var z = d3.scaleOrdinal().range(["#f6f6f6", "#fd85bb", "#ffa559", "#ffeb71", "#d2e95f", "#38a219"]);

// D3 Stack
  var stack = d3.stack();

// Assign Domains for each scales
x.domain(myData.map(function(d) { return d.level; }));
y.domain([0, d3.max(myData, function(d) { return d.total; })]).nice();
z.domain(myColumns);


g.selectAll(".serie")
    .data(stack.keys(myColumns)(myData  ))
    .enter().append("g")
      .attr("class", "serie")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("x", function(d,i) {
        console.log(d);
        console.log('First rect x ',x(d.data.level))
        return x(d.data.level);

       })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); })
      .attr("width", x.bandwidth());

// Axis - botom
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));


  // Adding Legends

  var legend = g.selectAll(".legend")
    .data(myColumns.reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; })
      .style("font", "10px sans-serif")

// Adding Legend Rectangle
  legend.append("rect")
      .attr("x", width + 18)
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", z)
      .attr('stroke','blue')
      .attr('stroke-opacity','0.3')

// Adding Legend Text
  legend.append("text")
      .attr("x", width + 44)
      .attr("y", 9)
      .attr("dy", ".35em")
      .attr("text-anchor", "start")
      .text(function(d) { return d; });






//////////////////

})();
