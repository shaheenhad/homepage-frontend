import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Bookmarks from "../Bookmarks/Bookmarks";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Switch>
          <Route exact path="/">
            <Main />
            <Bookmarks />
            <About />
            <Footer />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
