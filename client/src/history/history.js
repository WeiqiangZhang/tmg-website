import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { constants } from "styles/constants";

import "./styles/history.scss";

class History extends React.Component {
  render() {
    return (
      <div className="history">
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            className="history__header"
            style={{ color: constants.primary2 }}
          >
            History of Revive
          </Typography>
          <Grid container>
            <Grid item md={12} xs={12}>
              <div className="history__body">
                <Typography variant="body1" style={{ color: constants.grey4, textAlign: "center" }}>
                  TMG has had a long history of running amazing conferences.
                  However, in the last two years we were at a crossroads
                  thinking, “what’s next for us?”. Do we want to be just another
                  UofT club, or do we want to set our eyes on something bigger?
                  So, in the 2020-2021 school year, our senior team decided to
                  take a daring step and create a conference that was completely
                  unlike any conference in Canada. After many cups of coffee,
                  and hours upon hours of discussions, our team decided that we
                  wanted to launch TMG’s first ever international case
                  competition. Many of our senior team members were already
                  highly involved in the case competition world before joining
                  TMG, so we thought we needed to do something truly new to
                  stand out. What makes REVIVE different is that our case
                  competition focuses on three main pillars: simulations,
                  corporations, and presentations.
                </Typography>
              </div>
            </Grid>
            <Grid item md={4}></Grid>
            <Grid item md={12} xs={12}>
              <div className="history__body">
                <Typography variant="body1" style={{ color: constants.grey4, textAlign: "center" }}>
                  Our competition uses state-of-the-art simulations to really
                  test our delegates' understanding of the fundamentals of
                  marketing. However, we don’t just stop there. Wanting to make
                  our case competition as realistic as possible, our corporate
                  sponsors have given us real data and real challenges to work
                  with. Finally, our last component of presentations allows our
                  delegates to bring forth their best and brightest ideas and
                  present them to a worldwide platform. Even in these
                  unprecedented times, we believe that our three pillars can
                  give our delegates an experience they won’t forget! This year,
                  TMG is standing out from the crowd. We can’t wait to unleash
                  our pink sheep energy and 
                  <Typography variant="body1" style={{ color: constants.primary2, display: "inline" }}> REVIVE</Typography> the
                  marketing case competition world!
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default History;
