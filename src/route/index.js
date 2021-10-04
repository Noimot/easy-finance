import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../component/home/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="*" component={() => <div> Page not found</div>} />
  </Switch>
);

export default Routes;
