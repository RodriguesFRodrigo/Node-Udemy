const { Sequelize } = require('sequelize')

// Scheme, root user and password
const sequelize = new Sequelize('toughts2', 'root', 'Password', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log("Conectamos com sucesso!")
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`)
}

module.exports = sequelize