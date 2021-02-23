const mongoose = require("mongoose");

const User = require("../models/Users");

mongoose.connect(process.env.MONGOBD_URI || 'mongodb+srv://MuhammedEkinci:*Tbn58kpm@cluster0.e9fkz.mongodb.net/semerkand_activity_log?retryWrites=true&w=majority' ,
    {
        useNewUrlParser: true
    }
)

user = [
    {
        userID: "us-02-01",
        password: "password",
        branch: "NJ",
        email: "blah123@email.com",
        phone: "9999998877"
    }
]

User.collection 
 .insertMany(user)
 .then((userlog) => {
     console.log(userlog);
 })
 .catch(({message}) => {
    console.log(message)
});
