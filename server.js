//dependencies needed for server side
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const User = require("./models/Users");
const Activity = require("./models/Activity-Log");


const app = express();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;

function shouldCompress (req, res) {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false
    }
   
    // fallback to standard filter function
    return compression.filter(req, res)
}

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
app.post("/api/users", (req, res) => {
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

//get all users for admin to see and manage
app.get("/api/users", (req, res) => {
    console.log("route hit!!");
    User.find({}, (error, data) => {
        if(error) {
            console.log(error)
        }
        else {
            res.json(data);
        }
    });
});

//route to post activities to database
app.post("/api/activities", (req, res) => {
    console.log("route hit!!");
    Activity.create(req.body).then((error, data) => {
        if(error) {
            res.send(error)
        } else {
            console.log(data)
            res.json(data);
        }
    });
});

// route to get activities from database to render on webpage
app.get("/api/activities", (req, res) => {
    console.log("route hit!!");
    Activity.find({}, (error, data) => {
        if(error) {
            console.log(error)
        }
        else {
            res.json(data);
        }
    });
});
