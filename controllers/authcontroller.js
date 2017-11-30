var exports = module.exports = {};

exports.signup = function(req, res) {
    res.render("signup");
};

exports.signin = function (req, res) {
    res.render("signin");
};

exports.guest = function (req, res) {
    res.render("guest")
};

exports.host = function (req,res) {
    res.render("host") // or "eventsToHost
};

exports.logout = function(req,res){
    req.session.destroy(function(err) {
        res.redirect('/');
    });
};


