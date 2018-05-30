let net = require('net');
//socket = process.argv[2];
let portNumber = process.argv[2];
let date = new Date();
let dateString  = "";
let dateMonth = "";
let dateDate = "";
let dateMinutes = "";
let dateHours = "";
var server = net.createServer(function (socket){
    //console.log("Client Connected\n");
    if((date.getMonth() + 1) <= 9){
        dateMonth = '0'+(date.getMonth() + 1).toString();
    } else{
        dateMonth = date.getMonth().toString();
    }

    if(date.getDate() <= 9){
        dateDate = '0'+(date.getDate() + 1).toString();
    } else{
        dateDate = date.getDate().toString();
    }

    if((date.getHours() + 1) <= 9){
        dateHours = '0'+(date.getHours()).toString();
    } else{
        dateHours = date.getHours().toString();
    }
    
    if(date.getMinutes() <= 9){
        dateMinutes = '0'+(date.getMinutes()).toString();
    } else{
        dateMinutes = date.getMinutes().toString();
    }
    dateString = `${date.getFullYear()}-${dateMonth}-${dateDate} ${dateHours}:${dateMinutes}`;
    socket.write(dateString+'\n');
    socket.end();
});
server.listen(portNumber);
