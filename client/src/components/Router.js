import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
