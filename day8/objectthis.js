/*var firstname = "Michal"
var lastname = "Peter"

var sayHi = {
    firstnam:'Zoe',
    lastname:'lisa',
    greet:function(){
        return `Say hi to ${firstname} ${lastname}`
    }
}

console.log(sayHi.greet())*/


var firstname = "Michal"
var lastname = "Peter"
var sayHi = {
    firstname:'Zoe',
    lastname:'lisa',
    greet:function(){
        return `Say hi to ${this.firstname} ${this.lastname}`
    }
}
console.log(sayHi.greet())