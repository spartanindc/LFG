"use strict";

// load the things we need
const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema({
  sessionTitle: String,
  gameTitle: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
  playersNeeded: Number,
  playersCommitted: Number,
  description: String,
  startTimeAndDate: String
});

sessionSchema.methods.serialize = function() {
  return {};
};

sessionSchema.pre("find", function() {
  this.populate("game");
});

sessionSchema.pre("findOne", function() {
  this.populate("game");
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = { Session };
