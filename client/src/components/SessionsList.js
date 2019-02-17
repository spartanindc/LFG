import React from "react";
import { Component } from "react";
import SessionForm from "./SessionForm";
import { Link } from "react-router-dom";

class SessionsList extends Component {
  state = {
    displaySessionForm: false
  };

  toggleForm = () => {
    this.setState({
      displaySessionForm: !this.state.displaySessionForm
    });
  };

  componentDidMount() {}

  render() {
    let form =
      this.state.displaySessionForm === true ? (
        <SessionForm toggleForm={this.toggleForm} />
      ) : (
        ""
      );

    let numberOfSessions = this.props.sessions.length;
    let max = this.props.parent === "dashboard" ? 5 : this.props.games.length;
    let sessions = this.props.sessions.map((session, index) => {
      if (index < max) {
        return (
          <div
            className={`col s12 ${
              this.props.parent !== "dashboard" ? "m6" : ""
            }`}
            key={`session-${index}`}
          >
            <div className="card">
              <div className="card-content white-text">
                {this.props.parent === "dashboard" ? (
                  <img
                    src="./images/game-session.png"
                    alt="two people playing a board game"
                  />
                ) : (
                  ""
                )}
                <div className="center-align">
                  <span className="title">"{session.sessionTitle}"</span>
                  <p className="game-title">playing {session.game.gameTitle}</p>
                </div>
                <p>Time & Date: {session.startTimeAndDate}</p>
                <p>{session.description}</p>
                <p>
                  Looking for {session.playersNeeded} more{" "}
                  {session.playersNeeded < 2 ? "player" : "players"}{" "}
                </p>
              </div>
              <div className="card-action center-align">
                {this.props.user !== session.creator &&
                session.playersNeeded > 0 ? (
                  <button
                    className="btn"
                    type="button"
                    onClick={() => this.props.rsvpToSession(session._id)}
                  >
                    Sign up to play
                  </button>
                ) : (
                  <span className="orange-text text-lighten-1">
                    You created this session
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      }
    });

    return (
      <div className="sessionListContainer col s12 m6">
        <div className="center-align">
          <h4>
            <img
              src="./images/game-session.png"
              alt="two people playing a board game"
            />
            Game Sessions
          </h4>
          <button className="btn" onClick={this.toggleForm}>
            Create Session
          </button>
        </div>
        {form}
        <div className="row">{sessions}</div>
        <div className="center-align view-link">
          {this.props.parent === "dashboard" ? (
            <Link to="/sessions">
              View all {numberOfSessions} game sessions
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default SessionsList;
