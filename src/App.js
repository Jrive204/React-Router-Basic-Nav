import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
import { Router, Route, Switch } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact></Contact>
      </Route>
    </Switch>
  </div>
);

export default App;
