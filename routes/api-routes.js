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

    app.get("/api/users/all", function (req, res) {

        db.users.findAll({})
            .then(function (dbUsers) {
                res.json(dbUsers);
            });
    });

    app.post("/api/contact", function (req, res) {
        var name = req.body.name;
        var email = req.body.email;
        var comment = req.body.comment;

        db.contacts.create({
            name,
            email,
            comment
        }).then(function (dbContacts) {
            console.log(dbContacts);
        });
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

    app.get('/ticketmaster/:survey', function (req, res) {
        var thatone;
        var makeArray = new Array();
        db.users.findOne({
            where: {
                email: req.params.survey
            }
        }).then(function (answer) {
            console.log("ANWERS FIRST: " + answer.survey);
            //  convert string back to array
            thatone = answer.survey;
            makeArray = thatone.split(",");
            console.log("Array???", makeArray);

        // request('https://app.ticketmaster.com/discovery/v2/events.json?apikey=WfeuZCOCrGxOcUmDfuB6S0QApHBNvGKJ&city=atlanta&classificationName=' + thatone, function (error, response, body) {
        //     console.log('error:', error); // Print the error if one occurred
        //     console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
        //     newBody = JSON.parse(body);
        //     res.json(newBody);
        // }); // request close

            var requestMe = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=WfeuZCOCrGxOcUmDfuB6S0QApHBNvGKJ&city=atlanta&classificationName=";
            var allReq=[];

            for (var i = 0; i < makeArray.length; i++) {
                allReq.push(requestMe + makeArray[i]);
            }
            console.log(allReq);

            function httpGet(url, callback) {
                var options = {
                    url: url,
                    json: true
                };
                request(options,
                    function (err, res, body) {
                        callback(err, body);
                    });
            } // httpGet Close
            var async = require("async");
            async.map(allReq, httpGet, function (err, resp) {
                if (err) return console.log(err);
                console.log("RESP: ", resp);
                res.json(resp);
            });
        }); // then function close
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
        var useremail = req.params.email;
        var userchoices = req.body;
        console.log(useremail);
        console.log("choice", userchoices);
        console.log("choice", req.body.choices);

        db.users.update({
                survey: req.body.choices
            },
            {
                where: {
                    email: req.params.email
                }
            })
            .then(function (result) {
                // testing = testing

                res.redirect("/eventsToAttend");

                // console.log("survey log", user.survey);
                // console.log("email log", req.params.email);
                // console.log("testing log",  req.params.testing);
            })
    })


};