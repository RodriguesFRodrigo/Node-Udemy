const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Setup handlebars
app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars");

// Rota Home
app.get("/", (req, res) => {
  const user = {
    name: "Rodrigo",
    surname: "Rodrigues",
    age: 27
  };

  // Enviando dados para view
  res.render("home", { user: user })
})

// Porta da aplicação
app.listen(3000, () => {
  console.log("App funcionando!")
})