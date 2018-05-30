http = require('http');
fs = require('fs');

var portNumber = process.argv[2];
var fileStreamNumber = process.argv[3];
var data = '';
var fileStream = fs.createReadStream(fileStreamNumber);
//fileStream.setEncoding('UTF8');

var server = http.createServer(function(request, response){
    // request will fetch properties
    // essentially you will request for the properties
    // response will send data to the client
    // response will be used to send the data
    fileStream.on('data',function(datachunk){
        data = datachunk;
    });
    fileStream.on('end', function(){
        response.write(data);
    });
    server.close();
});
server.listen(portNumber);
