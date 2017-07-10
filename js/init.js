setTimeout(initFmw, 500);

function initFmw(){
    content = new Content();
    gallery = new Gallery();
    content.onContentChange('Home');
    configHeaderButtons();
}
