
var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}


var data = {
  "sierra_leona": {
    "país":iJS._("Sierra Leona"),
    "malaria":iJS._("6.500"),
    "tuberculosis":iJS._("2.643"),
    "ebola":iJS._("1.660")
  },
  "guinea": {
    "país":iJS._("Guinea"),
    "malaria":iJS._("12.000"),
    "tuberculosis":iJS._("3.227"),
    "ebola":iJS._("1.366")
  },
  "liberia": {
    "país":iJS._("Liberia"),
    "malaria":iJS._("2.900"),
    "tuberculosis":iJS._("2.149"),
    "ebola":iJS._("3.161")
  }
}

d3.xml("4_NOU.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate
  d3.select('.title').text(iJS._("El ébola frente a otras enfermedades en África"));
  d3.select('.legend.malaria').text(iJS._("Malaria"));
  d3.select('.legend.tuberculosis').text(iJS._("Tuberculosis"));
  d3.select('.legend.ebola').text(iJS._("Ébola"));
  d3.select('.country.guinea').text(iJS._("Guinea"));
  d3.select('.country.sierra_leona').text(iJS._("Sierra Leona"));
  d3.select('.country.liberia').text(iJS._("Liberia"));

  d3.select('.value.malaria.sierra_leona').text(iJS._("6.500"));
  d3.select('.value.tuberculosis.sierra_leona').text(iJS._("2.643"));
  d3.select('.value.ebola.sierra_leona').text(iJS._("1.660"));

  d3.select('.value.malaria.guinea').text(iJS._("12.000"));
  d3.select('.value.tuberculosis.guinea').text(iJS._("3.227"));
  d3.select('.value.ebola.guinea').text(iJS._("1.366"));

  d3.select('.value.malaria.liberia').text(iJS._("2.900"));
  d3.select('.value.tuberculosis.liberia').text(iJS._("2.149"));
  d3.select('.value.ebola.liberia').text(iJS._("3.161"));

  // d3.select('.Lcountry').text(iJS._("País:"));
  // d3.select('.Lcases').text(iJS._("Casos:"));
  // d3.select('.Ldeaths').text(iJS._("Muertes:"));
  // d3.select('.Lspecies').text(iJS._("Especies:"));
  // d3.select('.Lfatality_rate').text(iJS._("Mortalidad:"));
  // //END translate
  //
  d3.selectAll(".bar, .legend").on("mouseover",function(){
    if(d3.select(this).classed("malaria")){
      d3.selectAll(".value.malaria").style("display","block")
      d3.select(".arrow.malaria").style("display","block")
    }
    if(d3.select(this).classed("tuberculosis")){
      d3.selectAll(".value.tuberculosis").style("display","block")
      d3.select(".arrow.tuberculosis").style("display","block")
    }
    if(d3.select(this).classed("ebola")){
      d3.selectAll(".value.ebola").style("display","block")
      d3.select(".arrow.ebola").style("display","block")
    }
  })

  d3.selectAll(".bar, .legend").on("mouseout",function(){
    if(d3.select(this).classed("malaria")){
      d3.selectAll(".value.malaria").style("display","none")
      d3.select(".arrow.malaria").style("display","none")
    }
    if(d3.select(this).classed("tuberculosis")){
      d3.selectAll(".value.tuberculosis").style("display","none")
      d3.select(".arrow.tuberculosis").style("display","none")
    }
    if(d3.select(this).classed("ebola")){
      d3.selectAll(".value.ebola").style("display","none")
      d3.select(".arrow.ebola").style("display","none")
    }
  })


  d3.selectAll(".map, .country").on("mouseover",function(){
    if(d3.select(this).classed("guinea")){
      d3.selectAll(".value.guinea").style("display","block")
      d3.selectAll(".map.guinea").classed("active", true)
    }
    if(d3.select(this).classed("liberia")){
      d3.selectAll(".value.liberia").style("display","block")
      d3.selectAll(".map.liberia").classed("active", true)
    }
    if(d3.select(this).classed("sierra_leona")){
      d3.selectAll(".value.sierra_leona").style("display","block")
      d3.selectAll(".map.sierra_leona").classed("active", true)
    }
  })
  d3.selectAll(".map, .country").on("mouseout",function(){
    if(d3.select(this).classed("guinea")){
      d3.selectAll(".value.guinea").style("display","none")
      d3.selectAll(".map.guinea").classed("active", false)
    }
    if(d3.select(this).classed("liberia")){
      d3.selectAll(".value.liberia").style("display","none")
      d3.selectAll(".map.liberia").classed("active", false)
    }
    if(d3.select(this).classed("sierra_leona")){
      d3.selectAll(".value.sierra_leona").style("display","none")
      d3.selectAll(".map.sierra_leona").classed("active", false)
    }
  })



});
