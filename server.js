const express = require("express");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 8080;
const db = require("./models");
const app = express();

app.use(express.static("client/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "epsteinDidntKillHimself",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("routes");

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
