import React from "react";
import { Component } from "react";

const fetchGames = () => {};

class GameList extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="gameListContainer">
        <h2>List of games</h2>
        <ul className="gameList">
          <li> Game 1 </li>
          <li> Game 2 </li>
          <li> Game 3 </li>
        </ul>
      </div>
    );
  }
}

export default GameList;
