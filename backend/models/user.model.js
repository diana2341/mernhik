const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,

    },
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
     password:{
        type:String,
        required:true,
    },
    date_birth:{
        type: Date,
        required: true
    },


})
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
const User = mongoose.model('User',userSchema)

module.exports = User