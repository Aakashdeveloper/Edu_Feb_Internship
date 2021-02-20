var city = "London"
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"
city.length
6
city[0]
"L"
city[1]
"o"
city[2]
"n"
city.charAt(0)
"L"
city.charAt(1)
"o"
var city = "  Amsterdam "
undefined
city.length
12
city.trim()
"Amsterdam"
var city = "  Amsterdam . "
undefined
city.trim()
"Amsterdam ."

//Case Sensitive
var color = "Red"
var color1= "red"
color==color1
false
color.toLowerCase() == color1.toLowerCase()
true




var city = "London"
undefined
city.slice(1)
"ondon"
city.slice(2)
"ndon"
city.slice(3)
"don"
city.slice(2,4)
"nd"

var city = "lOnDoN"

var city = "lOnDoN"
undefined
city.charAt(0).toUpperCase()
"L"
city.slice(1).toLowerCase()
"ondon"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"London"

var city = "London"
undefined
city.slice(-1)
"n"
city.slice(1)
"ondon"
city.slice(-2)
"on"
city.slice(-4,-1)
"ndo"
city.slice(-1,-4)
""
city.slice(4,1)
""
city.slice(1,4)
"ond"

var a = "Hi"
var b = "JavaScript"

var a = "Hi"
var b = "JavaScript"
undefined
a+b
"HiJavaScript"
a.concat(b)
"HiJavaScript"
b.concat(a)
"JavaScriptHi"

var a = "i am learning javascript"
a.replace('javascript','JS')
"i am learning JS"

var a = "javascript i am learning javascript"
a.replace('javascript','JS')
"JS i am learning javascript"

var a = "javascript i am learning javascript"
a.replace(/javascript/g,'JS')
"JS i am learning JS"

var city = "  Amsterdam . "
city.replace(/ /g,'')
"Amsterdam."

var a = "https://github.com/Aakashdeveloper/Python-Django"
undefined
a.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "Python-Django"]
var out = a.split('/')
undefined
out.length
5
out[out.length-1]
"Python-Django"
