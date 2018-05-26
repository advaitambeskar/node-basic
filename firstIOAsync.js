let fs = require('fs');
let toString2;
var numberOfLines = undefined;
let filepath = process.argv[2];
fs.readFile(filepath, function doneReading(err, fileContents){
    toString2 = fileContents.toString();
    var toArray = toString2.split('\n');
    //console.log(toArray);
    numberOfLines = toArray.length;
    console.log(numberOfLines - 1);
});