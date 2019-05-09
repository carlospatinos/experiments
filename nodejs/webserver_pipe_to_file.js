var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  var newFile = fs.createWriteStream("readme_copy.md");
  request.pipe(newFile, { end: false });

  request.on('end', function() {
  	response.end('Uploaded!');
  });
}).listen(8080);;
