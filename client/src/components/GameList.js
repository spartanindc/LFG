import React from "react";
import { Component } from "react";

class GameList extends Component {
  componentDidMount() {
    console.log(this.props.user);
    console.log(this.props.games);
  }

  render() {
    return (
      <div className="gameListContainer">
        <h2>List of games</h2>
        <p>{this.props.games.gameTitle}</p>
      </div>
    );
  }
}

export default GameList;
