function configHeaderButtons(){
    var buttons = document.getElementsByClassName('nav-button');
    var logo = document.getElementsByClassName('header-logo')[0].addEventListener('click', onLogoClicked);
    for(var button of buttons){
      button.addEventListener('click', onBtnClicked);
    }
    var mobNavbtn = document.getElementById("nav-mobile").addEventListener('click', onMobNavClick);

    function onBtnClicked(e){
      var pub = e.currentTarget;
      var text = pub.innerText;
      var mBtns = document.getElementById("m-buttons");
      mBtns.classList.remove("open");
      content.onContentChange(text);
    }

    function onLogoClicked(){
        content.onContentChange('Home');
    }

    function onMobNavClick(){
        var mBtns = document.getElementById("m-buttons");
        var classList = mBtns.classList;

        if(classList[0] == "open"){
            mBtns.classList.remove("open");
        }else{
            mBtns.classList.add("open");
        }

    }
}
