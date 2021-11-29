const express = require("express");
var path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, '/public')))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, function(){
    console.log("server is running on port 3000!")
})