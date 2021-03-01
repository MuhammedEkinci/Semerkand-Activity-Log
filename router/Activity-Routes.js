const router = require("express").Router();

const Activity = require("../models/Activity-Log");

router.post("/activities", (req, res) => {
    // res.send("route hit!!");
    Activity.create(req.body).then((error, data) => {
        if(error) {
            return res.send(error)
        } else {
            console.log(data);
            return res.json(data);
        }
    });
});

// route to get activities from database to render on webpage
router.get("/activities", (req, res) => {
    //res.send("get route hit!!");
    Activity.find({}, (error, data) => {
        if(error) {
            console.log(error)
        }
        else {
            return res.json(data);
        }
    });
});


module.exports = router;