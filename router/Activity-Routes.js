const router = require("express").Router();

router.post("/activities", (req, res) => {
    res.send("route hit!!");
    // Activity.create(req.body).then((error, data) => {
    //     if(error) {
    //         res.send(error)
    //     } else {
    //         console.log(data)
    //         res.json(data);
    //     }
    // });
});

// route to get activities from database to render on webpage
router.get("/activities", (req, res) => {
    res.send("route hit!!");
    // Activity.find({}, (error, data) => {
    //     if(error) {
    //         console.log(error)
    //     }
    //     else {
    //         res.json(data);
    //     }
    // });
});


module.exports = router;