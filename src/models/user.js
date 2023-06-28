const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    lastname:{
        type: String, 
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String, 
        required: true,
        unique: true
    },
    phonenumber:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirmpassword:{
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);