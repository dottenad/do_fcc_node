var express = require("express");
var app = express();
require("dotenv").config();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  var response = "Hello json".toUpperCase();
  if (process.env.VAR_NAME === "allCaps") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json";
  }
});

module.exports = app;
