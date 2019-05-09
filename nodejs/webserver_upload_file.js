var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  //response.writeHead(200);
  var newFile = fs.createWriteStream("image_copy.jpg");
  var fileBytes = request.headers['content-length'];
  console.log('fileBytes: ' + fileBytes);
  var uploadedBytes = 0;

  request.pipe(newFile, { end: false });
  
  request.on('readable', function() {
  	var chunk  = null;
  	while(null !== (chunk = request.read())) {
  		//console.log('reading..');
  		uploadedBytes += chunk.length;
  		var progress = (uploadedBytes / fileBytes) * 100;
  		response.write("progress: " + parseInt(progress, 10) + "%\n")
  	}
  });  
  

  request.on('end', function() {
  	response.end('Uploaded!');
  });
}).listen(8080);;
