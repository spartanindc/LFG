"use strict";

const { Game } = require("../models/game");
const { Session } = require("../models/session");

module.exports = (app, passport) => {
  // LOGIN
  // show the login form
  app.get("/login", (req, res) => {
    res.json({ user: req.user });
  });

  // process the login form
  app.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/:username", // redirect to the secure profile section
      failureRedirect: "/signup" // redirect back to the signup page if there is an error
    })
  );

  // SIGNUP
  // show the signup form
  app.get("/signup", (req, res) => {
    res.json({ user: req.user });
  });

  // process the signup form
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/login", // redirect to the secure profile section
      failureRedirect: "/signup" // redirect back to the signup page if there is an error
    })
  );

  //Game CRUD

  //GET list of all games
  app.get("/games", (req, res) => {
    Game.find().then(games => {
      res.json(games.map(game => game.serialize()));
    });
  });

  //GET a specific game
  app.get("/games/:id", (req, res) => {
    Game.findById(req.params.id, function(err, game) {
      res.json(game.serialize());
    });
  });

  //CREATE game
  app.post("/games", (req, res) => {
    let newGame = req.body;
    newGame.user = req.user; //"" + req.user._id + "";
    Game.create(newGame, function(err, game) {
      console.log(`"New game created: ${newGame.gameTitle}"`);
      if (err) {
        console.log(err);
      }
      res.json({ message: "Game Created!" });
    });
  });

  //UPDATE game

  app.post("/games/:id", (req, res) => {
    //Ensure valid request to update
    const requiredFields = [
      "gameTitle",
      "minPlayers",
      "maxPlayers",
      "description",
      "complexity",
      "id"
    ];
    for (let i = 0; i < requiredFields.length; i++) {
      const field = requiredFields[i];
      if (!(field in req.body)) {
        const message = `Missing \`${field}\` in request body`;
        console.error(message);
        return res.status(400).send(message);
      }
      if (req.params._id !== req.body._id) {
        const message = `Request path id (${
          req.params.id
        }) and request body id (${req.body.id}) must match`;
        console.error(message);
        return res.status(400).send(message);
      }
    }
    //Then update that game record
    const updated = {};
    const updateableFields = [
      "gametitle",
      "minPlayers",
      "maxPlayers",
      "description",
      "complexity"
    ];

    updateableFields.forEach(field => {
      if (field in req.body) {
        updated[field] = req.body[field];
      }
    });

    Game.findByIdAndUpdate(req.params.id, { $set: updated }, { new: true })
      .then(updatedGame => res.redirect("/games"))
      .catch(err => res.status(500).json({ message: "Something went wrong" }));

    console.log(
      `Updating Game id \`${req.params.id}\` aka \`${req.body.gameTitle}\``
    );
  });

  //DELETE game
  app.delete("/games/:id", isLoggedIn, (req, res) => {
    Game.findOneAndRemove({ _id: req.params.id }).then(() => {
      console.log(`deleted game with id \`${req.params.id}\``);
      res.status(204).end();
    });
  });

  //Game session CRUD

  //GET list of all game sessions
  app.get("/sessions", (req, res) => {
    Session.find().then(sessions => {
      res.json(sessions.map(session => session.serialize()));
    });
  });

  //GET a specific game session
  app.get("/sessions/:id", (req, res) => {
    Session.findById(req.params.id, function(err, session) {
      res.json(session.serialize());
    });
  });

  //CREATE game session
  app.post("/sessions", (req, res) => {
    let newGameSession = req.body;
    newGameSession.user = req.user; //"" + req.user._id + "";
    Session.create(newGameSession, function(err, session) {
      console.log(`"New game session created: ${newGameSession.sessionTitle}"`);
      if (err) {
        console.log(err);
      }
      res.json({
        message: "Game Session Created!",
        game: req.body.gameToBePlayed
      });
    });
  });

  //UPDATE game session

  app.post("/sessions/:id", isLoggedIn, (req, res) => {
    //Ensure valid request to update
    const requiredFields = [
      "sessionTitle",
      "gameToBePlayed",
      "playersNeeded",
      "playersCommitted",
      "description",
      "startTimeAndDate",
      "id"
    ];
    for (let i = 0; i < requiredFields.length; i++) {
      const field = requiredFields[i];
      if (!(field in req.body)) {
        const message = `Missing \`${field}\` in request body`;
        console.error(message);
        return res.status(400).send(message);
      }
      if (req.params._id !== req.body._id) {
        const message = `Request path id (${
          req.params.id
        }) and request body id (${req.body.id}) must match`;
        console.error(message);
        return res.status(400).send(message);
      }
    }
    //Then update that game session record
    const updated = {};
    const updateableFields = [
      "sessionTitle",
      "gameToBePlayed",
      "playersNeeded",
      "playersCommitted",
      "description",
      "startTimeAndDate"
    ];

    updateableFields.forEach(field => {
      if (field in req.body) {
        updated[field] = req.body[field];
      }
    });

    Session.findByIdAndUpdate(req.params.id, { $set: updated }, { new: true })
      .then(updatedGameSession => res.redirect("/sessions"))
      .catch(err => res.status(500).json({ message: "Something went wrong" }));

    console.log(
      `Updating Game Session id \`${req.params.id}\` aka \`${
        req.body.sessionTitle
      }\``
    );
  });

  //DELETE game session
  app.delete("/sessions/:id", isLoggedIn, (req, res) => {
    Session.findOneAndRemove({ _id: req.params.id }).then(() => {
      console.log(`deleted game session with id \`${req.params.id}\``);
      res.status(204).end();
    });
  });

  //DASHBOARD

  // GET Dashboard

  app.get("/:username", (req, res) => {
    res.json({ message: "It Works" });
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) return next();

  // if they aren't redirect them to the home page
  res.redirect("/login");
}
