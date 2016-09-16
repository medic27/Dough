import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom';
import DashBoard from './dashboard'
import Login from './login'
import Signup from './signup'
import Profile from './profile'
import Nav from './nav';
import Expense from './expense'
import Home from './home'
import Goals from './goals';
import UpdateIncome from './updateIncome';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home}/>
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/updateIncome" component={UpdateIncome} />
      <Route path="/profile" component={Profile} />
      <Route path="/expense" component={Expense} />
      <Route path="/goals" component={Goals} />
    </Route>
  </Router>
), document.getElementById('content'));

export default App;

