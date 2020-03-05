import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navigation from './container/navigation';
import Home from './home';
import Social from './container/social';
import theme from './styles/theme';

import './styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="app-container">
          <Navigation />
          <Home />
          <Social />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
