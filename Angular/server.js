var http = require('http');
//var fs = require("fs");

/*
http.createServer(function(request, response) {
  fs.readFile("test_include.htm", function(err, data){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });
}).listen(8080);
*/

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});
