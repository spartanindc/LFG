import React from "react";
import { Component } from "react";
import SessionForm from "./SessionForm";

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
        <SessionForm user={this.props.user} />
      ) : (
        ""
      );

    let sessions = this.props.sessions.map((session, index) => (
      <div className="session collection-item" key={`session-${index}`}>
        <p>
          {session.sessionTitle}, playing {session.game.gameTitle} <br />
        </p>
        <div className="details">
          <p>{session.description}</p>
          <p>{session.playersCommitted} players have signed up</p>
          <p>Looking for {session.playersNeeded} more players</p>
        </div>
        {this.userID === session.creator && session.playersNeeded > 0 ? (
          <button
            type="button"
            onClick={() => this.props.rsvpToSession(session._id)}
          >
            Sign up to play
          </button>
        ) : (
          // when clicked, calls a method that would fetch a post route
          // sending the user that clicked it, and the id of the session
          // on the route, you would store that RSVP and decrement session.playersNeeded
          // in the callback, you would refresh sessions array
          ""
        )}
        <button className="edit btn-small blue">Edit</button>
        <button className="delete btn-small red">Delete</button>
      </div>
    ));

    return (
      <div className="sessionListContainer">
        <h4>List of sessions</h4>
        <button className="btn" onClick={this.toggleForm}>
          Create Session
        </button>
        {form}
        <ul className="collection">{sessions}</ul>
      </div>
    );
  }
}

export default SessionsList;
