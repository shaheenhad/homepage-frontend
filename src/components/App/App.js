import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
