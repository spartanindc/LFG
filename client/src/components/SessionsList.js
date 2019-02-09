import React from "react";
import { Component } from "react";

class SessionsList extends Component {
  componentDidMount() {}

  render() {
    let sessions = this.props.sessions.map((session, index) => (
      <div className="session" key={`session-${index}`}>
        <p>
          {session.sessionTitle}, playing {session.game.gameTitle}
        </p>
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    ));

    return (
      <div className="gameListContainer">
        <h2>List of sessions</h2>
        {sessions}
      </div>
    );
  }
}

export default SessionsList;
