// ボタンタグを取得
let btn = document.getElementsByTagName("button")[0];

// TODO クリックListenerを追加

let Nt = document.getElementById("input");
let i = 1;
btn.addEventListener("click", function(){
    let New_value = number(Nt.getAttribute("value"));
    New_value++
     
    // Nt.setAttribute
    // New_value.innerHTML;

    console.log(New_value);

});
