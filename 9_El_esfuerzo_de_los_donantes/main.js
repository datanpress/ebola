var width=1200;
var height=511;
var viewBox="0 0 1200 511"
var total = 0;

var lang = getParameterByName('lang');
numeral.language('es', {
    delimiters: {
        thousands: '.',
        decimal: ','
    }
});
numeral.language('en', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    }
});
numeral.language('en');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
  numeral.language('es');
}


//
if( lang)
numeral.language('es');

d3.select('h1.title1').text(iJS._("Donor Contribution to the Fight against Ebola: 1,555,121,694 US dollars"));
iJS._("United States");
iJS._("United Kingdom");
iJS._("World Bank");
iJS._("Germany");
iJS._("Private***");
iJS._("Private (individuals & organisations)");
iJS._("Canada");
iJS._("Japan");
iJS._("Sweden");
iJS._("African Development Bank");
iJS._("Netherlands");
iJS._("European Commission");
iJS._("Carry-over*");
iJS._("Carry-over (donors not specified)");
iJS._("Norway");
iJS._("Belgium");
iJS._("Switzerland");
iJS._("CERF**");
iJS._("Central Emergency Response Fund (CERF)");
iJS._("China");
iJS._("Australia");
iJS._("France");
iJS._("Denmark");
iJS._("Finland");
iJS._("India");
iJS._("Spain");
iJS._("Israel");
iJS._("Brazil");
iJS._("Others");


d3.select('body').append('svg')
	// .attr('width', width+"px")
	// .attr('height', height+"px")
	.attr('width', "100%")
	.attr('height', "100%")
	.attr('viewBox', viewBox)


var color = d3.scale.category20c();

var treemap = d3.layout.treemap()
    .size([width, height])
    .sticky(true)
    .value(function(d) {
    	return parseInt(d.size);
    });

var tip = d3.tip()
	.attr('class', 'd3-tip')
	// .offset([-10, 0])
	.offset(function() {
	  return [(this.getBBox().height / 2) - 10, 0]
	})
	.html(function(d) {
		var v = numeral(d.size).format('0,0');

		return "<div class='country'>" +iJS._(d.nameComplete) + "</div>\
		<div><span class='label'>"+iJS._("Funding USD:")+" </span>" + v + "</div> \
		<div><span class='label'>"+iJS._("% of Grand Total:")+" </span>"+ ((d.size/total)*100).toFixed(1)+ "%</div>";
	})

var div = d3.select("svg")
div.call(tip);

d3.csv("data_ok.csv", function(error, data) {
  if (error) throw error;
  console.log(data);
  var new_data = {'name': "founds", 'children': []};
  var groups = {}

  data.forEach(function(c){
		total = total + parseInt(c.FundingUSD);
  	if (!(c.Group in groups)){
  		groups[c.Group] = [];

  	}
  	groups[c.Group].push(c);
  })
	console.log(total)
  for (var key in groups){
  	var groupChild = {'name':key, 'children':[]};
  	groups[key].forEach(function(c){
  		var new_c = {}
  		new_c.name = c.Donor;
  		new_c.size = parseInt(c['FundingUSD']);
			new_c.css_class = c['css_class'];
			new_c.nameComplete = c['DonorComplete'];
			// console.log('c',c['css_class'])
  		groupChild.children.push(new_c)
  	});
  	new_data.children.push(groupChild);
  }

	console.log('new_data',new_data);
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
    // .style("fill", function(d) {
    // 	return d.children ? null : '#0079b9' })
   	.style("fill-opacity", function(d) {
    	return d.children ? 0:1; })
    .attr('data-name', function(d){return d.name})
		.attr("class", function(d) {
    	return d.children ? null:d.css_class; })
			.on('mouseover', tip.show)
      .on('mouseout', tip.hide)

	node.append('text')
	.attr("x", function(d) { return (d.dx / 2) ; })
	.attr("y", function(d) { return (d.dy / 2)- 10; })
	// .attr("y", 10)
	.attr("dy", ".35em")
	.attr("class","country")
	.attr("data-country", function(d){return d.name})
	.attr("text-anchor", "middle")
  .text(function(d){return iJS._(d.name)})
	.on('mouseover', tip.show)
	.on('mouseout', tip.hide)
	.call(wrap, 1);

	node.append('text')
	.attr("x", function(d) { return d.dx / 2; })
	// .attr("y", function(d) { return 10 +(d.dy / 2); }).
	.attr("y", function(d) {
		var nelement = d3.selectAll('text.country[data-country="'+d.name+'"] tspan').size();
		return (nelement*19 +(d.dy / 2))- 10;
	})
	.attr("dy", ".35em")
	.attr("text-anchor", "middle")
	.on('mouseover', tip.show)
	.on('mouseout', tip.hide)
  .text(function(d){console.log(d.name, d.size, total);return ((d.size/total)*100).toFixed(1) + "%"})

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


function wrap(text, width) {

  text.each(function() {
    var text = d3.select(this),
				country = text.attr("data-country"),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
				width = d3.select('rect[data-name="'+country+'"]').attr('width'),
				x = text.attr('x'),
        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

		console.log('country','[data-name='+country+']')
		// console.log(d3.select('[data-name="'+country+'"]').attr('width'))
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}
