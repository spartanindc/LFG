import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class TopNav extends Component {
  render() {
    return (
      <nav className="navbar green">
        <a href="#" className="brand-link left">
          LFG
        </a>
        <ul className="links right">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          {this.props.isLoggedIn ? (
            <li>
              <NavLink exact to="/dashboard">
                Dashboard
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink exact to="/signup">
                Signup
              </NavLink>
            </li>
          )}
          {this.props.isLoggedIn ? (
            <li>
              <NavLink exact to="/logout">
                Logout
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink exact to="/login">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default TopNav;
