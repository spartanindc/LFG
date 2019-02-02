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
          <NavLink exact to="/login">
            Login
          </NavLink>
          <NavLink exact to="/signup">
            Sign Up
          </NavLink>
          <NavLink exact to="/dashboard">
            Dashboard
          </NavLink>
        </div>
      </div>
    );
  }
}

export default TopNav;
