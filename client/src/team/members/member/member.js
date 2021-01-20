import React, { useCallback, useState, useEffect } from "react";
import { withStyles, CircularProgress } from "@material-ui/core";
import "./styles/member.scss";

function Member(props) {
  const { image, loaded } = props;
  const StyledCircularProgress = withStyles({
    root: {
      margin: "auto",
      display: "block",
    },
  })(CircularProgress);
  return (
    <div className="member">
        {image}
        {!loaded && <StyledCircularProgress size="10rem" />}
    </div>
  );
}

export default Member;
