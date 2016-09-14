var User = require('./user');
const Sequelize = require('sequelize');
var dbUrl = "postgres://apgubbip:e0G61f0aOteJCUOqGBK7H6glT7mHQp5N@elmer.db.elephantsql.com:5432/apgubbip";
const sequelize = new Sequelize(dbUrl);

const Goal = sequelize.define('goal', {
  budget: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.STRING
  },
  goal: {
    type: Sequelize.STRING
  },
  goaldate: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  }
});

sequelize.sync();

module.exports = Goal;