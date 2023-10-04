// console.log('hello wword');

// // function print  () {


// // }
// var print = (callbackFunction)=> {
//     console.log("satrt duy")
//     setTimeout(()=>{
//        console.log("count done!")
//                 callbackFunction();
//     },1000);

// }
// var callbackFunction = ()=>{
//     console.log("end")
// }
// console.log('start');
// print();
// console.log("end")
// function myFunction(param){
    
//     param('học lạp trình');
// }
// function mycallback(value){
//     console.log('value :', value)
// }
// myFunction(mycallback);
/* scope - phạm vi
- các loại phạm vi : 
 Global - toàn cầu
 code block - khối mã : let , const
 local scope - hàm : var , fuction 
- khi 
*/
function log(){
    console.log("in ra log")
}
// var messge = "hoc ve scope"
function logger(){
    // console.log(massge)
}
logger();