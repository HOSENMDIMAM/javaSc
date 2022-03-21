// 画像index
let slideIndex = 0;
showSlides();

function showSlides() {
    // 画像クリア"none"
    let slides = document.getElementsByClassName("mySlides");
    let dott = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // TODO 丸点クリア(active削除)
    for(let i = 0;i < dott.length;i++){
        dott[i].className=dott[i].className.replace(" active","");
    }



    // 次の画像へ
    // slideIndex++;

    // TODO 画像indexは最後画像の場合、最初に戻る
    if (slideIndex >= slides.length){
        // slideIndex= 1;
        slideIndex = 0;
    }
    slideIndex++;


    // TODO 画像表示"block"
    slides[slideIndex-1].style.display="block";


    // TODO 丸点表示(active追加)
    dott[slideIndex-1].className +=" active";

    // 切替時間3秒で再実行
    setTimeout(showSlides, 3000); 
}