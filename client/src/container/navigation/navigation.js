import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import logo from './assets/logo.jpg';
import { Container } from '@material-ui/core';

import './styles/navigation.scss';


const useStyles = makeStyles({
  selected: {
    "&.Mui-selected" : {
      fontSize: "1.25rem"
    }
  },
  root: {
    flex: "none"
  },
  label: {
    fontSize: "1.25rem"
  }
});

function Navigation(props) {
  const [value, setValue] = useState(new URL(window.location.href).pathname.split('/').pop());
  const classes = useStyles();
  const { routeUpdate } = props;
  return (
    <div className="navigation">
    <Container maxWidth="lg">
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <img className="navigation__logo" src={logo} alt="Home" onClick={() => {
            routeUpdate('home');
            setValue(null);
            }}/>
        </Grid>
        <Grid item>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              routeUpdate(newValue);
            }}
            showLabels>
            <BottomNavigationAction classes={classes} label="Hiring" value='hiring'/>
            <BottomNavigationAction classes={classes} label="About" value='about'/>
            <BottomNavigationAction classes={classes} label="Leadersheep" value='team'/>
          </BottomNavigation>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default Navigation;
