import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="home-main">
      <video id="bgVideo" autoPlay loop>
        <source src="./client/coutingmoney.mp4" type="video/mp4" />
      </video>
        <div className="home-box">
          <h1>Dough!</h1>
          <h4>Where you track your dough</h4>
          <div className="home-buttons">
            <Link to="/signup">
            <div>

              Signup Today

            </div></Link>
            <Link to="/login">
            <div>

              Login

            </div>
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Home;
