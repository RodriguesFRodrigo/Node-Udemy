
const http = require("http");
const url = require("url");

// Porta para acessar o servidor.
const porta = 3000;

// Criação do servidor.
// Código executado quando alguém acessa a porta 3000.
const server = http.createServer((req, res) => {
    const urlInfo = url.parse(req.url, true); // Informações da url.
    const name = urlInfo.query?.name || null; // Verifica se o input com o nome foi preenchido.

    console.log("urlInfo:", urlInfo);
    console.log("name:", name);

    res.statusCode = 200;
    res.statusMessage = "HTML retornado com sucess.";

    if (!name) { // Nome não foi preenchido.
        res.end(`
            <h1>Preencha seu nome:</h1>
            <form method="GET">
                <input type="text" name="name" placeholder="Escreva seu nome"/>
                <input type="submit" value="Enviar"/>
            </form>
        `);
    } else { // Nome foi preenchido.
        res.end(`
            <h1>Seja bem-vindo ${name}</h1>
        `);
    }
});

// Servidor executando na porta.
server.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
});