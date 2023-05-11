const express = require("express");
const exphbs = require("express-handlebars");
// Importa a conexão ORM
const conn = require("./db/conn");

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

app.listen(3000);
