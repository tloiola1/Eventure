//Dependencies
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var db = require("./models");
var passport = require("passport");
//  ENV
var env = require("dotenv").load();

var PORT = process.env.PORT || 8080;// 

var app = express();

app.use(express.static('public'));

//  For Body Parser
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  For Passport
app.use(session({ secret: 'social',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//  For routes (auth)
var authRoute = require("./routes/auth.js")(app);


//Set handlebars
var expHbs = require('express-handlebars');

app.engine('handlebars', expHbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync(/*{force: true}*/).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});








