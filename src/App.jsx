import React, { useContext } from "react";
import { GithubContext } from "./context/githubJobProvider";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import JobbItem from "./pages/JobbItem";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={JobbItem} />
    </Switch>
  );
}

export default App;
