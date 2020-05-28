import React, { useState, useEffect, useCallback } from "react";
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
import Alert from "@material-ui/lab/Alert";
import AddCircle from "@material-ui/icons/AddCircle";
import { withRouter, Link } from "react-router-dom";
import EditSlide from "./editSlide";
import HiringSlide from "./hiringslide";

import "./styles/hiring.scss";

function Hiring(props) {
  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState(false);
  const [blurb, setBlurb] = useState("");
  const [blurbError, setBlurbError] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [role, setRole] = useState("");
  const [roleError, setRoleError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
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

  const StyledButton = withStyles({
    root: {
      marginRight: "0.5rem",
    },
  })(Button);

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

  const handleValidation = useCallback(() => {
    let valid = true;
    if (image === "") {
      setImageError(true);
      valid = false;
    }
    if (blurb === "") {
      setBlurbError(true);
      valid = false;
    }
    if (name === "") {
      setNameError(true);
      valid = false;
    }
    if (role === "") {
      setRoleError(true);
      valid = false;
    }
    return valid;
  }, [image, blurb, name, role]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!handleValidation()) return;
      setLoading(true);
      props.upload(image, blurb, name, role);
      // TODO: look into making the modal into separate components to avoid resetting state
      setImage("");
      setBlurb("");
      setName("");
      setRole("");
      setModalOpen(false);
      setLoading(false);
    },
    [image, blurb, name, role]
  );

  const handleImage = useCallback(
    (e) => {
      e.preventDefault();
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage({
          image: reader.result,
        });
      };
    },
    [image]
  );

  const handleText = useCallback(
    (e, field) => {
      const value = e.target.value;
      // Switch statement was causing all fields to be updated at once (TODO: look into why)
      if (field === "blurb") setBlurb(value);
      else if (field === "name") setName(value);
      else if (field === "role") setRole(value);
    },
    [blurb, name, role]
  );

  const handleBlur = useCallback(
    (e, field) => {
      e.preventDefault();
      if (field === "blurb" && blurb !== "") setBlurbError(false);
      else if (field === "name" && name !== "") setNameError(false);
      else if (field === "role" && role !== "") setRoleError(false);
      else if (field === "image" && image !== "") setImageError(false);
    },
    [image, blurb, name, role]
  );

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
        {(props.login.authenticated ||
          localStorage.getItem("jwt") !== null) && (
          <React.Fragment>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={() => setModalOpen(true)}
              endIcon={<AddCircle />}
            >
              <Typography variant="body1">New Slide</Typography>
            </StyledButton>
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
                      <Input
                        type="file"
                        name="file"
                        onChange={handleImage}
                        onBlur={(e) => handleBlur(e, "image")}
                      />
                      {imageError && (
                        <Alert severity="error">
                          Image field cannot be empty!
                        </Alert>
                      )}
                    </div>
                    <InputLabel for="file">Blurb</InputLabel>

                    <div className="hiring__admin">
                      <TextareaAutosize
                        type="text"
                        name="blurb"
                        onBlur={(e) => handleBlur(e, "blurb")}
                        onChange={(e) => handleText(e, "blurb")}
                      />
                      {blurbError && (
                        <Alert severity="error">
                          Blurb field cannot be empty!
                        </Alert>
                      )}
                    </div>
                    <InputLabel for="file">Name</InputLabel>
                    <div className="hiring__admin">
                      <TextareaAutosize
                        type="text"
                        name="name"
                        onBlur={(e) => handleBlur(e, "name")}
                        onChange={(e) => handleText(e, "name")}
                      />
                      {nameError && (
                        <Alert severity="error">
                          Name field cannot be empty!
                        </Alert>
                      )}
                    </div>
                    <InputLabel for="file">Role</InputLabel>
                    <div className="hiring__admin">
                      <TextareaAutosize
                        type="text"
                        name="role"
                        onBlur={(e) => handleBlur(e, "role")}
                        onChange={(e) => handleText(e, "role")}
                      />
                      {roleError && (
                        <Alert severity="error">
                          Role field cannot be empty!
                        </Alert>
                      )}
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={loading}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              }
            </Modal>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setEditModalOpen(true)}
              endIcon={<AddCircle />}
            >
              <Typography variant="body1">Edit Slides</Typography>
            </Button>
            <Modal
              open={editModalOpen}
              onClose={() => setEditModalOpen(false)}
              aria-labelledby="new-slide-modal"
              aria-describedby="new-slide-modal"
            >
              <EditSlide
                slides={props.carousel}
                editCarousel={props.editCarousel}
                onClose={() => setEditModalOpen(false)}
              />
            </Modal>
          </React.Fragment>
        )}
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
