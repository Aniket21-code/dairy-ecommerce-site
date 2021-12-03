// import express from 'express';
// // const express = require("express")
// const app = express()
// app.get('/',(req,res)=>{
// res.render('index.ejs');
// })
// app.listen(3000);
import express from "express";
const app = express();
const bcrypt= require('bcrypt')

app.set('view-engine','ejs')
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res)=>{
    res.render("index.ejs");
});
app.get("/login", (req, res)=>{
    res.render("login.ejs");
});
app.get("/register", (req, res)=>{
    res.render("register.ejs");
});
app.post("/register",async(req, res)=>{
    try{        
const hasedpassword =bcrypt.hash()
    }
    catch{

    }
   req.body.input-xlarge
});
const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Sever at http://localhost:${port}`);
});
