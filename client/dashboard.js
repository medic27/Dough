import React from 'react';
import ReactDOM from 'react-dom';
import Pie from './category_pie'
import TimeChart from './time_chart'
import ProgressBar from './progress_bar'
import Expense from './expense'
import Profile from './profile' 
import Nav from './nav'
import UpdateIncome from './updateIncome'
import {Router, Route, Link} from 'react-router'

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    let user = JSON.parse(localStorage.getItem("user")).username;
    user = user[0].toUpperCase() + user.substring(1)
    
    return (
      <div>
        <h2>{user}'s Expense Dashboard</h2>
        <h3 className="expenses">Expenses vs. Income</h3>
                <ProgressBar />
        <h3 className="expenses">Recent Expenses Breakdown</h3>
        <div className="flex">
         <TimeChart />
          <Pie />
        </div>
        <div>
        <UpdateIncome/>
        </div>
        <div id='expenseInput'>
          <Expense/>
          <Profile/>
        </div>
      </div>
    )
  }
}
    