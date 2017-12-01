var authController = require("../controllers/authcontroller.js");

module.exports = function (app, passport) {
    app.get("/signup", authController.signup);
    app.get("/signin", authController.signin);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }

    //  where redirect when signup success???? Also change below if different
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/guest",
        failureRedirect: "/signup"
        }
    ));

    app.get("/events", isLoggedIn, authController.guest);
    app.get("/logout", authController.logout);

    app.post("/signin", passport.authenticate("local-signin", {
        successRedirect: "/events",
        failureRedirect: "/signin"
        }
    ));
};

