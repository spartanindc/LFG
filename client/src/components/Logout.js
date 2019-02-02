import React from "react";
import { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.clear();
    this.props.hydrateState();
    this.props.history.push("/");
  }

  render() {
    return <div>Logging Out...</div>;
  }
}

export default Logout;
