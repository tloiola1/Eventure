// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Burger model
var db = require("../models");
var validator = require("validator");
// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new Burger
  app.get("/api/find/user", function(req, res, callback) {
    console.log("REQUIRE ##########################");
    console.log(req.body);
    // var email = req.body.email;
    
    // db.users.create({
    //   name,
    //   email,
    //   password,
    //   category      
    // }).then(function(dbUser) {
    //   res.json(dbUser);
    // });
  });
  // req.params.id
  app.delete("/api/delete/:id", function(req, res) {
    console.log(req);

    db.users.destroy({

    }).then(function(dbUser){
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      else {
        res.status(200).end();
      }
    });
  });

  app.put("/api/update/:id", function(req, res) {
    console.log(req);

    db.users.update({
      
    }).then(function(result){
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } 
      else {
        res.status(200).end();
      }
    });
  });

  app.get("/eventsToAttend", function(req, res){
    
    db.events.findAll({

    })
    .then(function(dbEvents){
      res.render("eventsToAttend", {events: dbEvents});
    });
  });


  app.get("/api/events/all", function(req, res){

    db.events.findAll({})
    .then(function(dbEvents){
      res.json(dbEvents);
    });
  });

  app.get("/api/users/all", function(req, res){

    db.users.findAll({})
    .then(function(dbUsers){
      res.json(dbUsers);
    });
  });

  app.post("/api/create/event", function(req, res){
    var userId = req.body.userId;
    var name = req.body.name;
    var category = req.body.category;
    var description = req.body.description;

    db.events.create({
      name,
      category,
      description,
      userId
    })
    .then(function(dbEvents){
      console.log(dbEvents);
    })
  });

  app.get("/api/events/:category", function(req, res) {
    // console.log("#####################################");
    // console.log(req.params.category);
    db.events.findAll({
      where:{
        category: req.params.category
      }
    }).then(function(dbEvents) {
      // console.log(dbEvents);
      res.json(dbEvents);
    });
  });

  app.get("/manage", function(req, res) {
    db.events.findAll({

    })
    .then(function(dbEvents){
      res.render("manage", {events: dbEvents});
    });
    // console.log("##################################### User ID");
    // console.log(req.params.id);
    // db.events.findAll({
    //   where:{
    //     userId: req.params.id
    //   }
    // }).then(function(dbEvents) {
    //   console.log(dbEvents);
    //   res.render("manage", {events: dbEvents});
    // });
  });

    // //  Authenticate
    // app.post("/login",
    //     passport.authenticate("local", { successRedirect: "/",
    //         failureRedirect: "login",
    //         failureFlash: true })
    // );
};
