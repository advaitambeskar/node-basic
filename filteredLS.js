var myModule = require('./filteredModule.js');
var fs = require('fs');

directoryFile = process.argv[2];
filterName = process.argv[3];

filterName = '.' + filterName;

fs.readdir(directoryFile, function readFile(err, list){
    for(var i = 0; i <= list.length; i++){
        if(list[i].endsWith(filterName)){
            console.log(list[i]);
        }
    }
});
