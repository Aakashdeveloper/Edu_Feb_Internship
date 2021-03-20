var fs = require('fs');

/*fs.writeFile('mytext.txt','Edureka Class',function(err){
    if(err) throw err;
    console.log("Task Done")
})


fs.appendFile('myfile.txt','This is line 1 \n',function(err){
    if(err) throw err;
    console.log("Task Done")
})


fs.readFile('myfile.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})


fs.rename('myfile.txt','mydoc.txt',function(err){
    if(err) throw err
    console.log("Task Done")
})
*/
fs.unlink('myfile.pdf',function(err){
    if(err) throw err
    console.log("Task Done")
})