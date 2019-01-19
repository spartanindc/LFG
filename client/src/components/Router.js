import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "../store";

import App from "./App";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

const store = configureStore();

const Router = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>
);

export default Router;
