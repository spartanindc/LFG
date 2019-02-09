import React from "react";
import { Component } from "react";

class AddGameForm extends Component {
  state = {
    gameTitle: "",
    minPlayers: 1,
    maxPlayers: 1,
    description: "",
    complexity: "",
    user: this.props.user
  };

  onChange(e) {
    console.log("here", e.target.getAttribute("name"), e.target.value);
    let key = e.target.getAttribute("name");
    this.setState({
      [key]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e.currentTarget.gameTitle.value);

    fetch("/games", {
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
        this.setState({
          gameTitle: "",
          minPlayers: 1,
          maxPlayers: 1,
          description: "",
          complexity: ""
        });
        // popup or message letting the user know that the form submitted correctly
        alert("Game Created!");
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="create-game-form">
        <div className="create-game">
          <h3>Add a game to your collection</h3>
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

              <button type="submit" aria-label="create game">
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
