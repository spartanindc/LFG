"use strict";

const { Session } = require("../models/session");

module.exports = (app, passport) => {
  //Game session CRUD

  //GET list of all game sessions
  app.get("/sessions", (req, res) => {
    Session.find().then(sessions => {
      res.json(sessions.map(session => session.serialize()));
    });
  });

  //CREATE game session
  app.post("/sessions", (req, res) => {
    let newGameSession = req.body;
    newGameSession.user = req.user; //"" + req.user._id + "";
    Sessison.create(newGameSession, function(err, session) {
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

  app.post("/sessions/:id", (req, res) => {
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
  app.delete("/sessions/:id", (req, res) => {
    Session.findOneAndRemove({ _id: req.params.id }).then(() => {
      console.log(`deleted game session with id \`${req.params.id}\``);
      res.status(204).end();
    });
  });
};
