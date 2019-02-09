import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import AddGameForm from "./AddGameForm";

class GameList extends Component {
  state = {
    displayCreateGameForm: false
  };

  toggleForm = () => {
    this.setState({
      displayCreateGameForm: !this.state.displayCreateGameForm
    });
  };

  componentDidMount() {}

  alphaSort(a, b) {
    if (a.gameTitle < b.gameTitle) return -1;
    if (a.gameTitle > b.gameTitle) return 1;
    return 0;
  }

  render() {
    let form =
      this.state.displayCreateGameForm === true ? (
        <AddGameForm user={this.props.user} />
      ) : (
        ""
      );

    this.props.games.sort(this.alphaSort);
    let max = this.props.parent === "dashboard" ? 5 : this.props.games.length;
    let games = this.props.games.map((game, index) => {
      if (index < max) {
        return (
          <div className="game" key={`game-${index}`}>
            <p>{game.gameTitle}</p>
            <button className="desc-button">Details</button>
            <button className="edit-button">Edit</button>
            <button className="delete-button">Delete</button>
          </div>
        );
      }
    });

    return (
      <div className="gameListContainer">
        <h2>List of games</h2>
        <button className="btn" onClick={this.toggleForm}>
          Add Game
        </button>
        {form}
        {games}
        {this.props.parent === "dashboard" ? (
          <Link to="/games">View All</Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default GameList;
