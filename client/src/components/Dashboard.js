import React from "react";
import { Component } from "react";

import DashNav from "./DashNav";
import GameList from "./GameList";

class Dashboard extends Component {
  state = {
    games: {},
    sessions: {},
    userGames: {},
    userSessions: {},
    localUser: localStorage.getItem("userID")
  };

  componentDidMount() {
    //get games
    fetch("/games").then(res => {
      res.json().then(gameData => {
        this.setState({ games: gameData });
      });
    });

    //get sessions
    fetch("/sessions").then(res => {
      res.json().then(sessionData => {
        this.setState({ sessions: sessionData });
      });
    });
  }
  render() {
    return (
      <div className="dashboard">
        <div className="top-content">
          <h1>Dashboard</h1>
          <p>This is User Dashboard page</p>
        </div>
        <DashNav />
        <GameList games={this.state.games} />
      </div>
    );
  }
}

export default Dashboard;
