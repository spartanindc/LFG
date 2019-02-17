import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container center-align">
          <div className="title">
            <h1>Looking for Gamers</h1>
          </div>
          <div className="desc">
            <p>
              Is your personal boardgame collection extensive, but your friends
              willing to play for 6 hours not-so-large? Just looking to get into
              boardgames? Find new boardgaming friends with LFG!
            </p>
          </div>
          <div className="start first">
            <Link className="btn green" to={"/login"}>
              Login
            </Link>
          </div>

          <div className="start">
            <Link className="btn green" to={"/signup"}>
              Signup
            </Link>
          </div>
        </div>
        <footer role="contentinfo" className="center-align">
          <div>
            <p>
              Created by David Alim -{" "}
              <a href="https://github.com/spartanindc/LFG">Github Repo</a>
            </p>
          </div>
          <div>
            Icons made by{" "}
            <a href="https://www.freepik.com/" title="Freepik">
              Freepik
            </a>{" "}
            and{" "}
            <a
              href="https://www.flaticon.com/authors/flat-icons"
              title="Flat Icons"
            >
              Flat Icons{" "}
            </a>
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
            >
              CC 3.0 BY
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
