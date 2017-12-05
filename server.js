//Dependencies
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var db = require("./models");
var passport = require("passport");
var PORT = process.env.PORT || 8080;//
var app = express();

//  ENV
var env = require("dotenv").load();


//  passport strategies
require("./config/passport/passport.js")(passport, db.users);



//Set handlebars
var expHbs = require('express-handlebars');



app.use(express.static('./public'));

//  For Body Parser
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  For Passport
app.use(session({ secret: 'social',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.engine('handlebars', expHbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Routes
// =============================================================
//  For routes (auth)
require("./routes/auth.js")(app, passport);
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});








