import React, { useState, useEffect, useCallback } from "react";
import { withStyles, Tab, Tabs } from "@material-ui/core";
import {
  Button,
  TextareaAutosize,
  Input,
  InputLabel,
  Dialog,
  Typography,
  Grid,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import "./styles/editSlide.scss";

function EditSlide(props) {
  const [loading, setLoading] = useState(false);
  const [slides, setSlides] = useState([]);
  const [tab, setTab] = useState(0);
  const [image, setImage] = useState("");
  const [newImage, setNewImage] = useState("");
  const [blurb, setBlurb] = useState("");
  const [blurbError, setBlurbError] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [role, setRole] = useState("");
  const [roleError, setRoleError] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  // componentDidMount
  useEffect(() => {
    setSlides(props.slides.slide);
    setImage(props.slides.slide[tab].image);
    setBlurb(props.slides.slide[tab].blurb);
    setName(props.slides.slide[tab].name);
    setRole(props.slides.slide[tab].role);
    setDeleteClicked(false);
  }, []);

  const handleValidation = useCallback(() => {
    let valid = true;
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
  }, [blurb, name, role]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!handleValidation()) return;
      setLoading(true);
      const updateImage = newImage === "" ? image : newImage.image;
      props.editCarousel(
        props.slides.slide[tab]._id,
        updateImage,
        blurb,
        name,
        role
      );
      props.onClose();
      setLoading(false);
    },
    [slides, image, newImage, blurb, name, role]
  );

  const handleDelete = useCallback(() => {
    if (!deleteClicked) {
      setDeleteClicked(true);
      setOpenDialog(true);
      return;
    }
    setLoading(true);
    props.deleteCarousel(props.slides.slide[tab]._id);
    props.onClose();
    setLoading(false);
  }, [slides, tab, deleteClicked, openDialog]);

  const handleImage = useCallback(
    (e) => {
      e.preventDefault();
      let file = e.target.files[0];
      if (file === undefined) {
        setNewImage("");
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setNewImage({
          image: reader.result,
        });
      };
    },
    [newImage]
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
    },
    [image, blurb, name, role]
  );

  const handleTabChange = useCallback(
    (newTab) => {
      setImage(props.slides.slide[newTab].image);
      setBlurb(props.slides.slide[newTab].blurb);
      setName(props.slides.slide[newTab].name);
      setRole(props.slides.slide[newTab].role);
      setTab(newTab);
    },
    [tab]
  );

  const handleRejectDelete = useCallback(() => {
    setDeleteClicked(false);
    setOpenDialog(false);
  }, [deleteClicked, openDialog]);

  const DeleteButton = withStyles((theme) => ({
    root: {
      marginLeft: "1rem",
      color: theme.palette.getContrastText("#FF0000"),
      backgroundColor: "#FF0000",
    },
  }))(Button);

  return (
    <div className="editSlide">
      <form onSubmit={handleSubmit} className="editSlide__modal">
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={tab}
          onChange={(event, newTab) => {
            handleTabChange(newTab);
          }}
          aria-label="Carousel Tabs"
          variant="scrollable"
        >
          {slides.map((slide, i) => (
            <Tab key={`slide_tab_${i}`} label={slide.name} />
          ))}
        </Tabs>
        <div>
          <img className="editSlide__image" src={image} />
          <InputLabel for="file">New Image</InputLabel>
          <div className="editSlide__admin">
            <Input type="file" name="file" onChange={handleImage} />
          </div>
          <InputLabel for="file">Blurb</InputLabel>

          <div className="editSlide__admin">
            <TextareaAutosize
              type="text"
              name="blurb"
              onChange={(e) => handleText(e, "blurb")}
              onBlur={(e) => handleBlur(e, "blurb")}
              value={blurb}
            />
            {blurbError && (
              <Alert severity="error">Blurb field cannot be empty!</Alert>
            )}
          </div>
          <InputLabel for="file">Name</InputLabel>
          <div className="editSlide__admin">
            <TextareaAutosize
              type="text"
              name="name"
              onChange={(e) => handleText(e, "name")}
              onBlur={(e) => handleBlur(e, "name")}
              value={name}
            />
            {nameError && (
              <Alert severity="error">Name field cannot be empty!</Alert>
            )}
          </div>
          <InputLabel for="file">Role</InputLabel>
          <div className="editSlide__admin">
            <TextareaAutosize
              type="text"
              name="role"
              onChange={(e) => handleText(e, "role")}
              onBlur={(e) => handleBlur(e, "role")}
              value={role}
            />
          </div>
          {roleError && (
            <Alert severity="error">Role field cannot be empty!</Alert>
          )}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
          >
            Submit
          </Button>
          <DeleteButton
            variant="contained"
            onClick={() => handleDelete()}
            disabled={loading}
          >
            Delete
          </DeleteButton>
        </div>
      </form>
      <Dialog onClose={() => handleRejectDelete()} open={openDialog}>
        <div className="editSlide__dialog">
          <div className="editSlide__dialog__text">
            <Typography variant="h5">
              Are you sure you want to delete this slide?
            </Typography>
          </div>
          <Grid container spacing={3}>
            <Grid container item xs={6}>
              <Button
                onClick={() => handleDelete()}
                variant="contained"
                color="primary"
                fullWidth
              >
                Yes, I'm sure
              </Button>
            </Grid>
            <Grid container item xs={6}>
              <Button
                onClick={() => handleRejectDelete()}
                variant="contained"
                color="grey"
                fullWidth
              >
                cancel
              </Button>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}

export default EditSlide;
