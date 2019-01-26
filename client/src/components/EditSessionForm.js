import React from "react";
import { Component } from "react";

class EditSessionForm extends Component {
  render() {
    return (
      <div className="create-session-form">
        <div className="create-session">
          <h3>Organize a boardgame session</h3>
          <fieldset>
            <legend>Create Game Session</legend>
            <form action="/sessions" method="post">
              <label htmlFor="session title">Session Title</label>
              <input
                type="text"
                aria-label="game session title"
                name="sessionTitle"
                autoFocus
                required
              />

              <label htmlFor="game title">Game Title</label>
              <input
                type="text"
                aria-label="game title"
                name="gameTitle"
                required
              />

              <label htmlFor="players needed">Players Needed</label>
              <input
                type="number"
                aria-label="players needed"
                name="playersNeeded"
                required
              />

              <label htmlFor="players committed">Players Committed</label>
              <input
                type="number"
                aria-label="players committed"
                name="playersCommitted"
                required
              />

              <label htmlFor="description">Game Session Details</label>
              <textarea
                type="text"
                aria-label="description"
                name="description"
              />

              <label htmlFor="date and time">Date and Time</label>
              <input
                type="datetime-local"
                aria-label="date and time"
                name="startTimeAndDate"
              />

              <button type="submit" aria-label="edit game session">
                Edit Game Session!
              </button>
            </form>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default EditSessionForm;
