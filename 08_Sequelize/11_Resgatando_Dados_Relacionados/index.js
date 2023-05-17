const express = require("express");
const exphbs = require("express-handlebars");
// Importa conexão ORM
const conn = require("./db/conn");
// Importação dos Models
const User = require("./models/User");
const Address = require("./models/Address");

const app = express();

// Setup para transformar dados do POST em JSON
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Setup handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Setup dos arquivos estáticos
app.use(express.static("public"));

// Home
app.get("/", async (req, res) => {
  // raw: true, transforma os dados em um array de objetos
  const users = await User.findAll({ raw: true });

  console.log(users);

  res.render("home", { users });
});

// Add User GET
app.get("/users/create", (req, res) => {
  res.render("adduser");
});

// Add User POST
app.post("/users/create", (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  const newsletter = req.body.newsletter === "on" ? true : false;

  User.create({ name, occupation, newsletter });

  res.redirect("/");
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  // findOne filtra por dados específicos
  // Os campos usados para filtrar dados são informados no where
  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("userview", { user });
});

app.post("/users/delete/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.destroy({ where: { id: id } });

  res.redirect("/");
});

// app.get("/users/edit/:id", async (req, res) => {
//   const id = req.params.id;

//   const user = await User.findOne({ raw: true, where: { id: id } });

//   res.render("useredit", { user });
// });

app.post("/users/update", async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  const newsletter = req.body.newsletter === "on" ? true : false;
  const data = { id, name, occupation, newsletter };

  await User.update(data, { where: { id: id } });

  res.redirect("/");
});

// ----- Relacionamentos -----

// Create
app.post("/address/create", async (req, res) => {
  const UserId = req.body.UserId; // chave-primaria do relacionamento
  const street = req.body.street;
  const number = req.body.number;
  const city = req.body.city;
  const data = { UserId, street, number, city };

  await Address.create(data);

  res.redirect(`/users/edit/${UserId}`);
});

// Insert
app.get("/users/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ include: Address, where: { id: id } });
    console.log("logger: ", user);
    res.render("useredit", { user: user.get({ plain: true }) });
  } catch (error) {
    console.log(error);
  }
});

// Delete

conn
  .sync() // Só ouve a aplicação após as criações das tabelas
  //.sync({ force: true }) // Reseta as tabelas não utilizar em PRD
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
