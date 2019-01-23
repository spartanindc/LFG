import React from "react";
import { Component } from "react";
import Nav from "./Nav";
import LFG from "./LFG";
import AddGameForm from "./AddGameForm";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>This is the User Dashboard page</p>
        <Nav />
        <LFG />
        <AddGameForm />
      </div>
    );
  }
}

export default Dashboard;
