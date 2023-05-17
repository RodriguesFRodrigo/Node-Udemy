const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");

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

app.listen(3000);
