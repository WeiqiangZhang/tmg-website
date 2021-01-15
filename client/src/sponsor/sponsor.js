import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import { constants } from "styles/constants";
import blueJay from "./assets/blue_jay.png";
import bounteous from "./assets/bounteous.png";
import deloitte from "./assets/deloitte.png";
import DOM from "./assets/DOM.png";

import "./styles/sponsor.scss";
function Sponsor(props) {
  const sponsors = [
    "Toronto blue Jays - Prize Sponsor",
    "Bounteous - Challenge Sponsor",
    "Deloitte - Title Sponsor",
    "DOM - Prize Sponsor",
  ];
  const descriptions = [
    "If you are a baseball fan does this firm need any more introduction? And even if you aren’t c’mon, this is the Toronto Blue Jays! We are extremely proud to have Toronto Blue Jays on board as one of our prize sponsors. They will be providing our delegates with the opportunity to go behind the scene and look at what it takes to run the team from a business perspective. Toronto Blue Jays will be hosting a speaker and a coffee chat for one of the lucky teams.",
    "What does it take to be a marketing leader in today’s world? Data skills? Presentation prowess? Or some other unknown skill that you have yet to discover. As our challenge sponsor, Bounteous will be giving you some insights into what it takes to be a leader in marketing. Bounteous is a marketing agency that specialized in providing state of the art strategies for firms who want to ramp up their digital marketing footprint. And some of their clients include many of the biggest firms in Canada. So, Revive is extremely excited that Donnavan, Title ,will be sharing what it takes to succeed in marketing, and we are super fortunate to have them sponsor our challenge.",
    "Have you thought about what it takes to enter the highly regulated medical marijuana business? Look no further, as Deloitte is about to blow your mind with what they have in store for you. As our Title Sponsor, Deloitte wanted to try something different. Instead of going for a traditional  case competition topic, they decided it's time to spice things up. So, they’ve decided to challenge students with the challenging landscape of medicinal marajiana. How do you stand out in this highly regulated field? What strategies should you pursue? These are the questions you have to ask if you want to impress the judges from Deloitte.",
    "A herd always needs a shepherd, and the Department of Management has always been the shepherd for TMG. Starting out as just a marketing club for local marketing students at UTSC, TMG was able to think bigger through the support offered by the Department of Management. With the launch of Revive competition, the department has gone above and beyond by offering us a huge cash prize for our delegates, and the ability to run the case competition free of cost! The department of management has also helped ensure that all the content is up to the rigorous standards of the University of Toronto. So, it's time to stop thinking and start working, because the prize is too good to ignore.",
  ];
  const images = [
    <img className="sponsor__logo" src={blueJay} />,
    <img className="sponsor__logo" src={bounteous} />,
    <img className="sponsor__logo" src={deloitte} />,
    <img className="sponsor__logo" src={DOM} />,
  ];
  return (
    <div className="sponsor">
      <Container maxWidth="lg">
        <div className="sponsor__divider">
          {sponsors.map((sponsor, index) => {
            return (
              <div key={`sponsor_${index}`} className="sponsor__description">
                <Grid container justify="center" alignItems="center">
                  <Grid item md={12} xs={12}>
                    {images[index]}
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <Typography
                      variant="body2"
                      style={{ color: constants.primary2 }}
                    >
                      {sponsor}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ color: constants.grey4 }}
                    >
                      {descriptions[index]}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Sponsor;