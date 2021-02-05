const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

const userSchema = new Schema({
    userID: {
        type: String,
        required: true,
        min:[1]
    },
    password: {
        type: String,
        required: true,
        min:[1]
    },
    branch: {
        type: String,
        required: true
    },
    loginDate: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true,
        min:[1]
    },
    email: {
        type: String,
        required:true
    },
    phone: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;