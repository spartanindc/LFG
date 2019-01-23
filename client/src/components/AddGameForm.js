import React from "react";
import { Component } from "react";

class AddGameForm extends Component {
  render() {
    return (
      <div className="create-game-form">
        <div class="create-game">
          <h3>Add a game to your collection</h3>
          <fieldset>
            <legend>Add Game</legend>
            <form action="/games" method="post">
              <label for="title">Game Title</label>
              <input
                type="text"
                aria-label="game title"
                name="gameTitle"
                autofocus
                required
              />

              <label for="minimum players">Minimum Players</label>
              <input
                type="number"
                aria-label="minimum players"
                name="minPlayers"
                required
              />

              <label for="maximum players">Maximum Players</label>
              <input
                type="number"
                aria-label="Target Date"
                name="targetDate"
                required
              />

              <label for="description">Game Description</label>
              <input type="text" aria-label="description" name="description" />

              <label for="complexity">Complexity of Game</label>
              <input type="text" aria-label="complexity" name="complexity" />

              <button type="submit" aria-label="create countdown">
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
