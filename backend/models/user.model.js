const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    first_name:{
        type:String,
        required:true,
        unique:true,
    },
    last_name:{
        type:String,
        required:true,
        unique:true,
    },
     password:{
        type:String,
        required:true,
        unique:true,
    },
    date_birth:{
        type: Date,
        required: true
    },
    company_name:{type:String},


})
const User = mongoose.model('User',userSchema)

module.exports = User