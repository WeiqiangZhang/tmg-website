import React from 'react';
import { Container, withStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { withRouter } from "react-router-dom";

import './styles/senior.scss';

class Senior extends React.Component {
  render() {
    const StyledHeader = withStyles({
      h1: {
        fontFamily: "UniSansItalic"
      }
    })(Typography);
    return (
      <div className="senior">
        <Container maxWidth="lg">
          <StyledHeader variant="h1" className="senior__header" color="primary">Coming Soon!</StyledHeader>
        </Container>
      </div >
    );
  }
}

export default withRouter(Senior);
