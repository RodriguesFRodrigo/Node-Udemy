const express = require("express");
const exphbs = require("express-handlebars");
// Importa conexão ORM
const conn = require("./db/conn");
// Importação dos Models
const User = require("./models/User");

const app = express();

// Setup para transformar dados do POST em JSON
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Setup handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Setup dos arquivos estáticos
app.use(express.static("public"));

// Home
app.get("/", (req, res) => {
  res.render("home");
});

// Add User GET
app.get("/users/create", (req, res) => {
  res.render("adduser");
});

// Add User POST
app.post("/users/create", (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  const newsletter = req.body.newsletter === 'on' ? true : false;

  User.create({ name, occupation, newsletter });

  res.redirect("/");
});

conn
  .sync() // Só ouve a aplicação após as criações das tabelas
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => {
    console.log(err);
  })
