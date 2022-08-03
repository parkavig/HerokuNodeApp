var http = require('http');
var fs = require('fs');
var url = require('url');
var ports = [80,443];

ports.forEach( (port) =>
{
http.createServer(function(req, res){
    var webLink = url.parse(req.url);
    var filePath = "." + webLink.pathname;
    fs.readFile(filePath, (err,data) => {
        if(err){
            res.writeHead(404, { 'Content-type' : 'text/html'});
            res.end("404 File not found");
        }

        res.writeHead(200, {'Content-type' : 'text/html'});
        res.end(data);
    });
}).listen(port);
})