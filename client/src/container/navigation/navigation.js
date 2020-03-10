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
  label: {
    fontSize: "1.25rem"
  }
});

function Navigation(props) {
  const [value, setValue] = useState(null);
  const classes = useStyles();
  const { routeUpdate } = props;
  return (
    <div className="navigation">
    <Container fixed>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <img className="navigation__logo" src={logo} alt="Home" onClick={() => {
            routeUpdate(3);
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
            <BottomNavigationAction classes={classes} label="Hiring" />
            <BottomNavigationAction classes={classes} label="About" />
            <BottomNavigationAction classes={classes} label="Team" />
          </BottomNavigation>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default Navigation;
