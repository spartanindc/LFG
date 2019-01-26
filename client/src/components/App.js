import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class App extends Component {
  state = {
    goingCrazy: true
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="center-align title">
            <h1>Looking for Gamers</h1>
          </div>
          <div className="">
            <p>
              Is your personal boardgame collection extensive, but your friends
              willing to play for 6 hours no-so-large? Find new, better,
              boardgaming friends with LFG!
            </p>
          </div>
          <Link to={"/login"}>Login</Link>
          <br />
          <Link to={"/signup"}>Signup</Link>
        </div>
        <footer role="contentinfo">
          <p>Created by David Alim</p>
          <a href="https://github.com/spartanindc/LFG">Github Repo</a>
        </footer>
      </div>
    );
  }
}

export default App;
