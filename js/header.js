function initHeader(){
  var pub = document.getElementsByTagName('header')[0];
  var buttons = "";
  var logo = "<div id='logo'>Test</div>"
  var pages = ["Home", "Gallery", "Impressum"];
  for (var k of pages) {
    buttons = buttons + "<button>" + k + "</button>";
  }

  pub.innerHTML = logo + buttons;
}
