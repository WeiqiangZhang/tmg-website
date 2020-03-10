import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import './styles/hiring.scss';

class Hiring extends React.Component {
  render() {
    return (
      <div className="hiring">
        <Container fixed>
          <Typography variant="h1" className="hiring__header" color="primary">Director Hiring</Typography>
          <Grid container>
            <Grid item md={8} xs={12}>
              <div className="hiring__body">
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
          <div className="hiring__deadline">
            <Typography variant="body1" color="primary">Deadline: late march</Typography>
          </div>
          <Grid item md={6} xs={12}>
            <div className="hiring__box">
              <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec nec nisi et nulla consectetur dictum.</Typography>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="hiring__box">
              <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec nec nisi et nulla consectetur dictum.</Typography>
            </div>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Hiring;
