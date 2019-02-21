"use strict";

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();

const port = process.env.PORT || 3001;

//Express Setup

app.use(morgan("common"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//Passport Setup
require("./config/passport")(passport);
app.use(session({ secret: "operationcantwaitanylonger" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Configuration

const configDB = require("./config/database.js");
mongoose.connect(configDB.url);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routing
require("./api/routes/routes.js")(app, passport);

app.listen(port);
console.log("Server is running at " + port);

//exports
module.exports = { app };
