import React from "react";
import { Component } from "react";

import GameList from "./GameList";
import SessionsList from "./SessionsList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="top-content center-align">
          <h1>Dashboard</h1>
          <span>This is {this.props.localUserName}'s Dashboard page</span>
        </div>
        <div className="row">
          <GameList games={this.props.games} parent="dashboard" />
          <SessionsList
            rsvpToSession={this.props.rsvpToSession}
            sessions={this.props.sessions}
            user={this.props.localUser}
            parent="dashboard"
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
