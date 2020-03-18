import React from 'react';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import tiktok from './assets/tiktok.png';
import gmail from './assets/gmail.png';
import { Container, Grid } from '@material-ui/core';

import './styles/social.scss';
class Social extends React.Component {
  render() {
    return (
      <div className="social">
        <Container fixed>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item>
              <a href="https://www.facebook.com/HomeOfThePinkSheep" target="_blank" rel="noopener noreferrer">
                <img className="social__icon" src={facebook} alt="facebook" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/the.marketing.group/" target="_blank" rel="noopener noreferrer">
                <img className="social__icon" src={instagram} alt="instagram" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.tiktok.com/@themarketinggroup" target="_blank" rel="noopener noreferrer">
                <img className="social__icon" src={tiktok} alt="tiktok" />
              </a>
            </Grid>
            <Grid item>
              <a href="mailto:themarketinggrouputsc@outlook.com">
                <img className="social__icon" src={gmail} alt="gmail" />
              </a>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Social;
