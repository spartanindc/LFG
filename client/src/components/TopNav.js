import React from "react";
import { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";

class TopNav extends Component {
  render() {
    return (
      <div className="navbar">
        <h2>LFG</h2>
        <div className="links">
          <NavLink exact to="/">
            Home
          </NavLink>
          {this.props.isLoggedIn ? (
            <NavLink exact to="/logout">
              Logout
            </NavLink>
          ) : (
            <NavLink exact to="/login">
              Login
            </NavLink>
          )}
          {this.props.isLoggedIn ? (
            <NavLink exact to="/dashboard">
              Dashboard
            </NavLink>
          ) : (
            <NavLink exact to="/signup">
              Signup
            </NavLink>
          )}
        </div>
      </div>
    );
  }
}

export default TopNav;
