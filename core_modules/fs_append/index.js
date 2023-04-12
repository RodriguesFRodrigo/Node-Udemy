
const http = require("http");
const fs = require("fs");
const url = require("url");

// Porta para acessar o servidor.
const porta = 3000;

// Criação do servidor.
// Código executado quando alguém acessa a porta 3000.
const server = http.createServer((req, res) => {
    const urlInfo = url.parse(req.url, true); // Informações da url.
    const name = urlInfo.query?.name || null; // Verifica se o input com o nome foi preenchido.

    if (!name) {
        fs.readFile("index.html", (err, data) => { // Retorna formulário.
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            return res.end();
        });
    } else { // Escreve no arquivo e redireciona.
        fs.appendFile("arquivo.txt", name + "\r\n", (err, data) => {
            res.writeHead(302, {
                Location: "/",
            });
            return res.end();
        });
    }
});

// Servidor executando na porta.
server.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
});