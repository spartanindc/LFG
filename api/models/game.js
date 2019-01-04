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
    ref: 'User'
  }
});

gameSchema.methods.serialize = function() {
  return {
    id: this._id,
    gameTitle: this.gameTitle,
    players: `${this.minPlayers} to ${this.maxPlayers}`,
    description: this.description,
    complexity: this.complexity,
    user: this.user.username
  };
};

const Game = mongoose.model('Game', gameSchema);

module.exports = { Game };
