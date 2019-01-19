import React from "react";
import { Component } from "react";

class LFG extends Component {
  render() {
    return (
      <div className="button-container">
        <div className="lfg button">
          <p>Looking for games to play?</p>
          <button>Find Game Session</button>
        </div>

        <div className="lfp button">
          <p>Looking for Gamers?</p>
          <button>Create Game Session</button>
        </div>
      </div>
    );
  }
}

export default LFG;
