import React from 'react';
import ReviveBanner from './ReviveBanner';
import { Container } from '@material-ui/core';

import './styles/revive.scss';

class Revive extends React.Component {
  render() {
    return (
      <div className="home">
        <ReviveBanner />
        <Container maxWidth="lg">
        </Container>
      </div>
    );
  }
}

export default Revive;
