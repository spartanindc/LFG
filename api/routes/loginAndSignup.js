"use strict";

module.exports = (app, passport) => {
  // LOGIN
  // show the login form
  app.get("/login", (req, res) => {});

  // process the login form
  app.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/profile", // redirect to the secure profile section
      failureRedirect: "/login", // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    })
  );

  // SIGNUP
  // show the signup form
  app.get("/signup", (req, res) => {
    res.json({ message: "Hello World!" });
  });

  // process the signup form
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/signup", // redirect to the secure profile section
      failureRedirect: "/signup" // redirect back to the signup page if there is an error
    })
  );
};
