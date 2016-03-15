
var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}



d3.xml("8_NOU.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate
  d3.select('.title').text(iJS._("Recursos necesarios de acuerdo a la ONU:"));
  d3.select('.title2').text(iJS._("2.270"));
  d3.select('.title3').text(iJS._("millones de dólares"));

  d3.select('.title3').text(iJS._("millones de dólares"));
  d3.select('.title3').text(iJS._("millones de dólares"));

  d3.select('.label_pendientes').text(iJS._("Pendientes:"));
  d3.select('.value_pendientes').text(iJS._("710.000.000"));

  d3.select('.label_cubiertos').text(iJS._("Cubiertos:"));
  d3.select('.value_cubiertos').text(iJS._("1.560.000.000"));

  d3.select('.label1').text(iJS._("Servicios comunes"));
  d3.select('.label2').text(iJS._("Frenar la enfermedad"));
  d3.select('.label2_2').text(iJS._("-Seguimiento enfermos y entierros seguros"));
  d3.select('.label3').text(iJS._("Atender a las víctimas"));
  d3.select('.label3_2').text(iJS._("-Atención a enfermos y profesionales"));
  d3.select('.label4').text(iJS._("Sostener los sistemas de salud"));
  d3.select('.label4_2').text(iJS._("-Seguridad alimentaria, servicios básicos y recuperación económica"));
  d3.select('.label5').text(iJS._("Ofrecer estabilidad a los países afectados"));
  d3.select('.label5_2').text(iJS._("-Materiales de transporte y movilización sociales"));
  d3.select('.label6').text(iJS._("Prevenir nuevos contagios"));
  d3.select('.label6_2').text(iJS._("-Prevención y gestión del riesgo de contagio"));

  d3.select('.source').text(iJS._("Fuente: Financial Tracking Service de OCHA"));
  // d3.select('.legend.malaria').text(iJS._("Malaria"));
  // d3.select('.legend.tuberculosis').text(iJS._("Tuberculosis"));
  // d3.select('.legend.ebola').text(iJS._("Ébola"));
  // d3.select('.country.guinea').text(iJS._("Guinea"));
  // d3.select('.country.sierra_leona').text(iJS._("Sierra Leona"));
  // d3.select('.country.liberia').text(iJS._("Liberia"));

});
