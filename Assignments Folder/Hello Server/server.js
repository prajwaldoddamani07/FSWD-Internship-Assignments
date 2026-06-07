const http = require("http");

const server = http.createServer(
(req,res)=>{

 if(req.url === "/"){
  res.end("Home Route");
 }

 else if(req.url === "/about"){
  res.end("About Route");
 }

 else{
  res.end("404 Not Found");
 }

});

server.listen(5000);