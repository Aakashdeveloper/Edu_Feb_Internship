var a = 10
var b = 20
a+b

function add(a,b){
    return a+b
}
undefined
add(1,2)
3
add(10,20)
30
add("hi","Hello")
"hiHello"


function isEven(userInput){
    var output;
    if(userInput%2==0){
        output = `${userInput} is even`
    }else{
        output = `${userInput} is odd` 
    }
    return output
}
undefined
isEven(10)
"10 is even"
isEven(15)
"15 is odd"


function myfunction(a,b){
    var output = [a,b]
    return output
}

var add = function(a,b){
    return a+b
}

const add  = (a,b) => {return a+b}

add(1,2)