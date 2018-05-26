let fs = require('fs');
let fileContent = fs.readFileSync(process.argv[2]);
let toString = fileContent.toString();
let toArray = toString.split('\n');
console.log(toArray.length-1);