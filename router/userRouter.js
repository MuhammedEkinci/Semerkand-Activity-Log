
const User = require("../models/Users");
const passport = require("../config/passport");

module.exports = function(app) {

    app.post("/api/signin", function(req, res) {
        //res.send("post user route hit!!");

        // signup users into database
        const {userID, password, branch, username, email, phone} = req.body;

        const user = User.create({
            userID,
            password,
            branch,
            username,
            email,
            phone,
        })

        user.save()
    });

    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });
};

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

        sendToken(user, 200, res);

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Login failed"
        });
    }
})
