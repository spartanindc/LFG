"use strict";

// load all the things we need
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// load up the user model
const User = require("../api/models/user");

// expose this function to our app using module.exports
module.exports = function(passport) {
  // Passport session setup

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // LOCAL SIGNUP

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "username",
        emailField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, username, email, password, done) {
        // asynchronous
        // User.findOne will not fire unless data is sent back
        process.nextTick(function() {
          // find a user whose email is the same as the form's email
          // check to see if the user trying to signup already exists
          User.findOne({ "local.email": email }, function(err, user) {
            // if there are any errors, return the error
            if (err) return done(err);

            // check to see if theres already a user with that email
            if (user) {
              return done(
                null,
                false,
                req.flash("signupMessage", "That email is already in use.")
              );
            } else {
              // if there is no user with that email, create the user
              const newUser = new User();

              // set the user's local credentials
              newUser.local.username = username;
              newUser.local.email = email;
              newUser.local.password = newUser.generateHash(password);

              // save the user
              newUser.save(function(err) {
                if (err) throw err;
                return done(null, newUser);
              });
            }
          });
        });
      }
    )
  );

  // LOCAL LOGIN

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email" || "username",
        passwordField: "password"
      },
      function(email, password, cb) {
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        return User.findOne({ email, password })
          .then(user => {
            if (!user) {
              return cb(null, false, {
                message: "Incorrect email or password.  Try again or signup."
              });
            }
            return cb(null, user, {
              message: "Credentials confirmed -- Login successful"
            });
          })
          .catch(err => cb(err));
      }
    )
  );

  //JWT Strategy

  /*

  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: "your_jwt_secret"
      },
      function(jwtPayload, cb) {
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return User.findOneById(jwtPayload.id)
          .then(user => {
            return cb(null, user);
          })
          .catch(err => {
            return cb(err);
          });
      }
    )
  );
  */
};
