
var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}



d3.xml("5_NOU.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate
  d3.select('.title').text(iJS._("Dónde ha golpeado y a cuántos"));
  d3.select('.label.sierra_leona').text(iJS._("Sierra Leona"));
  d3.select('.label.liberia').text(iJS._("Liberia"));
  d3.select('.label.guinea').text(iJS._("Guinea"));
  d3.select('.label.others').text(iJS._("Otros*"));
  d3.select('.label.others').text(iJS._("Otros*"));
  d3.select('.info').text(iJS._("*Sólo hubo tres infectados fuera de África"));

  d3.select('.sierra_leona.infectados.value').text(iJS._("14.124"));
  d3.select('.sierra_leona.fallecidos.value').text(iJS._("3.956"));

  d3.select('.liberia.infectados.value').text(iJS._("10.675"));
  d3.select('.liberia.fallecidos.value').text(iJS._("4.809"));

  d3.select('.guinea.infectados.value').text(iJS._("3.804"));
  d3.select('.guinea.fallecidos.value').text(iJS._("2.536"));

  d3.selectAll('.fallecidos.label').text(iJS._("Fallecidos:"));
  d3.selectAll('.infectados.label').text(iJS._("Infectados:"));
  d3.select('.source').text(iJS._("Fuente: OMS"))


});
