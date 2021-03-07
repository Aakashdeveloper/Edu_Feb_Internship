if(condition){
    //do something
}else{
    //do something
}


var a = 9987
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`) 
}
VM82:6 Number 9987 is odd


var a = 998
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`) 
}
VM86:4 Number 998 is even

var name="Priya";
if(name=="Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else if(name=="Hitesh"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} you are unkown`)   
}

Hi Aakash you are unkown

////////
var name ="Aakash"
var role="User"

if(name=="Tina" || role=="Admin"){
    console.log(`Hi ${name} you are allowed`)
}else{
    console.log(`Hi ${name} you are not allowed`)
}
VM185:7 Hi Aakash you are not allowed

if(name=="Tina" && role=="Admin"){
    console.log(`Hi ${name} you are allowed`)
}else{
    console.log(`Hi ${name} you are not allowed`)
}

if(role=="Admin" && (name=="Tina" || name=="Bhumika")){
    console.log(`Hi ${name} you are allowed`)
}else{
    console.log(`Hi ${name} you are not allowed`)
}

var a = 1
if(a){
    console.log("Hiii")
}else{
    console.log("Bie")
}
"Hii"

var a = 0
if(a){
    console.log("Hiii")
}else{
    console.log("Bie")
}
"Bie"

var a = -1
if(a){
    console.log("Hiii")
}else{
    console.log("Bie")
}
"Hii"

///////////
Ternary(sinle line if else condition)
///////
var a = 10
a>10?"Hiii":"Bie"
"Bie"

var a = 10
a==10?"Hiii":"Bie"
"Hiii"


var a = 10
a>10?a+1:a-1

var a = 10
a>10?a+1:a-1
9
var a = 10
a==10?a+1:a-1
11