// ボタンタグを取得
let btn = document.getElementsByTagName("button")[0];

// TODO クリックListenerを追加
let i = 1;
let Nt = document.getElementById("input");
btn.addEventListener("click", function(){
    // let Nt = document.getElementById("input");
    Nt.value = i++;
    console.log(Nt);

});