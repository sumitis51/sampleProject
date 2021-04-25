import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import history from "../inits/history";
import asyncComponent from "../AsyncComponents";

const RenderRoutes = () => {
  const homePage = asyncComponent(() =>
    import("../pages/Home/home").then((module) => module.default)
  );

  return (
    <main>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={homePage} />
        </Switch>
      </Router>
    </main>
  );
};

export default RenderRoutes;
