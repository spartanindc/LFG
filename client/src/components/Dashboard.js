import React from "react";
import { Component } from "react";

import GameList from "./GameList";
import SessionsList from "./SessionsList";
import LFG from "./LFG";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="top-content">
          <h1>Dashboard</h1>
          <p>This is {this.props.localUserName}'s Dashboard page</p>
          <LFG {...this.props} />
        </div>
        <GameList
          user={this.props.localUser}
          games={this.props.games}
          parent="dashboard"
        />
        <SessionsList sessions={this.props.sessions} />
      </div>
    );
  }
}

export default Dashboard;
