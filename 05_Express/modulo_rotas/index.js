const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const basePath = path.join(__dirname, "templates"); // Junta o path atual com templates
const usersRouter = require("./users");

// Transforma os params da url em json
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
