const { Game } = require("../models/game");

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

  //Game CRUD

  //GET list of all games
  app.get("/games", (req, res) => {
    Game.find().then(games => {
      res.json(games.map(game => game.serialize()));
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
  app.delete("/games/:id", (req, res) => {
    Game.findOneAndRemove({ _id: req.params.id }).then(() => {
      console.log(`deleted game with id \`${req.params.id}\``);
      res.status(204).end();
    });
  });
};
