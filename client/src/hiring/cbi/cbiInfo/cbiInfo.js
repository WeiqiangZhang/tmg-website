import React from 'react';
import { Container, Button, withStyles } from '@material-ui/core';
import { Typography, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import networking from './assets/networking.png';
import development from './assets/development.png';
import involvement from './assets/involvement.png';
import cbi from '../roles';

import './styles/cbiInfo.scss';

class CbiInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mounted: false };
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }
  render() {
    const { name, description, qualification, benefit, skill } = cbi;
    const { mounted } = this.state;
    const icons = [networking, development, involvement];
    const benefitKeys = benefit ? Object.keys(benefit) : null;
    const StyledFont = withStyles({
      body1: {
        textAlign: "center",
      },
      body2: {
        textAlign: "center",
      },
    })(Typography);
    return (
      <div className="info">
        <Container maxWidth="lg">
          {name ?
            <React.Fragment>
              <div className="info__apply">
                <div className="info__header">
                  <Typography variant="h2" color="primary">{name}</Typography>
                </div>
                <Button variant="contained" color="primary" onClick={() =>
                  window.open("https://form.jotform.com/201816278499266", "_blank")}>Apply Now</Button>
              </div>
              <div className="info__description">
                <Typography variant="body1">{description}</Typography>
              </div>
              <div className="info__qualification">
                <Typography variant="body1" color="primary">Your Role:</Typography>
                <ul>
                  {
                    qualification.map((value, index) => {
                      return (
                        <li key={index}>
                          <Typography variant="body2">{value}</Typography>
                        </li>
                      )
                    })}
                </ul>
              </div>
              <Typography variant="body1" color="primary">Benefits:</Typography>
              <Grid container spacing={4}>
                {benefitKeys.map((key, index) => {
                  return(
                    <Grid item md={4} xs={12}>
                      <StyledFont variant="body1" color="secondary">{key}</StyledFont>
                      <CSSTransition
                        in={mounted}
                        timeout={100 * index}
                        classNames="info__icon"
                        unmountOnExit
                      >
                      <img className="info__icon" src={icons[index]} alt="icon" />
                      </CSSTransition>
                      <StyledFont variant="body2">{benefit[key]}</StyledFont>
                    </Grid>
                  )
                })
                }
              </Grid>
              <div className="info__skill">
                <Typography variant="body1" color="primary">Skills Required:</Typography>
                <ul>
                  {
                    skill.map((value, index) => {
                      return (
                        <li key={index}>
                          <Typography variant="body2">{value}</Typography>
                        </li>
                      )
                    })}
                </ul>
              </div>
            </React.Fragment>
            : <Link to={{
              pathname: '/'
            }}>
              <Typography variant="subtitle1" className="info__link">Click to go back to Main Page</Typography>
            </Link>}
        </Container>
      </div>
    );
  }
}

export default CbiInfo;
