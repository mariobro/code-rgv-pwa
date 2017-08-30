/**
 * Routes
 */
import * as React from "react";
import { HashRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import {
  AboutAsync,
  Home,
  Codergv,
  StrategyPlan,
  Charter,
  CodeOfConduct,
  Events
} from "./pages";
import { AppContainer } from "./AppContainer";

export const routes = (
  <HashRouter>
    <AppContainer>
      <Route exact={true} path="/" component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/about" component={AboutAsync} />
      <Switch>
        <Route path="/about/about-us" component={Codergv} />
        <Route path="/about/strategic-plan" component={StrategyPlan} />
        <Route path="/about/charter" component={Charter} />
        <Route path="/about/code-of-conduct" component={CodeOfConduct} />
      </Switch>
    </AppContainer>
  </HashRouter>
);
