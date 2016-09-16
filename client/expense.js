import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router'
import $ from 'jquery';

export default class Expense extends React.Component {
	refreshData() {
    const username = JSON.parse(localStorage.getItem('user')).username;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/user/' + username + '/expense'
    })
    .done(function(data) {
      document.getElementById('expenses-list').innerHTML = '';
      data.forEach((exp) => {
        if(exp.recurring === false) {
          let listElem = document.createElement('div');
          listElem.innerHTML = exp.category + '  $' + exp.amount;
          document.getElementById('expenses-list').appendChild(listElem);
        }
      })
    })    
  }

  submit(e) {
    e.preventDefault();

    const amount = e.target.elements[0].value;
    const category = e.target.elements[1].value;
    // const username = this.props.username;
    const username = JSON.parse(localStorage.getItem("user")).username;

    const expenseData = {
    	amount: amount,
    	category: category,
    	username: username,
			recurring: false
    }

		$.ajax({
	    type: 'POST',
	    url: 'http://localhost:3000/api/user/' + username + '/expense',
	    data: expenseData
	  })
	  .done(function(data) {
	  	console.log('expense saved')
	    $.ajax({
	    	type: 'GET',
	    	url: 'http://localhost:3000/api/user/' + username + '/expense'
	    })
	    .done(function(data) {
				document.getElementById('expenses-list').innerHTML = '';
        data.forEach((exp) => {
          if(exp.recurring === false) {
            let listElem = document.createElement('div');
            listElem.innerHTML = exp.category + '  $' + exp.amount;
            document.getElementById('expenses-list').appendChild(listElem);
          }
        })
        localStorage.setItem("expenses", JSON.stringify(data));
      }) 
	  });

    //resets field
    e.target.elements[0].value = "";
    browserHistory.push('/dashboard');
  }

  render() {
    console.log('render ran');
		this.refreshData();
    return (
    	<div id='singleExpense'>
    		<h1>Add Expense</h1>
    		<form onSubmit={this.submit}>
    			<input placeholder="Enter amount" />
    			<select name="Category">
						<option value="food">Food</option>
						<option value="bills">Bills</option>
						<option value="entertainment">Entertainment</option>
						<option value="other">Other</option>
					</select>
					<button type="submit" className="submit-button">Submit</button>
    		</form>
				<div id='expenses-list'>
				</div>
    	</div>
    )
  }
}
