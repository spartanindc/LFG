import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../App.css";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import Dashboard from "./Dashboard";
import Home from "./Home";
import SessionsList from "./SessionsList";
import GameList from "./GameList";
import NotFound from "./NotFound";

import TopNav from "./TopNav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem("userID") !== null,
      games: [],
      sessions: [],
      userGames: [],
      userSessions: [],
      localUser: localStorage.getItem("userID"),
      localUserName: localStorage.getItem("username")
    };
  }

  hydrateState() {
    this.setState({
      isLoggedIn: localStorage.getItem("userID") !== null,
      localUser: localStorage.getItem("userID")
    });
  }

  //Button functionality
  detailsBtn = () => {};

  editBtn = () => {};

  deleteBtn = () => {};

  rsvpToSession(sessionId) {
    // fetch call using sessionId & this.state.localUser
    console.log(`${this.state.localUser} RSVPd to ${sessionId}`);
    fetch("/rsvp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userID: this.state.localUser,
        sessionID: sessionId
      })
    })
      .then(res => res.json())
      .then(res => {
        fetch("/sessions").then(res => {
          res.json().then(sessionData => {
            this.setState({ sessions: sessionData });
          });
        });

        fetch(`/sessions/${this.state.localUser}`).then(res => {
          res.json().then(sessionData => {
            this.setState({ userSessions: sessionData });
          });
        });
      });
    // in call back, fetch sessions and setState again
  }

  componentDidMount() {
    //get games
    fetch("/games").then(res => {
      res.json().then(gameData => {
        this.setState({ games: gameData });
      });
    });

    fetch(`/games/${this.state.localUser}`).then(res => {
      res.json().then(gameData => {
        this.setState({ userGames: gameData });
      });
    });

    //get sessions
    fetch("/sessions").then(res => {
      res.json().then(sessionData => {
        this.setState({ sessions: sessionData });
      });
    });

    fetch(`/sessions/${this.state.localUser}`).then(res => {
      res.json().then(sessionData => {
        this.setState({ userSessions: sessionData });
      });
    });
  }

  render() {
    return (
      <div className="app">
        <TopNav isLoggedIn={this.state.isLoggedIn} />

        <div className="content container">
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
          <Route
            exact
            path="/dashboard"
            render={props => (
              <Dashboard
                {...props}
                {...this.state}
                rsvpToSession={sessionid => this.rsvpToSession(sessionid)}
                hydrateState={() => this.hydrateState()}
              />
            )}
          />
        </div>

        {this.state.isLoggedIn ? (
          <div className="dash-content">
            <Route
              exact
              path="/games"
              render={props => (
                <GameList
                  {...props}
                  {...this.state}
                  hydrateState={() => this.hydrateState()}
                  parent="app"
                />
              )}
            />
            <Route
              exact
              path="/sessions"
              render={props => (
                <SessionsList
                  {...props}
                  {...this.state}
                  hydrateState={() => this.hydrateState()}
                />
              )}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
