import React from 'react';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import posObj from './roles';

import { Link, withRouter } from "react-router-dom";

import './styles/director.scss';

class Director extends React.Component {
  render() {
    const positions = ["events", "project", "marketing", "social", "corporate", "finance", "curriculum"];
    const { history } = this.props;
    return (
      <div className="director">
        <Container maxWidth="lg">
          <Typography variant="h1" className="director__header" color="primary">2020-21 Positions</Typography>
          {positions.map((value, index) => {
            const memberObj = posObj[value];
            return (
              <div className="director__role" key={index}>
                <Link to={{
                  pathname: `${history.location.pathname}/info`,
                  ...memberObj
                }}>
                  <Typography variant="subtitle1" className="director__link">{memberObj.name}</Typography>
                </Link>
                <Typography variant="body1">{`Roles Open: ${memberObj.open}`}</Typography>
                <Typography variant="body2">{memberObj.description}</Typography>
              </div>
            )
          })}
        </Container>
      </div >
    );
  }
}

export default withRouter(Director);
