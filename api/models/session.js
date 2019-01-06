"use strict";

// load the things we need
const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema({
  sessionTitle: String,
  gameToBePlayed: String,
  playersNeeded: Number,
  playersCommitted: Number,
  description: String,
  startTimeAndDate: String
});

sessionSchema.methods.serialize = function() {
  return {};
};

sessionSchema.pre("find", function() {
  this.populate("user");
});

sessionSchema.pre("findOne", function() {
  this.populate("user");
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = { Session };
