const mongoose=require("mongoose");
var register =new mongoose.Schema({
    Username:{
        type :String,
        required :"required"
    },
    Email:{
        type :String,
        required :"required"
    },
    password :{
        type :String,
        required :"required"
    }
}

);
mongoose.model("register",registerSchema)