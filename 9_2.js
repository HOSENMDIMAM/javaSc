// ポップアップ画面
let modal = document.getElementById('myModal');

/* TODO
画像のクリックListenerを追加
    1.ポップアップ画面を表示"block"
    2.親画面の画像をポップアップ内容に指定
    3.親画面の画像のAlt説明をポップアップのテキスト説明に指定
*/
var myImg = document.getElementById("myImg");
var img01 = document.getElementById("img01");
// modal.style.display = "block";
// クリックListenerを追加
myImg.addEventListener("click",myfunction);

// myImg.onclick = myfunction;

function myfunction(){
    
    img01.innerHTML = "<img src='img1.jpg'>";

    console.log(img01.innerHTML = "<img src='img1.jpg'>");
};

// クラスが「close」のタグを取得
let closeSpan = document.getElementById("close");
// ODO クローズボタンのクリックListenerを追加


closeSpan.addEventListener("click", closefun);
// closeSpan.onclick = closefun;

function closefun (){
    img01.remove();
    // img01.removeEventListener("click", myfunction);

}


// TODO クローズボタンのクリックListenerを追加

// document.getElementById("img01").innerHTML