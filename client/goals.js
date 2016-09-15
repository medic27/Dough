import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import BudgetBar from './budget_bar';
import GoalChart from './goals_chart';

import $ from 'jquery';

export default class Goal extends React.Component {

  submit(e) {
    e.preventDefault();

    // const username = this.props.username;
		let goalObj = {}
    goalObj.budget = e.target.elements[0].value;
    goalObj.amount = e.target.elements[1].value;
		goalObj.desciption = e.target.elements[2].value;
    goalObj.date = e.target.elements[3].value;
    goalObj.category = e.target.elements[4].value;
    goalObj.username = JSON.parse(localStorage.getItem("user")).username;

		let username = JSON.parse(localStorage.getItem("user")).username;
		console.log('goalObj', goalObj);
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/api/user/' + username + '/goals',
			data: goalObj
		})
			.done(function (data) {
				console.log('goals saved')
				$.ajax({
					type: 'GET',
					url: 'http://localhost:3000/api/user/' + username + '/goals'
				})
					.done(function (data) {
						console.log('goals got', data)
						localStorage.setItem("goals", JSON.stringify(data));
						console.log('local storage', localStorage.getItem("goals"))
					})
			});
  }

  render() {
    return (
			<div>
				<form onSubmit={this.submit}>
					<h1>Budget</h1>
					<input placeholder="Budget" />
					<h1>Add Goal</h1>
					<input placeholder="Enter amount" />
					<input placeholder="Goal Description" />
					<input type="date" placeholder="Goal Date" />
					<select name="Category">
						<option value="home">Home</option>
						<option value="car">Car</option>
						<option value="college">College</option>
						<option value="yacht">Yacht</option>
						<option value="diamonds">Diamonds</option>
						<option value="cat">Cat</option>
						<option value="other">Other</option>
					</select>

					<button type="submit" className="submit-button">Submit</button>
				</form>
				<h2>Budget Progress</h2>
				<BudgetBar />
			</div>
    )
  }
}

				// <GoalChart />
