const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("connection established");
});

app.get("/send", (req, res) => {
  res.send("send us page");
});
app.get("/send", (req, res) => {
  res.send("send us page");
});
app.get("/send", (req, res) => {
  res.send("send us page");
console.log("outpur?");
console.log("outpur?");

console.log("testing");
console.log("testing");

app.listen().addListener(3000);
