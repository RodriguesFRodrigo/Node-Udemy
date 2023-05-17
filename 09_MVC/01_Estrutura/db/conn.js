const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemysql2", "root", "Password", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conexão estabelecida com sucesso ao MySQL!");
} catch (error) {
  console.log(`Não foi possível conectar ${error}`);
}

exports.default = sequelize;