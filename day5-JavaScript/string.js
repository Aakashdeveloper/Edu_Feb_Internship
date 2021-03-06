var a = "London"
undefined
a.toUpperCase()
"LONDON"
a.toLowerCase()
"london"
a.length
6
a[0]
"L"
a[1]
"o"
var name = "   Aakash  "
undefined
name.length
11
name.trim()
"Aakash"

// Js is case sensitive
var a = "John"
var b = "john"
a==b
false

var city = "Amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2)
"sterdam"
city.slice(2,5)
"ste"
city.slice(2,-1)
"sterda"
city.slice(-1,2)
""
city.slice(-4,-1)
"rda"
city.slice(-1,-4)
""

var city = "Amsterdam"

undefined
city.charAt(0)
"A"
city.charAt(1)
"m"

var city = "amSteRDaM"
undefined
city.charAt(0).toUpperCase()
"A"
city.slice(1)
"mSteRDaM"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase();


var data = "i am learning javascript"
undefined
data.replace('javascript','JS')
"i am learning JS"

var data = "javascript i am learning javascript"
undefined
data.replace('javascript','JS')
"JS i am learning javascript"
data.replace(/javascript/g,'JS')
"JS i am learning JS"

