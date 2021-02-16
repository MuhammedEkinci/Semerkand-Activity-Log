const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    username: {
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
    },
    date: {
        type: Date,
        default:Date.now
    }
});

//hash the password
UserSchema.pre("save", async function(next) {
    if(!this.password("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

//compare if user entered password is in the database
UserSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;