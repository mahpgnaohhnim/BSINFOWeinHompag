document.addEventListener("DOMContentLoaded", function(){
  loadConf();
});

function loadJS(filename){
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.src = "js/"+filename+".js";
  head.appendChild(script);
}

function loadConf(){
  loadJS('Content');
  //loadJS('header');
  //loadJS('footer');
  loadJS('button');
  loadJS('init');
}
