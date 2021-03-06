es5 => Ecma Script5
es6 => Ecma Script6

///
es5
/////
DataTypes

String > "Hi" 'hey' "3534"  '4543' '3534gge' 'true'
Number > 76 7867867 87.46 .3443345
Boolean > true false

var a = "Hiii"
var b = 10
var c = true
undefined
typeof(a)
"string"
typeof(b)
"number"
typeof(c)
"boolean"
var d = 10.111
undefined
typeof(d)
"number"
var e = "34345"
undefined
typeof(e)
"string"

//////////////////////
var a = 10
var b = 20
undefined
a+b
30
a-b
-10
a*b
200
a/b
0.5
b%a > modules
0

4%2
0
4%3
1

2%4
3%4

2%4
2
3%4
3
> modules of smaller to higher is always smaller


var a = "Hi"
var b = "JavaScript"
undefined
a+b
"HiJavaScript" (concat)
a-b
NaN (not a number)
a*b
NaN
a/b
NaN
a%b

var a = "Hi"
undefined
var b = 10
undefined
a+b
"Hi10"
b+a
"10Hi"
a-b

string+string = string
string+number = string
number+string = string
number+number = number

10+"20"+30
"1020"+30
"102030"

10+20+"30"
30+"30"
"3030"

"10"+20+30
"1020"+30
"102030"

10+"20"+30-1
102029

10+20+"30"-1
3029

"10"+20+30-1
102029

"10"-1
9

"10"+1
"101"

1-"10"
-9

1-"a"
NaN
"10"-"2"
8

"10a"-1
NaN