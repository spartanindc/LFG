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
          {session.sessionTitle}, playing {session.game.gameTitle}
        </p>
        <button className="desc btn-floating btn-small green">+</button>
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
