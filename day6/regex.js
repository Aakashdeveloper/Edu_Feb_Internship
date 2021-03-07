RegExp
Regular expression

var a = "Hi"
^$


var a = "Hi"
a.match("^([a-z])$")
null

var a = "hi"
a.match("^([a-z])$")
null

var a = "hi"
a.match("^([a-z]{2})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]

var a = "hii"
a.match("^([a-z]{2})$")
null

var a = "hii"
a.match("^([a-z]{3})$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]

var a = "hii"
a.match("^([a-z]{2,5})$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]

var a = "hii"
a.match("^([a-z]+)$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]


a.match("^([A-Ha-z]+)$")
a.match("^([A-Za-z0-9]+)$")
a.match("^([A-Za-z0-9$#]+)$")

a.match("^([A-Z]{1})([a-z]+)$")

var number = 94377837
undefined
number.match("^[0-9]{10}$")
VM182:1 Uncaught TypeError: number.match is not a function
    at <anonymous>:1:8
(anonymous) @ VM182:1
number.toString().match("^[0-9]{10}$")
null
ar number = 12345678999
var number = 94377837
var number = 12345678999
undefined
number.toString().match("^[0-9]{10}$")
null
var number = 1234567890
undefined
number.toString().match("^[0-9]{10}$")
["1234567890", index: 0, input: "1234567890", groups: undefined]


var str = "That's hot haat hote hott hat"
var pat = /h.t/

str.match(pat)

var str = "That's hot haat hote hott hat"
var pat = /h.t/g

str.match(pat)
["hat", index: 1, input: "That's hot haat hote hott hat", groups: undefined]
var str = "That's hot haat hote hott hat"
var pat = /h.t/

str.match(pat)
["hat", index: 1, input: "That's hot haat hote hott hat", groups: undefined]
var str = "That's hot haat hote hott hat"
var pat = /h..t/

str.match(pat)
["haat", index: 11, input: "That's hot haat hote hott hat", groups: undefined]

var str = "That's hot haat hote hott hat"
var pat = /h.t/g
undefined
str.match(pat)
(5) ["hat", "hot", "hot", "hot", "hat"]
var str = "That's hot haat hote hott hat"
var pat = /h..t/

str.match(pat)
["haat", index: 11, input: "That's hot haat hote hott hat", groups: undefined]
var str = "That's hot haat hote hott hat"
var pat = /h..t/g

str.match(pat)
(2) ["haat", "hott"]



var email = "a@a.com";
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]

var email = "@a.com";
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null

var email = "a@acom";
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@acom", "a", "a", "om", index: 0, input: "a@acom", groups: undefined]

var email = "a@";
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null

"a@a"