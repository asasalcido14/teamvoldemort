const express = require("express");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 8080;
const db = require("./models");
const app = express();

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
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
