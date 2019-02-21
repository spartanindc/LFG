import React from "react";
import { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  onChange(e) {
    let key = e.target.getAttribute("name");
    let value = e.target.value;
    this.setState({
      [key]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        localStorage.setItem("userID", res._id);
        this.props.hydrateState();
        this.props.history.push("/dashboard");
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="signup-page">
        <div className="container center-align">
          <h1>Sign up</h1>
          <p>Sign up and start living your best boardgaming life!!</p>
          <fieldset>
            <legend>Sign up</legend>
            <form onSubmit={e => this.onSubmit(e)}>
              <label for="username">Create Username:</label>
              <input
                aria-label="user name"
                type="text"
                className="signup-form"
                name="username"
                onChange={e => this.onChange(e)}
                value={this.state.username}
              />

              <label for="email">Enter your email:</label>
              <input
                aria-label="E-mail"
                type="text"
                className="signup-form"
                name="email"
                onChange={e => this.onChange(e)}
                value={this.state.email}
              />

              <label for="password">Create Password:</label>
              <input
                aria-label="password"
                type="password"
                className="signup-form"
                name="password"
                onChange={e => this.onChange(e)}
                value={this.state.password}
              />

              <button
                aria-label="submit signup form"
                type="submit"
                className="btn"
              >
                Signup
              </button>
            </form>
          </fieldset>

          <br />

          <p>
            Already have an account? <a href="/login">Login.</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
