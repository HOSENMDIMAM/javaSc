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
    // 1.ポップアップ画面を表示するため"block"
    modal.style.display = "block";
    // もしimgの以外タグ入力したい場合
    // modalImg.innerHTML = "<img src ='img1.jpg'>";
    
    // this 呼び出し　function , src オブジェクトに
    // 例　function(a){a.src}
    modalImg.src = this.src;

    // console.log(this.src);

    // ここにも　alt オブジェクト　(img alt = "text")
    // console.log(img.alt);
    captionText.innerHTML = this.alt;//textContentもうOK__:
});
// console.log(img.src);

// クラスが「close」のタグを取得
let closeSpan = document.getElementsByClassName("close")[0];

// クローズボタンのクリックListenerを追加
closeSpan.addEventListener("click", function () {
    modal.style.display = "none";　//when click the crose button than than call the function 


});
