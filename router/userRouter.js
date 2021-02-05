const router = require("express").Router();
const User = require("../models/Users");

// post users into database
router.post("/users", async (req, res) => {
    res.send("route hit!!");
    try{
        const {userID, email, password, passwordVerify} = req.body;

        //validation
        if(!email || !userID || !password || !passwordVerify) 
            return res.status(400).json({
                errorMessage: "Please enter all required fields. ",
            });
        
        if(password.lenght < 6) 
            return res.status(400).json({
                errorMessage: "Enter a password atleast 6 characters. ",
            });
        
        if(password !== passwordVerify) 
            return res.status(400).json({
                errorMessage: "Passwords do not match!",
            });

        const existingUser = await User.findOne({email});
        if(existingUser)
            return res.status(400).json({
                errorMessage: "Account with this email already exists",
            });

    } catch(err) {
        console.log(err);
        res.status(500).send();
    }
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