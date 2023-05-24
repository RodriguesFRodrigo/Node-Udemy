const express = require("express");
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
// nome=Jo%C3%A3o&idade=30
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// parse application/json
app.use(bodyParser.json());

// Rotas - endpoints
app.get("/", (req, res) => {
  res.status(200).json(
    {
      message: "Primeira rota foi criada com sucesso!"
    }
  )
});

// Simulação de um post
app.post("/createmusic", (req, res) => {
  const title = req.body.title;
  const year = req.body.year;

  if (!title) {
    res.status(422).json("O campo title é obrigatório!");
    return;
  }
  if (!year) {
    res.status(422).json("O campo year é obrigatório!");
    return;
  }

  console.log(`Title: ${title}`);
  console.log(`Year: ${year}`);

  res.status(201).json("Produto foi criado com sucesso!");
});

app.listen(3000);