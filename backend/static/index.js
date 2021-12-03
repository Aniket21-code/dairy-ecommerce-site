
const connection =require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expresshandlebar = require("express-handlebar");
const bodyparser = require("body-parser");
application.use(bodyparser.urlencoded({
    extended:true
}));
application.set('views',path.join(__dirname,"/views/"));
application.get("/",(req,res)=>{
    res.send("<h1>hello worl?????????</h1>");
});