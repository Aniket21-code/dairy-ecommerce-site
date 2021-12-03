const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Resgister",(error)=>{
    if(!error){
        console.log("success");
    }
    else
    {
        console.log("trying to reconnect..........");
    }

});

console.log("make sure to connect.........");
const register =require("./register.model")
