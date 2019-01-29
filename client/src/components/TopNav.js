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
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </div>
    );
  }
}

export default TopNav;
