import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import "./styles/about.scss";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Container maxWidth="lg">
          <Typography variant="h1" className="about__header" color="primary">
            About TMG
          </Typography>
          <Grid container>
            <Grid item md={12} xs={12}>
              <div className="about__body">
                <Typography variant="body1">
                  The Marketing Group (TMG) is the sole hub of all things
                  Marketing at the University of Toronto Scarborough. TMG's
                  mission is to help students think creatively and discover what
                  they can do in marketing through an innovative, creative, and
                  entrepreneurial approach to campus activities. What do we do?
                  1. Bridge the gap between students and the marketing industry.
                  2. Demystify the marketing landscape. 3. Provide opportunities
                  and resources for students to gain competitive advantage and
                  prepare tomorrow’s marketing leaders.
                </Typography>
              </div>
            </Grid>
            <Grid item md={4}></Grid>
          </Grid>
          {/* <div className="about__body">
            <Typography variant="h5" color="primary">
              FAQ
            </Typography>
          </div>
          <div className="about__question">
            <Typography variant="subtitle1">Q: Is Arman single?</Typography>
          </div>
          <div className="about__answer">
            <Typography variant="body1">A: Yes</Typography>
          </div> */}
        </Container>
      </div>
    );
  }
}

export default About;
