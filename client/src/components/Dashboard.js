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
          <h2>Dashboard</h2>
          <p>This is {this.props.localUserName}'s Dashboard page</p>
          <LFG />
        </div>
        <div className="row">
          <GameList games={this.props.games} parent="dashboard" />
          <SessionsList
            rsvpToSession={this.props.rsvpToSession}
            sessions={this.props.sessions}
            parent="dashboard"
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
