import React from "react";
import { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import AddGameForm from "./AddGameForm";
import CreateSessionForm from "./CreateSessionForm";
import LFG from "./LFG";

class DashNav extends Component {
  render() {
    return (
      <div className="dash-navbar">
        <div className="dash-links">
          <NavLink exact to="/lfg">
            Start
          </NavLink>
          <NavLink exact to="/addgame">
            Add a Game
          </NavLink>
          <NavLink exact to="/createsession">
            Create a Game Session
          </NavLink>
        </div>
        <div className="dash-content">
          <Route exact path="/lfg" component={LFG} />
          <Route exact path="/addgame" component={AddGameForm} />
          <Route exact path="/createsession" component={CreateSessionForm} />
        </div>
      </div>
    );
  }
}

export default DashNav;
