
var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}



d3.xml("6_NOU.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate
  d3.select('.title').text(iJS._("Las tres crisis del ébola"));

  d3.select('.title1').text(iJS._("Víctimas directas"));
  d3.select('text.cases').text(iJS._("28.000 casos"));
  d3.select('text.deaths').text(iJS._("11.300 muertes"));

  d3.select('.title2').text(iJS._("Consecuencias en salud"));
  d3.select('tspan.s1').text(iJS._("más de 4.000 muertes"));
  d3.select('tspan.s1_t').text(iJS._("maternas adicionales en 2014"));

  d3.select('tspan.s2').text(iJS._("más de 11.000 muertes"));
  d3.select('tspan.s2_t').text(iJS._("adicionales por malaria,"));
  d3.select('tspan.s2_t2').text(iJS._("tuberculosis y VIH"));

  d3.select('tspan.s3').text(iJS._("más de 500"));
  d3.select('tspan.s3_t').text(iJS._("sanitarios muertos"));

  d3.select('tspan.s4').text(iJS._("17.000 supervivientes "));
  d3.select('tspan.s4_t').text(iJS._("con secuelas potenciales"));

  d3.select('.title3').text(iJS._("Consecuencias sociales y económicas"));
  d3.select('tspan.s5_t').text(iJS._("más de"));
  d3.select('tspan.s5_t1').text(iJS._("16.000 huérfanos"));

  d3.select('tspan.s6_t').text(iJS._("3,6 millones de personas"));
  d3.select('tspan.s6_t1').text(iJS._("en situación alimentaria precaria"));

  d3.select('tspan.s7_t').text(iJS._("3.600 millones USD"));
  d3.select('tspan.s7_t1').text(iJS._("de pérdida en PIB para la región"));

  d3.select('.fuente').text(iJS._('Fuente: OMS, PNUD, '));
  // d3.select('text.deaths').text(iJS._("11.300 muertes"));
  // d3.select('.info').text(iJS._("*Guinea aún no ha erradicado ésta epidemia de ébola"));


  d3.selectAll('.cases,.deaths,.s1,.s2,.s3,.s4,.s5,.s6,.s7').on('mouseover',function(){
    var c = d3.select(this).attr("class");
    d3.selectAll('.'+c).classed('active',true);
  })
  d3.selectAll('.cases,.deaths,.s1,.s2,.s3,.s4,.s5,.s6,.s7').on('mouseout',function(){
    // console.log('out')
    // var c = d3.select(this).attr("class");
    d3.selectAll('.active').classed('active',false);
  })

  // d3.select('.legend.ebola').text(iJS._("Ébola"));
  // d3.select('.country.guinea').text(iJS._("Guinea"));
  // d3.select('.country.sierra_leona').text(iJS._("Sierra Leona"));
  // d3.select('.country.liberia').text(iJS._("Liberia"));

});
