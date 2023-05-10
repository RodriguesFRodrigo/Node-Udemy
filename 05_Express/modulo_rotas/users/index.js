const express = require("express");

const path = require("path");
const basePath = path.join(__dirname, "../templates"); // Junta o path atual com templates

const router = express.Router();

// Rota que traz o formulário para ser preenchido
router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userForm.html`);
});

// Trata a requisição post (dados vindos do formulário)
router.post("/save", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  console.log(`Gravando os dados ${name} e ${age} no banco de dados...`);
  res.sendFile(`${basePath}/userForm.html`);
});

module.exports = router;
