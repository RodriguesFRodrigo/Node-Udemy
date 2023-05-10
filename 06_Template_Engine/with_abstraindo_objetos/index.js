const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Setup handlebars
app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars");

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo vai te ensinar Node.js...",
    comments: 4
  }


  res.render("blogpost", { post })
})

// Rota Dashboard
app.get("/dashboard", (req, res) => {
  // Lista de items a ser enviada para o back-end
  const items = ["Item A", "Item B", "Item C"];

  res.render("dashboard", { items })
})

// Rota Home
app.get("/", (req, res) => {
  const user = {
    name: "Rodrigo",
    surname: "Rodrigues",
    age: 27
  };
  const auth = false;
  const approved = false;

  // Enviando dados para view
  res.render("home", { user: user, auth: auth, approved })
})

// Porta da aplicação
app.listen(3000, () => {
  console.log("App funcionando!")
})