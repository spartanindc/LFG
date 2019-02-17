import React from "react";
import { Component } from "react";

class SessionForm extends Component {
  state = {
    sessionTitle: "",
    gameTitle: "",
    playersNeeded: 0,
    playersCommitted: 0,
    description: "",
    startTimeAndDate: "",
    editing: false,
    sessionId: "",
    user: localStorage.getItem("userID")
  };

  componentDidMount() {
    if (
      this.props.hasOwnProperty("match") &&
      this.props.match.params.hasOwnProperty("id")
    ) {
      // fetch request to get the details of that session
      this.setState({
        editing: true,
        sessionTitle: "", //{this.state.session.sessionTitle},
        sessionId: "" //{this.state.sesssion._id}
      });
    }
    //Populate the game title select with games from the db
    let gameSelect = document.getElementById("game-title");
    gameSelect.length = 0;

    const defaultOption = document.createElement("option");
    defaultOption.text = "Choose a game";

    gameSelect.add(defaultOption);
    gameSelect.selectedIndex = 0;

    fetch("/games").then(res => {
      res.json().then(data => {
        let option = "";
        for (let i = 0; i < data.length; i++) {
          option = document.createElement("option");
          option.text = data[i].gameTitle;
          option.setAttribute("value", data[i].id);
          gameSelect.add(option);
        }
      });
    });
  }

  onChange(e) {
    let key = e.target.getAttribute("name");
    this.setState({
      [key]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`${e.currentTarget.sessionTitle.value} + "Created"`);

    let postBody = {
      sessionTitle: this.state.sessionTitle,
      game: this.state.gameTitle,
      playersNeeded: this.state.playersNeeded,
      playersCommitted: this.state.playersCommitted,
      description: this.state.description,
      startTimeAndDate: this.state.startTimeAndDate,
      creator: this.state.user
    };
    if (this.state.editing) {
      postBody["_id"] = this.props.match.params.id;
    }

    fetch("/sessions", {
      method: "POST",
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
        this.setState({
          sessionTitle: "",
          gameTitle: "",
          playersNeeded: 0,
          playersCommitted: 0,
          description: "",
          startTimeAndDate: "",
          editing: false,
          sessionId: ""
        });
        // popup or message letting the user know that the form submitted correctly
        alert("Game Session Created!");
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="create-session-form">
        <div className="create-session center-align">
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
                className="browser-default"
                required
                onChange={e => this.onChange(e)}
                value={this.state.gameTitle}
                id="game-title"
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

              <button
                className="btn"
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

export default SessionForm;
