
var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}

var data ={
  "2014-2015": {
    "year":"2014-2015",
    "country":iJS._("Sierra Leona,"),
    "country2":iJS._("Liberia y Guinea"),
    "species":"Zaire",
    "cases":iJS._("28.602"),
    "deaths":iJS._("11.301"),
    "fatality_rate":iJS._("50%")
  },
  "2014": {
    "year":"2014",
    "country":"RD Congo",
    "species":"Zaire",
    "cases":66,
    "deaths":49,
    "fatality_rate":"74%"
  },
  "2012_congo": {
    "year":"2012",
    "country":"RD Congo",
    "species":"Bundibugyo",
    "cases":36,
    "deaths":13,
    "fatality_rate":"36%"
  },
  "2012_uganda": {
    "year":"2012",
    "country":"Uganda",
    "species":iJS._("Sudán"),
    "cases":24,
    "deaths":17,
    "fatality_rate":"71%"
  },
  "2008": {
    "year":"2008",
    "country":"RD Congo",
    "species":"Zaire",
    "cases":32,
    "deaths":14,
    "fatality_rate":"44%"
  },
  "2007_uganda": {
    "year":"2007",
    "country":"Uganda",
    "species":"Bundibugyo",
    "cases":149,
    "deaths":37,
    "fatality_rate":"25%"
  },
  "2007_congo": {
    "year":"2007",
    "country":"RD Congo",
    "species":"Zaire",
    "cases":264,
    "deaths":187,
    "fatality_rate":"71%"
  },
  "2004": {
    "year":"2004",
    "country":iJS._("Sudán"),
    "species":iJS._("Sudán"),
    "cases":17,
    "deaths":7,
    "fatality_rate":"41%"
  },
  "2003": {
    "year":"2003",
    "country":"Congo",
    "species":"Zaire",
    "cases":35,
    "deaths":29,
    "fatality_rate":"83%"
  },
  "2002": {
    "year":"2002",
    "country":"Congo",
    "species":"Zaire",
    "cases":143,
    "deaths":128,
    "fatality_rate":"89%"
  },
  "2001": {
    "year":"2001",
    "country":iJS._("Gabón"),
    "species":"Zaire",
    "cases":65,
    "deaths":53,
    "fatality_rate":"82%"
  },
  "2000": {
    "year":"2000",
    "country":"Uganda",
    "species":iJS._("Sudán"),
    "cases":425,
    "deaths":224,
    "fatality_rate":"53%"
  },
  "1996": {
    "year":"1996",
    "country":iJS._("Gabón"),
    "species":"Zaire",
    "cases":97,
    "deaths":66,
    "fatality_rate":"84%"
  },
  "1995": {
    "year":"1995",
    "country":"RD Congo",
    "species":"Zaire",
    "cases":315,
    "deaths":254,
    "fatality_rate":"81%"
  },
  "1994": {
    "year":"1994",
    "country":iJS._("Gabón"),
    "species":"Zaire",
    "cases":52,
    "deaths":31,
    "fatality_rate":"60%"
  },
  "1979": {
    "year":"1979",
    "country":iJS._("Sudán"),
    "species":iJS._("Sudán"),
    "cases":34,
    "deaths":22,
    "fatality_rate":"65%"
  },
  "1976_sudan": {
    "year":"1976",
    "country":iJS._("Sudán"),
    "species":iJS._("Sudán"),
    "cases":284,
    "deaths":151,
    "fatality_rate":"53%"
  },
  "1976_congo": {
    "year":"1976",
    "country":"RD Congo",
    "species":"Zaire",
    "cases":318,
    "deaths":280,
    "fatality_rate":"88%"
  }
};

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

