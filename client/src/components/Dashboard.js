import React from "react";
import { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import DashNav from "./DashNav";

class Dashboard extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="dashboard">
        <div classname="top-content">
          <h1>Dashboard</h1>
          <p>This is User Dashboard page</p>
        </div>
        <BrowserRouter>
          <DashNav />
        </BrowserRouter>
      </div>
    );
  }
}

export default Dashboard;
