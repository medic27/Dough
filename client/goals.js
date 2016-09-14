import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router'
import $ from 'jquery';

export default class Goal extends React.Component {

  submit(e) {
    e.preventDefault();

    // const username = this.props.username;
		let goalObj = {}
    goalObj.amount = e.target.elements[0].value;
    goalObj.budget = e.target.elements[1].value;
		goalObj.desciption = e.target.elements[2].value;
    goalObj.date = e.target.elements[3].value;
    goalObj.category = e.target.elements[4].value;
    goalObj.username = JSON.parse(localStorage.getItem("user")).username;

		let username = JSON.parse(localStorage.getItem("user")).username;

		$.ajax({
	    type: 'POST',
	    url: 'http://localhost:3000/api/user/' + username + '/goals',
	    data: goalObj
	  })
	  .done(function(data) {
	  	console.log('expense saved')
	    $.ajax({
	    	type: 'GET',
	    	url: 'http://localhost:3000/api/user/' + username + '/goals'
	    })
	    .done(function(data) {
	    	console.log('expenses got', data)
	    	localStorage.setItem("expenses", JSON.stringify(data));
	    	console.log('local storage', localStorage.getItem("expenses"))
	    })
	  });
  }

  render() {
    return (
    	<div>
    		<h1>Add Expense</h1>
    		<form onSubmit={this.submit}>
    			<input placeholder="Enter amount" />
    			<input placeholder="Budget" />
    			<input placeholder="Goal Description" />
    			<input placeholder="Goal Date" />
    			<select name="Category">
						<option value="food">Food</option>
						<option value="bills">Bills</option>
						<option value="entertainment">Entertainment</option>
						<option value="home">Home</option>
						<option value="car">Car</option>
						<option value="college">College</option>
						<option value="other">Other</option>
					</select>
					<button type="submit" className="submit-button">Submit</button>
    		</form>
    	</div>
    )
  }
}
