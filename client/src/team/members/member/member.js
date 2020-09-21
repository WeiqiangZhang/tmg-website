import React, { useCallback, useState, useEffect } from "react";
import { withStyles, CircularProgress } from "@material-ui/core";
import "./styles/member.scss";

function Member(props) {
  const { image, name } = props;
  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = useCallback(() => {
    setLoaded(true);
  }, [loaded]);
  useEffect(() => {
    setLoaded(false);
  }, [props.image]);
  const StyledCircularProgress = withStyles({
    root: {
      margin: "auto",
      display: "block",
    },
  })(CircularProgress);
  return (
    <div className="member">
        <img
          className={`member__image${!loaded ? '--hidden' : ''}`}
          src={image}
          onLoad={handleImageLoad}
          alt={`${name}`}
        />
        {!loaded && <StyledCircularProgress size="10rem" />}
    </div>
  );
}

export default Member;
