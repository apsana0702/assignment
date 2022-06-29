var http = require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    fs.readFile('hi.txt',(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen(8080)