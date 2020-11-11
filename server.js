const express = require("express");
const session = require("express-session");
const path = require("path");
const port = process.env.PORT || 8080;
const db = require("./models");
const app = express();

app.use(express.static("./client/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "epsteinDidntKillHimself",
    resave: true,
    saveUninitialized: true,
  })
);

const routes = require("./controllers");
app.use(routes);

db.sequelize.sync().then(function () {
  app.listen(port, function () {
    console.log("App listening on port " + PORT);
  });
});
