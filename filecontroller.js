const fs = require('fs');
const path = require('path');

let readFile = (path) => {
    return fs.readFileSync(path,'utf-8' );

}
let writeFile = (path , writedata)=>{
    fs.writeFile(path , writedata , (err) => {
        fs.writeFile(path, writedata , (err)=>{
            if(err){console.log(err)}
            onWriteDataSuccess("Success");
        })
    });
}
module.exports = {
    readFileFunc : readFile ,

    writeFile

}