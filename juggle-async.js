let concat_stream = require('concat-stream');
let http = require('http');
let urlList = [];
let responseList = [];
let count = 0;

let i = 0;
for(i = 2; i< process.argv.length; i++){
    urlList.push(process.argv[i]);
}

function readResponse(index){
    http.get(urlList[index], function(response){
        response.pipe(concat_stream(function(data){
            responseList[index] = data.toString();
            count ++;

            if (count == 3){
                responseList.forEach(element => {
                    console.log(element);
                });
            }
        }));
    })
}

for(i = 0; i< urlList.length; i++){
    readResponse(i);
}