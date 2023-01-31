const express = require("express");
const app = express();

//routes
app.get("/", function(req,res){
    res.send("working well");
});

//server listener
app.listen("8081", "127.0.0.1", function() {
    console.log("Local express Server is running...");
})