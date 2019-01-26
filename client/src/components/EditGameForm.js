import React from "react";
import { Component } from "react";

class EditGameForm extends Component {
  render() {
    return (
      <div className="edit-game-form">
        <div className="edit-game">
          <h3>Edit {this.state.gameTitle}</h3>
          <fieldset>
            <legend>Edit Game</legend>
            <form action="/games/{this.state.game.id}" method="post">
              <label htmlFor="title">Game Title</label>
              <input
                type="text"
                aria-label="game title"
                name="gameTitle"
                value=""
                autoFocus
                required
              />

              <label htmlFor="minimum players">Minimum Players</label>
              <input
                type="number"
                aria-label="minimum players"
                name="minPlayers"
                value=""
                required
              />

              <label htmlFor="maximum players">Maximum Players</label>
              <input
                type="number"
                aria-label="max players"
                name="maxPlayers"
                value=""
                required
              />

              <label htmlFor="description">Game Description</label>
              <textarea
                type="text"
                aria-label="description"
                name="description"
                value=""
              />

              <label htmlFor="complexity">Complexity of Game</label>
              <input
                type="text"
                aria-label="complexity"
                name="complexity"
                value=""
              />

              <input type="hidden" name="id" value="" />

              <button type="submit" aria-label="create game">
                Edit Game!
              </button>
            </form>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default EditGameForm;
