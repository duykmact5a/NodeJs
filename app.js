const fs = require('fs');

let dataFromFile = fs.readFileSync('./package.json');
console.log(dataFromFile);