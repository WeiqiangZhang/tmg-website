import React, { useState } from "react";
import { Container, Grid, withStyles } from "@material-ui/core";
import {
  Typography,
  useMediaQuery,
  Button,
  Input,
  InputLabel,
} from "@material-ui/core";
import { withRouter, Link } from "react-router-dom";

import HiringSlide from "./hiringslide";

import "./styles/hiring.scss";

function Hiring(props) {
  const [image, setImage] = useState(0);
  const [blurb, setBlurb] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const StyledSubtitle = withStyles({
    subtitle1: {
      fontFamily: "UniSansItalic",
    },
  })(Typography);
  const { history } = props;
  const matches = useMediaQuery("(max-width:45rem)");
  const StyledFont = withStyles({
    h2: {
      fontSize: matches ? "2.5rem" : "3.75rem",
    },
    subtitle1: {
      fontSize: matches && "1.25rem",
    },
  })(Typography);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.upload(image, blurb, name, role);
  };

  const handleImage = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage({
        image: reader.result,
      });
    };
  };

  const handleText = (e, field) => {
    const value = e.target.value;
    switch (field) {
      case "blurb":
        setBlurb(value);
      case "name":
        setName(value);
      case "role":
        setRole(value);
    }
  };

  return (
    <div className="hiring">
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <StyledFont variant="h2" className="hiring__header" color="primary">
              Become a Director
            </StyledFont>
            <div className="hiring__body">
              <Typography variant="body1">
                The Marketing Group offers a variety of Director positions every
                year to empower students to unleash their pink sheep. Apply now
                and work together with like-minded individuals to execute our
                plans for this year!
              </Typography>
            </div>
            <div className="hiring__deadline">
              <StyledFont variant="subtitle1" color="primary">
                Due April 3rd, 11:59 pm
              </StyledFont>
            </div>
            <Grid item xs={12}>
              <div className="hiring__linkContainer">
                <Link
                  to={{
                    pathname: `${history.location.pathname}director`,
                  }}
                >
                  <Typography variant="subtitle1" className="hiring__link">
                    Explore Director Positions
                  </Typography>
                </Link>
              </div>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <StyledFont variant="h2" className="hiring__header" color="primary">
              Become a Senior
            </StyledFont>
            <div className="hiring__body">
              <Typography variant="body1">
                The Marketing Group hires new Presidents and Vice Presidents
                every year. These leadership positions are tailored for students
                who truly want to make a difference and take their undergraduate
                experience to the next level.
              </Typography>
            </div>
            <div className="hiring__deadline">
              <StyledFont variant="subtitle1" color="primary">
                All Positions Filled
              </StyledFont>
            </div>
          </Grid>
        </Grid>
        <HiringSlide />
        <form onSubmit={handleSubmit}>
          <div>
            <InputLabel for="file">Image</InputLabel>
            <div className="hiring__admin">
              <Input type="file" name="file" onChange={handleImage} />
            </div>
            <InputLabel for="file">Blurb</InputLabel>
            <div className="hiring__admin">
              <Input
                type="text"
                name="blurb"
                onChange={(e) => handleText(e, "blurb")}
              />
            </div>
            <InputLabel for="file">Name</InputLabel>
            <div className="hiring__admin">
              <Input
                type="text"
                name="name"
                onChange={(e) => handleText(e, "name")}
              />
            </div>
            <InputLabel for="file">Role</InputLabel>
            <div className="hiring__admin">
              <Input
                type="text"
                name="role"
                onChange={(e) => handleText(e, "role")}
              />
            </div>
          </div>
          <div>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
        { props.carousel.slide.map((slide) => {
          return (<img src={slide.image} />)
        })
        }
      </Container>
    </div>
  );
}

export default withRouter(Hiring);
