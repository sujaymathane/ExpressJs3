const express=require("express");
var path =require("path");
const app=express();

app.get("/",function(req,res){
    res.send("<h1>Welcome to the module end of software developement methodology");
})

app.get("/home",function(req,res){
    res.sendFile(path.join(__dirname,"/public/index.html"));
})

app.listen(8080);
console.log("server is listening to port 8080")