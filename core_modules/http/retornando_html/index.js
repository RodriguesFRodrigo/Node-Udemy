// Podemos adicionar um statusCode no retorno.
// Mudar os headers para text/html.

const http = require("http");

// Porta para acessar o servidor.
const porta = 3000;

// Criação do servidor.
// Código executado quando alguém acessa a porta 3000.
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.statusMessage = "HTML retornado com sucess.";
    res.end("<h1>Meu primeiro servidor com HTML!</h1>"); // HTML retornando no end.
});

// Servidor executando na porta.
server.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
});