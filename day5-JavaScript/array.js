Array is a collection of homogenious or hetrogenious data

var a = [1,2,34,5,6 ] (array of number)
var b =["df","gd","ggergreg"] (array of string)
var c = [true,true,false,true] (array of Boolean)

var d = [35,345,"345","543",true,3432,"bdf",true,true]


var city = ["London","Paris","NewYork"]
undefined
typeof(city)
"object"
city[0]
"London"
city[1]
"Paris"
city[city.length-1]
"NewYork"
typeof(city[0])
"string"

var city = ["London","Paris","NewYork"]
undefined
city.push("Dubai")
4
city.push("Delhi","Mumbai")
6
city
(6) ["London", "Paris", "NewYork", "Dubai", "Delhi", "Mumbai"]

var city = ["London", "Paris", "NewYork", "Dubai", "Delhi", "Mumbai"]
undefined
city.pop(1)
"Mumbai"
city
(5) ["London", "Paris", "NewYork", "Dubai", "Delhi"]
city.pop()
"Delhi"
city
(4) ["London", "Paris", "NewYork", "Dubai"]
city.pop(6756565)
"Dubai"
city
(3) ["London", "Paris", "NewYork"]
var city = ["London", "Paris", "NewYork", "Dubai"]
undefined
city.unshift("Mumbai")
5
city
(5) ["Mumbai", "London", "Paris", "NewYork", "Dubai"]0: "Mumbai"1: "London"2: "Paris"3: "NewYork"4: "Dubai"length: 5__proto__: Array(0)
city.shift()
"Mumbai"

push > add in the end of array
unshift > add in the begining of array
pop > remove the last value of array
shift > remove the first value of array 

var city = ["Mumbai", "London", "Paris", "NewYork", "Dubai"]
undefined
city.splice(3,0,'Mumbai','Pune')
[]
city
(7) ["Mumbai", "London", "Paris", "Mumbai", "Pune", "NewYork", "Dubai"]
splice(index,deletecount,value)

var city = ["Mumbai", "London", "Paris", "NewYork", "Dubai"]
undefined
city.splice(3,0,'Mumbai','Pune')
[]
city
(7) ["Mumbai", "London", "Paris", "Mumbai", "Pune", "NewYork", "Dubai"]
city.splice(2,1)
["Paris"]
city.splice(2,1,'Nice','Boston')
["Mumbai"]
city
(7) ["Mumbai", "London", "Nice", "Boston", "Pune", "NewYork", "Dubai"]