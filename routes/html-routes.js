// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get("/", function(req, res) {
    res.render('frontpage');
  });

  app.get("/events", function(req, res) {
    res.render("events");
  });

  app.get("/host", function(req, res) {
    res.render("host");
  });

  app.get("/manage", function(req, res) {
    res.render("manage");
  });
  // // blog route loads blog.html
  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

};
