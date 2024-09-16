const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required:[true,"Please add the username"],
        unique:[true,"username already exists"]
    },
    password: {
        type: String,
        required:[true,"Please add the password"]
    },
    
    email: {
        type: String,
        required:[true,"Please add the email"]
    }
    
},
{
    timestamps:true
});

const User = mongoose.model("User",userSchema);

module.exports = User;