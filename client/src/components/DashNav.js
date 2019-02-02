import React from "react";
import { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";

class DashNav extends Component {
  render() {
    return (
      <div className="dash-navbar">
        <div className="dash-links">
          <NavLink exact to="/lfg">
            Start
          </NavLink>
          <div>
            <p>Games</p>
            <NavLink exact to="/games">
              Game List
            </NavLink>
            <NavLink exact to="/addgame">
              Add a Game
            </NavLink>
          </div>
          <div>
            <p>Game Sessions</p>
            <p>
              <Link to="/edit-session/107381739817">Edit Session</Link>
            </p>
            <NavLink exact to="/createsession">
              Create Game Session
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default DashNav;
