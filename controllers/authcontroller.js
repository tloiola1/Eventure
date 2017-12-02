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

//??????
exports.events = function (req, res) {
    res.render("events")
};

exports.logout = function(req,res){
    req.session.destroy(function(err) {
        res.redirect('/');
    });
};


