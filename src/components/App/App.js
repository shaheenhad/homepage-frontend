import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import About from "../About/About";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Switch>
          <Route exact path="/">
            <Main />
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
