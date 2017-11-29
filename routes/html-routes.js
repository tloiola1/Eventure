// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get("/eventsToHost", function(req, res) {
    res.render("eventsToHost");
  });

  app.get("/eventsToAttend", function(req, res) {
    res.render("eventsToAttend");
  });

  app.get("/host", function(req, res) {
    res.render("host");
  });

  app.get("/guest", function(req, res) {
    res.render("guest");
  });

  app.get("/contact", function(req, res) {
    res.render("contact");
  });
  // // blog route loads blog.html
  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

};
