const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const User = require('./User')

const Tought = db.define('Tought', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
})

Tought.belongsTo(User) // Um pensamento pertence a um usuário
User.hasMany(Tought) // Um usuário tem vários pensamentos

module.exports = Tought