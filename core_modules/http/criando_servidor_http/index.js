// Permite criar servidores http.

const http = require("http");

// Porta para acessar o servidor.
const porta = 3000;

// Criação do servidor.
const server = http.createServer((req, res) => {
    res.write("Oi Http"); // Escreve a resposta.
    res.end(); // Encerra a resposta.
});

// Servidor executando na porta.
server.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
});