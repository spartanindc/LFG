import React from "react";
import { Component } from "react";

const gamesOwnedButton = () => {
  console.log("Games Owned button clicked");
};

const upcomingSessionsButton = () => {
  console.log("Upcoming game sessions button clicked");
};

const pastSessionsButton = () => {
  console.log("past game sessions button clicked");
};

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <button onClick={gamesOwnedButton}>Games Owned</button>

        <button onClick={upcomingSessionsButton}>Upcoming Game Sessions</button>

        <button onClick={pastSessionsButton}>Past Game Sessions</button>
      </div>
    );
  }
}

export default Nav;
