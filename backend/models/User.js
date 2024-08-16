// models/User.js

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
       
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
       
       
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User", 
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
