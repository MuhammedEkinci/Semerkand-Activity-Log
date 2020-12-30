const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userLoginSchema = new Schema({
    user: {
        type: String,
        required: true,
        min:[1]
    },
    loginTime: {
        type: String,
        required: false
    },
    logoutTime: {
        type: String,
        required: false
    }
});

const UserLogin = mongoose.model("UserLogin", userLoginSchema);

module.exports = UserLogin;