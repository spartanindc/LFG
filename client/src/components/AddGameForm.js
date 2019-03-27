import React from "react";
import { Component } from "react";

class AddGameForm extends Component {
  state = {
    gameTitle: "",
    minPlayers: 1,
    maxPlayers: 1,
    description: "",
    complexity: "",
    user: localStorage.getItem("userID"),
    editing: false
  };

  componentDidMount() {
    if (
      this.props.hasOwnProperty("match") &&
      this.props.match.params.hasOwnProperty("id")
    ) {
      // fetch request to get the details of that session
      this.setState({
        editing: true,
        gameTitle: "",
        gameId: ""
      });
    }
  }

  onChange(e) {
    let key = e.target.getAttribute("name");
    this.setState({
      [key]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    let postBody = {
      gameTitle: this.state.gameTitle,
      minPlayers: this.state.minPlayers,
      maxPlayers: this.state.maxPlayers,
      description: this.state.description,
      complexity: this.state.complexity,
      user: this.state.user
    };
    if (this.state.editing) {
      postBody["_id"] = this.props.match.params.id;
    }

    fetch("/games", {
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
          gameTitle: "",
          minPlayers: 1,
          maxPlayers: 1,
          description: "",
          complexity: ""
        });
        this.props.toggleForm();
        // popup or message letting the user know that the form submitted correctly
        alert("Game Created!");
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="create-game-form">
        <div className="create-game center-align">
          <fieldset>
            <legend>Add Game</legend>
            <form action="#" method="post" onSubmit={e => this.onSubmit(e)}>
              <label htmlFor="title">Game Title</label>
              <input
                type="text"
                aria-label="game title"
                name="gameTitle"
                autoFocus
                required
                onChange={e => this.onChange(e)}
                value={this.state.gameTitle}
              />

              <label htmlFor="minimum players">Minimum Players</label>
              <input
                type="number"
                min="1"
                aria-label="minimum players"
                name="minPlayers"
                required
                onChange={e => this.onChange(e)}
                value={this.state.minPlayers}
              />

              <label htmlFor="maximum players">Maximum Players</label>
              <input
                type="number"
                aria-label="max players"
                name="maxPlayers"
                required
                onChange={e => this.onChange(e)}
                value={this.state.maxPlayers}
              />

              <label htmlFor="description">Game Description</label>
              <textarea
                type="text"
                aria-label="description"
                name="description"
                onChange={e => this.onChange(e)}
                value={this.state.description}
              />

              <label htmlFor="complexity">Complexity of Game</label>
              <input
                type="text"
                aria-label="complexity"
                name="complexity"
                onChange={e => this.onChange(e)}
                value={this.state.complexity}
              />

              <button type="submit" aria-label="create game" className="btn">
                Add Game!
              </button>
            </form>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default AddGameForm;
