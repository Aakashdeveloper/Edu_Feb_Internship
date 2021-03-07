for
while loop
do while loop
for of
for in > Object


for(var i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]
for(i=0;i<city.length;i++){ console.log(city[i])}


var arr = ["Mumbai", "London", "Nice",['Red','Yellow','Green'], "Boston", "Pune", "NewYork", "Dubai"]

for(i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        for(j=0;j<arr[i].length;j++){
            console.log(arr[i][j])
        }
    }else{
        console.log(arr[i])
    }
    
}

//es6
var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]
for(mycity of city){
    console.log(mycity)
}

////
var i =10
while(i<5){
    console.log(i);
    i++
}

var i =10
do{
    console.log(i);
    i++
}
while(i<5)