const express = require("express");
const {counter} = require('./counter');

const app = express();

app.get("/", (req, res) => {
  counterHome = counter("counterHome.json");

  res.end(
    `<h1>Home page</h1><p>Visits: ${counterHome.count}</p> <a href = "/about">To the page /about</a>`
  );
});

app.get("/about", (req, res) => {
  counterAbout = counter("counterAbout.json")

  res.end(
    `<h1>About</h1> <p>Visits: ${counterAbout.count}</p>  <a href = "/">To the home page</a>`
  );
});

const port = 3000;

app.listen(port);
