var http = require('http');
var server = http.createServer();

var processor = function(request, response) {
	console.log('working...');
	response.writeHead(200);
	response.write('Hello Dog\n');
	response.write('Dog is done\n');
	response.end();
};

var closingProcessor = function() {
	console.log('closing');
	
};

server.on('request', processor);
server.on('close', closingProcessor);

server.listen(8080);

console.log('Server started.')