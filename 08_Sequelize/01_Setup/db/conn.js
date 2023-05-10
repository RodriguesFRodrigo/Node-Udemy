const { Sequelize } = require("sequelize");

// Setup
const sequelize = new Sequelize(
  "nodemysql2",
  "root",
  "Password",
  {
    host: "localhost",
    dialect: "mysql"
  }
);

// Conexão
try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso com o Sequelize!");
} catch (err) {
  console.log("Não foi possível conectar: ", err);
}

module.exports = sequelize;