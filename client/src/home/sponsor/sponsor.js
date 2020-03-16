import React from 'react';
import microsoft from './assets/Microsoft.png';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import './styles/sponsor.scss';

class Sponsor extends React.Component {
  render() {
    return (
      <div className="sponsor">
        <Typography variant="h3" className="sponsor__text">Sponsors</Typography>
        <div className="sponsor__main-container">
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <div className="sponsor__container">
                <img className="sponsor__icon" src={microsoft} alt="sponsor" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="sponsor__container">
                <img className="sponsor__icon" src={microsoft} alt="sponsor" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="sponsor__container">
                <img className="sponsor__icon" src={microsoft} alt="sponsor" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Sponsor;
