// start sum from index 2 till (length-1)
let x = 0
for(i = 2; i < (process.argv).length; i++){
    x = x + Number(process.argv[i]);
}
console.log(x);