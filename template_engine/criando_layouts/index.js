const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Setup handlebars
app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars");

// Rota Home
app.get("/", (req, res) => {
  res.render("home")
})

// Porta da aplicação
app.listen(3000, () => {
  console.log("App funcionando!")
})