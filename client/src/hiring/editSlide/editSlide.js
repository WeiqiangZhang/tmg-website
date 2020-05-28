import React, { useState, useEffect, useCallback } from "react";
import { Container, Grid, withStyles, Tab, Tabs } from "@material-ui/core";
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

import "./styles/editSlide.scss";
import { editCarousel } from "../../store/actions/carouselAction";

function EditSlide(props) {
  const [loading, setLoading] = useState(false);
  const [slides, setSlides] = useState([]);
  const [tab, setTab] = useState(0);
  const [image, setImage] = useState("");
  const [newImage, setNewImage] = useState("");
  const [blurb, setBlurb] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  // componentDidMount
  useEffect(() => {
    setSlides(props.slides.slide);
    setImage(props.slides.slide[tab].image);
    setBlurb(props.slides.slide[tab].blurb);
    setName(props.slides.slide[tab].name);
    setRole(props.slides.slide[tab].role);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    const updateImage = newImage === "" ? image : newImage.image;
    props.editCarousel(props.slides.slide[tab]._id, updateImage, blurb, name, role);
    props.onClose();
    setLoading(false);
  }, [image, newImage, blurb, name, role]);

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
            <Input
              type="file"
              name="file"
              onChange={handleImage}
            />
          </div>
          <InputLabel for="file">Blurb</InputLabel>

          <div className="editSlide__admin">
            <TextareaAutosize
              type="text"
              name="blurb"
              onChange={(e) => handleText(e, "blurb")}
              value={blurb}
            />
          </div>
          <InputLabel for="file">Name</InputLabel>
          <div className="editSlide__admin">
            <TextareaAutosize
              type="text"
              name="name"
              onChange={(e) => handleText(e, "name")}
              value={name}
            />
          </div>
          <InputLabel for="file">Role</InputLabel>
          <div className="editSlide__admin">
            <TextareaAutosize
              type="text"
              name="role"
              onChange={(e) => handleText(e, "role")}
              value={role}
            />
          </div>
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
    </div>
  );
}

export default EditSlide;
