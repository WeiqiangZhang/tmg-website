import React from 'react';
import Banner from './banner';
import Pictures from './pictures';
import { Container } from '@material-ui/core';

import './styles/home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Banner />
        <Container maxWidth="lg">
          <Pictures />
        </Container>
      </div>
    );
  }
}

export default Home;
