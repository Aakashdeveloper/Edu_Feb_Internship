function sum(a,b,c,d){
    return a+b+c+d
}

const num = [1,2,3,4]

console.log(sum(...num))


let try = [1,2,3]
let try2 = [...try]

let try1 = [1,2,3]
let try2 = [...try1]
undefined
try2
(3) [1, 2, 3]
try2.push(4)
4
try1
(3) [1, 2, 3]
try2
(4) [1, 2, 3, 4]

///////////
function sum(x,y){
    return x+y
}

sum(1,2,3,4,5)
3

function sum(...args){
    let sum  = 0;
    for(let arg of args) sum +=arg
    return sum
}

sum(1,2,3,4,5)

function sum(x,y){
    return x+y
}

sum(1,2,3,4,5)
3
function sum(...args){
    let sum  = 0;
    for(let arg of args) sum +=arg
    return sum
}

sum(1,2,3,4,5)
15



let add = (a,b) => {return a+b}