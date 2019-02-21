"use strict";

// load the things we need
const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  gameTitle: String,
  minPlayers: Number,
  maxPlayers: Number,
  description: String,
  complexity: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

gameSchema.virtual("players").get(function() {
  return `${this.minPlayers} to ${this.maxPlayers}`;
});

gameSchema.methods.serialize = function() {
  return {
    id: this._id,
    gameTitle: this.gameTitle,
    players: this.players,
    description: this.description,
    complexity: this.complexity
  };
};

gameSchema.pre("find", function() {
  this.populate("user");
});

gameSchema.pre("findOne", function() {
  this.populate("user");
});

const Game = mongoose.model("Game", gameSchema);

module.exports = { Game };
