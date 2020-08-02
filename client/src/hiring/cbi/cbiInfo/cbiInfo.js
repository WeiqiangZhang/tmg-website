import React from 'react';
import { Container, Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from "react-router-dom";

import './styles/cbiInfo.scss';

class CbiInfo extends React.Component {
  render() {
    const { name, open, description, qualification, skill, extra } = this.props.info;
    return (
      <div className="info">
        <Container maxWidth="lg">
          {name ?
            <React.Fragment>
              <div className="info__apply">
                <Typography variant="h2" color="primary">{name}</Typography>
                <div className="info__apply__header">
                  <Typography variant="h5">{`Roles Open: ${open}`}</Typography>
                </div>
                <Button variant="contained" color="primary" onClick={() =>
                  window.open("https://form.jotform.com/200877794266267", "_blank")}>Apply Now</Button>
              </div>
              <div className="info__description">
                <Typography variant="body1">{description}</Typography>
              </div>
              <div className="info__qualification">
                <Typography variant="body1" color="primary">Your Role:</Typography>
                <ul>
                  {
                    qualification.map((value, index) => {
                      return (
                        <li key={index}>
                          <Typography variant="body2">{value}</Typography>
                        </li>
                      )
                    })}
                </ul>
              </div>
              <div className="info__skill">
                <Typography variant="body1" color="primary">Skills Required:</Typography>
                <ul>
                  {
                    skill.map((value, index) => {
                      return (
                        <li key={index}>
                          <Typography variant="body2">{value}</Typography>
                        </li>
                      )
                    })}
                </ul>
              </div>
              <Typography variant="body1" color="primary">{extra}</Typography>
            </React.Fragment>
            : <Link to={{
              pathname: '/'
            }}>
              <Typography variant="subtitle1" className="info__link">Click to go back to Main Page</Typography>
            </Link>}
        </Container>
      </div>
    );
  }
}

export default CbiInfo;
