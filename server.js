"use strict";

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");

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
require("./config/passport")(passport);
app.use(session({ secret: "operationcantwaitanylonger" }));
app.use(passport.initialize());
app.use(passport.session());

const auth = require("./config/auth");
//app.use("/auth", auth);

//Configuration

const configDB = require("./config/database.js");
mongoose.connect(configDB.url);

//Routing
require("./api/routes/routes.js")(app, passport);

app.listen(port);
console.log("Server is running at " + port);

//exports
module.exports = { app };
