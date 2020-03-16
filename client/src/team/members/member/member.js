import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import './styles/member.scss';

function Member(props) {
  const { image, description, name } = props;
  return (
    <div className="member">
      <Grid container>
        <Grid item md={4} xs={12}>
          <img className="member__image" src={image} alt={`${name}`}/>
          <Typography variant="subtitle2">{name}</Typography>
        </Grid>
        <Grid item md={8} xs={12}>
          <div className="member__description">
            <Typography variant="subtitle2">{description}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Member;
