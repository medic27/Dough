var User = require('./user');
const Sequelize = require('sequelize');
var dbUrl = "postgres://apgubbip:e0G61f0aOteJCUOqGBK7H6glT7mHQp5N@elmer.db.elephantsql.com:5432/apgubbip";
const sequelize = new Sequelize(dbUrl);

const Expenses = sequelize.define('expenses', {
  title: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.STRING
  },
  recurring: {
    type: Sequelize.BOOLEAN
  },
  username: {
    type: Sequelize.STRING
  }
});

sequelize.sync()

module.exports = Expenses;