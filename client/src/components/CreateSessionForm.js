import React from "react";
import { Component } from "react";

class CreateSessionForm extends Component {
  state = {
    sessionTitle: "",
    gameTitle: "",
    playersNeeded: 0,
    playersCommitted: 0,
    description: "",
    startTimeAndDate: ""
  };

  onChange(e) {
    let key = e.target.getAttribute("name");
    this.setState({
      [key]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`${e.currentTarget.sessionTitle.value} + "Created"`);

    fetch("/sessions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(res => {
        // everything worked
        // reset the form
        // popup or message letting the user know that the form submitted correctly
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="create-session-form">
        <div className="create-session">
          <h3>Organize a boardgame session</h3>
          <fieldset>
            <legend>Create Game Session</legend>
            <form action="#" method="post" onSubmit={e => this.onSubmit(e)}>
              <label htmlFor="session title">Session Title</label>
              <input
                type="text"
                aria-label="game session title"
                name="sessionTitle"
                autoFocus
                required
                onChange={e => this.onChange(e)}
                value={this.state.sessionTitle}
              />

              <label htmlFor="game title">Game Title</label>
              <input
                type="text"
                aria-label="game title"
                name="gameTitle"
                required
                onChange={e => this.onChange(e)}
                value={this.state.gameTitle}
              />

              <label htmlFor="players needed">Players Needed</label>
              <input
                type="number"
                aria-label="players needed"
                name="playersNeeded"
                required
                onChange={e => this.onChange(e)}
                value={this.state.playersNeeded}
              />

              <label htmlFor="players committed">Players Committed</label>
              <input
                type="number"
                aria-label="players committed"
                name="playersCommitted"
                required
                onChange={e => this.onChange(e)}
                value={this.state.playersCommitted}
              />

              <label htmlFor="description">Game Session Details</label>
              <textarea
                type="text"
                aria-label="description"
                name="description"
                onChange={e => this.onChange(e)}
                value={this.state.description}
              />

              <label htmlFor="date and time">Date and Time</label>
              <input
                type="datetime-local"
                aria-label="date and time"
                name="startTimeAndDate"
                onChange={e => this.onChange(e)}
                value={this.state.startTimeAndDate}
              />

              <button type="submit" aria-label="create game session">
                Create Game Session!
              </button>
            </form>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default CreateSessionForm;
