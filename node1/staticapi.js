var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    fs.readFile('db.json','utf-8',(err,data) => {
        if(err) throw err;
        res.write(data);
        res.end()
    })
})

server.listen(8000)