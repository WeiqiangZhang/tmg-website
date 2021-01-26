import React from "react";
import ReviveBanner from "./ReviveBanner";
import { Container } from "@material-ui/core";
import RevivePictures from "./revivePictures";
import animation from "./assets/animation.gif";
import { isMobile } from "react-device-detect";

import "./styles/revive.scss";

class Revive extends React.Component {
  componentDidMount() {
    if (!this.props.revive.gifDone) {
      setTimeout(() => {
        this.props.onSetGifDone();
      }, 6000);
    }
  }
  render() {
    console.log(this.props.revive);
    return (
      <div className="home">
        {!this.props.revive.gifDone ? (
          <div className="home__container">
            <img className={isMobile ? `home__animation home__animation--mobile` : `home__animation`} src={animation} />
          </div>
        ) : (
          <>
            <ReviveBanner />
            <Container maxWidth="lg">
              <RevivePictures />
            </Container>
          </>
        )}
      </div>
    );
  }
}

export default Revive;
