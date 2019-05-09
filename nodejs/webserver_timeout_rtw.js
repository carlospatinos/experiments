var http = require('http');


var processor = function(request, response) {
	response.writeHead(200);
	response.write('Hello Dog\n');
	setTimeout(function (){
		response.write('Dog is done\n');
		response.end();
	}, 5000);
	
}

http.createServer(processor).listen(8080);
console.log('Server started.')