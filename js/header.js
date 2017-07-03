function initHeader() {
  var pub = document.getElementsByTagName('header')[0];
  var logo = "<div id='logo'></div>"
  var pages = ["Home", "Gallery", "Impressum"];
  var buttons = getButtons(pages);

  pub.innerHTML = logo + buttons;

  configElements();

  function configElements() {
    var buttons = pub.getElementsByTagName('button');
    for (var button of buttons) {
      button.addEventListener('click', onClicked);
    }

    var logo = document.getElementById('logo');
    logo.addEventListener('click', onClicked);
  }

  function getButtons(pages){
    var htmlString = "<div id='nav'>";
    for (var k of pages) {
      htmlString = htmlString + "<button>" + k + "</button>";
    }
    htmlString +="</div>";

    return htmlString;
  }

  function onClicked(e) {
    var pub = e.currentTarget;
    if(pub.tagName == "BUTTON"){
      var text = pub.innerText;
      content.onContentChange(text);
    } else{
      content.onContentChange('Home');
    }
  }

}
