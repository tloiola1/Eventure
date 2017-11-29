// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var passport = require("passport");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
      res.render('frontpage');
  });

  app.get("/signup", function(req, res) {
      res.render('signup');
  });

  app.get("/signin", function(req, res) {
      res.render('signin');
  });

  app.get("/events", function(req, res) {
      res.render('events');
  });

  app.get("/host", function(req, res) {
      res.render('host');
  });

//  Authenticate
  app.post("/login",
      passport.authenticate("local", { successRedirect: "/",
                                       failureRedirect: "login",
                                       failureFlash: true })
      );
};
