"use strict";

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");

const app = express();

const port = process.env.PORT || 3001;

//Express Setup
app.use(express.static("public"));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//Passport Setup
require("./config/passport");

//Configuration

const configDB = require("./config/database.js");
mongoose.connect(configDB.url);

//Routing

//Placeholder route
app.get("*", (req, res) => {
  res.json({ message: "Bonjour World!" });
});

app.listen(port);
console.log("Server is running at " + port);

//exports
module.exports = { app };
