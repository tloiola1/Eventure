var exports = module.exports = {};

exports.signup = function(req, res) {
    res.render("signup");
};

exports.signin = function (req, res) {
    res.render("index");
};

exports.guest = function (req, res) {
    res.render("guest");
    console.log("New User");
};

exports.logout = function(req,res){
    req.session.destroy(function(err) {
        res.redirect('/');
    });
};


