var width=893;
var height=380;
var viewBox="0 0 893 380"

d3.select('body').append('svg')
	.attr('width', width+"px")
	.attr('height', height+"px")
	.attr('viewBox', viewBox)

var color = d3.scale.category20c();

var treemap = d3.layout.treemap()
    .size([width, height])
    .sticky(true)
    .value(function(d) {
    	return parseInt(d.size);
    });

var div = d3.select("svg")

d3.csv("data.csv", function(error, data) {
  if (error) throw error;
  console.log(data);
  var new_data = {'name': "founds", 'children': []};
  var groups = {}
  data.forEach(function(c){
  	if (!(c.Group in groups)){
  		groups[c.Group] = [];
  	}
  	groups[c.Group].push(c);
  })
  for (var key in groups){
  	var groupChild = {'name':key, 'children':[]};
  	groups[key].forEach(function(c){
  		var new_c = {}
  		new_c.name = c.Donor
  		new_c.size = parseInt(c['FundingUSD']);
  		groupChild.children.push(new_c)
  	});
  	new_data.children.push(groupChild);
  }

	console.log(new_data);
  var node = div.datum(new_data).selectAll(".node")
      .data(treemap.nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
      	return "translate(" + d.x + "," + d.y + ")";
      })
      // .text(function(d) { return d.children ? null : d.name; });

  node.append('rect')
  	.attr("width", function(d) { return d.dx; })
    .attr("height", function(d) { return d.dy; })
    .attr('stroke', 'white')
    .style("fill", function(d) {
    	return d.children ? null : '#0079b9' })
   	.style("fill-opacity", function(d) {
    	return d.children ? 0:1; })
    .attr('data-name', function(d){return d.name})

	node.append('text')
	.attr("x", function(d) { return d.dx / 2; })
	.attr("y", function(d) { return d.dy / 2; })
	.attr("dy", ".35em")
	.attr("text-anchor", "middle")
  .text(function(d){console.log('d',d);return d.name})

	node.append('text')
	.attr("x", function(d) { return d.dx / 2; })
	.attr("y", function(d) { return 10 +(d.dy / 2); })
	.attr("dy", ".35em")
	.attr("text-anchor", "middle")
  .text(function(d){return d.size})

  d3.selectAll("input").on("change", function change() {
    var value = this.value === "count"
        ? function() { return 1; }
        : function(d) { return d.size; };

    node
        .data(treemap.value(value).nodes)
      .transition()
        .duration(1500)
        .call(position);
  });
});

function position() {
  this.attr('transform', function(d){
  	return 'translate('+d.x+''+d.y+')'
  })
  this.style()
  //this.style("left", function(d) { return d.x + "px"; })
  //    .style("top", function(d) { return d.y + "px"; })
  this.attr("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
      .attr("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
}
