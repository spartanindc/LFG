import React from "react";
import { Component } from "react";

const fetchGames = () => {};

class GameList extends Component {
  state = {
    gamesList: ["Game 1", "Game 2", "Game 3"]
  };

  componentDidMount() {}
  render() {
    return (
      <div className="gameListContainer">
        <h2>List of games</h2>
        <ul className="gameList">
          <li> {this.state.gamesList[0]} </li>
          <li> Game 2 </li>
          <li> Game 3 </li>
        </ul>
      </div>
    );
  }
}

export default GameList;
