import React from "react";
import { Component } from "react";

class GameList extends Component {
  componentDidMount() {}

  render() {
    let games =
      this.props.games.length > 0
        ? this.props.games.map(game => (
            <div className="game">
              <p>{game.gameTitle}</p>
            </div>
          ))
        : "Loading Games...";
    return (
      <div className="gameListContainer">
        <h2>List of games</h2>
        {games}
      </div>
    );
  }
}

export default GameList;
