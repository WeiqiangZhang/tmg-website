import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {
  withRouter,
  Link
} from "react-router-dom";

import HiringSlide from './hiringslide';

import './styles/hiring.scss';


class Hiring extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="hiring">
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <Typography variant="h3" className="hiring__header" color="primary">Become a Director</Typography>
              <div className="hiring__body">
                <Typography variant="h6">The Marketing Group offers a variety of Director positions every year to
                empower students to unleash their pink sheep. Apply now and work together with like-minded
                individuals to execute our plans for this year!
          </Typography>
              </div>
              <div className="hiring__deadline">
                <Typography className="hiring__deadline__text" variant="subtitle1" color="primary">Due April 8th!
                </Typography>
              </div>
              <Grid item xs={12}>
                <div className="hiring__linkContainer">
                  <Link to={{
                    pathname: `${history.location.pathname}/director`,
                  }}>
                    <Typography variant="subtitle1" className="hiring__link">
                      Explore Director Positions
                  </Typography>
                  </Link>
                </div>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography variant="h3" className="hiring__header" color="primary">Become a Senior</Typography>
              <div className="hiring__body">
                <Typography variant="h6">The Marketing Group hires new Presidents and Vice Presidents every year. These
                leadership positions are tailored for students who truly want to make a difference and take their
                undergraduate experience to the next level.
          </Typography>
              </div>
              <div className="hiring__deadline">
                <Typography className="hiring__deadline__text" variant="subtitle1" color="primary">Coming soon!
                </Typography>
              </div>
              <Grid item xs={12}>
                <div className="hiring__linkContainer">
                  <Link to={{
                    pathname: `${history.location.pathname}/senior`,
                  }}>
                    <Typography variant="subtitle1" className="hiring__link">
                      Explore Senior Positions
                  </Typography>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <HiringSlide />
        </Container>
      </div >
    );
  }
}

export default withRouter(Hiring);
