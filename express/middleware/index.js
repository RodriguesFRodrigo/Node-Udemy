const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const basePath = path.join(__dirname, "templates"); // Junta o path atual com templates

const checkAuth = function (req, res, next) {
    req.authStatus = false; // Teria uma lógica para descriptagrafar os dados e verificar o login.

    if (req.authStatus) {
        console.log("Usuário logado com sucesso.");
        next(); // Tomaria alguma ação, como redirecionar para home.
    } else {
        console.log("O usuário precisa estar logado para continuar.");
        next(); // Tomaria alguma ação, como redirecionar para uma página de login.
    }
}

// Usa middleware
app.use(checkAuth);

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`) // Seta automaticamenter o headerType
})

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
})