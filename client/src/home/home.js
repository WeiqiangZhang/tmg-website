import React from 'react';
import Banner from './banner';
import Sponsor from './sponsor';
import { Container } from '@material-ui/core';

import './styles/home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Banner />
        <Container maxWidth="xl">
          <Sponsor />
        </Container>
      </div>
    );
  }
}

export default Home;
