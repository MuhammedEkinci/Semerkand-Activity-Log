const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
        type: String
    },
    loginDate: {
        type: String
    },
    name: {
        type: String,
        required: true,
        min:[1]
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;