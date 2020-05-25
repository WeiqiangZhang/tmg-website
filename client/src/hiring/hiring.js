import React, { useState, useEffect } from "react";
import { Container, Grid, withStyles } from "@material-ui/core";
import {
  Typography,
  useMediaQuery,
  Button,
  TextareaAutosize,
  Input,
  InputLabel,
  CircularProgress,
  Modal,
} from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";
import { withRouter, Link } from "react-router-dom";

import HiringSlide from "./hiringslide";

import "./styles/hiring.scss";

function Hiring(props) {
  const [image, setImage] = useState(0);
  const [blurb, setBlurb] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!props.carousel.loaded) {
      props.get();
    }
  }, []);
  const StyledCircularProgress = withStyles({
    root: {
      margin: "auto",
      display: "block",
    },
  })(CircularProgress);

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
    setLoading(true);
    e.preventDefault();
    props.upload(image, blurb, name, role)
    setImage(0);
    setBlurb("");
    setName("");
    setRole("");
    setModalOpen(false);
    setLoading(false);
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
        {props.login.authenticated ||
          (localStorage.getItem("jwt") && (
            <React.Fragment>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setModalOpen(true)}
                endIcon={<AddCircle />}
              >
                <Typography variant="body1">New Slide</Typography>
              </Button>
              <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="new-slide-modal"
                aria-describedby="new-slide-modal"
              >
                {
                  <form onSubmit={handleSubmit} className="hiring__modal">
                    <div>
                      <InputLabel for="file">Image</InputLabel>
                      <div className="hiring__admin">
                        <Input type="file" name="file" onChange={handleImage} />
                      </div>
                      <InputLabel for="file">Blurb</InputLabel>
                      <div className="hiring__admin">
                        <TextareaAutosize
                          type="text"
                          name="blurb"
                          onChange={(e) => handleText(e, "blurb")}
                        />
                      </div>
                      <InputLabel for="file">Name</InputLabel>
                      <div className="hiring__admin">
                        <TextareaAutosize
                          type="text"
                          name="name"
                          onChange={(e) => handleText(e, "name")}
                        />
                      </div>
                      <InputLabel for="file">Role</InputLabel>
                      <div className="hiring__admin">
                        <TextareaAutosize
                          type="text"
                          name="role"
                          onChange={(e) => handleText(e, "role")}
                        />
                      </div>
                    </div>
                    <div>
                      <Button variant="contained" color="primary" type="submit" disabled={loading}>
                        Submit
                      </Button>
                    </div>
                  </form>
                }
              </Modal>
            </React.Fragment>
          ))}
        {props.carousel.loaded || !props.carousel.loading ? (
          <HiringSlide />
        ) : (
          <div className="hiring__loadingContainer">
            <StyledCircularProgress size="10rem" />
          </div>
        )}
      </Container>
    </div>
  );
}

export default withRouter(Hiring);
