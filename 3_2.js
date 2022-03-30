// ボタンタグを取得
let btn = document.getElementsByTagName("button")[0];

// TODO クリックListenerを追加
// Newinput.value = i
let i = 1;
btn.addEventListener('click' ,function(){
    let p =document.createElement('p')
    p.textContent = '+1ボタンを押すと、入力欄+1.';

    let Newinput = document.createElement('input');
    Newinput.setAttribute('type', 'text');
    Newinput.setAttribute('value', i++);
    Newinput.setAttribute('disabled', 'disabled');
    
    document.body.appendChild(Newinput);
    let Newbtn = document.createElement('button');
    Newbtn.textContent = '+1';
    Newbtn.setAttribute('id', 'newid');
    document.body.appendChild(Newbtn);
    // console.log(Newbtn);
    document.body.appendChild(p);

    // クリックlistener
    Newbtn.addEventListener('click',function(){
    
    let p =document.createElement('p')
    p.textContent = '+1ボタンを押すと、入力欄+1.';

    let Newinput = document.createElement('input');
    Newinput.setAttribute('type', 'text');
    Newinput.setAttribute('value', i++);
    Newinput.setAttribute('disabled', 'disabled');

    document.body.appendChild(Newinput);
    document.body.appendChild(Newbtn);
    document.body.appendChild(p);
    });
});

