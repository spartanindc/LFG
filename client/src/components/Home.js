import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container center-align">
          <div className="center-align title">
            <h1>Looking for Gamers</h1>
          </div>
          <div className="desc">
            <p>
              Is your personal boardgame collection extensive, but your friends
              willing to play for 6 hours no-so-large? Find new, better,
              boardgaming friends with LFG!
            </p>
          </div>
          <Link className="btn green" to={"/login"}>
            Login
          </Link>
          <br />
          <Link className="btn green" to={"/signup"}>
            Signup
          </Link>
        </div>
        <footer role="contentinfo" className="center-align">
          <p>Created by David Alim</p>
          <a href="https://github.com/spartanindc/LFG">Github Repo</a>
        </footer>
      </div>
    );
  }
}

export default Home;
