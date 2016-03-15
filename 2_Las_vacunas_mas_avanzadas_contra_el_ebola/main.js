

var lang = getParameterByName('lang');
if(lang!='en'){
  var pathSvg= "2_NOU.svg";
}else{
  var pathSvg= "2_NOU_en.svg";
}



d3.xml(pathSvg, "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate

  d3.selectAll(".v1,.v2,.v3,.v4,.v5,.v6").on("mouseover",function(){
    var c = d3.select(this).attr('class');
    d3.selectAll("."+c).classed("active",true);
  });

  d3.selectAll(".v1,.v2,.v3,.v4,.v5,.v6").on("mouseout",function(){
    d3.selectAll(".active").classed("active",false);
  });
});
