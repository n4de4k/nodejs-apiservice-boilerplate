const sequelize = require('../helpers/db')
const { STRING } = require('sequelize')

const User = sequelize.define(
  'users',
  {
    firstname: STRING,
  },
  {
    freezeTableName: true,
  }
)

module.exports = User
