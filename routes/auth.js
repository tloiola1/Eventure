var authController = require("../controllers/authcontroller.js");

module.exports = function (app, passport) {

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        authController.signin(req,res,next);
    }

    app.get("/signup", authController.signup);
    //  next is function(req, res)......
    app.get("/", isLoggedIn, function(req, res) { res.redirect('/eventsToAttend')});

    //  where redirect when signup success???? Also change below if different
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/guest",
        failureRedirect: "/signup"
        }
    ));

    app.get("/guest", isLoggedIn, authController.guest);

    app.get("/profile", isLoggedIn, authController.profile);

    app.get("/eventsToAttend", isLoggedIn, authController.events);
    app.get("/logout", authController.logout);

    app.post("/signin", passport.authenticate("local-signin", {
        successRedirect: "/profile",
        failureRedirect: "/signup"
        }
    ));
};

