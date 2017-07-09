class Gallery{

    constructor(){
        var pub = this;
        this.imgArr;
        this.nextBtn;
        this.prevBtn;
        this.currentImg;
        this.count = 0;
    }

    init(xmlDoc){
        this.imgArr = xmlDoc.getElementsByTagName("sources");
        this.currentImg = document.getElementById("gallery-img");
        this.nextBtn = document.getElementById("gallery-nxt").addEventListener("click", this.onNextBtn.bind(this));
        this.prevBtn = document.getElementById("gallery-prv").addEventListener("click", this.onPrevBtn.bind(this));

        this.setImg(this.count);
    }

    onPrevBtn(){
        if(this.count == 0){
            this.count = this.imgArr.length-1;
        }else{
            this.count = this.count - 1;
        }
        this.setImg(this.count);
    }

    onNextBtn(){
        if(this.count == this.imgArr.length-1){
            this.count = 0;
        }else{
            this.count = this.count + 1;
        }
        this.setImg(this.count);
    }

    setImg(count){
        this.currentImg.src = "img/"+this.imgArr[count].textContent;
    }

}
