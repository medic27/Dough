import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router'
import $ from 'jquery';

export default class UpdateIncome extends React.Component {

  submit(e) {
    e.preventDefault();
    let postData = {};
    // console.log(localStorage.getItem('user'));
    let localUserObj = JSON.parse(localStorage.user);
    let user = localUserObj.username;
    let newIncome = e.target.elements[0].value;

    $.ajax({
      type: 'PUT',
      url: `http://localhost:3000/api/user/${user}/income`,
      data: JSON.stringify({newIncome: newIncome})
    });

    localUserObj.income = newIncome;
    localStorage.setItem('user', JSON.stringify(localUserObj));
    browserHistory.push('/dashboard');
  }

  render() {
    return (
      <div>
      <h1>Update Monthly Income</h1>
      <form onSubmit={this.submit}>
      <input type='text' placeholder='Enter amount' /> {' '}
      <input type='submit' />
      </form>
      </div>
    )
  }
}
