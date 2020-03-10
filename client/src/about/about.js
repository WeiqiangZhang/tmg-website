import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import './styles/about.scss';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Container fixed>
          <Typography variant="h1" className="about__header" color="primary">About TMG</Typography>
          <Grid container>
            <Grid item md={8} xs={12}>
              <div className="about__body">
                <Typography variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec nec nisi et nulla consectetur dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec consequat, ex sed aliquam iaculis, lectus erat viverra mi, sit amet vehicula
                ipsum augue ac leo. Integer neque dui, rutrum nec mi vitae, consequat facilisis lorem. Nullam posuere nibh
                eu consectetur accumsan. Cras ultrices non sapien sit amet sagittis. Nunc pharetra id est sit amet porttitor.
                 Cras imperdiet nulla lacus, ullamcorper porttitor nisl vulputate quis. Maecenas ut rutrum metus.
                  Vivamus efficitur enim sed est efficitur ullamcorper vel feugiat odio. Vestibulum ante ipsum primis in
                   faucibus orci luctus et ultrices posuere cubilia Curae;
          </Typography>
              </div>
            </Grid>
            <Grid item md={4}>
            </Grid>
          </Grid>
          <div className="about__body">
            <Typography variant="h5" color="primary">FAQ</Typography>
          </div>
          <div className="about__question">
            <Typography variant="subtitle1">Q: Is Arman single?</Typography>
          </div>
          <div className="about__answer">
            <Typography variant="body2">A: Yes</Typography>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;
