const mongoose = require("mongoose");

const User = require("../models/Users");

mongoose.connect(process.env.MONGOBD_URI || 'mongodb+srv://MuhammedEkinci:*Tbn58kpm@cluster0.e9fkz.mongodb.net/semerkand_activity_log?retryWrites=true&w=majority' ,
    {
        useNewUrlParser: true
    }
)

user = [
    {
        userID: "us-01-01",
        password: "123456",
        branch: "New Jersey",
        name: "blah",
        email: "blah@email.com",
        phone: "1112223333"
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
