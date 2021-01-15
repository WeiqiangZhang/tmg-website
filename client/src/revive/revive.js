import React from "react";
import ReviveBanner from "./ReviveBanner";
import { Container } from "@material-ui/core";
import RevivePictures from "./revivePictures";

import "./styles/revive.scss";

class Revive extends React.Component {
  render() {
    return (
      <div className="home">
        <ReviveBanner />
        <Container maxWidth="lg">
          <RevivePictures />
        </Container>
      </div>
    );
  }
}

export default Revive;
