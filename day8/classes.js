//es5
function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = function(){
        return `Say Hi to ${country}`
    }
}

var Hindi = new language('Hindi','India')
undefined
Hindi
language {name: "Hindi", country: "India", greet: ƒ}
Hindi.greet()
"Say Hi to India"

//es6
class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet = function(){
        return `Say Hi to ${country}`
    }
}

var English = new language1('English','UK');


var a = 10
var b = 20
var {a,b} = [10,20]

var a,b
undefined
[a,b] = [10,20]
(2) [10, 20]
a
10
b
20
({a,b} = {a:10,b:20})
{a: 10, b: 20}
a
10
b
20
({a,b} = {a:1,b:2})
{a: 1, b: 2}
a
1
b
2


var x = [1,2,3,4]
const [y,z] = x

var x = [1,2,3,4]
const [y,z] = x
undefined
y
1
z



class rest{
    this.reslist=[
        {}
    ]
    print:
}