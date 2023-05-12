const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Não permite valores nulos
  },
  occupation: {
    type: DataTypes.STRING,
    required: true, // Não permite qualquer tipo de valor vazio incluindo valores nulos
  },
  newsletter: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = User;