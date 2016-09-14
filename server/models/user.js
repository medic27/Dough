// server/models/user.js
var Expenses = require('./expenses');
const Sequelize = require('sequelize');
const dbUrl = 'postgres://apgubbip:e0G61f0aOteJCUOqGBK7H6glT7mHQp5N@elmer.db.elephantsql.com:5432/apgubbip'
const sequelize = new Sequelize(dbUrl);

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  income: {
    type: Sequelize.STRING
  }
});

sequelize.sync();

module.exports = User;