const router = require("express").Router();

// post users into database
router.post("/users", (req, res) => {
    res.send("route hit!!");
    // User.create(req.body).then((error, data) => {
    //     if(error) {
    //         res.send(error)
    //     } else {
    //         console.log(data)
    //         res.json(data);
    //     }
    // });
});

//get all users for admin to see and manage
router.get("/users", (req, res) => {
    res.send("route hit!!");
    // User.find({}, (error, data) => {
    //     if(error) {
    //         console.log(error)
    //     }
    //     else {
    //         res.json(data);
    //     }
    // });
});

module.exports = router;