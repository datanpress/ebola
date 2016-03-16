
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

  d3.selectAll(".r_label1, .r_label2, .r_label3, .r_label4, .r_label5, .r_label6, \
  .label1, .label2, .label2_2, .label3, .label3_3, .label4, .label4_2, .label5, .label5_2, .label6, .label6_2").on('mouseover',function(){
    var c =d3.select(this).attr("class").replace("r_","").replace("_2","");
    // console.log(c)
    d3.select("."+c).classed('active',true);
    d3.select("."+c+"_2").classed('active',true);
  })
  d3.selectAll(".r_label1, .r_label2, .r_label3, .r_label4, .r_label5, .r_label6, \
  .label1, .label2, .label2_2, .label3, .label3_3, .label4, .label4_2, .label5, .label5_2, .label6, .label6_2").on('mouseout',function(){
    d3.selectAll(".active").classed('active',false);
  })

  d3.selectAll('.cubiertos, .label_cubiertos, .value_cubiertos, .pendientes, .label_pendientes, .value_pendientes').on('mouseover', function(){
    // d3.select(this).classed('active',true)
      var c =d3.select(this).attr("class").replace("label_","").replace("value_","");
      console.log('c',d3.select(this).attr("class"),c)
      d3.selectAll('.'+c+', .label_'+c+', .value_'+c).classed('highlight',true)
      // console.log('.'+c, ', .label_'+c+', .value_'+c)
  })
  d3.selectAll('.cubiertos, .label_cubiertos, value_cubiertos, .pendientes, .label_pendientes, .value_pendientes').on('mouseout', function(){
    // d3.select(this).classed('active',true)
    d3.selectAll(".highlight").classed('highlight',false);
  })

});
