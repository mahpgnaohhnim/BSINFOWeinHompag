class Content{
  constructor(){
    this.pub = document.getElementById('content');
  }

  onContentChange(pageName){
    this.pub.innerHTML = this.getXmlContentByName(pageName);
  }

  getXmlContentByName(name){
    var request = new XMLHttpRequest();
    request.open("GET", "xml/"+name+".xml", false);
    request.send(null);

    var xmlDoc = request.responseXML;
    var textContent = xmlDoc.getElementsByTagName('content')[0].textContent;
    var title = xmlDoc.getElementsByTagName('title')[0].textContent
    var htmlDomObj = "<h1>"+title+"</h1>";
    htmlDomObj += "<p>"+ textContent +"</p>"
    return htmlDomObj;
  }
}
