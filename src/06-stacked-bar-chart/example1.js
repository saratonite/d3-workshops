(function(){

/////////////////


var myData = [
  {"ethnicity":"Actual","Unknown":100,"Not Covered":250,"Non Preferred Restricted":40,"Non Preferred Unestricted":200,"Preferred Restricted":140,"Preferred Unrestricted":140,"total":350},
  {"ethnicity":"Expected Post Review","Unknown":210,"Non Preferred Restricted":102,"Non Preferred Unestricted":200,"Not Covered":200,"Preferred Restricted":50,"Preferred Unrestricted":140,"total":410}
]

var myColumns = ["Unknown","Not Covered","Non Preferred Restricted","Non Preferred Unestricted","Preferred Restricted","Preferred Unrestricted"];


// From CSV
var svg = d3.select("#stacked"),
    margin = {top: 20, right: 180, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // var margin = {top: 20, right: 150, bottom: 50, left: 40},
    //     width = 600 - margin.left - marginStacked.right,
    //     height = 500 - margin.top - marginStacked.bottom;
    //
    //
    // var svg = d3.select("#stacked").append("svg")
    //     .attr("width", widthStacked + marginStacked.left + marginStacked.right)
    //     .attr("height", heightStacked + marginStacked.top + marginStacked.bottom)
    //   .append("g")
    //     .attr("transform", "translate(" + marginStacked.left + "," + marginStacked.top + ")");

var x = d3.scaleBand()
    .rangeRound([0, width])
    .padding(0.3)
    .align(0.3);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

//var z = d3.scaleOrdinal(d3.schemeCategory20);
var z = d3.scaleOrdinal().range(["#f4f4f4", "#ff5463", "orange", "yellow", "lightgreen", "green"]);

var stack = d3.stack();

/*d3.csv("segments_table2.csv", type, function(error, data) {
  if (error) throw error;*/

  //console.log('CSV data',data);

  //data.sort(function(a, b) { return b.total - a.total; });

  //console.log(data.columns.slice(1));

  x.domain(myData.map(function(d) { return d.ethnicity; }));
  y.domain([0, d3.max(myData, function(d) { return d.total; })]).nice();
  z.domain(myColumns);

  //console.info(stack.keys(["Month 1","Month 2"])(data));

  g.selectAll(".serie")
    ////.data(stack.keys(data.columns.slice(1))(data))
    .data(stack.keys(myColumns)(myData  ))
    .enter().append("g")
      .attr("class", "serie")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("x", function(d) {
        console.log(d);
        console.log('First rect x ',x(d.data.ethnicity))
        return x(d.data.ethnicity);

       })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); })
      .attr("width", x.bandwidth());

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // g.append("g")
  //     .attr("class", "axis axis--y")
  //     .call(d3.axisLeft(y).ticks(10, "s"))
  //   .append("text")
  //     .attr("x", 2)
  //     .attr("y", y(y.ticks(10).pop()))
  //     .attr("dy", "0.35em")
  //     .attr("text-anchor", "start")
  //     .attr("fill", "#000")
  //     .text("Population");

      // Legend Code

  var legend = g.selectAll(".legend")
    .data(myColumns.reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; })
      .style("font", "10px sans-serif");

  legend.append("rect")
      .attr("x", width + 18)
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", z);

  legend.append("text")
      .attr("x", width + 44)
      .attr("y", 9)
      .attr("dy", ".35em")
      .attr("text-anchor", "start")
      .text(function(d) { return d; });


function type(d, i, columns) {
  for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
  d.total = t;
  return d;
}



//////////////////

})();
