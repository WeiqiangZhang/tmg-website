import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import PrivateRoute from './PrivateRoute';
import Navigation from './container/navigation';
import Home from './home';
import Hiring from './hiring';
import Info from './hiring/info';
import Director from './hiring/director';
import Senior from './hiring/senior';
import Cbi from './hiring/cbi';
import CbiInfo from './hiring/cbi/cbiInfo';
import About from './about';
import Team from './team';
import Social from './container/social';
import Login from './login';
import Admin from './admin';
import theme from './styles/theme';
import {
  Switch,
  Route,
  withRouter,
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
            <Route path="/cbi" exact>
              <Cbi />
            </Route>
            <Route path="/cbi/info" exact>
              <CbiInfo />
            </Route>
            <Route path="/team" exact>
              <Team />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
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
