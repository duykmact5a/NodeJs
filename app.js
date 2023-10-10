// const { error } = require('console');
// const fs = require('fs');
// // fs.readFile 
// let dataFromFile = fs.readFileSync('./package.json','utf-8');
// console.log('dataFromFile',dataFromFile);

// fs.readFile('./package.json', 'utf-8' ,
//          (error,data) => {
//            if(error){
//             console.log(error)
//            } 
//            console.log(data)
//          });

//          let dataWriteFile='hêlo'
// //  fs.writeFile('test.txt' , dataWriteFile , (err)=> {
// //  if ( err){console.log(err)}
// //  console.log("write file sueec ! ")
// //  });
//  let dataObjectWriteFile = {
//     a: 5 ,
//     b : 6
//  }
//  fs.writeFile('test.txt' , JSON.stringify(dataObjectWriteFile) , 'utf-8',(err)=>{
//     if(err){console.log(err);}
//     console.log('write file succcesss!')
//  });
// //  fs.readFile('test.txt', 'utf-8', (error , data)=>{
// //     if(error){console.log(error);}
// //     console.log("Data: "+JSON.parse(data).a);


// //  });

// //  dataFromFileAsync
 
let fs = require('./filecontroller')
console.log(fs)