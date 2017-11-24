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

  // GET route for getting all of the Burgers
  // app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    // db.users.findAll({}).then(function(dbUser) {
      // We have access to the Burgers as an argument inside of the callback function
      // res.render('frontpage', {users: dbUser});
    // });
  // });

  // POST route for saving a new Burger
  app.post("/api/create", function(req, res, callback) {
    //validation not pass if input is empty
    // console.log(req);
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var category = req.body.category;
    
    db.users.create({
      name,
      email,
      password,
      category      
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // DELETE route for deleting Burgers. We can get the id of the Burger we want to delete from
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

  // PUT route for updating Burgers. We can get the updated Burger from req.body
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
};
