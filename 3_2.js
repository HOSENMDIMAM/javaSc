// ボタンタグを取得
let btn = document.getElementsByTagName("button")[0];

// TODO クリックListenerを追加

let Nt = document.getElementById("input");
btn.addEventListener("click", function(){
    let New_value = Number(Nt.getAttribute("value"));
     New_value++;
    Nt.setAttribute('value', New_value);

    // let New_value = parseInt(Nt.getAttribute('value'));
    // Nt.setAttribute('value', New_value+1);

    // console.log(New_value);
    // console.log(Nt);

});