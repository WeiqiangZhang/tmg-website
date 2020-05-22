import React from 'react';
import { Container, Grid, withStyles } from '@material-ui/core';
import { Typography, useMediaQuery } from '@material-ui/core';
import {
  withRouter,
  Link
} from "react-router-dom";

import HiringSlide from './hiringslide';

import './styles/hiring.scss';


function Hiring(props) {
    const StyledSubtitle = withStyles({
      subtitle1: {
        fontFamily: "UniSansItalic"
      }
    })(Typography);
    const { history } = props;
    const matches = useMediaQuery('(max-width:45rem)');
    const StyledFont = withStyles({
      h2: {
        fontSize: matches ? "2.5rem" : "3.75rem"
      },
      subtitle1: {
        fontSize: matches && "1.25rem"
      }
    })(Typography);
    
    return (
      <div className="hiring">
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <StyledFont variant="h2" className="hiring__header" color="primary">Become a Director</StyledFont>
              <div className="hiring__body">
                <Typography variant="body1">The Marketing Group offers a variety of Director positions every year to
                empower students to unleash their pink sheep. Apply now and work together with like-minded
                individuals to execute our plans for this year!
          </Typography>
              </div>
              <div className="hiring__deadline">
                <StyledFont variant="subtitle1" color="primary">All Positions Filled
                </StyledFont>
              </div>
              {/* <Grid item xs={12}>
                <div className="hiring__linkContainer">
                  <Link to={{
                    pathname: `${history.location.pathname}director`,
                  }}>
                    <Typography variant="subtitle1" className="hiring__link">
                      Explore Director Positions
                  </Typography>
                  </Link>
                </div>
              </Grid> */}
            </Grid>
            <Grid item md={6} xs={12}>
              <StyledFont variant="h2" className="hiring__header" color="primary">Become a Senior</StyledFont>
              <div className="hiring__body">
                <Typography variant="body1">The Marketing Group hires new Presidents and Vice Presidents every year. These
                leadership positions are tailored for students who truly want to make a difference and take their
                undergraduate experience to the next level.
          </Typography>
              </div>
              <div className="hiring__deadline">
                <StyledFont variant="subtitle1" color="primary">All Positions Filled
                </StyledFont>
              </div>
            </Grid>
          </Grid>
          <HiringSlide />
        </Container>
      </div >
    );
}

export default withRouter(Hiring);
