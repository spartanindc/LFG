"use strict";

// load all the things we need
const LocalStrategy = require("passport-local").Strategy;

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
        emailField: "email",
        passwordField: "password",
        usernameField: "email",
        passReqToCallback: true
      },
      function(req, email, password, done) {
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
              return done(null, false, alert("That email is already in use."));
            } else {
              // if there is no user with that email, create the user
              const newUser = new User();

              // set the user's local credentials
              newUser.local.username = req.body.username;
              newUser.local.email = email;
              newUser.local.password = newUser.generateHash(password);

              // save the user
              newUser.save(function(err) {
                if (err) {
                  console.log(err);
                }
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
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      // callback with email and password from our form
      function(req, email, password, done) {
        // find a user whose email is the same as the form's email
        // check to see if the user trying to login already exists
        User.findOne({ "local.email": email }, function(err, user) {
          // if there are any errors, return the error before anything else
          if (err) return done(err);

          // if no user is found, return the message
          if (!user)
            return done(
              null,
              false,
              req.flash(
                "loginMessage",
                "No user found. Please try again or create an account"
              )
            );

          // if the user is found but the password is wrong
          if (!user.validPassword(password))
            return done(
              null,
              false,
              req.flash("loginMessage", "Oops! Wrong password.")
            );

          // all is well, return successful user
          return done(null, user);
        });
      }
    )
  );
};
