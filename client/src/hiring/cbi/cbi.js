import React from 'react';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import posObj from './roles';

import { Link, withRouter } from "react-router-dom";

import './styles/cbi.scss';

class Cbi extends React.Component {
  render() {
    const positions = ["cbi"];
    const { history, onSetInfo } = this.props;
    return (
      <div className="cbi">
        <Container maxWidth="lg">
          <Typography variant="h1" className="cbi__header" color="primary">2020-21 Positions</Typography>
          {positions.map((value, index) => {
            const memberObj = posObj[value];
            return (
              <div className="cbi__role" key={index}>
                {memberObj.open !== "0" && <Link className="cbi__underline" to={{
                  pathname: `${history.location.pathname}/info`
                }} onClick={() => onSetInfo(memberObj)}>
                  <Typography variant="subtitle1" className="cbi__link">{memberObj.name}</Typography>
                </Link>}
                {memberObj.open === "0" &&
                  <Typography variant="subtitle1" color="primary">{memberObj.name}</Typography>}
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

export default withRouter(Cbi);
