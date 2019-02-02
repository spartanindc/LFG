import React from "react";
import { Component } from "react";

class CreateSessionForm extends Component {
  state = {
    sessionTitle: "",
    gameTitle: "5c322f01e35aca379c2db48d",
    playersNeeded: 0,
    playersCommitted: 0,
    description: "",
    startTimeAndDate: "",
    editing: false
  };

  onChange(e) {
    let key = e.target.getAttribute("name");
    this.setState({
      [key]: e.target.value
    });
  }

  componentDidMount() {
    if (
      this.props.hasOwnProperty("match") &&
      this.props.match.params.hasOwnProperty("id")
    ) {
      // fetch request to get the details of that session
      this.setState({
        editing: true,
        sessionTitle: "Just testing editing"
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`${e.currentTarget.sessionTitle.value} + "Created"`);
    let method = this.state.editing ? "PUT" : "POST";
    let postBody = this.state;
    if (this.state.editing) {
      postBody["_id"] = this.props.match.params.id;
    }
    fetch("/sessions", {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postBody)
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
            <legend>
              {this.state.editing ? "Edit" : "Create"} Game Session
            </legend>
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
              <select
                aria-label="game title"
                name="gameTitle"
                required
                onChange={e => this.onChange(e)}
                value={this.state.gameTitle}
              >
                <option value="5c322f01e35aca379c2db48d">Patchwork</option>
                <option value="5c3d52351a7c7d5a04c6fed9">Diplomacy</option>
              </select>
              {/*<input
                type="text"
                aria-label="game title"
                name="gameTitle"
                required
                onChange={e => this.onChange(e)}
                value={this.state.gameTitle}
              />*/}

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

              <button
                type="submit"
                aria-label={
                  this.state.editing
                    ? "edit game session"
                    : "create game session"
                }
              >
                {this.state.editing ? "Edit" : "Create"} Game Session!
              </button>
            </form>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default CreateSessionForm;
