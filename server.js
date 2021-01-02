//dependencies needed for server side
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const User = require("./models/Users");


const app = express();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGOBD_URI || 'mongodb+srv://MuhammedEkinci:*Tbn58kpm@cluster0.e9fkz.mongodb.net/semerkand_activity_log?retryWrites=true&w=majority' ,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    }
)

// Start the API server
app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});

//api-routes

// post users into database
app.post("api/users", (req, res) => {
    console.log("route hit!!");
    User.create(req.body).then((error, data) => {
        if(error) {
            res.send(error)
        } else {
            console.log(data)
            res.json(data);
        }
    });
});
