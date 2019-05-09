var http = require('http');


var processor = function(request, response) {
	response.writeHead(200);
	response.write('Hello Dog\n');
	response.end();
}

http.createServer(processor).listen(8080);
console.log('Server started.')