const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const { request } = require("express");

// post users into database
router.post("/users", async (req, res, next) => {
    //res.send("post user route hit!!");

    const {userID, password, branch, username, email, phone} = req.body;

    try {

        //check 
        if(!userID || !password || !branch || !username || !email || !phone) {
            return res.status(400).json({
                success: false,
                error: "Please input all credentials"
            });
        }

        //check if existing user is in database
        const checkUser = await User.findOne({ email });

        if(checkUser) {
            return res.status(400).json({
                success: false,
                error: "Person with this email exists"
            });
        }

        const user = await User.create({
            userID,
            password,
            branch,
            username,
            email,
            phone,
        });

        return res.status(201).json({
            success: true,
            token: "kjsfhhj",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "sign in failed",
        })
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
    res.send("get route hit!!");
    // User.find({}, (error, data) => {
    //     if(error) {
    //         console.log(error)
    //     }
    //     else {
    //         res.json(data);
    //     }
    // });
});


//login route
router.post("/login", async (req, res) => {
    const {userID, password} = req.body;

    if(!userID || !password) {
        return res.status(400).json({
            success: false,
            error: "Please provide userID and Password"
        })
    }

    try {
        const user = await User.findOne({ userID }).select("+password");

        if(!user){
            return res.status(404).json({
                success: false,
                error: "Invalid credentials"
            });
        }

        const isMatch = await user.matchPasswords(password);

        if(!isMatch) {
            return res.status(404).json({
                success: false,
                error: "Invalid password"
            });
        }

        res.status(404).json({
            success: true,
            token: "kfhkshfksdjfhskfh",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Login failed"
        });
    }
})

module.exports = router;