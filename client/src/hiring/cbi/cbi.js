import React from "react";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import posObj from "./roles";

import { Link, withRouter } from "react-router-dom";

import "./styles/cbi.scss";

class Cbi extends React.Component {
  render() {
    const positions = ["cbi"];
    const { history, onSetInfo } = this.props;
    return (
      <div className="cbi">
        <Container maxWidth="lg">
          <Typography variant="h1" className="cbi__header" color="primary">
            2020-21 Positions
          </Typography>
          <div className="cbi__role">
            <Link
              className="cbi__underline"
              to={{
                pathname: `${history.location.pathname}/info`,
              }}
              onClick={() => onSetInfo(posObj)}
            >
              <Typography variant="subtitle1" className="cbi__link">
                {posObj.name}
              </Typography>
            </Link>
            <Typography variant="body2">{posObj.description}</Typography>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Cbi);
