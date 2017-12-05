// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
var request = require('request');
// Dependencies
// =============================================================

// Requiring our Burger model
var Dropbox = require("dropbox");
var db = require("../models");
var validator = require("validator");
// Routes
// =============================================================
module.exports = function(app) {

    // POST route for saving a new Burger
    app.post("/api/get/img", function () {
        console.log(window.location.href)


        // console.log("REQUIRE ##########################");

        // var Dropbox = require('dropbox');
        // var dbx = new Dropbox({ accessToken: 'EtE_0DzV-AcAAAAAAAADHAZ8rRB0huzoKTaJPx8VnxHVQmYH7yzVvVr989u9DFFk' });
        // dbx.filesListFolder({path: ''})
        //   .then(function(response) {
        //     console.log(response);
        //   })
        //   .catch(function(error) {
        //     console.log(error);
        //   });
    });
    // req.params.id
    app.delete("/api/delete/:id", function (req, res) {
        console.log(req);

        db.users.destroy({}).then(function (dbUser) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });
    });

    app.put("/api/update/:id", function (req, res) {
        console.log(req);

        db.users.update({}).then(function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });
    });

    app.get("/eventsToAttend", function (req, res) {

        db.events.findAll({})
            .then(function (dbEvents) {
                res.render("eventsToAttend", {events: dbEvents});
            });
    });


    app.get("/api/events/all", function (req, res) {

        db.events.findAll({})
            .then(function (dbEvents) {
                res.json(dbEvents);
            });
    });

    app.get("/api/users/all", function (req, res) {

        db.users.findAll({})
            .then(function (dbUsers) {
                res.json(dbUsers);
            });
    });

    app.post("/api/create/event", function (req, res) {
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
            .then(function (dbEvents) {
                console.log(dbEvents);
            })
    });

    app.get("/api/events/:category", function (req, res) {
        // console.log("#####################################");
        // console.log(req.params.category);
        db.events.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (dbEvents) {
            // console.log(dbEvents);
            res.json(dbEvents);
        });
    });

    app.get("/manage", function (req, res) {
        db.events.findAll({})
            .then(function (dbEvents) {
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


    // app.get('/findUser', function(req, res) {
    //     console.log(req.user.email);
    //     userEmail = req.user.email;
    //     db.users.findOne({
    //         where: {
    //             email: userEmail
    //         }
    //     }).then(function (answer) {
    //         console.log(answer.survey);
    //     });
    // });

    app.get('/ticketmaster/:survey', function (req, res) {
        var thatone;
        db.users.findOne({
            where: {
                email: req.params.survey
            }
        }).then(function (answer) {
            console.log("ANWERS FIRST: " + answer.survey);
            thatone = answer.survey;

        request('https://app.ticketmaster.com/discovery/v2/events.json?apikey=WfeuZCOCrGxOcUmDfuB6S0QApHBNvGKJ&city=atlanta&classificationName=' + thatone, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
            var newBody = JSON.parse(body);
            res.json(newBody);
        });
        });
    }); //ticketmaster close

    app.get('/profile/:email', function (req, res) {
        db.users.findOne({
            where: {
                email: req.params.email
            }
        }).then(function (user) {
            res.json(user);
        })
    });

    app.put("/api/survey/:email", function (req, res) {
        console.log(req.body);
        db.users.update(req.body.survey,
            {
                where: {
                    email: req.params.email
                }
            })
            .then(function (surveydb, testing) {
                // testing = testing

                res.redirect("/eventsToAttend");

                // console.log("survey log", user.survey);
                // console.log("email log", req.params.email);
                // console.log("testing log",  req.params.testing);
            })
    })


};