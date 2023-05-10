const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const basePath = path.join(__dirname, "templates"); // Junta o path atual com templates

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`) // Seta automaticamenter o headerType
})

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
})