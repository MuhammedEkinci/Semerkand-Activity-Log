//dependencies needed for server side
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");


const app = express();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3002;

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

//middleware for API routes
app.use("/api", require("./router/userRouter"));
app.use("/api", require("./router/Activity-Routes"));

// Start the API server
app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
