import React from 'react';
import { Route, Switch } from "react-router";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Connect from './Connect';
import NotFound from './NotFound';

export default function Routes() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/connect">
          <Connect />
        </Route>
        <NotFound />
      </Switch>
    </div>
  );
}