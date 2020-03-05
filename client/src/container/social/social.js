import React from 'react';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import gmail from './assets/gmail.png';
import { Container, Grid } from '@material-ui/core';

import './styles/social.scss';
class Social extends React.Component {
  render() {
    return (
      <div className="social">
        <Container fixed>
          <Grid container spacing="2" justify="center" alignItems="center">
            <Grid item>
              <a href="https://www.facebook.com/HomeOfThePinkSheep" target="_blank">
                <img className="social__icon" src={facebook} alt="facebook" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/the.marketing.group/" target="_blank">
                <img className="social__icon" src={instagram} alt="instagram" />
              </a>
            </Grid>
            <Grid item>
              <a href="mailto:weiqiang.zhang@mail.utoronto.ca">
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
