var bCrypt = require("bcrypt-nodejs");

module.exports = function (passport, user) {
    var userInfo;
    var User = user;
    var LocalStrategy = require("passport-local").Strategy;

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id).then(function (user) {
            if(user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });


    passport.use("local-signup", new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        function (req, email, password, done) {
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            User.findOne( {where: { email: email}}).then(function (user) {
                if(user) {
                    return done(null, false, {message: "That email is associated with account."});
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                            email: email,
                            password: userPassword,
                            name: req.body.name,
                            dob: req.body.dob
                        };
                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, newUser);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));
//  local sign in
    passport.use("local-signin", new LocalStrategy(
        {
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function (req, email, password, done) {
            var User = user;
            var isValidPassword = function (userpass, password){
                return bCrypt.compareSync(password, userpass);
            };
            
            User.findOne({ where: { email: email}}).then(function (user) {
                if (!user) {
                    return done(null, false, { message: 'Email does not exist' });
                }

                if (!isValidPassword(user.password,password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                userInfo = user.get();
                var emailadd = userInfo.email;


                return done(null, userInfo);
            }).catch(function (err) {
                console.log("Error message: " + err);
                return done(null, false, { message: "There was an issue with your signin"});
            });
        }
    ));
};



// passport.use(new LocalStrategy(
//     function (username, password, done) {
//         User.findOne({username: username}, function (err, user) {
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 return done(null, false, {
//                     message: "Incorrect User Name!"
//                 });
//             }
//             if (!user.validPassword(password)) {
//                 return done(null, false, {
//                     messsage: "Incorrect Password"
//                 });
//             }
//             return done(null, user);
//         });
//     }
// ));
//
// module.exports = passport;

