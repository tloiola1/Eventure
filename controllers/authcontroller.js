var exports = module.exports = {};

exports.signup = function(req, res) {
    res.render("signup");
};

exports.signin = function (req, res) {
    res.render("index");
};

exports.guest = function (req, res) {
    res.render("guest")
};

exports.logout = function(req,res){
    req.session.destroy(function(err) {
        res.redirect('/');
    });
};


