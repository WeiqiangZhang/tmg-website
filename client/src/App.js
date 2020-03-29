import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navigation from './container/navigation';
import Home from './home';
import Hiring from './hiring';
import Info from './hiring/info';
import Director from './hiring/director';
import Senior from './hiring/senior';
import About from './about';
import Team from './team';
import Social from './container/social';
import Admin from './admin';
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
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/hiring" exact>
              <Hiring />
            </Route>
            <Route path="/director" exact>
              <Director />
            </Route>
            <Route path="/hiring/senior" exact>
              <Senior />
            </Route>
            <Route path="/director/info" exact >
              <Info />
            </Route>
            <Route path="/team" exact>
              <Team />
            </Route>
            <Route path="/admin" exact>
              <Admin />
            </Route>
            <Route path="/">
              <Hiring />
            </Route>
          </Switch>
          <Social />
        </div>}
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
