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
    if(name == "Weinliste"){
        htmlDomObj += this.getWineListTable(xmlDoc);
    }
    else {
        htmlDomObj += "<p>"+ textContent +"</p>"
    }
    return htmlDomObj;
  }

  getWineListTable(xmlDoc){
      var DOMObj =""
      var text = xmlDoc.getElementsByTagName('text')[0].textContent;
      DOMObj += text;

      DOMObj += '<table align="center">'+
      '<tr><th>Bezeichnung</th><th>Preis</th></tr>';

      var wineData = xmlDoc.getElementsByTagName('wine');
      for(var i = 0; i<wineData.length; i++){
          DOMObj += '<tr>';
          var name = wineData[i].getElementsByTagName('name')[0].textContent;
          var price = wineData[i].getElementsByTagName('price')[0].textContent;
          DOMObj += '<td>'+name+'</td>';
          DOMObj += '<td>'+price+'</td>';
          DOMObj += '</tr>';
      }

      DOMObj += '</table>';
      return DOMObj;
  }

}
