import React from "react";
import { Component } from "react";

import DashNav from "./DashNav";
import GameList from "./GameList";

class Dashboard extends Component {
  state = {
    games: {},
    sessions: {},
    userGames: {},
    userSessions: {}
  };

  componentDidMount() {
    //get games
    /*fetch("/games").then(res => {
      res.json().then(data => {});
    });

    //get sessions
    fetch("/sessions").then(res => {
      res.json().then(data => {});
    });*/
  }
  render() {
    return (
      <div className="dashboard">
        <div className="top-content">
          <h1>Dashboard</h1>
          <p>This is User Dashboard page</p>
        </div>
        <DashNav />
        <GameList />
      </div>
    );
  }
}

export default Dashboard;
