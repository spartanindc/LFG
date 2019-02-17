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
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  {session.sessionTitle}, playing {session.game.gameTitle}
                </span>
                <p>{session.description}</p>
                <p>Complexity: {session.complexity}</p>
                <p>Looking for {session.playersNeeded} more players</p>
              </div>
              <div className="card-action">
                {this.userID === session.creator &&
                session.playersNeeded > 0 ? (
                  <button
                    className="btn"
                    type="button"
                    onClick={() => this.props.rsvpToSession(session._id)}
                  >
                    Sign up to play
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        );
      }
    });

    return (
      <div className="sessionListContainer col s6">
        <h4>List of sessions</h4>
        <button className="btn" onClick={this.toggleForm}>
          Create Session
        </button>
        {form}
        <ul className="row">{sessions}</ul>
        {this.props.parent === "dashboard" ? (
          <Link to="/sessions">View all {numberOfSessions} game sessions</Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SessionsList;
