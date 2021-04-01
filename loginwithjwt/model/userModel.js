var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String
})

mongoose.model('LoginUser',UserSchema);
module.exports = mongoose.model('LoginUser')