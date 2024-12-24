const mongoose = require('mongoose');

const accounts = mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        unique:false,
    },
    user_email:{
        type:String,
        required:true,
        unique:true,
    },
    phone_number:{
        type:Number,
        required:false,
    }
})

const Account = mongoose.model("Account",accounts);
module.exports = Account;