const  fs = require("fs");
//console.log(fs);
//? this is Asynchronous methods 
fs.readFile(__dirname+"/demo.text","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data)
})
console.log("This is Asynchronous methods ");
console.log("***********************************************")
//? this is Synchronous methods 
try
{
   const syncFile = fs.readFileSync(__dirname+"/demo.text","utf8",)
   console.log(syncFile);
}
catch(e)
{
    console.log(e)
}
console.log("This is Synchronous methods ");
//! This is file system using the httpmodule
// const http = require("http")
// const server = http.createServer(
//     function(req,res){
//         fs.readFile(__dirname+"/demo.text","utf8",(err,data)=>{
//             res.writeHead(200,{"content-type":"text/plain"})
//             res.write(data)
//             res.end();
//         });
//     }).listen(3012,()=> console.log("Server Running with Port 3012"));
