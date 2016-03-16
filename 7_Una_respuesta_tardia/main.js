
var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}


var dataOrder = ["1976_sudan","1976_congo","1979","1994","1995","1996","2000","2001","2002","2003","2004","2007_uganda","2007_congo","2008","2012_congo","2012_uganda","2014","2014-2015"];
// console.log(data)
// // data = Object.keys(o).map(function(k) { return o[k] });
// data = Object.keys(data).map(function(k) { console.log(k); return this[k] = data[k] });
// console.log(data)
// data.sort(function(x,y){
//   return d3.ascending(x.year,y.year)
// })
// dataOrder.each(function(d,i){
//   console.log(d,i)
// })

var selected = ["Guinea","Liberia","Sierra_Leone"]

d3.xml("7_NOU.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);

  //translate
  d3.select('.title').text(iJS._("A Late Response"))
  d3.select('.legend1').text(iJS._("Confirmed new infections"))
  d3.select('.legend2').text(iJS._("Beds"))
  d3.select('.xaxis_legend1').text(iJS._("New infections per week"))
  d3.select('.xaxis_legend2').text(iJS._("Total number of beds"))
  d3.select('.source').text(iJS._("Source: ODI"))

  d3.select('.mar_14').text(iJS._("Mar 14"))
  d3.select('.abr_14').text(iJS._("Abr 14"))
  d3.select('.may_14').text(iJS._("May 14"))
  d3.select('.june_14').text(iJS._("June 14"))
  d3.select('.july_14').text(iJS._("July 14"))
  d3.select('.aug_14').text(iJS._("Aug 14"))
  d3.select('.sept_14').text(iJS._("Sept 14"))
  d3.select('.oct_14').text(iJS._("Oct 14"))
  d3.select('.nov_14').text(iJS._("Nov 14"))
  d3.select('.dec_14').text(iJS._("Dec 14"))
  d3.select('.jan_15').text(iJS._("Jan 15"))
  d3.select('.feb_15').text(iJS._("Feb 15"))
  d3.select('.mar_15').text(iJS._("Mar 15"))
  d3.select('.abr_15').text(iJS._("Abr 15"))

  d3.selectAll("#Liberia-Sierra_Leone,#Sierra_Leone,#Liberia,#Guinea,#Guinea-Liberia,#Guinea-Sierra_Leone").classed('hide',true)


  d3.selectAll(".Guinea,.Liberia,.Sierra_Leone").on('click',function(){
    var c = d3.select(this).attr('class');
    var esinVisible= d3.select("g."+c).select(".checked").classed('hide')

    if (esinVisible){
      selected.push(c)
    }else{
      if(selected.length==1) return;
      selected.splice(selected.indexOf(c),1)
    }
    d3.select("g."+c).select(".checked").classed('hide', !esinVisible)
    selected.sort();
    console.log('#'+selected.join('-'))
    d3.selectAll("#Guinea-Liberia-Sierra_Leone,#Liberia-Sierra_Leone,#Sierra_Leone,#Liberia,#Guinea,#Guinea-Liberia,#Guinea-Sierra_Leone").classed('hide',true)
    d3.select('#'+selected.join('-')).classed('hide',false)
  })

  function redraw(){
    d3.selectAll("#TGuinea-Liberia-Sierra_Leone,#Liberia-Sierra_Leone,#Sierra_Leone,#Liberia,#Guinea,#Guinea-Liberia,#Guinea-Sierra_Leone").classed('hide',true)

    var t = d3.selectAll(".checked").filter(function(d){
        return !d3.select(this).classed('hide');
      // if(!d3.select(this).classed('hide')){
      //   return this
      // }
    })
        console.log('t',t);
    t = t[0].map(function(d){
      console.log('d',d)
      return d
    })
    // console.log('t',t);
    var selected = [];
    for(var el in t[0]) {
      console.log(el)
      var parent = d3.select(t[0][el]).node().parentNode;
      // console.log('l',d3.select(t[0][el])[0])
      parent = d3.select(parent).attr('class')
      selected.push(parent);
      // console.log(t[0][el]);
      // console.log(d3.select(t[0][el]).node().parentNode.attr("class"));
      // console.log(parent)
    }
    console.log('selected',selected)
  }
  //translate
  // d3.select('.title').text(iJS._("Evolución histórica de los brotes de ébola"));
  // d3.select('.Lyear').text(iJS._("Año:"));
  // d3.select('.Lcountry').text(iJS._("País:"));
  // d3.select('.Lcases').text(iJS._("Casos:"));
  // d3.select('.Ldeaths').text(iJS._("Muertes:"));
  // d3.select('.Lspecies').text(iJS._("Especies:"));
  // d3.select('.Lfatality_rate').text(iJS._("Mortalidad:"));
  // //END translate
  //
  //
  //
  // d3.selectAll("._1976_sudan, ._1976_congo, ._1979, ._1994, ._1995, ._1996, ._2000, ._2001, ._2002, ._2003, ._2004, ._2007_uganda, ._2007_congo, ._2008, ._2012_congo, ._2012_uganda, ._2014, ._2014-2015")
  //   .on("mouseover", function() {
  //     // console.log(d3.select(this).attr('class'));
  //     var t = d3.select(this).attr('class').replace("_","");
  //     // console.log(t, data[t]);
  //     d3.select('.year').text(data[t].year)
  //     d3.select('.country').text(data[t].country)
  //     d3.select('.cases').text(data[t].cases)
  //     d3.select('.deaths').text(data[t].deaths)
  //     d3.select('.species').text(data[t].species)
  //     d3.select('.fatality_rate').text(data[t].fatality_rate)
  //     // console.log('g._'+t)
  //     d3.selectAll('rect.selected').classed('selected',false)
  //     d3.select('g._'+t).selectAll('rect').filter(function(d){
  //       return d3.select(this).style('fill') == 'rgb(253, 210, 146)'
  //     })
  //     .classed('selected',true)
  //   })
  //
  // d3.select('.arrow_left').on('click',function(){
  //   var s = d3.select('.selected').node().parentNode
  //   var selected = d3.select(s).attr('class').replace("_","")
  //
  //   var current = dataOrder.indexOf(selected);
  //   var next = (current+1 <= (dataOrder.length-1))? current+1 : 0;
  //
  //   var t = dataOrder[next] ;
  //   d3.select('.year').text(data[t].year)
  //   d3.select('.country').text(data[t].country)
  //   d3.select('.cases').text(data[t].cases)
  //   d3.select('.deaths').text(data[t].deaths)
  //   d3.select('.species').text(data[t].species)
  //   d3.select('.fatality_rate').text(data[t].fatality_rate)
  //   // console.log('g._'+t)
  //   d3.selectAll('rect.selected').classed('selected',false)
  //   d3.select('g._'+t).selectAll('rect').filter(function(d){
  //     return d3.select(this).style('fill') == 'rgb(253, 210, 146)'
  //   })
  //   .classed('selected',true)
  // })
  //
  // d3.select('.arrow_right').on('click',function(){
  //   var s = d3.select('.selected').node().parentNode
  //   var selected = d3.select(s).attr('class').replace("_","")
  //
  //   var current = dataOrder.indexOf(selected);
  //   var next = (current-1 >= 0)? current-1 : dataOrder.length-1;
  //
  //   var t = dataOrder[next] ;
  //   d3.select('.year').text(data[t].year)
  //   d3.select('.country').text(data[t].country)
  //   d3.select('.cases').text(data[t].cases)
  //   d3.select('.deaths').text(data[t].deaths)
  //   d3.select('.species').text(data[t].species)
  //   d3.select('.fatality_rate').text(data[t].fatality_rate)
  //   // console.log('g._'+t)
  //   d3.selectAll('rect.selected').classed('selected',false)
  //   d3.select('g._'+t).selectAll('rect').filter(function(d){
  //     return d3.select(this).style('fill') == 'rgb(253, 210, 146)'
  //   })
  //   .classed('selected',true)
  // })


});
