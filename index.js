const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("connection established");
});

app.get("/about", (req, res) => {
    res.send("about page");
  });

app.listen();