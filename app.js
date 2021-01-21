var http = require("http");
var hostname="localhost";
var port= 3000;

var server= http.createServer((req, res) =>{
    req.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("Bellaaaaa");
});

server.listen(port, hostname, () => {
    console.log("server running at http://%s:%d/");
});