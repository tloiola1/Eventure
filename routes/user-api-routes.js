var db = require("../models");

module.exports = function(app) {

  app.get("/api/users", function(req, res) {
    
    db.User.findAll({
      // include: [db.Event]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for saving a new user
  app.post("/api/create/user", function(req, res) {
    console.log(req.body);

    db.Event.create({
      name: req.body.name,
      email: req.body.email,
      password: req.boby.password
    }).then(function(newUser){
      console.log("Success!!!!" + newUser);
    });
  });

  // app.delete("/api/delete/users/:id", function(req, res) {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });


};
