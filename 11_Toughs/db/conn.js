const { Sequelize } = require('sequelize')

// database, username and password
const sequelize = new Sequelize('toughts2', 'root', 'Password', {
  host: 'localhost', // IP
  dialect: 'mysql',
})

// Testando a conexão
try {
  await sequelize.authenticate()
  console.log("Conectamos com sucesso!")
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`)
}

module.exports = sequelize