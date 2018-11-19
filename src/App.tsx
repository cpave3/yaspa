import * as React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";

class App extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Welcome} />
          <Route path="/d/:roomName" component={Dashboard} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
