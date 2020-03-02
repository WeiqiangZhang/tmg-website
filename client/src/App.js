import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './styles/theme';

import './styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
