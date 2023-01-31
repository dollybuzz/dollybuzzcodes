//Running server on express
const express = require("express");
const app = express();

//routes
app.get("/", function(req,res){
    res.send("working well");
});

app.get("/main", function(req,res) {
    res.send("another route");
});

//server listener
app.listen("8082", "127.0.0.1", function() {
    console.log("Local Express Server is running...");
});

//Running server on http as suggested on node.js guide, ref: http6s://nodejs.org/en/docs/guides/getting-started-guide/
const http = require('http');
const url = require('url');
const port = 8081;
const host = '127.0.0.1';

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

//error handling
req.on('error', err => {
    console.error(err);
    res.statusCode = 400;
    res.end('400: Bad request');
    return;
});

//routes
const parsed = url.parse(req.url, true); //parse the request url
const reqPath = parsed.pathname; //get path from the parsed url

if (req.method == "GET") {
    if(reqPath == "/main") {
        res.write(`Hello, you are visiting http://${host}:${port}` + parsed.href);
        res.end();
    }
    else 
    {
        res.write("Hello world");
        res.end();
    }
}

});

//server listener
server.listen(port, host, () => {
    console.log(`HTTP Server running locally at http://${host}:${port}/`);
});