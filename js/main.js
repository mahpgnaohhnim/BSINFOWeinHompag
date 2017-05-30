document.addEventListener("DOMContentLoaded", function(){
  loadConf();
  init();
});

function loadJS(filename){
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.src = "js/"+filename+".js";
  head.appendChild(script);
}

function loadConf(){
  loadJS('header');
}

function init(){
  var header = new Header();
}
