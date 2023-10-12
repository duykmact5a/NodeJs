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

//          let dataWriteFile='hello , it '

//  let dataObjectWriteFile = {
//      a: 5 ,
//      b : 6
//  }
//  fs.writeFile('test.txt' , JSON.stringify(dataObjectWriteFile) , 'utf-8',(err)=>{
//     if(err){console.log(err);}
//     console.log('write file succcesss!')
//  });
//  fs.readFile('test.txt', 'utf-8', (error , data)=>{
//     if(error){console.log(error);}   
//       console.log(Object.keys(JSON.parse(data)));


//   });
/////////////////////////////
//   let fileSystem = require('./fileController')
//    console.log(fileSystem)
//    fileSystem.readFile('test.txt' , (fileData)=>{
//       console.log(fileData);
//    })
// console,log(fileSystem.readFilesync("haish"))
//////------- Buổi 4 -------///////
const prompt = require('prompt-sync')
const express = require('express')
const path = require('path');
const handlebar = require('express-handlebars')

let app = express();

app.engine('handlebars', handlebar.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


// app.use(express.static('pulic'));
//  app.get('/', (req, res)=>{
//     res.sendFileS(path.realove(__dirname + '/public/index.html'));
//  });

app.get('/', (req, res)=>{
     res.render('home');
 });
app.get('/gift', (req,res)=>{
    res.send("9GB lonk :http://**************************");
});
app.get('/about', (req,res)=>{
    res.send("This is about");
});
app.listen(6969, (err)=>{
    if(err) {console.log(err);}
    console.log("App is start at port 6969");
}); 
