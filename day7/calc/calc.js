/*function add(){
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    var out = Number(first)+Number(second);
    document.getElementById('output').innerText=out
}
function sub(){
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    var out = Number(first)-Number(second);
    document.getElementById('output').innerText=out
}*/

function calc(opt){
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    var out;
    if(opt=="add"){
        out = Number(first)+Number(second);
    }else{
        out = Number(first)-Number(second);
    }
    document.getElementById('output').innerText=out
}