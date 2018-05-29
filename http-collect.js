const concat = require('concat-stream');
let http = require('http');
let url = process.argv[2];
let data = undefined;
http.get(url, function getResponse(response){
    response.setEncoding('utf8');
    response.pipe(concat(function (data){
        console.log(data.length);
        console.log(data);
    }))
});