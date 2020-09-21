import React, { useState, useCallback } from "react";
import {
  Typography,
  Button,
  Input,
  InputLabel,
  Modal,
  withStyles,
  Tabs,
  Tab,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import AddCircle from "@material-ui/icons/AddCircle";
import "./styles/editMembers.scss";

function EditMembers(props) {
  const [image, setImage] = useState("");
  const [tab, setTab] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const StyledButton = withStyles({
    root: {
      marginRight: "0.5rem",
    },
  })(Button);

  const handleBlur = useCallback(
    (e, field) => {
      e.preventDefault();
      if (field === "image" && image !== "") setImageError(false);
    },
    [image]
  );

  const handleTabChange = useCallback(
    (newTab) => {
      setTab(newTab);
    },
    []
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
    []
  );

  const handleValidation = useCallback(() => {
    if (image === "") {
      setImageError(true);
      return false;
    }
    return true;
  }, [image]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!handleValidation()) return;
      setLoading(true);
      props.upload(image, tab);
      setImage("");
      setModalOpen(false);
      setLoading(false);
    },
    [props, handleValidation, image]
  );

  if (!(props.login.authenticated || localStorage.getItem("jwt") !== null)) return <div />;
  return (
    <React.Fragment>
      <StyledButton
        variant="contained"
        color="primary"
        onClick={() => setModalOpen(true)}
        endIcon={<AddCircle />}
      >
        <Typography variant="body1">New Image</Typography>
      </StyledButton>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="new-slide-modal"
        aria-describedby="new-slide-modal"
      >
        {
          <form onSubmit={handleSubmit} className="hiring__modal">
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
        {Object.keys(props.members).map((role, i) => (
          <Tab key={`slide_tab_${i}`} label={role} />
        ))}
      </Tabs>
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
                  <Alert severity="error">Image field cannot be empty!</Alert>
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
    </React.Fragment>
  );
}

export default EditMembers;
