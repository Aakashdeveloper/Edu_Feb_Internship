var a = [4,5,3,8,9,43,65,87]
a.map((data) => { return data*2})
(8) [8, 10, 6, 16, 18, 86, 130, 174]

> map is use to iterate over the Array
> it always return same length of output as input array
> it is use to apply logics(sum,mul) return html with data binding

var a = [4,5,3,8,9,43,65,87]
a.map((data) => { return `<p>${data*2}</p>`})
(8) ["<p>8</p>", "<p>10</p>", "<p>6</p>", "<p>16</p>", "<p>18</p>", "<p>86</p>", "<p>130</p>", "<p>174</p>"]

> filter is use to filter out the Value
> it may or may not return same length of array
> it only return those value for which output or condition is true


var b = [20,34,32,26,67,21,19,32]
b.filter((data) =>  {return data>25})
(5) [34, 32, 26, 67, 32]
b.map((data) =>  {return data>25})
(8) [false, true, true, true, true, false, false, true]

var a = [0,1,2,3]
a.map((data) => {return data*2})
[0,2,4,6]
a.filter((data) => {return data*2})
[1,2,3]