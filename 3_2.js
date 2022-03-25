// ボタンタグを取得
let btn = document.querySelector("button");
let pr = document.getElementById("pp");
let input = document.getElementById("input");

// TODO クリックListenerを追加
btn.addEventListener("click" ,myfunction);

function myfunction(){
    let Ninput = document.createElement("input");
    Ninput.setAttribute("type", "text");
    Ninput.setAttribute("disabled","disabled");
    pr.appendChild(Ninput);
    

    pr.innerHTML += (value = "+1ボタンを押すと、入力欄+1.");
}