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

function EditSldie(props) {
  const [loading, setLoading] = useState(false);
  const [slides, setSlides] = useState([]);
  const [tab, setTab] = React.useState(0);
  // componentDidMount
  useEffect(() => {
    setSlides(props.slides.slide);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("lol");
  }, []);
  console.log(props);
  return (
    <div className="editSlide">
      <form onSubmit={handleSubmit} className="editSlide__modal">
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={value}
          onChange={(event, setTab) => {
            setValue(setTab);
          }}
          aria-label="Role Tabs"
          variant="scrollable"
        >
          {slides.map((slide, i) => {
            <Tab key={`slide_tab_${i}`} label={slide.name}></Tab>;
          })}
        </Tabs>
        <div>
          <img src={slides[tab].image} />
          <InputLabel for="file">Image</InputLabel>
          <div className="hiring__admin">
            <Input
              type="file"
              name="file"
              onChange={handleImage}
              onBlur={(e) => handleBlur(e, "image")}
            />
            {imageError && (
              <Alert severity="error">Image field cannot be empty!</Alert>
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
              <Alert severity="error">Blurb field cannot be empty!</Alert>
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
              <Alert severity="error">Name field cannot be empty!</Alert>
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
              <Alert severity="error">Role field cannot be empty!</Alert>
            )}
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

export default EditSldie;
