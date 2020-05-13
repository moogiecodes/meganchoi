import React from 'react';
import { Route, Switch } from "react-router";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Connect from './Connect';
import NotFound from './NotFound';
import Footer from './Footer';


export default function Routes() {
  return (
    <div>
      <Navbar />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade"
          >
            <Switch location={location}>
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
          </CSSTransition>
        </TransitionGroup>
      )} />
      <Footer />
    </div>
  );
}