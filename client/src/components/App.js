import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../App.css";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import Dashboard from "./Dashboard";
import Home from "./Home";
import AddGameForm from "./AddGameForm";
import SessionForm from "./SessionForm";
import LFG from "./LFG";
import GameList from "./GameList";
import DashNav from "./DashNav";

import TopNav from "./TopNav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem("userID") !== null
    };
  }

  hydrateState() {
    this.setState({
      isLoggedIn: localStorage.getItem("userID") !== null
    });
  }

  render() {
    return (
      <div className="app">
        <TopNav isLoggedIn={this.state.isLoggedIn} />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                hydrateState={() => this.hydrateState()}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <Signup
                {...props}
                hydrateState={() => this.hydrateState()}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />
          <Route
            exact
            path="/logout"
            render={props => (
              <Logout
                {...props}
                hydrateState={() => this.hydrateState()}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
        {this.state.isLoggedIn ? <DashNav /> : ""}
        {this.state.isLoggedIn ? (
          <div className="dash-content">
            <Route exact path="/lfg" component={LFG} />
            <Route exact path="/dashboard/games" component={GameList} />
            <Route exact path="/addgame" component={AddGameForm} />
            <Route exact path="/createsession" component={SessionForm} />
            <Route path="/edit-session/:id" component={SessionForm} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
