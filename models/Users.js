const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    userID: {
        type: String,
        required: true,
        min:[1]
    },
    password: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    phone: {
        type: String
    },
    date: {
        type: Date,
        default:Date.now
    }
});

// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
UserSchema.methods.generateHash =  function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
UserSchema.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;