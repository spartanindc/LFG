import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class LFG extends Component {
  render() {
    return (
      <div className="button-container">
        <div className="lfg">
          <p>Looking for games to play?</p>
          <Link to={"/sessions"} className="btn">
            Find Game Session
          </Link>
        </div>

        <div className="lfp">
          <p>Looking for Gamers?</p>
          <Link to={"/sessions"} className="btn">
            Create Game Session
          </Link>
        </div>
      </div>
    );
  }
}

export default LFG;
