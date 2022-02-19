const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("connection established");
});

app.get("/about", (req, res) => {
  res.send("about page");
});
app.get("/help", (req, res) => {
  res.send("Help page");
});

app.get("/login", (req, res) => {
  res.send("login page");
});
app.get("/signup", (req, res) => {
  res.send("Sign up page");
});
app.listen();
