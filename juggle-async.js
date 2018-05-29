let concat_stream = require('concat-stream');
let http = require('http');
let data = undefined;
for(i = 4; i > 1; i--){
    url = process.argv[i];
    http.get(url, function urlRequest(response){
        response.setEncoding('utf8');
        response.pipe(concat_stream(function (data){
            console.log(data);
        }));
    });
}