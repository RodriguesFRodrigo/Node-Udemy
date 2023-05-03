const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

// Setup handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Setup arquivos estáticos
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

// Conexão MySQL
const conn = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Password",
    database: "nodemysql2"
  }
);

conn.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Conexão com o MySQL estabelecida!");
    app.listen(3000);
  }
})