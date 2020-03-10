import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navigation from './container/navigation';
import Home from './home';
import Hiring from './hiring';
import Social from './container/social';
import theme from './styles/theme';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import './styles/App.scss';

import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component {
  routeUpdate(page, history) {
    switch (page) {
      case 0:
        history.push('/hiring');
        break;
      case 1:
        history.push('/about');
        break;
      case 2:
        history.push('/team');
        break;
      case 3:
        history.push('/');
        break;
      default:
        history.push('/');
    }
  }
  render() {
    const { history } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app-container">
          <Navigation routeUpdate={(page) => this.routeUpdate(page, history)} />
          <Switch>
            <Route path="/about">
              <Home />
            </Route>
            <Route path="/hiring">
              <Hiring />
            </Route>
            <Route path="/meet">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Social />
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
