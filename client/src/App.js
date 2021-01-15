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
import Revive from './revive';
import CaseOne from './caseOne';
import Timeline from './timeline';
import History from './history';
import Faq from './faq';
import Sponsor from './sponsor';
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
      case 'revive':
        history.push('/revive');
        break;
      case 'caseone':
        history.push('/revive/caseone');
        break;
      case 'timeline':
        history.push('/revive/timeline');
        break;
      case 'history':
        history.push('/revive/history');
        break;
      case 'faq':
        history.push('/revive/faq');
        break;
      case 'sponsor':
        history.push('/revive/sponsor');
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
    const isRevive = history.location.pathname.includes('/revive');
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {<div className={`app-container app-container${isRevive ? '--revive' : ''}`}>
          <Navigation routeUpdate={(page) => this.routeUpdate(page, history)} isRevive={isRevive} />
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
            <Route path="/revive" exact>
              <Revive isRevive={isRevive} />
            </Route>
            <Route path="/revive/caseone" exact>
              <CaseOne />
            </Route>
            <Route path="/revive/timeline" exact>
              <Timeline />
            </Route>
            <Route path="/revive/history" exact>
              <History />
            </Route>
            <Route path="/revive/faq" exact>
              <Faq />
            </Route>
            <Route path="/revive/sponsor" exact>
              <Sponsor />
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
          <Social isRevive={isRevive} />
        </div>}
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
