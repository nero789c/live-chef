const mongoose = require("mongoose");
const {model} = require("mongoose");

const UserSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
});

const userModel = mongoose.model("users", UserSchema);

module.exports = userModel;
