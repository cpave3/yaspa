import * as React from "react";
import { isMobile } from "react-device-detect";
import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Lobby from "./components/Lobby";
import DebugBar from './containers/DebugBarContainer';
import Welcome from "./containers/WelcomeContainer";

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        { process.env.NODE_ENV === 'development' ? <DebugBar /> : null }
        <HashRouter>
          {isMobile ? this.mobileRoutes() : this.browserRoutes()}
        </HashRouter>
      </React.Fragment>
    );
  }

  private mobileRoutes = () => {
    return (
      <Switch>
        <Route exact={true} path="/" component={Lobby} />
      </Switch>
    );
  };

  private browserRoutes = () => {
    return (
      <Switch>
        <Route exact={true} path="/" component={Welcome} />
        <Route exact={true} path="/join" component={Lobby} />
        <Route path="/room/:roomName" component={Dashboard} />
      </Switch>
    );
  };
}

export default App;
