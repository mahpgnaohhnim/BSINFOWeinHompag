function configHeaderButtons(){
    var buttons = document.getElementsByClassName('nav-button');
    var logo = document.getElementsByClassName('header-logo')[0].addEventListener('click', onLogoClicked);
    for(var button of buttons){
      button.addEventListener('click', onBtnClicked);
    }

    function onBtnClicked(e){
      var pub = e.currentTarget;
      var text = pub.innerText;
      content.onContentChange(text);
    }

    function onLogoClicked(){
        content.onContentChange('Home');
    }
}
