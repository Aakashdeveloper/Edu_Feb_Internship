var http = require('http');

var server = http.createServer(function(req,res){
    res.write("Welcome to nodeJs");
    res.end()
})

server.listen(9800)