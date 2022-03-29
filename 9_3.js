// 検索入力
let myInput = document.getElementById("myInput");

// 入力イベント
myInput.addEventListener("keyup", function (evt) {

    // console.log(evt.target.valu);
    let text = evt.target.value;
    console.log(text);
    // リスト
    let li = document.querySelectorAll('li');
    // リスト中で繰り返し探す
    let l = li.forEach(function(item){
        let name = item.firstElementChild.textContent.toLowerCase();
        // console.log(name)

        // 入力項目を含まれない場合は非表示
        if(name.indexOf(text)===-1){
            item.style.display = 'none';
        }

        // 入力項目を含む場合、表示する
        else{
            item.style.display = 'block';
        }
    });
    console.log(l);


});