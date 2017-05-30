function configButtons(){
    var buttons = document.getElementsByTagName('button');
    for(var button of buttons){
      button.addEventListener('click', onClicked);
    }

    function onClicked(e){
      var pub = e.currentTarget;
      var text = pub.innerText;
      content.onContentChange(text);
    }
}
