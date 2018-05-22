
var http = require('http');
var fs = require('fs');
var path= require('path');
var express = require('express');
/*
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
*/

var app = express();

app.use(express.static(__dirname + '/public'));

console.log('Listening on 8888');
app.listen(8888);

