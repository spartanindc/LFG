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
            <div className="card">
              <div className="card-content white-text">
                {this.props.parent === "dashboard" ? (
                  <img
                    src="./images/game-dice.png"
                    alt="board game smiley face"
                  />
                ) : (
                  ""
                )}
                <div className="center-align">
                  <span className="title">{game.gameTitle}</span>
                </div>
                <p>{game.description}</p>
                <p>Complexity: {game.complexity}</p>
              </div>
              <div className="card-action center-align">
                <span className="orange-text text-lighten-1">
                  {game.players} players
                </span>
              </div>
            </div>
          </div>
        );
      }
    });

    return (
      <div className="gameListContainer col s12 m6">
        <div className="center-align">
          <h4>
            <img src="./images/game-dice.png" alt="a red dice" />
            Game list
          </h4>
          <button className="btn " onClick={this.toggleForm}>
            Add Game
          </button>
        </div>
        {form}
        <div className="row">{games}</div>
        <div className="center-align view-link">
          {this.props.parent === "dashboard" ? (
            <Link to="/games">View all {numberOfGames} games</Link>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default GameList;