d3.xml("3_NOU.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate
  d3.select('.title').text(iJS._("Evolución histórica de los brotes de ébola"));
  d3.select('.Lyear').text(iJS._("Año:"));
  d3.select('.Lcountry').text(iJS._("País:"));
  d3.select('.Lcases').text(iJS._("Casos:"));
  d3.select('.Ldeaths').text(iJS._("Muertes:"));
  d3.select('.Lspecies').text(iJS._("Especies:"));
  d3.select('.Lfatality_rate').text(iJS._("Mortalidad:"));
  d3.select('.source').text(iJS._("Fuente: OMS, CDC"))
  //END translate



  d3.selectAll("._1976_sudan, ._1976_congo, ._1979, ._1994, ._1995, ._1996, ._2000, ._2001, ._2002, ._2003, ._2004, ._2007_uganda, ._2007_congo, ._2008, ._2012_congo, ._2012_uganda, ._2014, ._2014-2015")
    .on("mouseover", function() {
      // console.log(d3.select(this).attr('class'));
      var t = d3.select(this).attr('class').replace("_","");
      // console.log(t, data[t]);
      d3.select('.year').text(data[t].year)
      d3.select('.country').text(data[t].country)
      d3.select('.cases').text(data[t].cases)
      d3.select('.deaths').text(data[t].deaths)
      d3.select('.species').text(data[t].species)
      d3.select('.fatality_rate').text(data[t].fatality_rate)
      if (typeof data[t].country2 != 'undefined') {
        d3.select('.country2').text(data[t].country2)
      }else{
        d3.select('.country2').text('')
      }
      if (typeof data[t].country2 != 'undefined') {
        d3.select('.fatality_rate2').text(data[t].fatality_rate2)
      }else{
        d3.select('.fatality_rate2').text('')
      }
      // console.log('g._'+t)
      d3.selectAll('rect.selected').classed('selected',false)
      d3.select('g._'+t).selectAll('rect').filter(function(d){
        return d3.select(this).style('fill') == 'rgb(253, 210, 146)'
      })
      .classed('selected',true)
    })

  d3.select('.arrow_left').on('click',function(){
    var s = d3.select('.selected').node().parentNode
    var selected = d3.select(s).attr('class').replace("_","")

    var current = dataOrder.indexOf(selected);
    var next = (current+1 <= (dataOrder.length-1))? current+1 : 0;

    var t = dataOrder[next] ;
    d3.select('.year').text(data[t].year)
    d3.select('.country').text(data[t].country)
    d3.select('.cases').text(data[t].cases)
    d3.select('.deaths').text(data[t].deaths)
    d3.select('.species').text(data[t].species)
    d3.select('.fatality_rate').text(data[t].fatality_rate)
    if (typeof data[t].country2 != 'undefined') {
      d3.select('.country2').text(data[t].country2)
    }else{
      d3.select('.country2').text('')
    }
    if (typeof data[t].country2 != 'undefined') {
      d3.select('.fatality_rate2').text(data[t].fatality_rate2)
    }else{
      d3.select('.fatality_rate2').text('')
    }
    // console.log('g._'+t)
    d3.selectAll('rect.selected').classed('selected',false)
    d3.select('g._'+t).selectAll('rect').filter(function(d){
      return d3.select(this).style('fill') == 'rgb(253, 210, 146)'
    })
    .classed('selected',true)
  })

  d3.select('.arrow_right').on('click',function(){
    var s = d3.select('.selected').node().parentNode
    var selected = d3.select(s).attr('class').replace("_","")

    var current = dataOrder.indexOf(selected);
    var next = (current-1 >= 0)? current-1 : dataOrder.length-1;

    var t = dataOrder[next] ;
    d3.select('.year').text(data[t].year)
    d3.select('.country').text(data[t].country)
    d3.select('.cases').text(data[t].cases)
    d3.select('.deaths').text(data[t].deaths)
    d3.select('.species').text(data[t].species)
    d3.select('.fatality_rate').text(data[t].fatality_rate)
    if (typeof data[t].country2 != 'undefined') {
      d3.select('.country2').text(data[t].country2)
    }else{
      d3.select('.country2').text('')
    }
    if (typeof data[t].country2 != 'undefined') {
      d3.select('.fatality_rate2').text(data[t].fatality_rate2)
    }else{
      d3.select('.fatality_rate2').text('')
    }
    // console.log('g._'+t)
    d3.selectAll('rect.selected').classed('selected',false)
    d3.select('g._'+t).selectAll('rect').filter(function(d){
      return d3.select(this).style('fill') == 'rgb(253, 210, 146)'
    })
    .classed('selected',true)
  })


});
