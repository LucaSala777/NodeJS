var http = require("http");
var hostname="localhost";
var port= 3000;
var nome="NODESALA"
var express=require("express");
const { readSync } = require("fs");
var apiServer = express();

var server= http.createServer((req, res) =>{
    req.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("Bellaaaaa");
});

server.listen(port, hostname, () => {
    console.log("server running at http://%s:%d/", hostname, port);
});

apiServer.get("/nome", ()=>{
console.log("ho ricevuto una get su nome");
res.statusCode=200;
res.setHeader("content-Type", "text/plain");
    res.send("Ciao, il nome del server è ",nome);
});

apiServer.get("/", function(req, res){
    res.statusCode=200;
res.setHeader("content-Type", "text/plain");
    res.send("sei in home");
});

apiServer.get("/index", function(req, res){
res.sendFile("C:\\Users\\sala.lucaandrea\\Desktop\\Nuova cartella\\NodeJS\\index.html");
});
