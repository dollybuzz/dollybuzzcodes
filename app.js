/*const express = require("express");
const app = express();

//routes
app.get("/", function(req,res){
    res.send("working well");
});

//server listener
app.listen("8081", "127.0.0.1", function() {
    console.log("Local express Server is running...");
})*/

//Creating server according to node.js guide, ref: https://nodejs.org/en/docs/guides/getting-started-guide/
const http = require('http');
const port = 8081;
const host = '127.0.0.1';

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, host, () => {
    console.log(`Server running locally at http://${host}:${port}/`);
});

