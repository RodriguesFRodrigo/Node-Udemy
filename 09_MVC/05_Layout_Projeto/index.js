const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");
const Task = require("./models/Task");
const taskRoutes = require("./routes/taskRoutes");

// Setup, expres application
const app = express();

// Middleware, post to json
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Setup, handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Setup, static files
app.use(express.static("public"));

// Rotas Task
app.use("/tasks", taskRoutes);

conn
  .sync() // Wait creation tables
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
