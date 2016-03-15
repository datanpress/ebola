
var lang = getParameterByName('lang');
if(lang!='en'){
  var pathSvg= "10_NOU.svg";
}else{
  var pathSvg= "10_NOU_en.svg";
}



d3.xml(pathSvg, "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate
  // d3.select('.title').text(iJS._("El ébola frente a otras enfermedades en África"));
  // d3.select('.legend.malaria').text(iJS._("Malaria"));
  // d3.select('.legend.tuberculosis').text(iJS._("Tuberculosis"));
  // d3.select('.legend.ebola').text(iJS._("Ébola"));
  // d3.select('.country.guinea').text(iJS._("Guinea"));
  // d3.select('.country.sierra_leona').text(iJS._("Sierra Leona"));
  // d3.select('.country.liberia').text(iJS._("Liberia"));

});
