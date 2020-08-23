import React from "react";

import Main from "./components/Main/Main";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Main} />
      </Router>
    </div>
  );
};

export default App;
