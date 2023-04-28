const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const basePath = path.join(__dirname, "templates"); // Junta o path atual com templates

// Rota que traz o formulário para ser preenchido
app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userForm.html`);
})

// Transforma os params da url em json
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// arquivos estáticos
app.use(express.static("public"));

// Trata a requisição post (dados vindos do formulário)
app.post("/users/save", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  console.log(`Gravando os dados ${name} e ${age} no banco de dados...`);
  res.sendFile(`${basePath}/userForm.html`);
})

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
})