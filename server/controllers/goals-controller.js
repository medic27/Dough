//goals-controller.js
'use strict'
const User = require('../models/user');
const expenses = require('../models/expenses');
const Goal = require('../models/goals');

function makeGoal(req, res) {
  console.log('req body', req.body);

  Goal.create({
    budget: req.body.budget,
    amount: req.body.amount,
    goal: req.body.desciption,
    goaldate: req.body.date,
    category: req.body.category,
    username: req.body.username
  }).then(function(goal) {
    res.status('200').json(goal);
  }).catch(function(err) {
    console.log('error', err);
  });
}

function getGoal(req, res) {
  Goal.findAll({
    where: {
      username: req.params.username
    }
  }).then(function(expense) {
    console.log(expense)
    return res.status('200').json(expense);
  }).catch(function(err) {
    console.log('error', err);
  });
}

module.exports = { makeGoal, getGoal };