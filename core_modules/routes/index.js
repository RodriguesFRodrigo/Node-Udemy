// Rotas são basicamente as páginas que acessamos no site.

const http = require("http");
const fs = require("fs");
const url = require("url");

// Porta para acessar o servidor.
const porta = 3000;

// Criação do servidor.
// Código executado quando alguém acessa a porta 3000.
const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true); // Informações da url.
  console.log("Query:", query);
  const filename = query.pathname.substring(1);
  console.log("filename:", filename);

  if (filename.includes("html")) { // Só renderiza arquivos .html.
    if (fs.existsSync(filename)) {
      fs.readFile(filename, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("404.html", (err, data) => {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write(data);
        return res.end();
      });
    }
  }
});

// Servidor executando na porta.
server.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});