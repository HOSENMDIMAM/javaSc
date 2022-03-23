// ポップアップ画面
let modal = document.getElementById('myModal');

/* 
画像のクリックListenerを追加
    1.ポップアップ画面を表示"block"
    2.親画面の画像をポップアップ内容に指定
    3.親画面の画像のAlt説明をポップアップのテキスト説明に指定
*/
let img = document.getElementById('myImg');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
// 画像のクリックListenerを追加
img.addEventListener("click", function () {
    // 1.ポップアップ画面を表示"block"
    modal.style.display = "block";
    // 2.親画面の画像をポップアップ内容に指定
    modalImg.src = this.src;
    // 3.親画面の画像のAlt説明をポップアップのテキスト説明に指定
    captionText.innerHTML = this.alt;
});

// クラスが「close」のタグを取得
let closeSpan = document.getElementsByClassName("close")[0];

// クローズボタンのクリックListenerを追加
closeSpan.addEventListener("click", function () {
    modal.style.display = "none";
});