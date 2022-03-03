var express = require("express");
var app = express();
absolutePath = __dirname + relativePath / file.ext;

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

module.exports = app;
