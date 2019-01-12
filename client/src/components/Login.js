import React from "react";
import { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div class="container">
          <div class="row">
            <div class="col s12">
              <h1>Login</h1>

              <fieldset>
                <legend>Login</legend>
                <form action="/login" method="post">
                  <label>Email</label>
                  <input
                    type="email"
                    class="login-form"
                    name="email"
                    required
                  />

                  <label>Password</label>
                  <input
                    type="password"
                    class="login-form"
                    name="password"
                    required
                  />

                  <button type="submit" class="btn">
                    Login
                  </button>
                </form>
              </fieldset>

              <br />

              <p>
                Need an account? <a href="/signup">Signup</a>
              </p>
              <p>
                Or return <a href="/">home</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
