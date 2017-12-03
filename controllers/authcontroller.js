var exports = module.exports = {};

exports.signup = function(req, res) {
    res.render("signup");
};

exports.signin = function (req, res) {
    res.render("index");
};

exports.guest = function (req, res) {
    res.render("guest");
};

exports.events = function (req, res) {
    res.render("eventsToAttend")
};

exports.profile = function (req, res) {
    res.render("profile");
};

exports.logout = function(req,res){
    req.session.destroy(function(err) {
        res.redirect('/');
    });
};


