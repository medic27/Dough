//goals-controller.js
'use strict'
const User = require('../models/user');
const expenses = require('../models/expenses');
const Goals = require('../models/goals');

function makeGoal(req, res) {
	User.create({
		budget: req.body.budget,
		goal: req.body.goal,
		goaldate: req.body.goaldate,
		username: req.body.username
	}).then(function(user) {
		res.status('200').json(user);
	}).catch(function(err) {
		console.log('error', err);
	});
}

// function getGoal(req, res) {
//  	User.find({ where: {
//     	goal: req.params.goal
//   	}
//   }).then(function(expense) {
// 		return res.status('200').json(expense);
// 	}).catch(function(err) {
// 		console.log('error', err);
// 	});
// }

module.exports = { makeGoal };