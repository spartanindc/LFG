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
        <AddGameForm toggleForm={this.toggleForm} />
      ) : (
        ""
      );

    let numberOfGames = this.props.games.length;

    this.props.games.sort(this.alphaSort);
    let max = this.props.parent === "dashboard" ? 5 : this.props.games.length;
    let games = this.props.games.map((game, index) => {
      if (index < max) {
        return (
          <div
            className={`col s12 ${
              this.props.parent !== "dashboard" ? "m6" : ""
            }`}
            key={`game-${index}`}
          >
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{game.gameTitle}</span>
                <p>{game.description}</p>
                <p>Complexity: {game.complexity}</p>
              </div>
              <div className="card-action">
                <span className="orange-text">{game.players} players</span>
              </div>
            </div>
          </div>
        );
      }
    });

    return (
      <div className="gameListContainer col s6">
        <h4>List of games</h4>
        <button className="btn" onClick={this.toggleForm}>
          Add Game
        </button>
        {form}
        <ul className="row">{games}</ul>
        {this.props.parent === "dashboard" ? (
          <Link to="/games">View all {numberOfGames} games</Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default GameList;
