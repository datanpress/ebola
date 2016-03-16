
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
  "ebola": {
    "name":iJS._("Ébola"),
    "VIRUS":iJS._("Ebola (especie Zaire)"),
    "Letalidad":"70%",
    "R0":iJS._("1,5-2,5"),
    "Transmisión":iJS._("Contacto con fluidos corporales")
  },
  "hiv": {
    "name":iJS._("VIH"),
    "VIRUS":iJS._("VIH"),
    "Letalidad":iJS._("80-90% (si no tratado)"),
    "R0":"2-5",
    "Transmisión":iJS._("Transmisión sexual, sangre, leche materna")
  },
  "viruela": {
    "name":iJS._("Viruela"),
    "VIRUS":iJS._("Viruela (Formalmente erradicada en 1977)"),
    "Letalidad":"30%",
    "R0":iJS._("3,5-6"),
    "Transmisión":iJS._("Gotas de saliva aire")
  },
  "mers": {
    "name":iJS._("MERS"),
    "VIRUS":iJS._("MERS Coranavirus"),
    "Letalidad":"35%",
    "R0":iJS._("0,6-0,7"),
    "Transmisión":iJS._("Contacto cercano, no se sabe con certeza")
  },
  "sars": {
    "name":iJS._("SARS"),
    "VIRUS":iJS._("SARS"),
    "Letalidad":"11%",
    "R0":"3-4",
    "Transmisión":iJS._("Gotas saliva en aire")
  },
  "influenza": {
    "name":iJS._("Influenza"),
    "VIRUS":iJS._("Influenza (pandemia 1918)"),
    "Letalidad":"2-3%",
    "R0":"2-3",
    "Transmisión":iJS._("Gotas saliva en aire")
  },
  "polio": {
    "name":iJS._("Polio"),
    "VIRUS":iJS._("Polio (brote 1952 USA)"),
    "Letalidad":"5%",
    "R0":"5-7",
    "Transmisión":iJS._("Ruta fecal, oral")
  },
  "influenza_e": {
    "name":iJS._("Influenza estacional"),
    "VIRUS":iJS._("Influenza estacional"),
    "Letalidad":iJS._("<0,5%"),
    "R0":"1-2",
    "Transmisión":iJS._("Gotas saliva en aire")
  },
  "sarampion": {
    "name":iJS._("Sarampión"),
    "VIRUS":iJS._("Sarampión"),
    "Letalidad":iJS._("0,1-0,2%"),
    "R0":"12-18",
    "Transmisión":iJS._("Aire")
  },
  "varicela": {
    "name":iJS._("Varicela"),
    "VIRUS":iJS._("Varicela"),
    "Letalidad":iJS._("<0,001%"),
    "R0":"5-9",
    "Transmisión":iJS._("Aire")
  }
};

d3.xml("1b_copia.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate
  d3.select('.title').text(iJS._("Una enfermedad letal pero poco contagiosa"));
  d3.select('.labelV').text(iJS._("VIRUS:"));
  d3.select('.labelL').text(iJS._("Letalidad:"));
  d3.select('.labelN1').text(iJS._("Número promedio de personas"));
  d3.select('.labelN2').text(iJS._("que un enfermo puede infectar:"));
  d3.select('.labelT').text(iJS._("Transmisión:"));
  d3.select('.source').text(iJS._("Fuente: OMS, CDC"))
  d3.selectAll("text.hiv,text.viruela,text.mers,text.sars,text.influenza,text.polio,text.sarampion,text.varicela,text.ebola")
    .each(function(d,i){
      // console.log(this,d,i)
      // console.log(d3.select(this).selectAll('tspan').text())
      // d3.select(this).text(iJS._(d3.select(this).text()))
      d3.select(this).selectAll('tspan').text( iJS._(d3.select(this).text().trim()) )
    })
  if (lang=="en"){
    d3.select(".influenza_e1").text(iJS._("Estacional"))
    d3.select(".influenza_e2").text(iJS._("Influenza"))
  }else{
    d3.select(".influenza_e1").text(iJS._("Influenza"))
    d3.select(".influenza_e2").text(iJS._("estacional"))
  }
  //END translate

  //select ebola
  d3.select("rect.ebola").attr('stroke-miterlimit',10)
    .attr('stroke-width',2)
    .attr('fill',"#008EAB")
    .attr('stroke',"#F59C00");
  d3.select("text.ebola").attr('fill',"#008EAB");
  d3.select(".valueV").text(data['ebola']["VIRUS"])
  d3.select(".valueL").text(data['ebola']["Letalidad"])
  d3.select(".valueN").text(data['ebola']["R0"])
  d3.select(".valueT").text(data['ebola']["Transmisión"])
  d3.selectAll(".label").style("fill-opacity",1)
  d3.selectAll(".valueV, .valueL, .valueN, .valueT").style("fill-opacity",1)


  d3.selectAll(".hiv,.viruela,.mers,.sars,.influenza,.influenza_e,.polio,.sarampion,.varicela,.ebola").on("mouseover", function() {
    // console.log(d3.select(this).attr('class'));
    var c = d3.select(this).attr('class')
    d3.select("rect."+c).attr('stroke-miterlimit',10)
      .attr('stroke-width',2)
      .attr('fill',"#008EAB")
      .attr('stroke',"#F59C00");
    d3.select("text."+c).attr('fill',"#008EAB");
    // d3.selectAll("g."+c).selectAll('circle').style('fill',"red");
    // d3.selectAll("g."+c).selectAll('path').style('fill',"red");
    // var v= data[c];

    d3.select(".valueV").text(data[c]["VIRUS"])
    d3.select(".valueL").text(data[c]["Letalidad"])
    d3.select(".valueN").text(data[c]["R0"])
    d3.select(".valueT").text(data[c]["Transmisión"])
    d3.selectAll(".label").style("fill-opacity",1)
    d3.selectAll(".valueV, .valueL, .valueN, .valueT").style("fill-opacity",1)
    console.log(data[c])
  });
      // console.log(data);
  d3.selectAll(".hiv,.viruela,.mers,.sars,.influenza,.influenza_e,.polio,.sarampion,.varicela,.ebola").on("mouseout", function() {
    var c = d3.select(this).attr('class')
    d3.select("rect."+c).attr('stroke-miterlimit',null)
      .attr('stroke-width',null)
      .attr('fill','#F59C00')
      .attr('stroke',null);
    d3.select("text."+c).attr('fill',null);
    d3.select(".valueV").text('')
    d3.select(".valueL").text('')
    d3.select(".valueN").text('')
    d3.select(".valueT").text('')
    d3.selectAll(".label").style("fill-opacity",0)
    // d3.selectAll("g."+c).selectAll('circle').style('fill',"#00b0e9");
    // d3.selectAll("g."+c).selectAll('path').style('fill',"#00b0e9");
  })
});
