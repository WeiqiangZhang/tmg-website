import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navigation from './container/navigation';
import Home from './home';
import Hiring from './hiring';
import About from './about';
import Team from './team';
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
      case 'hiring':
        history.push('/hiring');
        break;
      case 'about':
        history.push('/about');
        break;
      case 'team':
        history.push('/team');
        break;
      case 'home':
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
        {<div className="app-container">
          <Navigation routeUpdate={(page) => this.routeUpdate(page, history)} />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/hiring">
              <Hiring />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Social />
        </div>}
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
