/*
 * http get requests have
 *      1) url that need to be 'GET'
 *      2) callback function which has response object as parameter
 *              Response object has following signature
 *                  'data'
 *                  'function data'
 */
let http = require('http');
let url = process.argv[2];
let data = undefined;
http.get(url, function dataResponse(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
        console.log(data);
    });
});
