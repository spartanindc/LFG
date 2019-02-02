import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../App.css";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import AddGameForm from "./AddGameForm";
import CreateSessionForm from "./CreateSessionForm";
import LFG from "./LFG";
import GameList from "./GameList";
import DashNav from "./DashNav";

import TopNav from "./TopNav";

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopNav />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
        <DashNav />
        <div className="dash-content">
          <Route exact path="/lfg" component={LFG} />
          <Route exact path="/games" component={GameList} />
          <Route exact path="/addgame" component={AddGameForm} />
          <Route exact path="/createsession" component={CreateSessionForm} />
          <Route path="/edit-session/:id" component={CreateSessionForm} />
        </div>
      </div>
    );
  }
}

export default App;
