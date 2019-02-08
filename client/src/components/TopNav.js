import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

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
