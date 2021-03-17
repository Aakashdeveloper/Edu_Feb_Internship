let out = setInterval(function(){
    var num = Math.random()*10000
    console.log(num);

},4000)
undefined
out
2
VM993:3 3645.8874591016775
VM993:3 9497.814013608173
VM993:3 3126.8644262501775
VM993:3 6802.756847140888
VM993:3 592.018296249337
clearInterval(out)

setTimeout(function(){
    var num = Math.random()*10000
    console.log(num);

},4000)

setTimeout(function(){
    var num = Math.random()*10000
    console.log(num);

},4000)
3
VM1053:3 6012.349393778111