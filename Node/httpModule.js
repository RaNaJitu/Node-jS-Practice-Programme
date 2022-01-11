const http = require("http")
const server = http.createServer(
    function(req,res){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>Node JS </h1>")
        res.write("<h3>Nodemon Install</h3>")
        res.end();
    }).listen(3012,()=> console.log("Server Running with Port 3012"));