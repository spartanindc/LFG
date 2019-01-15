import React from "react";
import { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="signup-page">
        <div class="container">
          <h1>Signup</h1>
          <p>Sign up and start living your best boardgaming life!!</p>
          <fieldset>
            <legend>Sign up</legend>
            <form action="/signup" method="post">
              <label for="signup-form">Create Username:</label>
              <input
                aria-label="user name"
                type="text"
                class="signup-form"
                name="username"
              />

              <label for="signup-form">Enter your email:</label>
              <input
                aria-label="E-mail"
                type="text"
                class="signup-form"
                name="email"
              />

              <label>Create Password:</label>
              <input
                aria-label="password"
                type="password"
                class="signup-form"
                name="password"
              />

              <button aria-label="submit signup form" type="submit" class="btn">
                Signup
              </button>
            </form>
          </fieldset>

          <br />

          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
