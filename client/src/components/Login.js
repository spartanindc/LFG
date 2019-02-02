import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    fetch("/login", {
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
      <div className="login-page">
        <div class="container">
          <div class="row">
            <div class="col s12">
              <h1>Login</h1>

              <fieldset>
                <legend>Login</legend>
                <form onSubmit={e => this.onSubmit(e)}>
                  <label>Email</label>
                  <input
                    type="email"
                    class="login-form"
                    name="email"
                    required
                    onChange={e => this.onChange(e)}
                    value={this.state.email}
                  />

                  <label>Password</label>
                  <input
                    type="password"
                    class="login-form"
                    name="password"
                    required
                    onChange={e => this.onChange(e)}
                    value={this.state.password}
                  />

                  <button type="submit" class="btn">
                    Login
                  </button>
                </form>
              </fieldset>

              <br />

              <p>
                Need an account? <Link to={"/signup"}>Sign up.</Link>
              </p>
              <p>
                Or return <Link to={"/"}>to the beginning.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
